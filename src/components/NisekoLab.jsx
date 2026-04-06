import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Zap, 
  Globe, 
  ShieldCheck, 
  ArrowRight, 
  Info,
  Activity,
  Box,
  Terminal,
  ExternalLink,
  Code2,
  Database
} from 'lucide-react';

const NisekoLab = () => {
  const [activeTab, setActiveTab] = useState('Architecture');

  const marketplaceApps = [
    { name: 'Nearmap Aerial AI', category: 'Geospatial', rating: 4.8, latency: '120ms', status: 'Installed' },
    { name: 'LexisNexis C.L.U.E.', category: 'Risk Data', rating: 4.9, latency: '450ms', status: 'Active' },
    { name: 'Cape Analytics', category: 'Property AI', rating: 4.7, latency: '210ms', status: 'In Evaluation' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Niseko Lab Header */}
      <div className="glass animate-fade" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Cpu color="var(--primary)" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Niseko Architecture Lab</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Cloud-Native Extension Layer & Guidewire Functions v5.0</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
             <span className="badge-clear">BUILD-APART ACTIVE</span>
             <span className="badge badge-info pulse">OLOS GA READY</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {['Architecture', 'Marketplace', 'API Gateway'].map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{ 
              padding: '0.65rem 1.25rem', borderRadius: '8px', 
              background: activeTab === tab ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
              color: activeTab === tab ? 'white' : 'var(--text-muted)',
              border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem', transition: 'all 0.2s ease'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Architecture' && (
        <div className="animate-fade" style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: '2rem' }}>
          <div className="card glass" style={{ padding: '2rem' }}>
             <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={18} color="var(--primary)" /> The "Built-Apart" Extension Layer
             </h3>
             <div style={{ position: 'relative', height: '350px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden', padding: '2rem' }}>
                {/* Visual Interconnect Simulation */}
                <div style={{ position: 'absolute', top: '10%', left: '5%', right: '5%', height: '80px', border: '2px dashed rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
                   <div style={{ background: '#3b82f6', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>AURELIUS AI (EXTERNAL)</div>
                   <div className="suite-connection" />
                   <div style={{ background: '#ef4444', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700 }}>MARKETPLACE APPS</div>
                </div>

                <div style={{ position: 'absolute', top: '40%', left: '35%', width: '30%', height: '30px', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <span style={{ fontSize: '0.6rem', color: 'var(--primary)', fontWeight: 800 }}>EDGE API GATEWAY</span>
                </div>

                <div style={{ position: 'absolute', bottom: '10%', left: '5%', right: '5%', height: '80px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                   <div style={{ textAlign: 'center' }}>
                      <Database size={16} color="var(--text-muted)" style={{ marginBottom: '0.25rem' }} />
                      <p style={{ fontSize: '0.6rem', fontWeight: 700 }}>POLICYCENTER</p>
                   </div>
                   <div style={{ textAlign: 'center' }}>
                      <Database size={16} color="var(--text-muted)" style={{ marginBottom: '0.25rem' }} />
                      <p style={{ fontSize: '0.6rem', fontWeight: 700 }}>CLAIMCENTER</p>
                   </div>
                   <div style={{ textAlign: 'center' }}>
                      <Database size={16} color="var(--text-muted)" style={{ marginBottom: '0.25rem' }} />
                      <p style={{ fontSize: '0.6rem', fontWeight: 700 }}>BILLINGCENTER</p>
                   </div>
                </div>
             </div>
             <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Niseko's Built-Apart architecture allows insurers to keep the "Core" stable while innovating rapidly in the "Digital" and "AI" layers. 
                Updates to core entities (OOTB) no longer break custom AI enhancements residing in the separate Extension Layer.
             </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             <div className="card glass" style={{ borderLeft: '4px solid #ef4444' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                   <Zap size={16} color="#ef4444" />
                   <h4 style={{ fontSize: '0.85rem' }}>Guidewire Functions (GFA)</h4>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                   <pre style={{ fontSize: '0.65rem', color: '#10b981', fontFamily: 'monospace' }}>
{`// Serverless Function v1.0
export async function triage(event) {
  const risk = event.payload;
  const score = await Aurelius.analyze(risk);
  return { triageLevel: score > 0.8 ? 'HIGH' : 'STD' };
}`}
                   </pre>
                </div>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
                   JS/TS Functions replace heavy Gosu rules for external API logic.
                </p>
             </div>
             <div className="card glass">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                   <Terminal size={16} color="#3b82f6" />
                   <h4 style={{ fontSize: '0.85rem' }}>Release Strategy</h4>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                   Current Cadence: **Sprintly (2-week releases)**. <br/>
                   Previous Cadence: **9-month major upgrades**. <br/>
                   *Impact: Zero-downtime upgrades for Olos release target.*
                </p>
             </div>
          </div>
        </div>
      )}

      {activeTab === 'Marketplace' && (
        <div className="animate-fade">
           <div className="card glass" style={{ padding: '0' }}>
              <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <h3 style={{ fontSize: '1rem' }}>Guidewire Marketplace Hub</h3>
                 <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Verified 3rd Party Accelerators</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                 {marketplaceApps.map((app, i) => (
                    <div key={i} className="mapping-row" style={{ padding: '1.25rem 2rem' }}>
                       <div style={{ flex: 1 }}>
                          <h5 style={{ fontSize: '0.9rem', marginBottom: '0.1rem' }}>{app.name}</h5>
                          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Category: {app.category} | Real-time Latency: {app.latency}</p>
                       </div>
                       <div style={{ textAlign: 'right' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, marginRight: '1.5rem' }}>{app.rating} ★</span>
                          <span className={`badge ${app.status === 'In Evaluation' ? 'badge-warning' : 'badge-success'}`}>{app.status}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="jutro-alert" style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <Info size={14} />
                <strong>PM Selection Tip</strong>
              </div>
              <p style={{ fontSize: '0.8rem' }}>
                 Always prioritize marketplace apps that use the <strong>Cloud Integration Framework</strong> over legacy SOAP-based plugins to minimize Olos upgrade friction.
              </p>
           </div>
        </div>
      )}

      {activeTab === 'API Gateway' && (
        <div className="animate-fade grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
           <div className="card glass">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                 <ShieldCheck size={20} color="#10b981" />
                 <h4 style={{ fontSize: '0.9rem' }}>Edge API Security</h4>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                 Primary Auth: **OAuth 2.0 Client Credentials**. <br/>
                 Token Strategy: **JWT RS256 Signature**.
              </p>
              <div className="glass" style={{ padding: '0.75rem', fontSize: '0.65rem', fontFamily: 'monospace', color: '#3b82f6', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                 eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
              </div>
           </div>
           <div className="card glass">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                 <Globe size={20} color="#3b82f6" />
                 <h4 style={{ fontSize: '0.9rem' }}>Global Endpoints</h4>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                 <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span>GET /policies/{'{policyId}'}</span>
                    <span style={{ color: '#10b981' }}>200 OK</span>
                 </li>
                 <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span>POST /claims/fnol</span>
                    <span style={{ color: '#10b981' }}>201 CREATED</span>
                 </li>
                 <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span>GET /billing/accounts</span>
                    <span style={{ color: '#10b981' }}>200 OK</span>
                 </li>
              </ul>
           </div>
        </div>
      )}
    </div>
  );
};

export default NisekoLab;
