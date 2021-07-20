import React, { useEffect, useState } from 'react'
import WriteReviews from './WriteReviews'

const Reviews = () => {
    const [isTrue, setTrue] = useState(false);
    const [Data, setData] = useState([])
   
    // console.log(Data);

    useEffect(() => {
        getData();
    }, [])

    // https://tourist-places.herokuapp.com/

    const getData = async () => {
        try {
            const res = await fetch('/get_reviews', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Credential: "include"
                }
            })
            const data = await res.json();
            if (res.status === 400 || !data) {
                setData([]);
            } else if (res.status === 200) {
                setData(data);
            }
        } catch (err) {
            console.log(err);
        }
    }
   
    function ReviewForm() {
        setTrue(!isTrue);
    }
    return (
        <>
            <h3 className="text-center my-1"> Reviews </h3>
            <hr />
            <div className=" my-2 shadow p-1  ">

                <div className="d-flex flex-wrap">
                    {
                        Data.map((data, index) => {
                            return (
                                <div className="card p-1 " style={{ width: "13rem" }}>
                                    <div className="card-body">
                                        <i className="fas fa-2x fa-user-tie"></i>
                                        <h5 className="card-title text-primary">{data.name}</h5>
                                        <p className="card-text">{data.review}</p>
                                    </div>
                                </div>
                            )
                        })
                    }



                   

                    

                </div>
                <div className="text-center">
                    <a className="btn " onClick={ReviewForm}><span>Reviews</span><br /><i className="far fa-2x fa-arrow-alt-circle-down"></i></a>
                </div>
                <div className="text-center">
                    <WriteReviews value={isTrue} />
                </div>
            </div>




        </>


    )
}
export default Reviews;