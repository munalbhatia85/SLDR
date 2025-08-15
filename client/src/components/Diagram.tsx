import { useEffect, useRef, useState,forwardRef } from 'react';
import * as joint from 'jointjs';
import 'jointjs/dist/joint.css';
import { createSVGElement } from '../joint/shapes/CustomShapes';
export default function Diagram(diagramRef: any) {
// const Diagram = forwardRef((_props, ref) => {
  // useImperativeHandle(ref, () => ({
  //   save: handleSave,
  //   open: () => document.getElementById('fileLoader')?.click()
  // }));
  const paperRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<joint.dia.Graph | null>(null);
  const paperRefInstance = useRef<joint.dia.Paper | null>(null);
  const selectedElementRef = useRef<joint.dia.Element | null>(null);

  // const [deleteBtnStyle, setDeleteBtnStyle] = useState<React.CSSProperties | null>(null);

  // SVG icons for source and drain
  const SourceSVG = `<svg width="60" height="60" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="#4AAE48" stroke-width="2" fill="none"/><line x1="18" y1="12" x2="22" y2="12" stroke="#4AAE48" stroke-width="2"/><path d="M15,12 C13,16 11,16 9,12 C7,8 5,8 3,12" stroke="#4AAE48" stroke-width="2" fill="none"/></svg>`;
  const DrainSVG = `<svg width="60" height="60" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="#EA3939" stroke-width="2" fill="none" /><line x1="4" y1="12" x2="8" y2="12" stroke="#EA3939" stroke-width="2" /></svg>`;

  useEffect(() => {
    const graph = new joint.dia.Graph();
    graphRef.current = graph;

    const paper = new joint.dia.Paper({
      el: paperRef.current!,
      model: graph,
      width: paperRef.current!.offsetWidth,
      height: paperRef.current!.offsetHeight,
      gridSize: 10,
      drawGrid: false,
      background: { color: '#fff' },
      interactive: { link: true, arrowheadMove: true },
      defaultLink: () =>
        new joint.dia.Link({
          attrs: {
            line: {
              stroke: '#000',
              strokeWidth: 2,
              targetMarker: {
                type: 'classic',
                fill: '#000'
              }
            }
          }
        })
    });

    paperRefInstance.current = paper;

    // 🎯 Select and highlight element
    paper.on('element:pointerclick', (elementView) => {
      const current = elementView.model;

      // Unhighlight previous
      if (selectedElementRef.current && selectedElementRef.current.id !== current.id) {
        paper.findViewByModel(selectedElementRef.current)?.unhighlight();
      }

      // Highlight current
      elementView.highlight();
      selectedElementRef.current = current;

      // Position delete icon
      // const bbox = current.getBBox();
      // const coords = paper.localToPagePoint(bbox.x + bbox.width, bbox.y);

      // setDeleteBtnStyle({
      //   position: 'absolute',
      //   top: coords.y - 10,
      //   left: coords.x + 10,
      //   backgroundColor: 'red',
      //   color: 'white',
      //   border: 'none',
      //   borderRadius: '4px',
      //   cursor: 'pointer',
      //   padding: '2px 6px',
      //   fontSize: '12px',
      //   zIndex: 10
      // });
    });

    // 🧼 Blank click removes selection
    paper.on('blank:pointerclick', () => {
      if (selectedElementRef.current) {
        paper.findViewByModel(selectedElementRef.current)?.unhighlight();
        selectedElementRef.current = null;
        // setDeleteBtnStyle(null);
      }
    });

    // 🔄 Resize canvas when window resizes
    const handleResize = () => {
      const container = paperRef.current!;
      paper.setDimensions(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🧱 Handle shape drop
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const shapeType = e.dataTransfer.getData('shape');
    const rect = paperRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const graph = graphRef.current;
    if (!graph) return;

    let element: joint.dia.Element;

    switch (shapeType) {
      case 'source': {
        const Source = createSVGElement(SourceSVG, '#4AAE48');
        element = new Source();
        element.addPorts([{ id: 'out', group: 'out' }]);
        break;
      }

      case 'drain': {
        const Drain = createSVGElement(DrainSVG, '#EA3939');
        element = new Drain();
        element.addPorts([{ id: 'in', group: 'in' }]);
        break;
      }

      case 'connecting-point': {
        element = new joint.shapes.standard.Circle();
        element.resize(20, 20);
        element.attr({
          body: {
            fill: '#fff',
            stroke: '#000',
            strokeWidth: 2,
            magnet: true
          }
        });
        break;
      }

      case 'line': {
        const link = new joint.shapes.standard.Link();
        link.source({ x, y });
        link.target({ x: x + 100, y });
        link.attr({
          line: {
            stroke: '#000',
            strokeWidth: 2,
            targetMarker: {
              type: 'classic',
              fill: '#000'
            }
          }
        });
        link.addTo(graph);
        return;
      }

      default:
        return;
    }

    element.position(x, y);
    element.addTo(graph);
  };

  // 🗑 Handle delete button click
  // const handleDelete = () => {
  //   const graph = graphRef.current;
  //   if (selectedElementRef.current && graph) {
  //     selectedElementRef.current.remove();
  //     selectedElementRef.current = null;
  //     // setDeleteBtnStyle(null);
  //   }
  // };

  // const handleSave = () => {
  //   const graph = graphRef.current;
  //   if (graph) {
  //     const json = JSON.stringify(graph.toJSON(), null, 2);

  //     const blob = new Blob([json], { type: 'application/json' });
  //     const url = URL.createObjectURL(blob);

  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = 'diagram.json';
  //     a.click();
  //     URL.revokeObjectURL(url);
  //   }
  // };

  // const handleOpen = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (!file || !graphRef.current) return;

  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     try {
  //       const json = JSON.parse(reader.result as string);
  //       graphRef.current!.fromJSON(json);
  //     } catch (err) {
  //       console.error('Failed to parse JSON file:', err);
  //     }
  //   };
  //   reader.readAsText(file);
  // };

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <div
        ref={paperRef}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid #ccc',
          backgroundColor: 'white'
        }}
      />
      
    </div>
  );
// })
}