import { ReactNode } from "react";

type ITableColumn = { children: ReactNode };

export const TableColumn = ({ children }: ITableColumn) => {
  return (
    <thead className="bg-gray-50">
      <tr>{children}</tr>
    </thead>
  );
};
