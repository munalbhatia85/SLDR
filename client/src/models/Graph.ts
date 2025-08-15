import joint from 'jointjs';
import { TPMap, TPMap_Condiction } from './Struct';
import { IDAssigner } from '../services/IDAssigner';
import { InternalIDAssigner } from '../services/InternalIDAssigner';

export default class Graph {
  private m_Graph: joint.dia.Graph | null = null;
  private m_cmdManager: joint.dia.CommandManager | null = null;
  private m_vDefMap: TPMap[] = [];
  private m_vSectionMap: TPMap[] = [];
  private m_vUDMap: TPMap[] = [];
  private m_LinkIDAssigner: IDAssigner;
  private m_IntIDAssigner: InternalIDAssigner;

  constructor() {
    this.m_LinkIDAssigner = new IDAssigner("Sec");
    this.m_IntIDAssigner = new InternalIDAssigner();
    this.Init();
    this.InitDefMap();
  }

  private Init(): void {
    try {
      this.m_Graph = new joint.dia.Graph();
      this.m_cmdManager = new joint.dia.CommandManager({
        graph: this.m_Graph,
        cmdBeforeAdd: (cmdName: string) => {
          const IgnoreCmd: Record<string, string> = {
            "change:shapeInternalID": '',
            "change:deviceAttr": ''
          };
          return !(cmdName in IgnoreCmd);
        }
      });
      this.CallBackChange();
      this.CallBackAdd();
    } catch (error) {
      console.error("Error initializing graph:", error);
    }
  }

  public getGraph(): joint.dia.Graph | null {
    return this.m_Graph;
  }

  // ... rest of the Graph class implementation
}