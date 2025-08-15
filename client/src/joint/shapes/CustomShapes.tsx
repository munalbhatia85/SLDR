// joint/shapes/CustomShapes.ts
import * as joint from 'jointjs';

/**
 * Creates a custom JointJS element with embedded SVG and a right port.
 * @param svgMarkup - SVG markup string.
 * @param portColor - Color for the port circle (default: green).
 * @param width - Width of the shape.
 * @param height - Height of the shape.
 */

export const createSVGElement = (svgMarkup: string, portColor = '#000') =>
  joint.dia.Element.define( // Define a new custom element type
    'custom.SVG',           // Name of the custom element

    {
      // Set default size of the element
      size: { width: 60, height: 60 },

      // Define the port groups for input and output connections
      ports: {
        groups: {
          // Output port group: connection point for outgoing links
          out: {
            position: { name: 'right' }, // Port appears on the right side
            attrs: {
              portBody: {
                magnet: true,            // Enables link creation from this port
                r: 5,                    // Radius of the port circle
                fill: portColor,         // Fill color of port
                stroke: '#333',          // Border color of port
                strokeWidth: 1           // Border thickness
              }
            },
            // Markup for rendering the port
            markup: [{ tagName: 'circle', selector: 'portBody' }]
          },

          // Input port group: connection point for incoming links
          in: {
            position: { name: 'left' }, // Port appears on the left side
            attrs: {
              portBody: {
                magnet: 'passive',      // Only allows incoming links
                r: 5,                   // Radius of the port circle
                fill: portColor,        // Fill color of port
                stroke: '#333',         // Border color
                strokeWidth: 1          // Border thickness
              }
            },
            // Markup for rendering the port
            markup: [{ tagName: 'circle', selector: 'portBody' }]
          }
        }
      },

      // `attrs` contains the HTML markup rendered inside the foreignObject
      attrs: {
        fo: {
          html: svgMarkup // Rendered HTML/SVG content inside the element
        }
      }
    },

    {
      // Markup section defines how the element looks (custom rendering)
      markup: [
        {
          tagName: 'foreignObject',       // Use foreignObject to embed HTML/SVG
          selector: 'fo',
          attributes: { width: '60px', height: '60px' }, // Size of embedded SVG

          children: [
            {
              tagName: 'body',            // XHTML <body> to host the SVG
              namespace: 'http://www.w3.org/1999/xhtml',
              style: { margin: 0, padding: 0 }, // Remove spacing
              html: svgMarkup             // Inject the actual SVG markup
            }
          ]
        }
      ]
    }
  );

