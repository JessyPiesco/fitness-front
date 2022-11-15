import React from "react";


const Login = () => {

    return (
        <div className="login">
            <h2>Log in</h2>
            <form>
                <div>
                    <input type="text">Username</input>
                </div>
                <div>
                    <input type="password">Password</input>
                </div>
                <button type="submit">
                    Login        
                </button>
            </form>
        </div>
    )
    
}

export default Login