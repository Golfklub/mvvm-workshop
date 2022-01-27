import { Link } from "react-router-dom";
import { IMenu } from ".";
import { cx, css } from "@emotion/css";

type ISideNavItem = { active: boolean; menu: IMenu };

export const SideNavItem = ({ active, menu }: ISideNavItem) => {
  const renderItem = () => {
    if (active) {
      return (
        <Link
          to={menu.link}
          className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          {menu.icon}
          <span className="flex-1 text-left">{menu.title}</span>
        </Link>
      );
    } else {
      return (
        <Link
          to={menu.link}
          className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          <div
            className={cx(
              css`
                svg {
                  color: rgb(156 163 175 / var(--tw-text-opacity));
                  flex-shrink: 0;
                  margin-right: 12px;
                  width: 24px;
                  height: 24px;
                  hover: {
                    color: rgb(107 114 128 / var(--tw-text-opacity));
                  }
                }
              `
            )}
          >
            {menu.icon}
          </div>
          <span className="flex-1 text-left">{menu.title}</span>
        </Link>
      );
    }
  };

  return renderItem();
};
