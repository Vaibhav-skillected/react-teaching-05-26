import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
import UserList from './components/UserList'

function App() {
  
  // const [loading, setLoading] = useState(true);
  // const [users, setUsers] = useState([]);
  // const isLogged = false;
  // const showMessage = true;
  // if(isLogged){
  //   return <h1>Welcome to dashboard</h1>
  // }else{
  //   return <h1>Please login to continue</h1>
  // }
  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  // useEffect(() => {

  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => {
  //       setUsers(response.data);
  //       console.log(response.data);
  //     });
  //   }, []);



  return (
    <>
    <UserList></UserList>
    {/* {isLogged ? <h1>Welcome to dashboard</h1> : <h1>Please login to continue</h1>}
      {showMessage && <h1>hello Students</h1>}

      <h1>user List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}  </p>
          <h3>username: {user.username}</h3>
          <h4>email: {user.email}</h4>
        </div>
      ))} */}
    </>
  )
}

//conditional rendering
//showing ui bsed on condition
//user logge in -> dashboard
//user not logged in -> login page
//data fetching -> loading spinner
//no data -> no data message


//api -> bridge betwee frontend and backend


export default App
