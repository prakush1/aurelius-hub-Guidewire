import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  ArrowUpRight, 
  Zap, 
  Clock, 
  AlertCircle,
  Database,
  Layers,
  Cpu,
  Globe,
  Share2,
  Calendar,
  History
} from 'lucide-react';

const Dashboard = ({ region }) => {
  const [activePulse, setActivePulse] = useState(null);

  // Interconnect Map Simulation
  const simulatePulse = (source) => {
    setActivePulse(source);
    setTimeout(() => setActivePulse(null), 1500);
  };

  const stats = [
    { label: 'AI Submission Accuracy', value: '98.4%', trend: '+2.2% (Olos optimized)', icon: <ShieldCheck size={20} color="#10b981" /> },
    { label: 'Active Policies', value: '4,840', trend: '+240% since Niseko', icon: <Users size={20} color="#6366f1" /> },
    { label: 'Claim Triage Depth', value: '92.1%', trend: '+3.7%', icon: <Zap size={20} color="#f59e0b" /> },
    { label: 'Avg. Latency (Apr 2026)', value: '118ms', trend: '-24ms', icon: <Clock size={20} color="#ec4899" /> },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* 2026 TRANSFORMATION HEADER */}
      <div className="card glass animate-fade" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
             <Calendar size={18} color="var(--primary)" />
             <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Transformation Status: April 2026</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            System stability is nominal. Successfully transitioned from **Niseko** (2025) to **Olos** (2026) standards.
            Current Region Focus: <strong style={{ color: 'var(--primary)' }}>{region}</strong>
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
           <span className="tag-modern" style={{ fontSize: '0.75rem' }}>OLOS CORE v10.2.1</span>
           <p style={{ fontSize: '0.65rem', color: '#10b981', marginTop: '0.5rem', fontWeight: 700 }}>UPGRADE SUCCESSFUL</p>
        </div>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {stats.map((stat, i) => (
          <div key={i} className="card glass animate-fade" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '10px' }}>{stat.icon}</div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: stat.trend.includes('+') ? '#10b981' : '#ef4444' }}>{stat.trend}</span>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{stat.label}</p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: '1.5rem' }}>
        {/* INTERCONNECT MAP */}
        <div className="card glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', minHeight: '400px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Share2 size={18} color="var(--primary)" /> Suite Interconnect Map (Real-time Pulse)
             </h3>
             <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="tag-modern">OLOS SYNC</span>
                <span className="badge-clear pulse">LIVE</span>
             </div>
          </div>

          <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'space-around', alignItems: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: '15px', border: '1px solid var(--border)', overflow: 'hidden' }}>
             {/* PolicyCenter Node */}
             <div 
               className={`card glass ${activePulse === 'PC' ? 'active' : ''}`} 
               onClick={() => simulatePulse('PC')}
               style={{ width: '120px', textAlign: 'center', cursor: 'pointer', zIndex: 10, transition: 'transform 0.2s', transform: activePulse === 'PC' ? 'scale(1.05)' : 'scale(1)' }}
             >
                <div style={{ position: 'absolute', top: '-10px', right: '-10px' }}><span className="tag-modern">v10.2</span></div>
                <Database size={24} color="#6366f1" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ fontSize: '0.6rem', fontWeight: 800 }}>POLICYCENTER</p>
             </div>

             {/* Connection Lines */}
             <div style={{ position: 'absolute', top: '50%', left: '20%', right: '20%', height: '2px', background: 'rgba(255,255,255,0.05)', display: 'flex' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                   {activePulse === 'PC' && <div style={{ position: 'absolute', height: '6px', width: '6px', background: '#6366f1', borderRadius: '50%', left: 0, top: '-2px', animation: 'pulseMove 1.5s forwards' }} />}
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                   {activePulse === 'CC' && <div style={{ position: 'absolute', height: '6px', width: '6px', background: '#ef4444', borderRadius: '50%', right: 0, top: '-2px', animation: 'pulseMoveRev 1.5s forwards' }} />}
                </div>
             </div>

             {/* ClaimCenter Node */}
             <div 
               className={`card glass ${activePulse === 'CC' ? 'active' : ''}`}
               onClick={() => simulatePulse('CC')}
               style={{ width: '120px', textAlign: 'center', cursor: 'pointer', zIndex: 10, transform: activePulse === 'CC' ? 'scale(1.05)' : 'scale(1)' }}
             >
                <div style={{ position: 'absolute', top: '-10px', right: '-10px' }}><span className="tag-modern">v10.2</span></div>
                <Database size={24} color="#ef4444" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ fontSize: '0.6rem', fontWeight: 800 }}>CLAIMCENTER</p>
             </div>

             {/* Vertical Connect to Billing */}
             <div style={{ position: 'absolute', top: '50%', left: '50%', width: '2px', height: '80px', background: 'rgba(255,255,255,0.05)', transform: 'translateY(-50%)' }} />

             {/* BillingCenter Node */}
             <div 
               className="card glass" 
               style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', width: '120px', textAlign: 'center', cursor: 'default' }}
             >
                <div style={{ position: 'absolute', top: '-10px', right: '-10px' }}><span className="tag-modern">v10.1</span></div>
                <Database size={24} color="#f59e0b" style={{ margin: '0 auto 0.5rem' }} />
                <p style={{ fontSize: '0.6rem', fontWeight: 800 }}>BILLINGCENTER</p>
             </div>

             <style>{`
               @keyframes pulseMove {
                 0% { left: 0; opacity: 1; }
                 100% { left: 100%; opacity: 0; }
               }
               @keyframes pulseMoveRev {
                 0% { right: 0; opacity: 1; }
                 100% { right: 100%; opacity: 0; }
               }
             `}</style>
          </div>
        </div>

        {/* 2025 -> 2026 ROADMAP EVOLUTION */}
        <div className="card glass animate-fade" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
             <History size={18} color="var(--primary)" /> Release Evolution
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: 'Niseko (Legacy Transition)', progress: 100, status: 'Completed Oct 2025', isLegacy: true },
              { label: 'Olos (Current Cloud Std)', progress: 100, status: 'Released Dec 2025', isLegacy: false },
              { label: 'Park City (P-Release Alpha)', progress: 24, status: 'Target Q3 2026', isLegacy: false },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem' }}>
                  <span style={{ color: item.isLegacy ? 'var(--text-muted)' : 'var(--text)' }}>
                     {item.label} {item.isLegacy && <span className="tag-legacy">RETIRED</span>}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>{item.status}</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }}>
                  <div style={{ width: `${item.progress}%`, height: '100%', background: item.isLegacy ? '#6b7280' : 'var(--primary)', borderRadius: '3px' }} />
                </div>
              </div>
            ))}
          </div>
          
          {/* THE "WHY" - EVOLUTION BENCHMARK */}
          <div style={{ marginTop: 'auto', background: 'rgba(99, 102, 241, 0.1)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            <h4 style={{ fontSize: '0.85rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <TrendingUp size={16} color="var(--primary)" /> Transformation Impact
            </h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
               <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>2025 Manual Intake</span>
               <span style={{ fontSize: '0.7rem', color: '#ef4444' }}>4.2 mins</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>2026 Olos AI-Ops</span>
               <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 800 }}>42 seconds</span>
            </div>
            <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}>
               *Simulated benchmark across 10k GL/WC submissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
