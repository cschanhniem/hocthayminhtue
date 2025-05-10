document.addEventListener('DOMContentLoaded', () => {
  // Main visualization constants
  const width = document.getElementById('concept-map-svg').clientWidth;
  const height = document.getElementById('concept-map-svg').clientHeight;
  const nodeRadius = 25;
  
  // Initialize D3 force simulation
  const svg = d3.select('#concept-map-svg')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', [0, 0, width, height])
    .attr('style', 'max-width: 100%; height: auto;');
  
  // Add zoom functionality
  const g = svg.append('g');
  
  svg.call(d3.zoom()
    .extent([[0, 0], [width, height]])
    .scaleExtent([0.25, 3])
    .on('zoom', (event) => {
      g.attr('transform', event.transform);
    }));
  
  // Create tooltip element
  const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);
  
  // Load concept data
  Promise.all([
    fetch('/js/data/concepts.json').then(response => response.json()),
    fetch('/js/data/concept-relationships.json').then(response => response.json())
  ])
    .then(([conceptsData, relationshipsData]) => {
      // Fallback to hardcoded data if fetch fails
      if (!conceptsData) {
        conceptsData = window.concepts || {root: {children: []}};
      }
      
      if (!relationshipsData) {
        relationshipsData = window.conceptRelationships || {
          primaryConnections: [], 
          secondaryConnections: []
        };
      }
      
      initializeVisualization(conceptsData, relationshipsData);
    })
    .catch(error => {
      console.error('Error loading concept data:', error);
      const conceptsFromModule = window.concepts;
      const relationshipsFromModule = window.conceptRelationships;
      
      // Use module data as fallback
      if (conceptsFromModule && relationshipsFromModule) {
        initializeVisualization(conceptsFromModule, relationshipsFromModule);
      } else {
        document.getElementById('concept-map-svg').innerHTML = 
          '<div style="padding: 2rem; text-align: center;">Không thể tải dữ liệu bản đồ khái niệm. Vui lòng thử lại sau.</div>';
      }
    });
  
  // Initialize the visualization with data
  function initializeVisualization(conceptsData, relationshipsData) {
    // Extract all unique concept nodes
    const nodes = extractNodesFromConcepts(conceptsData);
    
    // Format relationships data for D3
    const links = [
      ...relationshipsData.primaryConnections.map(conn => ({
        ...conn,
        type: 'primary'
      })),
      ...relationshipsData.secondaryConnections.map(conn => ({
        ...conn,
        type: 'secondary'
      }))
    ];
    
    // Get lookup for nodes by ID
    const nodeById = {};
    nodes.forEach(node => {
      nodeById[node.id] = node;
    });
    
    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links)
        .id(d => d.id)
        .distance(d => 150 - (d.strength || 1) * 15))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(nodeRadius * 1.5));
    
    // Create links
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('class', d => `link ${d.type}`)
      .attr('data-source', d => d.source)
      .attr('data-target', d => d.target);
    
    // Create node groups
    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll('.node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('data-id', d => d.id)
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));
    
    // Add circles to nodes
    node.append('circle')
      .attr('r', nodeRadius)
      .on('mouseover', handleNodeMouseOver)
      .on('mouseout', handleNodeMouseOut)
      .on('click', handleNodeClick);
    
    // Add labels to nodes
    node.append('text')
      .attr('dy', '0.35em')
      .text(d => d.label);
    
    // Update positions on tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      
      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    });
    
    // Set up event listeners for controls
    setupControlListeners(nodes, links, nodeById);
    
    // Event handlers for nodes
    function handleNodeMouseOver(event, d) {
      tooltip.transition()
        .duration(200)
        .style('opacity', .9);
      
      tooltip.html(d.label)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 28) + 'px');
    }
    
    function handleNodeMouseOut() {
      tooltip.transition()
        .duration(500)
        .style('opacity', 0);
    }
    
    function handleNodeClick(event, d) {
      // Clear previous selections
      d3.selectAll('.node').classed('selected', false).classed('related', false);
      d3.selectAll('.link').classed('highlighted', false);
      
      // Highlight selected node
      d3.select(this.parentNode).classed('selected', true);
      
      // Find related links and nodes
      const relatedLinks = links.filter(link => 
        link.source.id === d.id || link.target.id === d.id
      );
      
      // Highlight related links
      relatedLinks.forEach(link => {
        d3.select(`line[data-source="${link.source.id}"][data-target="${link.target.id}"]`)
          .classed('highlighted', true);
        
        // Highlight related nodes
        const relatedNodeId = link.source.id === d.id ? link.target.id : link.source.id;
        d3.select(`.node[data-id="${relatedNodeId}"]`).classed('related', true);
      });
      
      // Update detail panel
      updateDetailPanel(d, relatedLinks);
    }
    
    // Drag handlers for nodes
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
  }
  
  // Helper function to extract nodes from concepts data
  function extractNodesFromConcepts(conceptsData) {
    const nodes = [];
    const processedIds = new Set();
    
    function traverseConcepts(concept) {
      if (!concept || processedIds.has(concept.id)) return;
      
      processedIds.add(concept.id);
      nodes.push({
        id: concept.id,
        label: concept.label,
        content: concept.content
      });
      
      if (concept.children && concept.children.length > 0) {
        concept.children.forEach(child => traverseConcepts(child));
      }
    }
    
    traverseConcepts(conceptsData.root);
    return nodes;
  }
  
  // Setup event listeners for the control buttons
  function setupControlListeners(nodes, links, nodeById) {
    // Filter control
    const conceptFilter = document.getElementById('concept-filter');
    if (conceptFilter) {
      conceptFilter.addEventListener('change', (event) => {
        const selectedId = event.target.value;
        if (selectedId === 'all') {
          d3.selectAll('.node').classed('selected', false).classed('related', false);
          d3.selectAll('.link').classed('highlighted', false);
          document.getElementById('concept-detail-panel').innerHTML = 
            '<h3>Chọn một khái niệm để xem chi tiết</h3>' +
            '<p>Nhấp vào bất kỳ khái niệm trên bản đồ để xem thông tin chi tiết và các mối liên hệ.</p>';
        } else {
          const selectedNode = nodeById[selectedId];
          if (selectedNode) {
            d3.select(`.node[data-id="${selectedId}"] circle`).dispatch('click');
          }
        }
      });
    }
    
    // Reset view button
    const resetButton = document.getElementById('reset-view');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        d3.select('#concept-map-svg svg')
          .transition()
          .duration(750)
          .call(d3.zoom().transform, d3.zoomIdentity);
      });
    }
    
    // Toggle labels button
    const toggleLabelsButton = document.getElementById('toggle-labels');
    if (toggleLabelsButton) {
      toggleLabelsButton.addEventListener('click', () => {
        const currentVisibility = d3.select('.nodes text').style('display');
        d3.selectAll('.nodes text').style('display', 
          currentVisibility === 'none' ? 'block' : 'none'
        );
      });
    }
    
    // Toggle connections button
    const toggleConnectionsButton = document.getElementById('toggle-connections');
    if (toggleConnectionsButton) {
      toggleConnectionsButton.addEventListener('click', () => {
        const currentVisibility = d3.select('.links').style('display');
        d3.select('.links').style('display', 
          currentVisibility === 'none' ? 'block' : 'none'
        );
      });
    }
  }
  
  // Update the detail panel with node information
  function updateDetailPanel(node, relatedLinks) {
    const detailPanel = document.getElementById('concept-detail-panel');
    const relationshipPanel = document.getElementById('relationship-detail-panel');
    
    if (detailPanel) {
      // Get concept URL
      const conceptUrl = node.content ? `/content/${node.content}/` : null;
      
      // Create HTML for detail panel
      let html = `
        <h3>${node.label}</h3>
        <p>ID: ${node.id}</p>
      `;
      
      // Add link to content if available
      if (conceptUrl) {
        html += `<p><a href="${conceptUrl}" class="btn">Xem chi tiết về ${node.label}</a></p>`;
      }
      
      // Add related concepts section
      if (relatedLinks.length > 0) {
        html += `<h4>Khái niệm liên quan:</h4><ul>`;
        
        relatedLinks.forEach(link => {
          const relatedNodeId = link.source.id === node.id ? link.target.id : link.source.id;
          const relatedNode = link.source.id === node.id ? link.target : link.source;
          const relationshipType = link.source.id === node.id ? 'đến' : 'từ';
          const relationshipText = link.description || `Liên hệ ${relationshipType} ${relatedNode.label}`;
          
          html += `<li>
            <a href="#" data-relationship="${link.source.id}-${link.target.id}" 
               class="relationship-link">${relatedNode.label}</a>
            <span class="relationship-type">(${relationshipText})</span>
          </li>`;
        });
        
        html += `</ul>`;
      }
      
      detailPanel.innerHTML = html;
      
      // Add event listeners to relationship links
      document.querySelectorAll('.relationship-link').forEach(link => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          const [sourceId, targetId] = event.target.dataset.relationship.split('-');
          
          relationshipPanel.classList.remove('hidden');
          const relationshipDesc = relatedLinks.find(
            l => l.source.id === sourceId && l.target.id === targetId
          )?.description || 'Không có mô tả chi tiết.';
          
          document.getElementById('relationship-description').textContent = relationshipDesc;
        });
      });
    }
  }
}); 