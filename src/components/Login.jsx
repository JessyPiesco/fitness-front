import React from "react";


const Login = () => {

    return (
        <div className="login">
            <h2>Log in</h2>
            <form>
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