import { ReactNode } from "react";

type ITableBody = {
  children: ReactNode;
};

export const TableBody = ({ children }: ITableBody) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
  );
};
