export interface PricingData {
  modelNumber: string;
  type: string;
  boreDiameter: string;
  outsideDiameter: string;
  totalWidth: string;
  mrp: number;
  inStock: boolean;
  application: string;
  industriesType: string | string[];
  showInMainPage: boolean;
  showInProductPage: boolean;
}

export interface GoogleSheetsResponse {
  values: string[][];
  range: string;
  majorDimension: string;
}
