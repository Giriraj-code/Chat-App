import { useState, useEffect } from "react";
function App() {
  const [message, setMessage] = useState();

  // useEffect(() =>{
  //   fetch("http://localhost:5000/test") // fetching data from the server endpoint
  //   .then((response) => response.text()) // converting the response to text
  //   .then((data) => { // setting the fetched data to the state variable
  //     setMessage(data); // updating the state variable with the fetched data
  //   })
  // },[]); // empty dependency array means this effect will run only once when the component mounts

  const registerUser = () => {
    fetch("http://localhost:5000/auth/register", {
      method: "POST", // specifying the HTTP method as POST
      headers: {
        "Content-Type": "application/json", // specifying the content type as JSON
      },
      body: JSON.stringify({
        username: "Giriraj", // sending the username in the request body
      }),
    })
      .then((response) => response.json()) // converting the response to JSON
      .then((data) => {
        console.log(data); // logging the response data to the console
        setMessage(data.message); // updating the state variable with the message from the response
      });
  }; // empty dependency array means this effect will run only once when the component mounts

  return (
    <>
      <button onClick={registerUser}>Register</button>
      <h1>{message}</h1>
    </>
  );
}

export default App;
