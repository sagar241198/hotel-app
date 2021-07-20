import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({ email: "", password: "" });
    const [erremail, seterremail] = useState("");
    const [errpassword, seterrpassword] = useState("");
    const history = useHistory()
    let name;
    let value;
    function handle(e) {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    function isValidate() {
        const { email, password } = user;
        if (email == "" || !email.endsWith("@gmail.com")) {
            seterremail("plz type valiedEmail*");
            return true;
        }
        else if (password == "" || password.length < 6) {
            seterremail("")
            seterrpassword("password should be of 8 character long*");
            return true;
        } else {
            seterrpassword("");
            return false;
        }
    }

    const handleInput = async (e) => {
        e.preventDefault();
        const istrue = isValidate();
        if (istrue) {
            history.push('/user_Login')
        } else {
            const { email, password } = user;
            try {
                const res = await fetch("/userLogin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "httpOnly": true
                    },
                    body: JSON.stringify({ email, password })
                });
                const data = await res.json();
                console.log(res.status);
                if (res.status === 400 || !data) {
                    console.log(res.message)
                    alert('user Does not exist');
                    history.push('/user_Login')

                }
                else if (res.status === 500 || !data) {
                    alert('Server is down or not Rechable');
                    history.push('/user_Login')
                } else {
                    alert('SignIn successfull');
                    localStorage.setItem('userLogin', 'login');
                    history.push('/');
                    window.location.reload()
                }
            } catch (err) {
                alert("server is down plz try after some time ");
                history.push('/error_')
            }
        }
    }
    return (
        <>
            <div className="container bg-dark text-white text-center my-4"><h5>Welcome to The PLAZA </h5></div>
            <div className="container w-50">
                <h5 className="text-success">SIGNIN</h5>
                <form method="POST">
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="email"
                            name="email"
                            value={user.email}
                            onChange={handle}
                            placeholder="Enter email" />
                        <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small><br />
                        <small id="email" className="form-text text-danger">{erremail}</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password"
                            name="password"
                            value={user.password}
                            onChange={handle}
                            placeholder="Password" />
                        <small id="email" className="form-text text-danger">{errpassword}</small>
                    </div>
                    <div className="form-group my-4">
                        <button type="submit" className="btn btn-primary form-control" onClick={handleInput}>Login</button>
                    </div>
                    <div className="form-group my-2">
                        <a href="/User-signup" className="btn btn-outline-success form-control">Resister</a>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;