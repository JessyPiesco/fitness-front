import React, { useState } from "react";
import { loginUser } from "../apiFunctions";


const Login = (props) => {
    const [userName, setUserName]= useState("")


    async function handleSubmit(e) {
        try {
            e.preventDefault();
            const username = e.target[0].value;
            const password = e.target[1].value;
            const token = await loginUser(username, password)

            localStorage.removeItem("token");
            localStorage.setItem("token", token);
            setUserName(userName)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="login">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <button type="submit">
                    Login        
                </button>
            </form>
        </div>
    )

}

export default Login