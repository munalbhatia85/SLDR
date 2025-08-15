import { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [activeTab, setActiveTab] = useState<'problem' | 'outcome' | 'message'>('problem');

  const renderContent = () => {
    switch (activeTab) {
      case 'problem':
        return <div className="footer-content">No problems found.</div>;
      case 'outcome':
        return <div className="footer-content">All systems operational.</div>;
      case 'message':
        return <div className="footer-content">Welcome to the editor.</div>;
    }
  };

  return (
    <footer className="footer-tab-container">
      <div className="footer-tabs">
        <button
          className={`footer-tab ${activeTab === 'problem' ? 'active' : ''}`}
          onClick={() => setActiveTab('problem')}
        >
          Problem
        </button>
        <button
          className={`footer-tab ${activeTab === 'outcome' ? 'active' : ''}`}
          onClick={() => setActiveTab('outcome')}
        >
          Outcome
        </button>
        <button
          className={`footer-tab ${activeTab === 'message' ? 'active' : ''}`}
          onClick={() => setActiveTab('message')}
        >
          Message
        </button>
      </div>
      {renderContent()}
    </footer>
  );
}
