import { ImageApi } from '../Api/ImageApi'
import { ProgressBar } from 'react-bootstrap'
import Reviews from '../Reviews/Reviews'

const Options = (props) => {

    if (props.value == "info") {
        return (
            <>
                <div className="container">
                    <h4 className="text-center">Info</h4>
                    <p className="text-center">The Taj Mahal, originally the Rauza-i-munawwara is an ivory-white
                        marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.
                        It was commissioned in 1632 by the Mughal emperor
                        Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal;
                        it also houses the tomb of Shah Jahan himself.</p>
                </div>
            </>
        )
    } else if (props.value == "photos") {
        return (
            <>
                <div className="container">
                    <h4 className="text-center">Gallery</h4>
                    <div className=" d-flex flex-wrap p-2 my-4">
                        {
                            ImageApi.map((room, index) => {
                                return (
                                    // <NavLink className="text-dark" to={room.RoomeName}>
                                    <div class="card p-1 Cardimg" style={{ width: "13rem" }}>
                                        <img class="card-img-top" src={room} alt="Card image cap" />
                                    </div>
                                    // </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
        // if(props.value === "reviews")
    } else {
        return (
            <>
                <div className="container">
                    <h4 className="text-center">Reviews</h4>
                    <div className="d-flex flex-wrap">
                        <div class="card" style={{ width: "20rem" }}>
                            <div class="card-body">
                                <h2 className="bg-warning text-white text-center" style={{ width: "70px", borderRadius: "20px" }}>7.4</h2>
                                <p className=" my-2" style={{ fontSize: "12px" }}>7.3
                                    <strong> trivago Rating</strong> Index based on 867 reviews from:
                                    holidayiq(7.6/10)</p>
                            </div>
                        </div>

                        <div class="card" style={{ width: "45rem" }}>
                            <div class="card-body">
                                <label>Location(8.0/10.0)</label>
                                <ProgressBar className="mb-2" variant="danger" now={80} />
                                <label>Rooms(7.5/10.0)</label>
                                <ProgressBar className="mb-2" variant="success" now={70} />
                                <label>Services(8.9/10.0)</label>
                                <ProgressBar className="mb-2" variant="info" now={90} />
                                <label>Cleanless(8/10.0)</label>
                                <ProgressBar className="mb-2" variant="warning" now={80} />
                                <label>Value of Money(8.5/10.0)</label>
                                <ProgressBar className="mb-2" variant="primary" now={75} />

                            </div>
                        </div>
                    </div>

                    <Reviews />
                </div>
            </>
        )
    }

}
export default Options;