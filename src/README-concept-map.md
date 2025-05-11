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
  - `/src/concept-relationships.js` - Core module defining relationship data
  - `/src/_data/conceptRelationships.js` - Data connector for Eleventy templates
  - `/src/_data/concept-relationships.json` - JSON version for frontend use
  - `/src/_data/concepts.json` - JSON structure of concepts for frontend use
- **Scripts**:
  - `/src/js/concept-map.js` - D3.js visualization implementation
- **Styling**:
  - `/src/css/concept-map.css` - Styles for the visualization
- **Partials**:
  - `/src/_includes/partials/concept-data-script.njk` - Injects data into the page

### How Data Flows

1. `concept-relationships.js` defines primary and secondary connections between concepts
2. Eleventy loads this data via `_data/conceptRelationships.js`
3. The JSON versions are copied to the built site via passthrough in `.eleventy.js`
4. The visualization loads data either from the JSON files or from the window objects injected by the partial
5. D3.js creates an interactive force-directed graph based on this data

## Adding New Concept Relationships

To add new relationships between concepts:

1. Open `/src/concept-relationships.js`
2. Add new connections to either `primaryConnections` or `secondaryConnections` arrays
3. Each connection should follow this format:
   ```javascript
   { 
     source: "concept-id", 
     target: "related-concept-id", 
     strength: 1-5, 
     description: "Description of the relationship" 
   }
   ```

Where:
- `source` and `target` are the IDs of the concepts as defined in concepts.js
- `strength` is a number 1-5 representing how strong the connection is (affects visualization)
- `description` explains the relationship between concepts

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
2. Verify JSON data is being loaded correctly
3. Check that concept IDs match between different data files
4. Ensure D3.js is properly loaded

## Maintenance Tasks

When adding new concepts:

1. Update `concepts.js` with the new concept information
2. Add relationships in `concept-relationships.js`
3. Rebuild the site to generate updated JSON files

## Example: Adding a New Relationship

To add a relationship between "Trạo cử hối quá" (Restlessness) and "Niệm" (Mindfulness):

```javascript
// In concept-relationships.js, add to secondaryConnections:
{
  source: "trao-cu", 
  target: "niem-giac-chi", 
  strength: 3, 
  description: "Niệm Giác Chi giúp nhận diện và đối trị Trạo cử hối quá"
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