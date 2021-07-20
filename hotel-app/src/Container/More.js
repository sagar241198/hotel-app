import { NavLink } from 'react-router-dom';
// import Info from '../MoreOption/Info'
// import Photo from '../MoreOption/Photo'
// import Review from '../MoreOption/Reviews'
import { useState } from 'react';
import Options from '../MoreOption/Options';


const More = (props) => {

    const [Data, setData] = useState("info");

    function handling(str) {
        // alert(str);
        setData(str);
    }
    if (props.value === true) {
        return (

            <div className="More  ">
                <nav class="navbar navbar-expand-sm  navbar-light bg-light">
                    <div className="container">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item active Active">
                                    <a class=" btn nav-link  " onClick={() => { handling("info") }} > Info </a>
                                </li>
                                <li class="nav-item Active">
                                    <a class="btn nav-link  " onClick={() => { handling("photos") }} > Photos </a>
                                </li>
                                <li class="nav-item Active ">
                                    <a class="btn nav-link  " onClick={() => { handling("reviews") }} > Reviews </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr />
                <Options value={Data} />
            </div>
        )
    } else {
        return (
            <div ></div>
        )
    }
}
export default More;