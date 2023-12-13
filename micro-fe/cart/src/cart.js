import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:4000";

export const jwt = new BehaviorSubject(null);

export const login = (username, password) =>
    fetch(`${API_SERVER}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
        .then((res) => res.json())
        .then((data) => {
            jwt.next(data.access_token);
            return data.access_token
        });


// jwt.subscribe((token) => console.log(token));
// jwt.next(newValue)


export function useLoggedIn() {
    const [loggedIn, setLoggedIn] = useState(!!jwt.value);

    useEffect(() => {
        setLoggedIn(!!jwt.value);
        return jwt.subscribe((c) => {
            setLoggedIn(!!jwt.value);
        });
    }, []);

    return loggedIn;
}