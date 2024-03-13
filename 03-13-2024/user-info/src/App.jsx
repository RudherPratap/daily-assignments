import { useState } from 'react'
import UserInfo from './components/userinfo' 
import SearchUser from './components/searchuser'
import './App.css'
import './components/search.css'
import './components/userinfo.css'


const users = [
  {
    Name: "Abhay",
    Id: 1,
    DOB: "dd/mm/yyyy",
    Age: "14",
    Email: "abhayexample@gmail.com",
    ContactNo: "1234567890",
    Address: "avenue street",
  },
  {
    Name: "Abhay",
    Id: 1,
    DOB: "dd/mm/yyyy",
    Age: "14",
    Email: "abhayexample@gmail.com",
    ContactNo: "*****90212",
    Address: "avenue street",
  },
  {
    Name: "Rishu",
    Id: 2,
    DOB: "dd/mm/yyyy",
    Age: "18",
    Email: "rishuexample@gmail.com",
    ContactNo: "*****09373",
    Address: "avenue street",
  },
  {
    Name: "Jhon",
    Id: 3,
    DOB: "dd/mm/yyyy",
    Age: "24",
    Email: "jhonexample@gmail.com",
    ContactNo: "*****89388",
    Address: "avenue street",
  },{
    Name: "Joe",
    Id: 4,
    DOB: "dd/mm/yyyy",
    Age: "34",
    Email: "joeexample@gmail.com",
    ContactNo: "*****02843",
    Address: "avenue street",
  },
];

function App() {
  const [user, setUsers] = useState(null);

  const handleSearch = (id) => {
    const userId = parseInt(id);
    const userFound = users.find((user) => user.Id === userId);
    setUsers(userFound || "notFound"); 
  };

  return (
      <div className='contain'>
        <h1>User Info</h1>
        <div className='container'>
          <SearchUser onSearch={handleSearch}/>
          {user !== null && user !== "notFound" ? (
            <UserInfo user = {user}/>
          ) : null}

          {user === "notFound" ? <p>User not found! Retry.</p>:null}
        </div>
      </div>
  )
}

export default App
