
import { useMediaQuery } from "react-responsive";
import SaiyanKenny from "../img/Saiyan_Kenny.png"
import ComingSoon from "../img/Coming_Soon.png"
import Footer from "../components/Footer"
import WunderMascot from "../img/Wunder_Mascots.png"

export default function Prints() {
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
   
    return(<div style={{width: "100vw"}}><div className='column' style={{height: "100vh", width: "100vw", justifyContent: "space-between",alignItems: "center",   backgroundColor: '#5bbc1bff'}}>
<div><div style={{padding: "50px"}}></div>
    <img src={ComingSoon} style={{width: "300px"}}/>
   </div>
    <img src={WunderMascot} style={{width: "425px"}}/>
       
        </div><Footer/></div>
        
    )
}
