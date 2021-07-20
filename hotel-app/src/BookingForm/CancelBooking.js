import React from 'react';
import { useHistory } from 'react-router';


const CancelBooking = (props) => {
    const itemId = props.id
    const history = useHistory();
    const CancelingBooking = async (e) => {
        e.preventDefault();
        console.log(itemId);
        try {
            const res = await fetch('/Booking_Cancel', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Credential: "include"
                },
                body: JSON.stringify({ itemId }),
            })
            const data = await res.json();
            if (res.status == 400 || !data) {
                console.log('Server is facing some trouble plz try after some time ! ')
            } else {
                alert("your Booking is going to be cancel ");
                window.location.reload();
                history.push('/your-booking.hotel_@plaza=booking')
            }
        } catch (err) {
            history.push('/error_');
        }

    }
    return (
        <a className="btn btn-success my-2 form-control" onClick={CancelingBooking}>Cancel</a>
    )
}
export default CancelBooking;