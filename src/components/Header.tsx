import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispath } from "../app/store";
import { setInputValue } from "../features/slices/InputSlice";
import DarkMode from "./DarkMode";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setInputValue(query));
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
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
          value={query}
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
