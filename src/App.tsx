import { BrowserRouter, Route, Routes } from "react-router";
import { paths } from "./paths";

import { lazy, Suspense, useLayoutEffect } from "react";
import { getLocalStorage } from "./utils/functions/local-storage-functions";
import { localStorageKeys } from "./utils/values/local-storage-keys";
import { ThemeModeEnum } from "./models/theme-model";
import { defaultValues } from "./utils/values/default-values";
import { changeTheme } from "./utils/functions/theme-functions";
import { MainLayout } from "./layouts/main-layout";

const HomePage = lazy(() => import("./pages/home"));
const GitStarPage = lazy(() => import("./pages/supports/git-star"));
const DonationPage = lazy(() => import("./pages/supports/donation"));
const ThresholdsPage = lazy(() => import("./pages/settings/thresholds"));
const HistoryPage = lazy(() => import("./pages/settings/history"));

function App() {
  useLayoutEffect(() => {
    let theme = getLocalStorage(localStorageKeys.theme);
    if (
      theme.trim() !== "" &&
      (theme === ThemeModeEnum.DARK || theme === ThemeModeEnum.LIGHT)
    ) {
      changeTheme(theme as ThemeModeEnum);
    } else {
      changeTheme(defaultValues.themeMode);
    }
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.settings.history} element={<HistoryPage />} />
            <Route
              path={paths.settings.thresholds}
              element={<ThresholdsPage />}
            />
            <Route path={paths.supports.donation} element={<DonationPage />} />
            <Route path={paths.supports.gitStar} element={<GitStarPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
