import React from 'react';
import './header.css';
import {FaFileAlt, FaSave,FaFolderOpen, FaPlus,FaRandom,FaCode,FaUndo,FaRedo,FaSearch,FaCogs} from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="header-section">
        <button title="New File"><FaFileAlt /></button>
        <button title="Save File"><FaSave /></button>
        <button title="Open File"><FaFolderOpen /></button>
        <button title="Open New Tab"><FaPlus /></button>
        <button title="Merge File"><FaRandom /></button>
        <button title="Compile"><FaCode /></button>
      </div>
      <div className="header-section">
        <button title="Undo"><FaUndo /></button>
        <button title="Redo"><FaRedo /></button>
      </div>
      <div className="header-section">
        <button title="Inspector"><FaSearch /></button>
        <button title="Settings"><FaCogs /></button>
      </div>
    </header>
  );
}
