// components/Stencil.tsx
import './stencil.css';
import React from 'react';

interface ShapeItem {
  type: string;
  label: string;
  icon: React.ReactNode;
}

// Basic shapes
const CircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const LineIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Electrical components
const SourceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8" stroke="#4AAE48" strokeWidth="2" fill="none" />
    <line x1="18" y1="12" x2="22" y2="12" stroke="#4AAE48" strokeWidth="2" />
    <path d="M15,12 C13,16 11,16 9,12 C7,8 5,8 3,12" stroke="#4AAE48" strokeWidth="2" fill="none" />
  </svg>
);

const DrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8" stroke="#EA3939" strokeWidth="2" fill="none" />
    <line x1="4" y1="12" x2="8" y2="12" stroke="#EA3939" strokeWidth="2" />
  </svg>
);

const EarthSwitchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" stroke="#6A6A6A" strokeWidth="2" fill="none" />
    <line x1="12" y1="4" x2="12" y2="10" stroke="#6A6A6A" strokeWidth="2" />
    <line x1="8" y1="10" x2="16" y2="10" stroke="#6A6A6A" strokeWidth="2" />
    <line x1="10" y1="14" x2="14" y2="14" stroke="#6A6A6A" strokeWidth="2" />
    <line x1="12" y1="14" x2="12" y2="20" stroke="#6A6A6A" strokeWidth="2" />
  </svg>
);

const SwitchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <rect x="6" y="8" width="12" height="8" stroke="#6A6A6A" strokeWidth="2" fill="none" />
    <line x1="4" y1="12" x2="6" y2="12" stroke="#6A6A6A" strokeWidth="2" />
    <line x1="18" y1="12" x2="20" y2="12" stroke="#6A6A6A" strokeWidth="2" />
    <circle cx="8" cy="12" r="2" fill="#A7A7A7" stroke="#6A6A6A" strokeWidth="1" />
    <circle cx="16" cy="12" r="2" fill="#A7A7A7" stroke="#6A6A6A" strokeWidth="1" />
  </svg>
);

const CBIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <rect x="6" y="6" width="12" height="12" stroke="#6A6A6A" strokeWidth="2" fill="none" />
    <line x1="4" y1="12" x2="6" y2="12" stroke="#6A6A6A" strokeWidth="2" />
    <line x1="18" y1="12" x2="20" y2="12" stroke="#6A6A6A" strokeWidth="2" />
    <line x1="12" y1="6" x2="12" y2="12" stroke="#6A6A6A" strokeWidth="2" />
  </svg>
);

const FeederCBIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <rect x="6" y="6" width="12" height="12" stroke="#6A6A6A" strokeWidth="2" fill="none" />
    <line x1="4" y1="12" x2="6" y2="12" stroke="#6A6A6A" strokeWidth="2" />
    <line x1="18" y1="12" x2="20" y2="12" stroke="#6A6A6A" strokeWidth="2" />
    <line x1="12" y1="6" x2="12" y2="18" stroke="#6A6A6A" strokeWidth="2" />
    <line x1="9" y1="9" x2="15" y2="15" stroke="#6A6A6A" strokeWidth="1" />
  </svg>
);

const TransformerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="8" cy="12" r="5" stroke="#676767" strokeWidth="2" fill="none" />
    <circle cx="16" cy="12" r="5" stroke="#676767" strokeWidth="2" fill="none" />
    <line x1="2" y1="12" x2="4" y2="12" stroke="#676767" strokeWidth="2" />
    <line x1="20" y1="12" x2="22" y2="12" stroke="#676767" strokeWidth="2" />
  </svg>
);

const RectifierIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <rect x="8" y="6" width="8" height="12" stroke="#676767" strokeWidth="2" fill="none" />
    <line x1="4" y1="12" x2="8" y2="12" stroke="#676767" strokeWidth="2" />
    <line x1="16" y1="12" x2="20" y2="12" stroke="#676767" strokeWidth="2" />
    <polyline points="10,9 14,9 14,15 10,15" stroke="#676767" strokeWidth="2" fill="none" />
  </svg>
);

const BUSIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <line x1="2" y1="12" x2="22" y2="12" stroke="#777777" strokeWidth="4" />
  </svg>
);

const ConnectingPointIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
    <line x1="2" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="16" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const shapeList: ShapeItem[] = [
  { type: 'source', label: 'Source', icon: <SourceIcon /> },
  { type: 'drain', label: 'Drain', icon: <DrainIcon /> },
  { type: 'earth-switch', label: 'Earth Switch', icon: <EarthSwitchIcon /> },
  { type: 'switch', label: 'Switch', icon: <SwitchIcon /> },
  { type: 'cb', label: 'CB', icon: <CBIcon /> },
  { type: 'feeder-cb', label: 'Feeder CB', icon: <FeederCBIcon /> },
  { type: 'transformer', label: 'Transformer', icon: <TransformerIcon /> },
  { type: 'rectifier', label: 'Rectifier', icon: <RectifierIcon /> },
  { type: 'bus', label: 'Bus', icon: <BUSIcon /> },
  { type: 'connecting-point', label: 'Connecting Point', icon: <ConnectingPointIcon /> },
  { type: 'line', label: 'Line', icon: <LineIcon /> },
  { type: 'circle', label: 'Circle', icon: <CircleIcon /> }
];

export default function Stencil() {
  const onDragStart = (event: React.DragEvent, shapeType: string) => {
    event.dataTransfer.setData('shape', shapeType);
  };

  return (
    <div className="stencil">
      <h4>Stencil</h4>
      {shapeList.map((s) => (
        <div
          key={s.type}
          draggable
          className="stencil-item"
          onDragStart={(e) => onDragStart(e, s.type)}
          aria-label={`Drag to add ${s.label}`}
        >
          <div className="stencil-icon">{s.icon}</div>
          <div className="stencil-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}