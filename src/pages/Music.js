import MailchimpForm from "../components/MailchimpForm"
import { useMediaQuery } from "react-responsive";
import SaiyanKenny from "../img/Saiyan_Kenny.png"
import EnTuAlma from "../img/En_Tu_Alma.jpg"
import LikeAWeirdo from "../img/Like_A_Weirdo_Track_Art.jpg"
import Superhuman from "../img/Superhuman_Track_Art.jpg"
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
    return(
<div className='column' style={{alignItems: "center",  backgroundColor: '#5bbc1bff' }}>
     <a href="https://ffm.to/super-human" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={Superhuman} style={{width: "100vw"}}/></a>
    <div style={{padding:'15px'}}></div> 
        <a href="https://ffm.to/super-human" target="_blank"><button className="share-button" style={{width: "115px", height: "40px"}}><strong>Share</strong></button></a> 
    <div style={{padding:'15px'}}></div>
    <a href="https://ffm.to/en-tu-alma" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={EnTuAlma} style={{width: "100vw"}}/></a>
    <div style={{padding:'15px'}}></div> 
        <a href="https://ffm.to/en-tu-alma" target="_blank"><button className="share-button" style={{width: "115px", height: "40px"}}><strong>Share</strong></button></a> 
    <div style={{padding:'15px'}}></div> 
    <a href="https://ffm.to/like-a-weirdo" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={LikeAWeirdo} style={{width: "100vw"}}/></a>
    <div style={{padding:'15px'}}></div> 
        <a href="https://ffm.to/like-a-weirdo" target="_blank"><button className="share-button" style={{width: "115px", height: "40px"}}><strong>Share</strong></button></a> 
         <MailchimpForm/>
        <Footer/>
    </div>
    )
}
