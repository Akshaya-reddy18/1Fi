export interface EMITenureConfig {
  durationMonths: number;
  interestRate: number; // 0 for No-Cost EMI
  isNoCost: boolean;
  processingFee: number;
  popular?: boolean;
  minOrderValue?: number;
}

/**
 * 1Fi Baseline EMI Configuration Matrix
 * 3, 6, 9, 12 months are 100% No-Cost EMIs backed by Mutual Funds collateral.
 * 18, 24 months are Low-Cost extended tenures.
 */
export const EMI_TENURE_POLICIES: EMITenureConfig[] = [
  {
    durationMonths: 3,
    interestRate: 0,
    isNoCost: true,
    processingFee: 0,
    popular: false,
  },
  {
    durationMonths: 6,
    interestRate: 0,
    isNoCost: true,
    processingFee: 0,
    popular: true, // Most popular tenure for electronics
  },
  {
    durationMonths: 9,
    interestRate: 0,
    isNoCost: true,
    processingFee: 0,
    popular: false,
  },
  {
    durationMonths: 12,
    interestRate: 0,
    isNoCost: true,
    processingFee: 0,
    popular: false,
  },
  {
    durationMonths: 18,
    interestRate: 0.08, // 8% p.a. vs standard credit card 16-18%
    isNoCost: false,
    processingFee: 0,
    popular: false,
  },
  {
    durationMonths: 24,
    interestRate: 0.10, // 10% p.a.
    isNoCost: false,
    processingFee: 0,
    popular: false,
  },
];

export const STANDARD_CREDIT_CARD_ANNUAL_RATE = 0.16; // 16% p.a. industry benchmark for savings callouts
