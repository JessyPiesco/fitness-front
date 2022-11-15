import React from "react"


const Register = () => {

    return (
        <div>
            <h2>Register</h2>
            <form>
                <div>
                    <input type="text">Username</input>
                </div>
                <div>
                    <input type="password">Password</input>
                </div>
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )

}

export default Register