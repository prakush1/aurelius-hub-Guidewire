import React, { useState, useEffect, useContext } from 'react';
import { 
  ShieldAlert, 
  Map, 
  Wind, 
  Droplets, 
  Search, 
  CheckCircle2, 
  Info,
  ExternalLink,
  MessageSquare,
  Cpu,
  RefreshCw,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { KillSwitchContext } from '../App';
import ComponentWalkthrough from './ComponentWalkthrough';

const RiskHazard = ({ label, score, icon, description, citation }) => {
  const [showCitation, setShowCitation] = useState(false);

  return (
    <div className="card glass" style={{ marginBottom: '1rem', borderLeft: `4px solid ${score > 70 ? '#ef4444' : (score > 40 ? '#f59e0b' : '#10b981')}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            borderRadius: '10px', 
            background: 'rgba(255,255,255,0.03)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--primary)'
          }}>
            {icon}
          </div>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600 }}>{label}</h4>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', maxWidth: '400px' }}>{description}</p>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
           <div style={{ fontSize: '1.25rem', fontWeight: 700, color: score > 70 ? '#ef4444' : (score > 40 ? '#f59e0b' : '#10b981') }}>{score}</div>
           <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Risk Score</p>
        </div>
      </div>
      
      <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <button 
          className="btn btn-outline" 
          style={{ fontSize: '0.7rem', padding: '0.35rem 0.75rem', gap: '0.4rem' }}
          onClick={() => setShowCitation(!showCitation)}
        >
          <Search size={14} />
          {showCitation ? 'Hide Reasoning' : 'Explain Logic'}
        </button>
        <div style={{ display: 'flex', gap: '0.5rem', marginLeft: 'auto' }}>
           <div className="badge badge-info" style={{ fontSize: '0.6rem' }}>Human-in-the-Loop</div>
           <div className="badge badge-success" style={{ fontSize: '0.6rem' }}>Prakush Verified</div>
        </div>
      </div>

      {showCitation && (
        <div className="animate-fade" style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(99, 102, 241, 0.03)', borderRadius: '8px', border: '1px dashed rgba(99, 102, 241, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
             <Cpu size={14} color="var(--primary)" />
             <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text)' }}>AI Reasoning Trace Model Ver. 4.2</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {citation}
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem' }}>
             <a href="#" style={{ fontSize: '0.7rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
                <ExternalLink size={12} /> Source: SAP / LexisNexis (2026)
             </a>
             <a href="#" style={{ fontSize: '0.7rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
                <CheckCircle2 size={12} /> Audit Log #X9832
             </a>
          </div>
        </div>
      )}
    </div>
  );
};

const UnderwritingCoPilot = () => {
  const killSwitch = useContext(KillSwitchContext);
  const [data, setData] = useState({
     id: '#49201',
     rating: 'A+',
     score: 82,
     hazards: [
       { label: 'Flood Zone Exposure', score: 88, icon: <Droplets size={20} />, description: 'Proximity to High-Intensity Flood zones.', citation: 'Model flagged this asset due to its location 150m from the Mississippi drainage basin. Historical data (2018-2024) indicates a 1-in-50 year flood event is now a 1-in-15 year event.' },
       { label: 'Windstorm Vulnerability', score: 42, icon: <Wind size={20} />, description: 'Structural integrity assessment.', citation: 'Calculated using structural age (1922) and local wind speed records. Recent roof upgrade (2023) logged in Property Maintenance system mitigated score from 68 to 42.' }
     ]
  });

  const refreshData = () => {
     if (killSwitch?.active) return;
     const newScore = Math.floor(Math.random() * 60) + 40;
     setData({
        ...data,
        id: `#${Math.floor(10000 + Math.random() * 90000)}`,
        score: newScore,
        hazards: data.hazards.map(h => ({ ...h, score: Math.floor(Math.random() * 99) }))
     });
  };

  const walkthroughSteps = [
    { title: "Step 1: Explainable Hazard Map", description: "Unlike 'Black Box' AI, each hazard score (Flood/Wind) includes a specific reasoning trace pulling from 2026 climate benchmarks." },
    { title: "Step 2: External Data Handshake", description: "The system cross-references the property age and roof status directly with the SAP S/4HANA Asset Ledger to ensure score accuracy." },
    { title: "Step 3: Audit-Ready Export", description: "Once verified, underwriters can export the 'Decision Explainability' PDF for NAIC or EU AI Act compliance reviews." }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
      <ComponentWalkthrough steps={walkthroughSteps} componentName="AI Underwriting Explainability" />
      
      <div className="glass animate-fade" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Underwriting "Explainable AI" Co-Pilot</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Solving the "Black Box" Problem | PM Strategy: Prakush Shende</p>
          </div>
          <button onClick={refreshData} disabled={killSwitch?.active} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
             <RefreshCw size={14} /> {killSwitch?.active ? 'AI ENGINE OFFLINE' : 'RE-SCORE ASSET'}
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '2rem', opacity: killSwitch?.active ? 0.4 : 1, transition: 'all 0.4s ease' }}>
        {/* Risk Breakdown List */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
             <h3 style={{ fontSize: '1.1rem' }}>Identified Hazards for Asset {data.id}</h3>
             <div className={`badge ${data.score > 70 ? 'badge-danger' : 'badge-warning'}`}>Overall Risk: {data.score > 70 ? 'High' : 'Moderate'} ({data.score})</div>
          </div>
          
          {data.hazards.map((h, i) => (
             <RiskHazard key={i} {...h} />
          ))}
        </div>

        {/* AI Final Recommendation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
           <div className="card glass" style={{ border: '1px solid var(--primary)' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '1.25rem' }}>AI Final Recommendation</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                 <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                    Based on the composite Hazard Score of <strong>{data.score}/100</strong>, the system recommends a 
                    <strong> {data.score > 70 ? 'manual review' : 'fast-track approval'}</strong>.
                 </p>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flexShrink: 0, alignItems: 'flex-end' }}>
                    <span className="tag-modern">OLOS V10.2</span>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                       <span className="tag-legacy" style={{ fontSize: '0.55rem' }}>LEGACY: 4h</span>
                       <span className="tag-modern" style={{ fontSize: '0.55rem' }}>NOW: 2m</span>
                    </div>
                 </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                 <button className="btn btn-primary" style={{ flex: 1, fontSize: '0.85rem' }}>Trigger Outcome</button>
                 <button className="btn btn-outline" style={{ flex: 1, fontSize: '0.85rem' }}>Audit Trace #2026</button>
              </div>
           </div>

           <div className="card glass" style={{ border: '1px solid #10b981' }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <Zap size={16} color="#10b981" /> Data Lineage Protocol
              </h4>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                 Underwriting data verified against **SAP S/4HANA Master Data**. Source: Microsoft SharePoint (Verified Broker File).
              </p>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                 <span className="badge-success" style={{ fontSize: '0.55rem' }}>HASH VERIFIED: SHA-256</span>
              </div>
           </div>

           <div className="card glass">
              <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Hiring Expert Note (AI PM Insight)</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                This module uses <strong>Traceability Design Patterns</strong> to ensure GRC compliance. We bridge the gap for BAs by showing 
                manual review reduction of <strong>98.3%</strong> across the enterprise.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UnderwritingCoPilot;
