export interface ProductSubInfo {
  key: string;
  value: string;
  options: Option[];
}

export interface Option {
  parentKey: string;
  metaValue: string;
  metaOptions: MetaOption[];
}

export interface MetaOption {
  parentKey: string;
  metaOptionValue?: string;
  metaOptionPrice?: number;
  metaStoreNumber?: number;
  metaSKU?: string;
  value?: string;
  price?: number;
  store?: string;
  sku?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toProductSubInfo(json: string): ProductSubInfo[] {
    return JSON.parse(json);
  }

  public static productSubInfoToJson(value: ProductSubInfo[]): string {
    return JSON.stringify(value);
  }
}
