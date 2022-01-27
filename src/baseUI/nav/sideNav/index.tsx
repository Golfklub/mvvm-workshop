import { ReactNode } from "react";
import { SideNavItem } from "./item";

export type IMenu = {
  title: string;
  icon: ReactNode;
  link: string;
};

type ISideNav = { menu: IMenu[] };

export const SideNav = ({ menu }: ISideNav) => {
  return (
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto h-screen sticky max-w-[256px]">
      <div className="flex items-center flex-shrink-0 px-4">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
          alt="Workflow"
        />
      </div>
      <div className="mt-5 flex-grow flex flex-col">
        <nav className="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
          {menu.map((menuEntry) => (
            <SideNavItem menu={menuEntry} active={false} />
          ))}
        </nav>
      </div>
    </div>
  );
};
