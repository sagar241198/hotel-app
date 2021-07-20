import { useState } from "react";
import { useHistory } from 'react-router-dom'

const WriteReviews = (props) => {

    const [Data, setData] = useState({ name: "", review: "" });
    const history = useHistory();
    const [Username,setName] = useState("");
    const [Userreview,setReview] = useState("");
    let name;
    let value;
    function handleInput(e) {
        name = e.target.name;
        value = e.target.value;
        setData({ ...Data, [name]: value });
    }
    function isSet() {
        const { name, review } = Data;
        if (name === "" || name.length < 3) {
            setName("name must containe minimum 3 character*");
            return true;
        } else if (review === "" || review.length < 10) {
            setName("")
            setReview("Reviews must containe minimum 10 character*");
            return true;
        } else {
            setReview("");
            return false
        }
    }
    const WriteInput = async (e) => {
        e.preventDefault();
        const isTrue = isSet();
        if (!isTrue) {
            const { name, review } = Data;
            try {
                const res = await fetch("/reviews", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "httpOnly": true
                    },
                    body: JSON.stringify({ name, review })
                });
                const data = await res.json();
                if (res.status === 400 || !data) {
                    alert('Authorization is required ');
                    history.push('/user_Login')
                } else {
                    alert('Your Review is posted..');
                    setData({name:"",review: "" })
                    window.location.reload();

                }

            } catch (err) {
                alert("server is down plz try after some time ");
                history.push('/error_');
            }
        }
    }
    if (props.value) {
        return (
            <div className="container w-50">
                <form method="POST">
                    <div className="">
                        <div className="mb-2 ">
                            <input type="text" className="form-control bg-dark text-white" id="name"
                                name="name"
                                value={Data.name}
                                onChange={handleInput}
                                placeholder="your name " />
                                <small id="email" className="form-text text-danger">{Username}</small>
                        </div>
                        <div className="mb-1 ">
                            <textarea type="text" className="form-control bg-dark text-white" id="review"
                                name="review"
                                value={Data.review}
                                onChange={handleInput}
                                placeholder="Write your reviews here !" ></textarea>
                                <small id="email" className="form-text text-danger">{Userreview}</small>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning" onClick={WriteInput}>send</button>
                </form>
            </div>
        )
    } else {
        return (
            <h1></h1>
        )
    }
}
export default WriteReviews;