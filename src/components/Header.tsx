import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispath } from "../app/store";
import { setInputValue } from "../features/slices/InputSlice";
import DarkMode from "./DarkMode";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeout: any;

    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  }, 500);

  return (
    <header className="header">
      <h1 className="header_logo">Weather</h1>
      <div className="header__input-wrapper">
        <input
          className="header__input"
          type="text"
          placeholder="Search your location"
          onChange={handleInput}
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
