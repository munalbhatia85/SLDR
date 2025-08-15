import Stencil from './components/Stencil';
import Diagram from './components/Diagram';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/Footer';

import { useEffect, useRef, useState } from 'react';

import './App.css'; // Add layout CSS here

function App() {
    const diagramRef = useRef<{ save: () => void; open: () => void }>(null);
  return (
    <div className="app-container">
      <Header
       onSave={() => diagramRef.current?.save()}
        onOpen={() => document.getElementById('fileLoader')?.click()}
      />
      
      <div className="main-layout">
        <aside className="left-panel">
          <Stencil />
        </aside>

        <main className="center-panel">
          <Diagram ref={diagramRef}/>
        </main>

        <aside className="right-panel">
          {/* Optional: Properties / Inspector */}
          <div style={{ padding: '10px' }}>Inspector </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}

export default App;
