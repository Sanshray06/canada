export interface PricingService {
  slug: string;
  basePerTruckMonthly: number; // USD
}

// Edit these rates anytime — everything else recalculates automatically
export const pricingServices: PricingService[] = [
  { slug: "freight-dispatch", basePerTruckMonthly: 549 },
  { slug: "back-office-administration", basePerTruckMonthly: 199 },
  { slug: "cross-border-coordination", basePerTruckMonthly: 149 },
  { slug: "driver-customer-communication", basePerTruckMonthly: 99 },
  { slug: "fleet-tracking-monitoring", basePerTruckMonthly: 129 },
  { slug: "scalable-dispatch-teams", basePerTruckMonthly: 179 },
];

// Only discount left in the system — based purely on commitment length
export const termOptions = [
  { value: "monthly", label: "Month-to-Month", months: 1, discount: 0 },
  { value: "1year", label: "1 Year", months: 12, discount: 0.07 },
  { value: "2year", label: "2 Years", months: 24, discount: 0.10 },
  { value: "3year", label: "3+ Years", months: 36, discount: 0.12 },
];

export interface QuoteCalculation {
  baseMonthlyPerTruck: number;
  listMonthly: number;
  termDiscount: number;
  totalDiscountPct: number;
  monthlyTotal: number;
  termMonths: number;
  contractTotal: number;
  savingsVsListPrice: number;
}

export function calculateQuote(serviceSlugs: string[], trucks: number, termValue: string): QuoteCalculation {
  const selected = pricingServices.filter((s) => serviceSlugs.includes(s.slug));
  const baseMonthlyPerTruck = selected.reduce((sum, s) => sum + s.basePerTruckMonthly, 0);
  const listMonthly = baseMonthlyPerTruck * trucks;

  const term = termOptions.find((t) => t.value === termValue) || termOptions[0];
  const termDiscount = term.discount;
  const totalDiscountPct = termDiscount;

  const monthlyTotal = Math.round(listMonthly * (1 - totalDiscountPct));
  const termMonths = term.months;
  const contractTotal = Math.round(monthlyTotal * termMonths);
  const savingsVsListPrice = Math.round((listMonthly - monthlyTotal) * termMonths);

  return {
    baseMonthlyPerTruck,
    listMonthly,
    termDiscount,
    totalDiscountPct,
    monthlyTotal,
    termMonths,
    contractTotal,
    savingsVsListPrice,
  };
}