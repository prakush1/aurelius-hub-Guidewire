import React, { useContext } from 'react';
import { 
  ArrowRight, 
  Database, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Mail, 
  Server, 
  Layers,
  ChevronRight,
  TrendingDown,
  Lock,
  Share2,
  Info,
  ExternalLink
} from 'lucide-react';
import { KillSwitchContext } from '../App';
import ComponentWalkthrough from './ComponentWalkthrough';

const DataLineage = () => {
  const killSwitch = useContext(KillSwitchContext);
  
  const nodes = [
    { label: 'SOURCE', sub: 'MS Graph / SFTP', icon: <Share2 size={18} />, color: '#3b82f6' },
    { label: 'INGESTION', sub: 'OData v4 Batch', icon: <Layers size={18} />, color: '#8b5cf6' },
    { label: 'AURELIUS AI', sub: 'Logic Extraction', icon: <Cpu size={18} />, color: 'var(--primary)' },
    { label: 'INSURANCE SUITE', sub: 'Policy / Claims Hub', icon: <Database size={18} />, color: '#6366f1' },
    { label: 'FINANCE CORE', sub: 'SAP S/4HANA Ledger', icon: <ShieldCheck size={18} />, color: '#10b981' }
  ];

  const walkthroughSteps = [
    { title: "Step 1: Minute-Level Source Audit", description: "Every inbound file from MS Graph (Broker Email) or SharePoint is hashed at source to ensure zero data drift before processing." },
    { title: "Step 2: Connector Logic Layer", description: "Aurelius uses an OData v4 shim to map unstructured extracted JSON into Guidewire OOTB and ETX entities without direct SQL modification." },
    { title: "Step 3: Downstream Legacy Sync", description: "Once the policy is bound, the premium data is pushed via REST to the SAP General Ledger for real-time finance visibility." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
      <ComponentWalkthrough steps={walkthroughSteps} componentName="Enterprise Data Lineage" />

      <div className="glass animate-fade" style={{ padding: '2.5rem' }}>
         <h2 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>Operational Data Lineage Map</h2>
         <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Visualizing the "End-to-End" Journey | Strategic Architecture by Prakush Shende</p>
      </div>

      {/* Visual Flow */}
      <div className="card glass animate-fade" style={{ padding: '4rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: killSwitch?.active ? 0.4 : 1, transition: 'all 0.4s ease' }}>
         {nodes.map((node, i) => (
           <React.Fragment key={node.label}>
              <div className="lineage-node" style={{ flexShrink: 0, textAlign: 'center', width: '150px' }}>
                 <div style={{ background: 'rgba(255,255,255,0.05)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: node.color, border: `1px solid ${node.color}50` }}>
                    {node.icon}
                 </div>
                 <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.2rem', textTransform: 'uppercase' }}>{node.label}</p>
                 <p style={{ fontSize: '0.55rem', color: 'var(--text-muted)' }}>{node.sub}</p>
              </div>
              {i < nodes.length - 1 && (
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                   <div className="lineage-path" style={{ height: '2px', background: 'var(--border)', flex: 1 }}></div>
                   <ChevronRight size={14} color="var(--text-muted)" />
                </div>
              )}
           </React.Fragment>
         ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
         {/* Deep Trace Logic: Minute Details */}
         <div className="card glass animate-fade">
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
               <Cpu size={20} color="var(--primary)" /> Minute-Level Connector Logic
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
               {[
                 { step: 'T=0ms: MS Graph Webhook', logic: 'Extract Broker Attachment', tech: 'REST API' },
                 { step: 'T+240ms: Aurelius Engine', logic: 'NLP-based Entity Mapping', tech: 'Python/OlosAI' },
                 { step: 'T+480ms: GRC Triage', logic: 'Fraud Scoring & NAIC Check', tech: 'Internal Rule Eng' },
                 { step: 'T+1.2s: OData Push', logic: 'Insert into PolicyCenter DB', tech: 'Batch REST v4' },
                 { step: 'T+2.5s: SAP Ledger Post', logic: 'General Ledger Financial Rec', tech: 'S/4HANA OData' }
               ].map((item, i) => (
                 <div key={i} className="mapping-row" style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <div style={{ width: '180px' }}>
                       <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)' }}>{item.step}</p>
                    </div>
                    <div style={{ flex: 1 }}>
                       <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>{item.logic}</p>
                       <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>PROTOCOL: {item.tech}</p>
                    </div>
                    <span className="badge-clear" style={{ fontSize: '0.55rem' }}>TRACE ACTIVE</span>
                 </div>
               ))}
            </div>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card glass" style={{ background: 'rgba(59, 130, 246, 0.05)', borderLeft: '4px solid #3b82f6' }}>
               <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Server size={16} /> Legacy System Handover
               </h4>
               <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  Final downstream sync uses the **SAP S/4HANA Reconciliation Service**. 
                  This ensures every premium dollar matched between PolicyCenter and the General Ledger 
                  within 5 seconds of the "Bind" operation.
               </p>
            </div>
            
            <div className="card glass">
               <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Audit Proof (SHA-256)</h4>
               <div style={{ background: 'black', padding: '1rem', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.6rem', color: '#10b981', overflowX: 'auto' }}>
                  $ sha256sum ms_graph_broker_file.pdf<br/>
                  b82...j92  ms_graph_broker_file.pdf (VERIFIED)
               </div>
            </div>
         </div>
      </div>

      <div className="card glass animate-fade" style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem' }}>
         <h4 style={{ fontSize: '0.9rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Info size={16} color="var(--primary)" /> Enterprise Verification Link
         </h4>
         <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            This architecture is verified for <strong>Guidewire Olos (April 2026)</strong> and mapped to SAP S/4HANA standard ledger codes. 
            For technical citations, visit the <a href="https://www.sap.com/products/erp/s4hana.html" target="_blank" style={{ color: 'var(--primary)' }}>SAP Verification Portal</a> or 
            the <a href="https://www.guidewire.com/products/cloud-platform" target="_blank" style={{ color: 'var(--primary)' }}>Guidewire Cloud Standards</a> page.
         </p>
      </div>
    </div>
  );
};

export default DataLineage;
