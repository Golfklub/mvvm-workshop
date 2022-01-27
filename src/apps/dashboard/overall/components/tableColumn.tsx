import { TableColumn as BaseTableColumn } from "baseUI/table/column";

export const TableColumn = () => {
  return (
    <BaseTableColumn>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        index
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Name
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Duplicate
      </th>
      <th
        scope="col"
        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Remove
      </th>
    </BaseTableColumn>
  );
};
