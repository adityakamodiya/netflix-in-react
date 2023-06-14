import img from "../netflix/Images/netflix-logo.png"
import emoji from '../netflix/Images/emoji.jpeg'
import { useState } from "react"

function Banner() {
    const [headerdark, setheaderdark] = useState(false)
    window.onscroll = () => {
        if (window.scrollY > 150) {
            setheaderdark(true)
        }
        else {
            setheaderdark(false)
        }
    }
    return (
        <div className={headerdark ? "netflix-header dark" : "netflix-header"}>
            <div id="left">
                <img src={img} alt="Image"></img>
            </div>
            <div className="right">
                <img src={emoji} alt="Image"></img>
            </div>
        </div>
    )
}
export default Banner 