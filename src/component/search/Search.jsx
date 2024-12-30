import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context/context";
import './Search.css'
const Search = () => {
  const { setQuery, isError } = useGlobalContext();
  const [searchTerm, setSearchTerm] = useState("");
   
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  return (
    <section className="search-section">
      <h2>Search Your Favorite Movie</h2>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={searchTerm}
            onChange={e=> setSearchTerm(e.target.value)}
          ></input>
        </div>
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  );
};

export default Search;
