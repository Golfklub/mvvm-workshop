import { OutlineButton } from "baseUI/button/outline";
import { IBaseData } from "model";

type ITableRow = {
  data: IBaseData;
  onRemove: (removeIndex: number) => void;
  index: number;
  onDuplicateData: (duplicateIndex: number) => void;
  error?: boolean;
};

export const TableRow = ({
  data,
  onRemove,
  index,
  onDuplicateData,
  error,
}: ITableRow) => {
  return (
    <tr className={`${error && `bg-red-500`}`}>
      <td className="px-6 py-4 whitespace-nowrap text-center">{index}</td>
      <td className={`px-6 py-4 whitespace-nowrap`}>
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src={data.profileImage}
              alt=""
            />
          </div>
          <div className="ml-4 text-left">
            <div className="text-sm font-medium text-gray-900">{data.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <OutlineButton
          onClick={() => onDuplicateData(index)}
          title="Duplicate"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center">
        <OutlineButton onClick={() => onRemove(index)} title="Remove" />
      </td>
    </tr>
  );
};
