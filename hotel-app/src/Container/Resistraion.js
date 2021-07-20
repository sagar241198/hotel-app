import React, { useState } from 'react';
import { axios } from 'axios';
import { useHistory } from 'react-router-dom';


const Resistration = () => {

    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const [errname, seterrname] = useState("");
    const [erremail, seterremail] = useState("");
    const [errpassword, seterrpassword] = useState("");
    const history = useHistory();
    let name;
    let value;
    function handle(e) {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }

    function isValidate() {
        const { name, email, password } = user;
        if (name == "" || name.length < 3) {
            seterrname("name must caontain minimun 3 charecter*");
            return true;
        } else if (email == "" || !email.endsWith("@gmail.com")) {
            seterrname("");
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

        try {

            const istrue = isValidate();
            if (istrue) {
                history.push('/User-signup')
            } else {
                const { name, email, password } = user;
                const res = await fetch("/userResister", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, password })
                });
                const data = await res.json();
                if (res.status === 400 || !data) {
                    // console.log(res);
                    alert("user already exist")
                    history.push('/User-signup')
                } else if (res.status === 401 || !data) {
                    // console.log(res);
                    alert("email or password is inccorect")
                    history.push('/User-signup')
                }
                else {
                    alert('resistration successfull');
                    history.push('/user_Login/Account[0]')
                }

            }

        } catch (err) {
            alert("server is down plz try after some time ");
            history.push('/error_')
        }
    }

    return (
        <>
            <div className="container bg-dark text-white text-center my-4"><h5>Welcome to The PLAZA </h5></div>
            <div className="container w-50">
                <h5 className="text-success">SIGNUP</h5>
                <form method="POST">

                    <div className="form-group">
                        <label for="name">Username</label>
                        <input type="text" className="form-control" id="name"
                            name="name"
                            value={user.name}
                            onChange={handle}
                            placeholder="Enter Name" />
                        <small id="email" className="form-text text-danger">{errname}</small>
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="email"
                            name="email"
                            value={user.email}
                            onChange={handle}
                            placeholder="Enter email" />
                        <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small><br />
                        <small id="email" className="form-text text-danger">{erremail}</small>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password"
                            name="password"
                            value={user.password}
                            onChange={handle}
                            placeholder="Password" />
                        <small id="email" className="form-text text-danger">{errpassword}</small>
                    </div>
                    <div className="form-group my-4">
                        <button type="submit" className="btn btn-primary form-control" onClick={handleInput}>Resister</button>
                    </div>
                    <div className="form-group my-2">
                        <a href="/user_Login" className="btn btn-outline-success form-control">Login</a>
                    </div>

                </form>

            </div>
        </>
    )
}
export default Resistration;