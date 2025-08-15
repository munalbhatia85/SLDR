import joint from 'jointjs';

export enum SHAPE {
  INVALID = -1,
  BASE,
  SOURCE,
  DRAIN,
  SWITCH,
  EARTH_SWITCH,
  TRANSFORMER,
  RECTIFIRE,
  LINK,
  BUS,
  CB,
  FEEDER_CB,
  CONNECTING_POINT,
  LINE
}

export enum SHAPE_TYPE {
  SETTING = 'S3Shapes.Settings',
  BASE = 'S3Shapes.BaseModel',
  SOURCE = 'S3Shapes.Source',
  DRAIN = 'S3Shapes.Drain',
  SWITCH = 'S3Shapes.Switch',
  EARTH_SWITCH = 'S3Shapes.EarthSwitch',
  CB = 'S3Shapes.CB',
  FEEDER_CB = 'S3Shapes.Feeder_CB',
  TRANSFORMER = 'S3Shapes.Transformer',
  RECTIFIRE = 'S3Shapes.Rectifier',
  BUS = 'S3Shapes.Bus',
  LINK = 'S3Shapes.Link',
  CONNECTING_POINT = 'S3Shapes.ConnectingPoint',
  LINE = 'S3Shapes.Line'
}

export function GetShapeType(shapeType: SHAPE_TYPE): SHAPE {
  switch (shapeType) {
    case SHAPE_TYPE.DRAIN: return SHAPE.DRAIN;
    case SHAPE_TYPE.SOURCE: return SHAPE.SOURCE;
    // ... other cases
    default: return SHAPE.INVALID;
  }
}

// ... rest of the shape-related functions