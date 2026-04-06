import React, { useState, useEffect } from 'react';
import { 
  Stethoscope, 
  MapPin, 
  Calendar, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Activity,
  Zap,
  Camera,
  Layers,
  ArrowUpRight,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDynamicData } from '../hooks/useDynamicData';

const ClaimsHub = () => {
  const [activeClaim, setActiveClaim] = useState(0);
  const { data: claimsData, refresh } = useDynamicData('claims');

  if (!claimsData) return <div className="animate-pulse" style={{ color: 'var(--text-muted)' }}>Loading Olos Data Stream...</div>;

  const current = claimsData[activeClaim];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Claims Triage Header */}
      <div className="glass animate-fade" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Stethoscope color="#ef4444" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>ClaimCenter Triage (CC-Ops)</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Automated FNOL Analysis & Severity Prediction | Prakush Shende Strategy</p>
            </div>
          </div>
          <button 
            onClick={refresh}
            className="btn btn-outline" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}
          >
            <RefreshCw size={14} className={claimsData ? '' : 'pulse'} /> REGENERATE RANDOM DATA
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
        {/* Claims Queue */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05rem' }}>Active FNOL Queue</h3>
          {claimsData.map((claim, i) => (
            <div 
              key={claim.id} 
              className={`card glass ${activeClaim === i ? 'active' : ''}`} 
              onClick={() => setActiveClaim(i)}
              style={{ padding: '1.25rem', cursor: 'pointer', borderLeft: activeClaim === i ? '4px solid #ef4444' : '4px solid transparent' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{claim.id}</span>
                <span className={`badge ${claim.aiSeverity === 'High' ? 'badge-danger' : 'badge-success'}`} style={{ fontSize: '0.6rem' }}>{claim.aiSeverity} SEVERITY</span>
              </div>
              <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem' }}>{claim.claimant}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                <Calendar size={12} /> {claim.lossDate}
              </div>
            </div>
          ))}
        </div>

        {/* Claim Detail View */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card glass animate-fade" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
               <div>
                  <h3 style={{ fontSize: '1.25rem' }}>{current.claimant} — {current.id}</h3>
                  <Link to="/underwriting" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem' }}>
                    Linked Policy: {current.policy} <ArrowUpRight size={12} />
                  </Link>
               </div>
               <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Zap size={16} color="#ef4444" />
                    <span style={{ fontWeight: 700 }}>AI TRIAGE</span>
                    <span className="tag-modern">OLOS V10.2</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                     <span className={`badge ${current.aiTriage.includes('Fast') ? 'badge-success' : 'badge-warning'}`}>{current.aiTriage}</span>
                     <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <span className="tag-legacy" style={{ fontSize: '0.55rem' }}>LEGACY: 120min</span>
                        <span className="tag-modern" style={{ fontSize: '0.55rem' }}>NOW: 40sec</span>
                     </div>
                  </div>
               </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', borderLeft: '3px solid var(--border)' }}>
               <strong>Loss Description:</strong> "{current.description}"
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
               <div className="card" style={{ background: 'rgba(239, 68, 68, 0.03)', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                  <h4 style={{ fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Activity size={16} color="#ef4444" /> AI Reasoning Trace
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                    {current.logic}
                  </p>
                  <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                       <span style={{ fontSize: '0.7rem' }}>Confidence Score</span>
                       <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>{Math.round(current.confidence * 100)}%</span>
                    </div>
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                       <div style={{ width: `${current.confidence * 100}%`, height: '100%', background: '#ef4444', borderRadius: '2px' }} />
                    </div>
                  </div>
               </div>
               <div className="card" style={{ border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Layers size={16} color="var(--primary)" /> Data Lineage Proof
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1rem' }}>
                    Source Hash: SHA-256 Verified. Ingested from **MS Graph (Email attachment)**.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     <span className="badge-clear" style={{ fontSize: '0.6rem' }}>LINEAGE OK</span>
                     <span style={{ fontSize: '0.65rem', color: 'var(--primary)' }}>Trace Code: #X9832</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Operational Safety */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '1.5rem' }}>
            <div className="card glass">
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Camera size={16} color="#ef4444" />
                  <span style={{ fontSize: '0.85rem' }}>Visual Estimation</span>
               </div>
               <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Computer vision confirms rear-axle displacement logic matches telematics data.</p>
            </div>
            <div className="card glass" style={{ borderLeft: '4px solid #10b981' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h5 style={{ fontSize: '0.85rem', marginBottom: '0.2rem' }}>Fraud Guard: CLEAR</h5>
                    <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Behavioral network check complete (Shift Technology Engine)</p>
                  </div>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#10b981' }}>{current.fraudScore}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimsHub;
