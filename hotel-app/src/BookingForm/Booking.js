import React, { useState } from 'react';
import { RoomApi } from '../Api/RoomApi';
import BookingForm from './BookingForm';

const Booking = () => {

    const [Suit, setSuit] = useState("");
    const [Bed, setBed] = useState("");
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("");
    const [Data, setData] = useState({ RoomSuit: "", Bed: "", CheckIn: "", CheckOut: "" });
    const [Boolean, setBoolean] = useState(false);

    let name;
    let value;
    function handleInput(e) {
        name = e.target.name;
        value = e.target.value;
        setData({ ...Data, [name]: value });
    }

    function vailibilty(e) {
        // setData({ suit: Suit, bed: Bed, checkIn, checkOut });
        e.preventDefault();
        
        console.log(Data);
        setBoolean(!Boolean);
    }

    return (
        <>
            <h4 className="text-warning bg-success text-center">Availiblity</h4>
            <hr />
            <div className=" d-flex flex-wrap ">
                <div className="p-2">
                    <label className="text-center" >Room Type</label>
                    <div class="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="RoomSuit">Room Suit</label>
                        </div>
                        <select className="custom-select"

                            name="RoomSuit"
                            value={Data.RoomSuit}
                            onChange={handleInput}
                            // onChange={(e) => { setSuit(e.target.value) }}
                            id="RoomSuit">
                            <option selected>Choose...</option>
                            {
                                RoomApi.map((rooms, index) => {
                                    return (
                                        <option value={rooms.RoomeName}>{rooms.RoomeName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="p-2">
                    <label className="text-center" >Beds</label>
                    <div className="input-group mb-3 ">
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="inputGroupSelect01">Beds</label>
                        </div>
                        <select class="custom-select"
                            name="Bed"
                            value={Data.Bed}
                            onChange={handleInput}
                            // onChange={(e) => { setBed(e.target.value) }}
                            id="inputGroupSelect01">
                            <option selected>Bed...</option>
                            <option value="1">One bed</option>
                            <option value="2">Two bed</option>
                            <option value="3">Three bed</option>
                            <option value="4">Four bed</option>
                        </select>
                    </div>
                </div>
                <div className="p-2">
                    <label className="text-center" >CheckIn</label>
                    <div> <input type="date" style={{ height: "37px" }}
                        name="CheckIn"
                        value={Data.CheckIn}
                        onChange={handleInput}
                    //    onChange={(e) => { setCheckIn(e.target.value) }}
                    /></div>
                </div>
                <div className="p-2">
                    <label className="text-center" >CheckOut</label>
                    <div><input type="date" style={{ height: "37px" }}
                        name="CheckOut"
                        value={Data.CheckOut}
                        onChange={handleInput}
                    // onChange={(e) => { setCheckOut(e.target.value) }}
                    /></div>
                </div>
                <div className="p-2">
                    <label className="text-center" >Check</label>
                    <div>  <button className="btn btn-secondary " onClick={vailibilty}> check</button></div>
                </div>
                <hr className="my-2" />
                <BookingForm
                    show={Boolean}
                    value={Data} />
            </div>
        </>
    )
}
export default Booking;