import MailchimpForm from "../components/MailchimpForm"
import { useMediaQuery } from "react-responsive";
import SaiyanKenny from "../img/Saiyan_Kenny.png"
import TrackArt2 from "../img/En_Tu_Alma.jpg"
import TrackArt3 from "../img/Like_A_Weirdo_Track_Art.jpg"
import Footer from "../components/Footer";

export default function Music() {
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
           backgroundColor: '#5bbc1bff',   
            alignItems: "center",
            justifyContent: "center"
        }}
    >
<img src={SaiyanKenny} style={{width: "350px"}}/>
<div style={{color: "white", padding: "5px"}}><strong>Please view from mobile device.</strong></div>
        
    </div>
    )
} 

function Mobile(){
   
    return(
<div className='column' style={{alignItems: "center",    backgroundColor: '#5bbc1bff' }}>
    <div style={{padding:'20px'}}></div> 
    <a href="https://ffm.to/like-a-weirdo" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={TrackArt3} style={{width: "95%", border:"1px solid white"}}/></a>
    <div style={{padding:'15px'}}></div> 
        <a href="https://ffm.to/like-a-weirdo" target="_blank"><button class="share-button" style={{width: "115px", height: "40px"}}>Share</button></a> 
    <div style={{padding:'15px'}}></div> 
    <a href="https://ffm.to/en-tu-alma" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={TrackArt2} style={{width: "95%", border:"1px solid white"}}/></a>
    <div style={{padding:'15px'}}></div> 
        <a href="https://ffm.to/en-tu-alma" target="_blank"><button class="share-button" style={{width: "115px", height: "40px"}}>Share</button></a> 
         <MailchimpForm/>
        <Footer/>
    </div>
    )
}
