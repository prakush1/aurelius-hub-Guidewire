import React, { useState } from 'react';
import { 
  Database, 
  Share2, 
  Cloud, 
  Mail, 
  FileCheck, 
  Link2, 
  ShieldCheck, 
  Search, 
  ExternalLink,
  Cpu,
  Server,
  Settings
} from 'lucide-react';

const ConnectorsHub = () => {
  const [activeTab, setActiveTab] = useState('INTEGRATIONS');

  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanResult('Found 2 ACORD Form attachments in Outlook Inbox');
    }, 2000);
  };

  const connectors = [
    { title: 'SAP S/4HANA Ledger', type: 'Financial', status: 'Live', latency: '42ms', icon: <Database color="var(--primary)" />, citation: 'https://www.sap.com/products/erp/s4hana.html' },
    { title: 'MS SharePoint / OneDrive', type: 'Document Store', status: 'Live', latency: '12ms', icon: <Share2 color="#3b82f6" />, citation: 'https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration' },
    { title: 'Secure SFTP Cluster', type: 'Legacy Ingestion', status: 'Live', latency: '158ms', icon: <Server color="#94a3b8" /> },
    { title: 'LexisNexis (CUE)', type: 'Third Party Data', status: 'Live', latency: '210ms', icon: <Search color="#ef4444" />, citation: 'https://risk.lexisnexis.com/insurance' },
    { title: 'Carpe Data (Fraud)', type: 'AI Enrichment', status: 'Live', latency: '185ms', icon: <ShieldCheck color="#10b981" />, citation: 'https://carpe.io/' },
    { title: 'Hyland OnBase API', type: 'Content Mgmt', status: 'Live', latency: '65ms', icon: <FileCheck color="#8b5cf6" />, citation: 'https://www.hyland.com/en/products/onbase' },
    { title: 'MS Graph (Outlook)', type: 'Communication', status: 'Live', latency: '12ms', icon: <Mail color="#3b82f6" /> },
    { title: 'Salesforce Core', type: 'CRM', status: 'Live', latency: '92ms', icon: <Cloud color="#0ea5e9" /> }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header */}
      <div className="glass animate-fade" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link2 color="var(--primary)" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Enterprise Connectors Hub</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Managing 8+ Industrial Integration Gateways | Strategy by Prakush Shende</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <div className="tag-modern" style={{ padding: '0.5rem 1rem' }}>MULTI-CLOUD SYNC ACTIVE</div>
             <button className="btn btn-primary" style={{ fontSize: '0.7rem' }}>+ New DB Connection</button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2rem' }}>
        <div className="connector-grid animate-fade">
          {connectors.map((conn, i) => (
            <div key={i} className="connector-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                 <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.6rem', borderRadius: '10px' }}>{conn.icon}</div>
                 <div style={{ textAlign: 'right' }}>
                    <span className="badge-success" style={{ fontSize: '0.6rem' }}>{conn.status}</span>
                    <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>LATENCY: {conn.latency}</p>
                 </div>
              </div>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: 700 }}>{conn.title}</h4>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>{conn.type}</p>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 {conn.citation ? (
                    <a href={conn.citation} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                       Verify Site <ExternalLink size={10} />
                    </a>
                 ) : (
                    <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Olos Edge v2</span>
                 )}
                 <Settings size={12} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar: Quick Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
           <div className="card glass">
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Mail size={16} color="var(--secondary)" /> MS Graph / Outlook Inbox
              </h4>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.5' }}>
                 Scan the designated Broker Inbox for new submission attachments.
              </p>
              <button 
                onClick={handleScan}
                disabled={scanning}
                className="btn btn-outline" 
                style={{ width: '100%', fontSize: '0.75rem' }}
              >
                {scanning ? 'Scanning Graph API...' : 'Live Scan Inbox'}
              </button>
              {scanResult && (
                <div className="badge-success" style={{ marginTop: '1rem', padding: '0.5rem', fontSize: '0.65rem', textAlign: 'center' }}>
                   {scanResult}
                </div>
              )}
           </div>

           <div className="card glass" style={{ border: '2px dashed var(--border)' }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                 <FileCheck size={24} color="var(--primary)" style={{ opacity: 0.5, marginBottom: '0.5rem' }} />
                 <p style={{ fontSize: '0.7rem', fontWeight: 600 }}>Manual Document Ingestion</p>
                 <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>Drag & drop ACORD forms here</p>
                 <button className="btn btn-outline" style={{ marginTop: '1rem', width: '100%', fontSize: '0.7rem' }}>Browse Files</button>
              </div>
           </div>
        </div>
      </div>

      {/* Industrial Strategy Note */}
      <div className="card glass animate-fade" style={{ background: 'rgba(99, 102, 241, 0.05)', borderLeft: '4px solid var(--primary)', padding: '2rem' }}>
         <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={18} color="var(--primary)" /> The "Integration" Philosophy
         </h3>
         <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '900px' }}>
            Insurance companies are built on legacy foundations. Aurelius v6 doesn't just build new things; 
            it bridges the gap. By connecting modern AI-Ops to **SAP Financials**, **LexisNexis Data**, and 
            existing **SharePoint** stores, we eliminate the need for costly manual re-entry. 
            All data ingestion is audited via the GRC Control Tower before reaching the InsuranceSuite core.
            <br /><br />
            <em>"Verification is the currency of trust in AI Product Management." — Prakush Shende, April 2026 Strategy Paper.</em>
         </p>
         <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
            <div>
               <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>14</p>
               <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Legacy DB Bridges</p>
            </div>
            <div>
               <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)' }}>100%</p>
               <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>REST Portability</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ConnectorsHub;
