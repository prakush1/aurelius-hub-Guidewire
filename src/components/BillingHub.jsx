import React, { useState } from 'react';
import { 
  BarChart3, 
  CreditCard, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Filter, 
  Zap,
  Activity,
  History,
  AlertCircle,
  RefreshCw,
  Database
} from 'lucide-react';
import { useDynamicData } from '../hooks/useDynamicData';

const BillingHub = () => {
  const { data: accounts, refresh } = useDynamicData('billing');

  if (!accounts) return <div className="animate-pulse" style={{ color: 'var(--text-muted)' }}>Loading Financial Stream...</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Financial Health Header */}
      <div className="glass animate-fade" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart3 color="#10b981" size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>BillingCenter AI-Ops (BC-Ops)</h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Real-time Leakage Detection & Account Health | Prakush Shende Strategy</p>
            </div>
          </div>
          <button 
            onClick={refresh}
            className="btn btn-outline" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}
          >
            <RefreshCw size={14} /> NEW BATCH SYNC
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <div className="card glass animate-fade" style={{ padding: '1.5rem', borderLeft: '4px solid #10b981' }}>
           <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Unearned Premium Sync</p>
           <h3 style={{ fontSize: '1.5rem' }}>$1.4M</h3>
           <span className="badge-success" style={{ marginTop: '0.5rem' }}>+12% vs Niseko</span>
        </div>
        <div className="card glass animate-fade" style={{ padding: '1.5rem', borderLeft: '4px solid #6366f1' }}>
           <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>SAP Ledger Latency</p>
           <h3 style={{ fontSize: '1.5rem' }}>42ms</h3>
           <span className="tag-modern" style={{ marginTop: '0.5rem' }}>OLOS EDGE v2</span>
        </div>
        <div className="card glass animate-fade" style={{ padding: '1.5rem', borderLeft: '4px solid #f59e0b' }}>
           <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Billing Exceptions</p>
           <h3 style={{ fontSize: '1.5rem' }}>24</h3>
           <span className="badge-warning" style={{ marginTop: '0.5rem' }}>Awaiting AI Dunning</span>
        </div>
      </div>

      {/* Account Watchlist */}
      <div className="card glass animate-fade" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
           <h3 style={{ fontSize: '1.1rem' }}>Account Behavioral Watchlist</h3>
           <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="glass" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '8px', fontSize: '0.75rem' }}>
                 <Database size={14} color="var(--primary)" /> Source: S/4HANA Ledger
              </div>
              <button className="btn btn-outline" style={{ fontSize: '0.75rem' }}><Filter size={14} /> Filter Risk</button>
           </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
           {accounts.map((acc, i) => (
             <div key={i} className="mapping-row" style={{ padding: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{acc.client}</h4>
                      <span className="badge-clear" style={{ fontSize: '0.6rem' }}>{acc.account}</span>
                   </div>
                   <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Policies: {acc.activePolicies} · Last Payment: {acc.nextPayment}</p>
                </div>
                <div style={{ textAlign: 'right', marginRight: '2rem' }}>
                   <p style={{ fontSize: '1.1rem', fontWeight: 800 }}>{acc.balance}</p>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'flex-end', marginTop: '0.25rem' }}>
                      <span className={`badge ${acc.aiHealth === 'Stable' ? 'badge-success' : 'badge-warning'}`} style={{ fontSize: '0.6rem' }}>{acc.aiHealth} HEALTH</span>
                      <span className="tag-modern">OLOS v10</span>
                   </div>
                </div>
                <div style={{ flex: 1, borderLeft: '1px solid var(--border)', paddingLeft: '2rem' }}>
                   <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Zap size={14} /> AI Billing Insight
                   </p>
                   <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{acc.insight}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default BillingHub;
