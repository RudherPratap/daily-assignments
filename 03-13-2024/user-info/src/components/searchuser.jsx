import React, {useState} from "react";

const searchUser = ({onSearch}) => {

  const[id, setId] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(id);
  };

  return (
    <form className="container" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Enter User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default searchUser;