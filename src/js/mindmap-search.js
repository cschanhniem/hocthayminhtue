// Mindmap Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'mindmap-search glass-card';
    searchContainer.innerHTML = `
        <div class="search-input-container">
            <i class="fa-solid fa-search search-icon"></i>
            <input type="text" id="mindmap-search-input" placeholder="Tìm kiếm khái niệm..." aria-label="Tìm kiếm khái niệm">
            <button id="clear-search" class="clear-search-btn" aria-label="Xóa tìm kiếm">
                <i class="fa-solid fa-times"></i>
            </button>
        </div>
        <div id="search-results" class="search-results"></div>
    `;
    
    // Insert search container after mindmap header
    const mindmapHeader = document.querySelector('.mindmap-header');
    if (mindmapHeader) {
        mindmapHeader.parentNode.insertBefore(searchContainer, mindmapHeader.nextSibling);
        
        // Get all concept cards and their content
        const conceptCards = document.querySelectorAll('.concept-card');
        const searchData = [];
        
        conceptCards.forEach(card => {
            const title = card.querySelector('h3').textContent;
            const links = Array.from(card.querySelectorAll('a')).map(link => ({
                text: link.textContent,
                href: link.getAttribute('href')
            }));
            
            const items = Array.from(card.querySelectorAll('li')).map(item => item.textContent);
            
            searchData.push({
                title,
                links,
                items,
                element: card
            });
        });
        
        // Search functionality
        const searchInput = document.getElementById('mindmap-search-input');
        const searchResults = document.getElementById('search-results');
        const clearSearchBtn = document.getElementById('clear-search');
        
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'none';
                clearSearchBtn.style.display = 'none';
                
                // Show all concept cards
                conceptCards.forEach(card => {
                    card.style.display = 'block';
                });
                
                return;
            }
            
            clearSearchBtn.style.display = 'flex';
            
            // Filter search data
            const results = searchData.filter(item => {
                return (
                    item.title.toLowerCase().includes(query) ||
                    item.items.some(text => text.toLowerCase().includes(query)) ||
                    item.links.some(link => link.text.toLowerCase().includes(query))
                );
            });
            
            // Display search results
            if (results.length > 0) {
                searchResults.innerHTML = '';
                searchResults.style.display = 'block';
                
                results.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    
                    // Highlight the matching part in the title
                    let titleHtml = result.title;
                    if (result.title.toLowerCase().includes(query)) {
                        const regex = new RegExp(`(${query})`, 'gi');
                        titleHtml = result.title.replace(regex, '<mark>$1</mark>');
                    }
                    
                    resultItem.innerHTML = `
                        <h4>${titleHtml}</h4>
                        <div class="search-result-links">
                            ${result.links.map(link => {
                                let linkText = link.text;
                                if (link.text.toLowerCase().includes(query)) {
                                    const regex = new RegExp(`(${query})`, 'gi');
                                    linkText = link.text.replace(regex, '<mark>$1</mark>');
                                }
                                return `<a href="${link.href}">${linkText}</a>`;
                            }).join('')}
                        </div>
                    `;
                    
                    searchResults.appendChild(resultItem);
                    
                    // Scroll to result when clicked
                    resultItem.addEventListener('click', function() {
                        result.element.scrollIntoView({ behavior: 'smooth' });
                        
                        // Highlight the card temporarily
                        result.element.classList.add('highlight-card');
                        setTimeout(() => {
                            result.element.classList.remove('highlight-card');
                        }, 2000);
                        
                        // Close search results
                        searchResults.style.display = 'none';
                    });
                });
                
                // Hide concept cards that don't match
                conceptCards.forEach(card => {
                    if (results.some(result => result.element === card)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            } else {
                searchResults.innerHTML = '<div class="no-results">Không tìm thấy kết quả nào</div>';
                searchResults.style.display = 'block';
                
                // Hide all concept cards
                conceptCards.forEach(card => {
                    card.style.display = 'none';
                });
            }
        });
        
        // Clear search
        clearSearchBtn.addEventListener('click', function() {
            searchInput.value = '';
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            clearSearchBtn.style.display = 'none';
            
            // Show all concept cards
            conceptCards.forEach(card => {
                card.style.display = 'block';
            });
            
            searchInput.focus();
        });
        
        // Close search results when clicking outside
        document.addEventListener('click', function(event) {
            if (!searchContainer.contains(event.target)) {
                searchResults.style.display = 'none';
            }
        });
        
        // Keyboard navigation
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                clearSearchBtn.click();
            }
        });
    }
    
    // Add search styles
    const searchStyles = document.createElement('style');
    searchStyles.textContent = `
        .mindmap-search {
            margin: 1rem 0;
            padding: 0.75rem;
            border-radius: 8px;
        }
        
        .search-input-container {
            position: relative;
            display: flex;
            align-items: center;
        }
        
        .search-icon {
            position: absolute;
            left: 0.75rem;
            color: #7d5a4f;
        }
        
        #mindmap-search-input {
            width: 100%;
            padding: 0.75rem 2.5rem;
            border: 1px solid rgba(125, 90, 79, 0.3);
            border-radius: 6px;
            font-size: 1rem;
            background-color: rgba(255, 255, 255, 0.8);
            color: #5a3f36;
        }
        
        #mindmap-search-input:focus {
            outline: 2px solid #58B2DC;
            border-color: transparent;
        }
        
        .clear-search-btn {
            position: absolute;
            right: 0.75rem;
            display: none;
            align-items: center;
            justify-content: center;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background-color: rgba(125, 90, 79, 0.1);
            color: #7d5a4f;
            border: none;
            cursor: pointer;
        }
        
        .clear-search-btn:hover {
            background-color: rgba(125, 90, 79, 0.2);
        }
        
        .search-results {
            display: none;
            margin-top: 0.5rem;
            max-height: 300px;
            overflow-y: auto;
            background-color: rgba(255, 255, 255, 0.95);
            border-radius: 6px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .search-result-item {
            padding: 0.75rem;
            border-bottom: 1px solid rgba(125, 90, 79, 0.1);
            cursor: pointer;
        }
        
        .search-result-item:hover {
            background-color: rgba(125, 90, 79, 0.05);
        }
        
        .search-result-item h4 {
            margin: 0 0 0.5rem 0;
            color: #5a3f36;
            font-weight: 500;
        }
        
        .search-result-links {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .search-result-links a {
            font-size: 0.9rem;
            color: #58B2DC;
            text-decoration: underline;
        }
        
        .no-results {
            padding: 1rem;
            text-align: center;
            color: #7d5a4f;
            font-style: italic;
        }
        
        mark {
            background-color: rgba(88, 178, 220, 0.3);
            color: inherit;
            padding: 0 0.1rem;
            border-radius: 2px;
        }
        
        .highlight-card {
            animation: highlight 2s ease;
        }
        
        @keyframes highlight {
            0%, 100% {
                background-color: transparent;
            }
            50% {
                background-color: rgba(88, 178, 220, 0.2);
            }
        }
    `;
    
    document.head.appendChild(searchStyles);
});
