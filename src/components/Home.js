import { useMediaQuery } from "react-responsive";
import SaiyanKenny from "../img/Saiyan_Kenny.png"
import TrackArt2 from "../img/En_Tu_Alma.jpg"
import TrackArt3 from "../img/Like_A_Weirdo_Track.jpg"
import Logo from "../img/Jeryco_and_Friends.png"
import SaiyanKennyRoulette from "../img/Saiyan_Kenny_Roulette.png"
import MailchimpForm from "./MailchimpForm"

export default function Home() {
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
            minHeight: "100vh",
            backgroundColor: "#212121",   
            alignItems: "center",
            justifyContent: "flex-start"
        }}
    >
<div style={{padding:'25px'}}><img src={SaiyanKenny} style={{width: "350px"}}/></div>
<div style={{color: "white", paddingBottom: "35px"}}>Please view from mobile device.</div>
{/* <img src={Logo} style={{width: "350px"}}/>
    <div style={{padding:'10px'}}></div>
    <a href="https://ffm.to/like-a-weirdo" target="_blank"><img src={TrackArt3} style={{width: "500px"}}/></a>
    <div style={{padding:'10px'}}></div> 
        <a href="https://ffm.to/like-a-weirdo" target="_blank"><button class="button1" style={{width: "115px", height: "40px"}}>Share</button></a>
            <div style={{padding:'15px'}}></div> 
     <a href="https://ffm.to/en-tu-alma" target="_blank"><img src={TrackArt2} style={{width: "500px"}}/></a> 
        <div style={{padding:'10px'}}></div> 
        <a href="https://ffm.to/en-tu-alma" target="_blank"><button class="button1" style={{width: "115px", height: "40px"}}>Share</button></a>
            <div style={{padding:'25px'}}></div> 
        <img src={SaiyanKennyRoulette} style={{width: "375px"}}/>
        <div style={{padding:'25px'}}></div>  */}
    </div>
    )
} 

function Mobile(){
    return(
        <div
        className='column'
        style={{
            minHeight: "120vh",
            width: "100vw",
            backgroundColor: "#212121",
            alignItems: "center",
            justifyContent: "flex-start"
            
        }}
        
    >
    <div style={{padding:'25px'}}></div> <img src={Logo} style={{width: "350px"}}/>
    <div style={{padding:'10px'}}></div> 
    <a href="https://ffm.to/like-a-weirdo" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={TrackArt3} style={{width: "95%"}}/></a>
    <div style={{padding:'15px'}}></div> 
        <a href="https://ffm.to/like-a-weirdo" target="_blank"><button class="button1" style={{width: "115px", height: "40px"}}>Share</button></a> 
    <div style={{padding:'15px'}}></div> 
    <a href="https://ffm.to/en-tu-alma" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={TrackArt2} style={{width: "95%"}}/></a>
    <div style={{padding:'15px'}}></div> 
        <a href="https://ffm.to/en-tu-alma" target="_blank"><button class="button1" style={{width: "115px", height: "40px"}}>Share</button></a> 
        <div style={{padding:'30px'}}></div> 
        {/* <img src={SaiyanKennyRoulette} style={{width: "350px"}}/> */}
        <MailchimpForm/>
        <div style={{padding:'25px'}}></div> 
        <div style={{color: "white"}}>Jeryco and Friends © 2025</div>
         <div style={{padding:'20px'}}></div> 
    </div>
    )
}
