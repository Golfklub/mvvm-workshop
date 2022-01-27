import { HomeIcon, VideoCameraIcon, WifiIcon } from "@heroicons/react/outline";

export const menu = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "VPN",
    icon: <WifiIcon />,
    link: "vpn",
  },
  {
    title: "Conference",
    icon: <VideoCameraIcon />,
    link: "conference",
  },
];
