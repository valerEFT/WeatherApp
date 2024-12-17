import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispath, RootState } from "../app/store";
import { disableDarkMode, enableDarkMode } from "../features/slices/theme";

const DarkMode: React.FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  return (
    <>
      <button
        onClick={() =>
          dispatch(isDarkMode ? disableDarkMode() : enableDarkMode())
        }
        className="header__theme-button"
      >
        {isDarkMode ? (
          <img
            className="header__theme"
            src="/images/moon-icon.png"
            alt="moon"
          />
        ) : (
          <img className="header__theme" src="/images/sun-icon.png" alt="sun" />
        )}
      </button>
    </>
  );
};

export default DarkMode;
