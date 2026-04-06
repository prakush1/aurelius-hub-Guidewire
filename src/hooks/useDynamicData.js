import { useState, useEffect } from 'react';

/**
 * useDynamicData Hook (v1.0)
 * Generates fresh fake data for Aurelius AI-Ops Hub.
 * Pre-populated for April 2026 enterprise contexts.
 */
export const useDynamicData = (type) => {
  const [data, setData] = useState(null);

  const generateData = () => {
    const randomId = (prefix) => `${prefix}-${Math.floor(10000 + Math.random() * 90000)}`;
    const randomAmount = () => `$${(Math.random() * 50000 + 5000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    const randomScore = () => (0.85 + Math.random() * 0.14).toFixed(3); // 85% to 99%

    if (type === 'claims') {
      return [
        {
          id: randomId('CLM'),
          policy: randomId('POL'),
          status: 'Open',
          claimant: 'Tech Logistics Corp',
          lossDate: 'Apr 02, 2026',
          description: 'Multi-vehicle collision at interchange.',
          aiSeverity: 'High',
          confidence: randomScore(),
          aiTriage: 'Complex - Adjuster Required',
          fraudScore: (Math.random() * 0.3).toFixed(2),
          logic: 'LIDAR data indicates pre-impact deceleration failure; consistent with high-severity impacts.'
        },
        {
          id: randomId('CLM'),
          policy: randomId('POL'),
          status: 'FNOL',
          claimant: 'Aurelius Shipping',
          lossDate: 'Apr 05, 2026',
          description: 'Minor windshield crack from heavy debris.',
          aiSeverity: 'Low',
          confidence: randomScore(),
          aiTriage: 'Fast Track - Auto-Approved',
          fraudScore: (Math.random() * 0.05).toFixed(2),
          logic: 'Low-value claim; telematics confirm incident latitude/longitude match claimant location.'
        }
      ];
    }

    if (type === 'billing') {
      return [
        {
          account: randomId('ACC'),
          client: 'Apex Industrial Partners',
          balance: randomAmount(),
          status: 'Current',
          nextPayment: 'Apr 15, 2026',
          aiHealth: 'Stable',
          unearnedPremium: randomAmount(),
          activePolicies: Math.floor(Math.random() * 10) + 1,
          insight: 'Optimization: Move to Annual Pay-in-Full to save 4% leakage.'
        },
        {
          account: randomId('ACC'),
          client: 'Global Freight Systems',
          balance: randomAmount(),
          status: 'Late (-3 Days)',
          nextPayment: 'OVERDUE',
          aiHealth: 'At Risk',
          unearnedPremium: randomAmount(),
          activePolicies: Math.floor(Math.random() * 5) + 1,
          insight: 'AI Dunning: Probability of lapse increased to 12% based on late behavioral drift.'
        }
      ];
    }

    return null;
  };

  useEffect(() => {
    setData(generateData());
  }, [type]);

  const refresh = () => setData(generateData());

  return { data, refresh };
};
