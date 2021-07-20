import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
const LogOut = () => {
    const history = useHistory()

    useEffect(() => {
        fetch('/logout', {
          method: "POST",
          headers: {
            Accept:"application/json",
            "Content-Type": "application/json",
            Credential:"include"
          }
        }).then((data) => {
          if (data) {
            localStorage. removeItem('userLogin') 
            history.push('/user_Login')
            window. location. reload()
          } else {
            alert('something has wrong');
          }
        })
      })
    return (
        <h1></h1>
    )
}
export default LogOut;