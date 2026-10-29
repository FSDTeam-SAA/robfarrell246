export interface LedgerEntry {
  id: string;
  date: string;
  activity: string;
  project: string;
  delta: string;
  remainingBalance: number;
}

export interface CreditPackage {
  id: string;
  badge: string;
  credits: number;
  price: number;
  priceDisplay: string;
  isEnterprise?: boolean;
}

export interface TopUpSuccessDetails {
  credits: number;
  price: number;
  name: string;
}
