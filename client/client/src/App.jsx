
import { useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    const registerUser = () => {
        fetch("http://localhost:5000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "RamurajKumar",
                email: "Ramuraj@example.com",
                password: "12345"
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMessage(data.message);
            })
            .catch((error) => {
                console.log(error);
                setMessage("Something went wrong");
            });
    };

    return (
        <>
            <button onClick={registerUser}>Register</button>
            <h1>{message}</h1>
        </>
    );
}

export default App;
