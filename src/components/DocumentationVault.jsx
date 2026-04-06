import React, { useState } from 'react';
import { 
  FileText, 
  Briefcase, 
  Code, 
  Network, 
  Clock, 
  CheckCircle2, 
  Download,
  ScrollText,
  ShieldCheck,
  Zap,
  Info,
  Layers,
  History,
  AlertCircle,
  Library,
  Trash2,
  Construction,
  BookOpen,
  Map,
  ArrowRight
} from 'lucide-react';

const DocumentationVault = () => {
  const [activeTab, setActiveTab] = useState('SOP');

  const tabs = [
    { id: 'SOP', label: 'SOP', sub: 'Nav & Setup', icon: <ScrollText size={14} /> },
    { id: 'IRD', label: 'IRD', sub: 'Integrations', icon: <Network size={14} /> },
    { id: 'PRD', label: 'PRD', sub: 'Product Req.', icon: <FileText size={14} /> },
    { id: 'BRD', label: 'BRD', sub: 'Business Req.', icon: <Briefcase size={14} /> },
    { id: 'FRD', label: 'FRD', sub: 'Functional Req.', icon: <Code size={14} /> },
    { id: 'MVP', label: 'MVP', sub: 'Pain & Solution', icon: <Zap size={14} /> },
    { id: 'RETIRE', label: 'RETIREMENT', sub: 'Legacy Decommission', icon: <Trash2 size={14} /> },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Vault Header */}
      <div className="glass animate-fade" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Library color="var(--primary)" size={24} />
          </div>
          <div style={{ flex: 1 }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.2rem' }}>
                <h2 style={{ fontSize: '1.5rem' }}>Enterprise Documentation Vault</h2>
                <span className="tag-modern">APRIL 2026 MASTER SUITE</span>
             </div>
             <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>14 artifacts · Phase 7 (v6.0) · Author: Prakush Shende</p>
          </div>
          <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Download size={16} /> Export Strategy PDF
          </button>
        </div>
      </div>

      {/* Document Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.875rem 1.25rem',
              borderRadius: '12px',
              border: activeTab === tab.id ? '1px solid var(--primary)' : '1px solid var(--border)',
              background: activeTab === tab.id ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.03)',
              color: activeTab === tab.id ? 'var(--text)' : 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.2s ease',
              minWidth: '160px',
              textAlign: 'left'
            }}
          >
            <div style={{ color: activeTab === tab.id ? 'var(--primary)' : 'inherit' }}>{tab.icon}</div>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700 }}>{tab.label}</p>
              <p style={{ fontSize: '0.6rem', opacity: 0.6 }}>{tab.sub}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Document Viewport */}
      <div className="card glass animate-fade" style={{ padding: '2.5rem', minHeight: '600px' }}>
        {activeTab === 'SOP' && (
          <div className="animate-fade">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Standard Operating Procedure (SOP)</h3>
                <span className="badge-success">AUDIT-READY v1.4</span>
             </div>
             <section style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BookOpen size={18} /> Navigation & Strategy Guide</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     { step: 'Step 1: Ingestion', desc: 'Navigate to "Connectors & Ingestion" to verify SAP/SFTP connectivity.' },
                     { step: 'Step 2: Lineage Audit', desc: 'Check "Visual Data Lineage" to ensure hash parity across the hub.' },
                     { step: 'Step 3: Suite Ops', desc: 'Use AI Submission, Underwriting, and Claims Hub for functional triage.' },
                     { step: 'Step 4: GRC Review', desc: 'Visit "Compliance Tower" to verify NAIC/EU Act enforcement levels.' }
                   ].map((s, i) => (
                     <div key={i} className="mapping-row" style={{ padding: '1.25rem' }}>
                        <div style={{ background: 'var(--primary)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>{i+1}</div>
                        <div style={{ flex: 1 }}>
                           <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>{s.step}</p>
                           <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{s.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </section>
          </div>
        )}

        {activeTab === 'IRD' && (
          <div className="animate-fade">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Integration Requirements Document (IRD)</h3>
                <span className="tag-modern">8 ACTIVE GATEWAYS</span>
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="glass" style={{ padding: '1.5rem' }}>
                   <h5 style={{ fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Network size={16} /> SAP S/4HANA Ledger Map</h5>
                   <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      Synchronizing <strong>PremiumBooked_Entity</strong> with SAP FICO Ledger codes in real-time via OData API.
                   </p>
                </div>
                <div className="glass" style={{ padding: '1.5rem' }}>
                   <h5 style={{ fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Share2 size={16} /> Microsoft Graph Integration</h5>
                   <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      Automated ingestion of email attachments from <strong>BrokerInbox@outlook.com</strong> into the Olos Triage Queue.
                   </p>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'MVP' && (
          <div className="animate-fade">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>MVP Pain Point Solution Mapping</h3>
                <span className="badge-clear">PHASE 7 REFINED</span>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { pain: 'Legacy Data Silos', solution: 'The Connectors Hub bridges SFTP, SharePoint, and SAP into a single Guidewire feed.' },
                  { pain: 'Opaque AI Logic', solution: 'The "Explainability" trace in Underwriting shows exactly why scores are high or low.' },
                  { pain: 'Technical Debt Bottlenecks', solution: 'The Retirement Plan decommissioned 48+ legacy Gosu rules in favor of Cloud Functions.' },
                  { pain: 'Regulatory Lag', solution: 'Compliance Tower selector updates NAIC/EU Act standards instantly (Apr 2026).' }
                ].map((m, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center' }}>
                     <div className="glass" style={{ padding: '1.25rem', borderLeft: '3px solid #ef4444' }}>
                        <p style={{ fontSize: '0.65rem', color: '#ef4444', fontWeight: 800, marginBottom: '0.25rem' }}>PAIN POINT</p>
                        <p style={{ fontSize: '0.85rem' }}>{m.pain}</p>
                     </div>
                     <ArrowRight size={20} color="var(--primary)" />
                     <div className="glass" style={{ padding: '1.25rem', borderLeft: '3px solid #10b981' }}>
                        <p style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 800, marginBottom: '0.25rem' }}>AURELIUS SOLUTION</p>
                        <p style={{ fontSize: '0.85rem' }}>{m.solution}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        )}

        {activeTab === 'PRD' && (
          <div className="animate-fade">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Product Requirements Document (PRD)</h3>
                <span className="tag-modern">v6.0 STRATEGY</span>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <section>
                   <h5 style={{ fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '0.75rem', fontWeight: 700 }}>1. EXECUTIVE SUMMARY</h5>
                   <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      Aurelius v6 serves as the "Intelligence Layer" for Guidewire Olos. Its primary goal is to automate 90% of manual submission triage and claim fraud detection by April 2026, leveraging the Unified Edge architecture.
                   </p>
                </section>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                   <div className="glass" style={{ padding: '1.25rem' }}>
                      <h6 style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>CORE OBJECTIVES</h6>
                      <ul style={{ fontSize: '0.7rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                         <li>Reduce Submission-to-Quote time from 4 days to 4 minutes.</li>
                         <li>Enable zero-touch SAP General Ledger synchronization.</li>
                         <li>Implement EU AI Act compliant "Kill Switch" protocols.</li>
                      </ul>
                   </div>
                   <div className="glass" style={{ padding: '1.25rem' }}>
                      <h6 style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>USER PERSONAS</h6>
                      <ul style={{ fontSize: '0.7rem', color: 'var(--text-muted)', paddingLeft: '1rem' }}>
                         <li><strong>Commercial Underwriter:</strong> Needs explainable AI scores.</li>
                         <li><strong>Claims Adjuster:</strong> Needs real-time fraud early-warning.</li>
                         <li><strong>Compliance Officer:</strong> Needs audit-ready data lineage.</li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
        )}

        {activeTab === 'BRD' && (
          <div className="animate-fade">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Business Requirements Document (BRD)</h3>
                <span className="badge-success">KPI-DRIVEN</span>
             </div>
             <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                   <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                      <th style={{ padding: '1rem', color: 'var(--primary)' }}>Requirement ID</th>
                      <th style={{ padding: '1rem', color: 'var(--primary)' }}>Business Value</th>
                      <th style={{ padding: '1rem', color: 'var(--primary)' }}>Success Metric</th>
                   </tr>
                </thead>
                <tbody>
                   <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>BUS-001: Auto-Triage</td>
                      <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>Eliminate manual queue management for standard commercial auto lines.</td>
                      <td style={{ padding: '1rem' }}>95% Accuracy in first-pass triage.</td>
                   </tr>
                   <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>BUS-002: Compliance</td>
                      <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>Adhere to NAIC AI Model Bulletin and EU AI Act transparency rules.</td>
                      <td style={{ padding: '1rem' }}>Zero audit findings in 2026-Q2.</td>
                   </tr>
                   <tr>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>BUS-003: SAP Sync</td>
                      <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>Real-time premium booking visibility for the Finance department.</td>
                      <td style={{ padding: '1rem' }}>Real-time status in SAP S/4HANA.</td>
                   </tr>
                </tbody>
             </table>
          </div>
        )}

        {activeTab === 'FRD' && (
          <div className="animate-fade">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>Functional Requirements (FRD)</h3>
                <span className="tag-modern">SYSTEM LOGIC</span>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: "AI Decision Explainability", desc: "For every credit or fraud score, the system MUST provide a 'Top 3 Factors' reasoning trace for the underwriter." },
                  { title: "Manual Ingestion Override", desc: "Users must be able to drag-and-drop .pdf or .xlsx files directly into the Submission Intake to bypass SFTP latency." },
                  { title: "Global Kill Switch", desc: "A toggle that sends a SIGTERM to all non-essential AI inference nodes while maintaining core Gosu logic." }
                ].map((f, i) => (
                  <div key={i} className="glass" style={{ padding: '1.5rem' }}>
                     <p style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 800, marginBottom: '0.5rem' }}>REQ-FUNC-{i+1}</p>
                     <h5 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{f.title}</h5>
                     <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{f.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        )}

        {activeTab === 'RETIRE' && (
          <div className="animate-fade">
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem' }}>System Retirement Plan</h3>
                <span className="badge-quarantine">DECOMMISSIONING</span>
             </div>
             <div className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                <History size={48} color="#ef4444" style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
                <h4 style={{ marginBottom: '1rem' }}>Legacy On-Prem Phase Out</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
                   Aurelius v6 marks the final decommissioning of the legacy 2021 SFTP ingestion layer. 
                   By shifting to <strong>Microsoft Graph / OData API</strong>, we reduce technical debt by 40% and 
                   ensure future-proof compatibility with the Guidewire Park City roadmap.
                </p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentationVault;
