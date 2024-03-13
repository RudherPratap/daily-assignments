import React from "react";

const userInfo = ({user}) => {
  return (
    <div className="user-info">
      <h2>User Info</h2>
      <p>Name: {user.Name}</p>
      <p>D.O.B: {user.DateOfBirth}</p>
      <p>Age: {user.Age}</p>
      <p>E-mail: {user.Email}</p>
      <p>Contact No.: {user.ContactNo}</p>
      <p>Address: {user.Address}</p>
      <p>Country: {user.Country}</p>
    </div>
  );
};

export default userInfo;