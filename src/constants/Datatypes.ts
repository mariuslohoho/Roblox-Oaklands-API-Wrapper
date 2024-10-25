export type TableData = {
  header: {
    [ColumnId: string]: {
      DisplayName: string;
    };
  };
  body: TableBody;
};

export type TableBody = {
  [ColumnId: string]: string | number;
}[];
