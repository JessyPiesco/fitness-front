import React from "react"
import { registerUser } from "../apiFunctions";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()

    async function handleRegister(e) {
        try {
            e.preventDefault();
            const username = e.target[0].value;
            const password = e.target[1].value;
            const token = await registerUser(username, password)

            localStorage.removeItem("token");
            localStorage.setItem("token", token);
            navigate("/login")
;        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Username</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"/>
                </div>
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )

}

export default Register