import React from 'react'
import {useSelector} from 'react-redux'
function Home(){
    const email=useSelector((state)=>state.email);
    const username=useSelector((state)=>state.username);
    return(
        <div>
            <h1>{username}</h1>
            <h2>{email}</h2</h2>
        </div>
    );
}
export default Home