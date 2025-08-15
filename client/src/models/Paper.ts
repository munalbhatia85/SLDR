import joint from 'jointjs';
import { Graph } from './Graph';

interface PaperOptions {
  el: HTMLElement;
  model: joint.dia.Graph;
  width: number | string;
  height: number | string;
  gridSize: number;
  drawGrid: boolean;
  markAvailable: boolean;
  snapLinks: boolean;
}

export default class Paper {
  private m_Paper: joint.dia.Paper;
  private m_Model: Graph;

  constructor(options: PaperOptions) {
    this.m_Paper = new joint.dia.Paper({
      ...options,
      async: {
        batchSize: 50,
        initialLevel: 0
      },
      defaultLink: this.GetDefaultLink()
    });

    this.InitStencil();
    this.SetupEventHandlers();
  }

  private InitStencil(): void {
    const stencil = new joint.ui.Stencil({
      graph: this.m_Model.getGraph(),
      paper: this.m_Paper,
      width: '100%',
      height: '100%',
    });

    // Load shapes into stencil
    // ...
  }

  private GetDefaultLink(): joint.shapes.standard.Link {
    const link = new joint.shapes.standard.Link({
      attrs: {
        '.marker-arrowheads': { display: 'none' },
        '.tool-remove': { display: 'none' }
      }
    });
    link.set('router', { name: 'orthogonal' });
    link.attr({
      '.connection': { stroke: '#777777', 'stroke-width': 2 }
    });
    return link;
  }

  // ... rest of the Paper class implementation
}