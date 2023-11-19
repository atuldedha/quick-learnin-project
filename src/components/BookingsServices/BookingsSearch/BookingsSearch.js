import React from "react";
import "./BookingsSearch.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const BookingsSearch = ({ searchValue, setSearchValue, handleSubmit }) => {
  return (
    <form className="bookingsSearch_container" onSubmit={handleSubmit}>
      {/* input */}
      <input
        type="text"
        placeholder="Type something to search"
        className="booksSearch_input_box"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {/* search icon */}
      <MagnifyingGlassIcon
        onClick={handleSubmit}
        className="bookingsSearch_icon"
      />
    </form>
  );
};

export default BookingsSearch;
