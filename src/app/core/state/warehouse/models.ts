export interface IStockItem {
	StockItemID: number;
	StockItemName: string;
	SupplierID: number;
	ColorID: number;
	UnitPackageID: number;
	Brand: string;
	Size: string;
	LeadTimeDays: number;
	QuantityPerOuter: number;
	IsChillerStock: boolean;
	Barcode: string;
	TaxRate: number;
	UnitPrice: number;
	RecommendedRetailPrice: number;
	TypicalWeightPerUnit: number;
	MarketingComments: string;
	InternalComments: string;
	Photo: string;
	CustomFields: string;
	Tags: string;
	SearchDetails: string;
	LastEditedBy: number;
	ValidFrom: string;
	ValidTo: string;
}