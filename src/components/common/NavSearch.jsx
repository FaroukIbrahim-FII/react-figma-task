import React from "react";

function NavSearch() {
  const doSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form id="form" onSubmit={doSubmit}>
      <input type="text" placeholder="Search" id="searchbar" />
      <select name="select" id="select" placeholder="search">
        <option defaultValue="search" disabled hidden>
          search
        </option>
      </select>
      <input type="submit" id="submit" />
    </form>
  );
}

export default NavSearch;
