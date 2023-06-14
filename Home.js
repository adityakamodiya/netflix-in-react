import axios from "axios"
import Row from "./Row"
import "./netflix.css"
import urls from "./Endpoints"
import Front from "./Front"
import Banner from "./Banner"
function Home()
{
    //  let random = Math.floor(Math.random()*20)
    //  console.log(random)
    return(
        <>
        <Banner></Banner>
       < Front heading = "random image"/>
        <Row  heading = "netflix original" link = {urls.netflixOriginals}/>
        <Row  heading = "trendingNow" link = {urls.trendingNow} />
        <Row  heading = "topRated"   link= {urls.topRated}/>
        <Row  heading = "action movies" link={urls.actionMovies}/>
        <Row  heading = "comadymovies" link={urls.comedyMovies}/>
        <Row  heading = "horror movies"link={urls.horrorMovies}/>
        <Row  heading = "romantic movies"link={urls.romanticMovies}/>
        <Row  heading = "documantories"link={urls.documentaries}/>

        </>
     )
}
export default  Home 