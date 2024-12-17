import React, { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispath, RootState } from "../app/store";
import { setInputValue } from "../features/slices/InputSlice";
import DarkMode from "./DarkMode";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const inputValue = useSelector((state: RootState) => state.inputValue.value);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <header className="header">
      <h1 className="header_logo">Weather</h1>
      <div className="header__input-wrapper">
        <input
          className="header__input"
          type="text"
          placeholder="Search your location"
          onChange={handleInput}
          value={inputValue}
        />
        <img
          className="header__input-image"
          src="/images/Vector.png"
          alt="search"
        />
        <DarkMode />
      </div>
    </header>
  );
};

export default Header;
