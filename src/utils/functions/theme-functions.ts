import { ThemeModeEnum } from "../../models/theme-model";
import { store } from "../../redux/_store";
import { setTheme } from "../../redux/theme-slice";
import { localStorageKeys } from "../values/local-storage-keys";
import { setLocalStorage } from "./local-storage-functions";
import { select } from "d3";

export const changeTheme = (themeMode: ThemeModeEnum): void => {
  setLocalStorage(localStorageKeys.theme, themeMode);
  store.dispatch(setTheme(themeMode));
  select("body").attr("class", themeMode);
  select("body").style(
    "background",
    themeMode === ThemeModeEnum.DARK ? "#000" : "#fff"
  );
};
