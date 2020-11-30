export interface IPstTableConfig {
    columns: IPstColumnConfig[];
    displayedColumns: Array<string>;
}

export interface IPstColumnConfig {
    columnDef: string;
    columnName: string;
    key: string;
}
