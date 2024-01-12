import React, {forwardRef } from "react";
import { BiSearch } from "react-icons/bi";
import "./Input.scss"

export const SearchInput = forwardRef((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div id="search-input" className="w-100">
      <div className="search-container fl p-rel">
        <BiSearch size={18} className="icon fl fl-c" />
        <input
          type="search"
          value={props.value}
          required={false}
          ref={ref}
          placeholder="Search"
          className={`w-100 p-abs ${className}`}
          {...rest}
        />
      </div>
    </div>
  );
});
