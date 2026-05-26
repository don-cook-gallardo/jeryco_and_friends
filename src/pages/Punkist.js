
import { useMediaQuery } from "react-responsive";
import SaiyanKenny from "../img/Saiyan_Kenny.png"
import PunkistLogo from "../img/Punkist_Graphic.png"
import Footer from "../components/Footer"
import WunderMascot from "../img/Wunder_Mascots.png"

export default function Punkist() {
    return(<div
        style={{
            overflowX: "hidden",
        }}
    >
        {useMediaQuery({ maxWidth: 767 }) ? (
            <Mobile />
        ) : (
            <Desktop/>
        )}
    </div>)
}

function Desktop(){
    return(
        <div
        className='column'
        style={{
            margin: "0 auto",
            minHeight: "100vh",
            width: "100vw",
            minWidth: "100vw",
            maxWidth: "3840px",
             backgroundColor: '#ff8022',   
            alignItems: "center",
            justifyContent: "flex-start"
        }}
    ><div style={{height: "50px",}}></div>
<img src={SaiyanKenny} style={{width: "350px"}}/>
<div style={{color: "white", padding: "5px"}}><strong>Please view from a mobile device.</strong></div></div>
    )
} 

function Mobile(){
    return(<div style={{width: "100vw"}}><div className='column' style={{height: "100vh", width: "100vw", justifyContent: "space-between",alignItems: "center",   backgroundColor: 'white'}}>
        <div>
            <div className="row" style={{padding: "15px 0 10px 10px"}}></div>
    <iframe 
  width="356" 
  height="200" 
  src="https://www.youtube.com/embed/XrSvTGCdROQ?autoplay=1&mute=1" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
<div style={{padding:"15px"}}></div>
   </div>
    <img src={WunderMascot} style={{width: "425px"}}/>
       
        </div><Footer/></div>
        
    )
}
