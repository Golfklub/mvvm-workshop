import { useLocation } from "react-router-dom";

export const useSideNav = () => {
  const { pathname } = useLocation();
  const isActiveLinkMenu = (menuPath: string) => {
    return menuPath === pathname;
  };

  return { isActiveLinkMenu };
};
