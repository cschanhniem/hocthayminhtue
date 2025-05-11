# Interactive Concept Map Implementation

This document explains how the interactive concept map visualization is implemented and how to maintain it.

## Overview

The interactive concept map is a D3.js-based force-directed graph visualization that shows relationships between Buddhist concepts. Users can:

- Click directly on nodes to navigate to their respective content pages
- Hold Shift while clicking to view relationships without navigating away
- Filter concepts by category
- Zoom and pan the visualization
- Toggle labels and connection lines
- Reset the view

## Technical Implementation

### Files Structure

- **Template**: `/src/interactive-concept-map.njk` - The main page template 
- **Data**:
  - `/src/js/concept-relationships.json` - JSON defining relationship data
  - `/src/js/concepts.json` - JSON structure of concepts for frontend use
- **Scripts**:
  - `/src/js/concept-map.js` - D3.js visualization implementation
- **Styling**:
  - `/src/css/concept-map.css` - Styles for the visualization

### How Data Flows

1. `concept-relationships.json` defines primary and secondary connections between concepts
2. The visualization loads data from the JSON files
3. D3.js creates an interactive force-directed graph based on this data

## Adding New Concept Relationships

To add new relationships between concepts:

1. Open `/src/js/concept-relationships.json`
2. Add new connections to either `primaryConnections` or `secondaryConnections` arrays
3. Each connection should follow this format:
   ```javascript
   { 
     "source": "concept-id", 
     "target": "related-concept-id", 
     "strength": 1-5, 
     "description": "Description of the relationship" 
   }
   ```

Where:
- `source` and `target` are the IDs of the concepts as defined in concepts.json
- `strength` is a number 1-5 representing how strong the connection is (affects visualization)
- `description` explains the relationship between concepts

## Important Notes on IDs

Ensure that all concept IDs are unique across the entire concept tree. Duplicate IDs can cause unexpected behavior in the visualization.

## Visualization Settings

The visualization has several customizable properties:

- Node size and colors in `concept-map.css`
- Force simulation parameters in `concept-map.js`:
  - Link distance: Controlled by `strength` value
  - Node repulsion force: `-300` by default
  - Collision detection radius: `nodeRadius * 1.5`

## Debugging

If the visualization doesn't display properly:

1. Check browser console for errors
2. Verify JSON data is being loaded correctly from correct paths (`/js/concepts.json` and `/js/concept-relationships.json`)
3. Check that concept IDs match between different data files
4. Ensure D3.js is properly loaded
5. Make sure there are no duplicate IDs in the concepts data

## Maintenance Tasks

When adding new concepts:

1. Update `concepts.json` with the new concept information
2. Add relationships in `concept-relationships.json`
3. Rebuild the site to generate updated files

## Example: Adding a New Relationship

To add a relationship between "Trạo cử hối quá" (Restlessness) and "Niệm" (Mindfulness):

```javascript
// In concept-relationships.json, add to secondaryConnections:
{
  "source": "trao-cu", 
  "target": "niem-giac-chi", 
  "strength": 3, 
  "description": "Niệm Giác Chi giúp nhận diện và đối trị Trạo cử hối quá"
}
```

## Relationship Types

- **Primary connections**: Core structural relationships between major concept groups
- **Secondary connections**: More detailed or subtle relationships between specific concepts

## Future Enhancements

Potential improvements:

- Add filtering by relationship type
- Implement search functionality
- Create downloadable/printable versions
- Add animations for concept pathways
- Create themed visualizations (e.g., meditation-focused, ethics-focused) 