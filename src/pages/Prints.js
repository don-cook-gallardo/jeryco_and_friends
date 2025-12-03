
import { useMediaQuery } from "react-responsive";
import SaiyanKenny from "../img/Saiyan_Kenny.png"
import ComingSoon from "../img/Coming_Soon.png"
import Footer from "../components/Footer"
import FooterAlt from "../components/Footer"

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
       <div>
        <div
        className='column'
        style={{
            margin: "0 auto",
            minHeight: "85vh",
            width: "100vw",
            minWidth: "100vw",
            maxWidth: "3840px",
            backgroundColor: "#212121",   
            alignItems: "center",
            justifyContent: "center"
        }}
    >
<img src={SaiyanKenny} style={{width: "350px"}}/>
<div style={{color: "white", padding: "5px"}}>Please view from mobile device.</div>
        
    </div> <Footer/></div>
    )
} 

function Mobile(){
   
    return(<div style={{width: "100vw"}}><div className='column' style={{height: "100vh", width: "100vw", justifyContent: "space-between",alignItems: "center",   backgroundColor: '#78f726',}}>
<div><div style={{padding: "100px"}}></div>
    <img src={ComingSoon} style={{width: "250px"}}/>
    <div style={{height: "300px"}}></div></div>
       
        </div><Footer/></div>
        
    )
}
