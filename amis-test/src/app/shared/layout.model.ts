export class ColumnSetting {
    primaryKey: string;  //  primaryKey is the property on the object that we expect to contain the value for a particular table column
    header?: string;     // is the title we want to apply to that column
    format?: string;
    alternativeKeys?: string[];
}