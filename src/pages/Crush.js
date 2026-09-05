
import { useMediaQuery } from "react-responsive";
import Embryo from "../img/Embryo.png"
// import PunkistLogo from "../img/Punkist_Graphic.png"
import CrushPhoto from "../img/Crush_Cover_2.jpg"
import Footer from "../components/Footer"
import WunderMascot from "../img/Wunder_Mascots.png"

export default function Crush() {
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
             backgroundColor: 'white',   
            alignItems: "center",
            justifyContent: "flex-start"
        }}
    ><div style={{height: "50px",}}></div>
<img src={Embryo} style={{width: "350px"}}/>
<div style={{paddingBottom: "200px"}}></div>
<div style={{color: "black", padding: "5px"}}><strong>Please view from a mobile device.</strong></div></div>
    )
} 

function Mobile(){
    return(<div style={{width: "100vw"}}><div className='column' style={{width: "100vw", alignItems: "center",   backgroundColor: 'white'}}>
         <div className='column' style={{width: "100vw", justifyContent: "center", alignItems: "center"}}><a href="https://ffm.to/crush-album" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={CrushPhoto} style={{width: "100vw"}}/></a>
    <div style={{padding:'15px'}}></div> 
        <a href="https://ffm.to/crush-album" target="_blank"><button className="share-button" style={{width: "115px", height: "40px"}}><strong>Share</strong></button></a> </div>
    <div style={{padding:'15px'}}></div>
        <div>
            <div className="row" style={{padding: "15px 0 10px 10px"}}></div>
    <iframe 
  width="390" 
  height="208" 
  src="https://www.youtube.com/embed/L3DBdXCATnU?autoplay=1&mute=1" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
   </div>
   <div style={{padding:'15px'}}></div>
   <div>
            <div className="row" style={{padding: "15px 0 10px 10px"}}></div>
    <iframe 
  width="390"
  height="208" 
  src="https://www.youtube.com/embed/9rY_lKq7BOk?autoplay=0&mute=1" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
<div style={{padding:"35px"}}></div>
   </div>
    <img src={WunderMascot} style={{width: "425px"}}/>
       
        </div><Footer/></div>
        
    )
}
