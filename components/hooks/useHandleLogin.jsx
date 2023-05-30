import { useState } from "react";
import axios from "axios";

// Custom hook to handle login and returns state and function
// function is to handle the state of isLoggedIn.
export function useHandleLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async (name, password) => {
        try {
            const response = await axios.post("http://localhost:3000/api/login/", {
                params: {
                    username: name,
                    password: password
                }
            });

            setIsLoggedIn(response.status === 200);
        } catch (error) {
            console.warn(error);
        }
    };

    return { isLoggedIn, handleLogin };
}
