import { useLayoutEffect, useState, type FC, type ReactNode } from "react";
import { ThemeModeEnum } from "../models/theme-model";
import { useAppSelector } from "../redux/_hooks";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { menuValues } from "../utils/values/menu-values";
import { Link, NavLink } from "react-router";
import { changeTheme } from "../utils/functions/theme-functions";
import { paths } from "../paths";

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useAppSelector((x) => x.theme);
  const [logo, setLogo] = useState<string>();
  useLayoutEffect(() => {
    setLogo(
      theme.themeMode === ThemeModeEnum.DARK
        ? "/images/logoDark.svg"
        : "/images/logoLight.svg"
    );
  }, [theme.themeMode]);
  return (
    <div className="p-2">
      <div className="flex h-[54px] w-full gap-2">
        <div className="w-full border-solid border-1 rounded-lg flex items-center justify-between p-2 dark:bg-back-dark dark:border-border-dark">
          <div className="flex gap-3 items-center">
            <Link to={paths.home} className="block">
              <img src={logo} />
            </Link>
            <div className="flex gap-3 m-2">
              {menuValues.map((item, _i) => {
                return item.children?.length ? (
                  <Menu as="div" className="relative inline-block">
                    <MenuButton
                      style={{ border: "none", outline: "none" }}
                      className="cursor-pointer inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold dark:text-text-primary-dark"
                    >
                      {item.title}
                      <ChevronDownIcon className="size-5 dark:dark:text-text-primary-dark" />
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute left-0 z-10 mt-2 w-56 top-9 rounded-md dark:bg-back-dark outline-1 -outline-offset-1 outline-border-dark transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      {item.children.map((subItem, _j) => {
                        return (
                          <div className="py-1">
                            <MenuItem>
                              <NavLink
                                to={subItem.url}
                                className="block px-4 py-2 text-sm dark:text-text-primary-dark hover:dark:text-text-secondary-dark"
                              >
                                {subItem.title}
                              </NavLink>
                            </MenuItem>
                          </div>
                        );
                      })}
                    </MenuItems>
                  </Menu>
                ) : (
                  <NavLink
                    to={item.url}
                    className="block px-4 py-2 font-semibold text-sm dark:text-text-primary-dark hover:dark:text-text-secondary-dark"
                  >
                    {item.title}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div
            className="flex items-center justify-center w-[30px] h-[30px] cursor-pointer border-1 rounded-2xl  dark:border-text-primary-dark"
            onClick={() => {
              changeTheme(
                theme.themeMode === ThemeModeEnum.DARK
                  ? ThemeModeEnum.LIGHT
                  : ThemeModeEnum.DARK
              );
            }}
          >
            {theme.themeMode === ThemeModeEnum.DARK ? (
              <SunIcon className="size-5 dark:dark:text-text-primary-dark" />
            ) : (
              <MoonIcon className="size-5 dark:dark:text-text-primary-dark" />
            )}
          </div>
        </div>
        <div className="min-w-[400px] max-w-[400px] text-sm justify-center border-solid border-1 rounded-lg text-main dark:bg-back-dark dark:border-border-dark flex items-center gap-2 p-2 box-border">
          <div className="text-text-primary-dark font-medium">
            Color Definition
          </div>
          <div className="w-[20px] h-[20px] rounded-4xl dark:bg-primary-blue-dark ml-2"></div>
          <div className="text-text-primary-dark">Normal</div>
          <div className="w-[20px] h-[20px] rounded-4xl dark:bg-primary-yellow-dark ml-2"></div>
          <div className="text-text-primary-dark">Medium</div>
          <div className="w-[20px] h-[20px] rounded-4xl dark:bg-primary-red-dark ml-2"></div>
          <div className="text-text-primary-dark">High</div>
        </div>
      </div>
      {children}
    </div>
  );
};
