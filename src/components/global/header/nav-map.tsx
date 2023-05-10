import { ReactNode } from "react";
import CallBackIcon from "../../../../public/icons/call-back";
import ProfileIcon from "../../../../public/icons/profile";

interface INavTab {
  children: ReactNode;
  href: string;
}

export const navMap: INavTab[][] = [
  [
    {
      children: <>BuddyCode</>,
      href: "/",
    },
    {
      children: <>Заявки</>,
      href: "/requests",
    },
    {
      children: <>Отримати верифікацію</>,
      href: "/verification",
    },
  ],
  [
    {
      children: (
        <>
          Зворотній зв’язок
          <CallBackIcon />
        </>
      ),
      href: "/callback",
    },
    {
      children: (
        <>
          Вхід
          <ProfileIcon />
        </>
      ),
      href: "/login",
    },
  ],
];
