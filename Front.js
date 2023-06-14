import { useEffect, useState } from 'react'

import axios from 'axios'
function Front(props)
{ 
    const path = "https://image.tmdb.org/t/p/original"
    const [movierow, pmovierow] = useState([])
    const[heading,setheading] = useState([])
    const [disc,setdisc] = useState([])
    let random = Math.floor(Math.random()*20) 
    useEffect(() => {
axios.get("https://api.themoviedb.org/3/discover/tv?api_key=2e80297decc2bf87170c8aa71e4fb8ed&with_networks=213")
.then((Reponse)=>{
 console.log(Reponse.data.results[random])
    pmovierow(Reponse.data.results[random])
    setheading(Reponse.data.results[random].name)
    setdisc(Reponse.data.results[random].overview)
    // console.log()
})
}, []);
    return(<>
        {/* <h1>{props.heading}</h1> */}
        <div className="front" style={{backgroundImage: "url("+path + movierow.backdrop_path + ")"}}>
            <div className='discp'>
                <h1>{heading}</h1>
                <h3>{disc}</h3>
            </div>
        </div>
        </>
    )
}
export default Front