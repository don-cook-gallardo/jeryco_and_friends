import { useMediaQuery } from "react-responsive";
import TrackArt2 from "../img/En_Tu_Alma.jpg"
import TrackArt1 from "../img/Baby_In_The_Morning.jpg"
import TrackArt3 from "../img/Like_A_Weirdo_Track.jpg"
import PopkinkLogo from "../img/popkink_and_friends.png"


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
            backgroundColor: "#0ec257",   
            alignItems: "center",
            justifyContent: "flex-start"
        }}
    >
<div style={{padding:'25px'}}></div>
{/* <img src={PopkinkLogo} style={{width: "200px"}}/>
    <div style={{padding:'25px'}}></div> */}
    <a href="https://ffm.to/like-a-weirdo" target="_blank"><img src={TrackArt3} style={{width: "500px"}}/></a>
    <div style={{padding:'10px'}}></div> 
        <a href="https://ffm.to/like-a-weirdo" target="_blank"><button class="button button1" style={{width: "115px", height: "40px"}}>Share</button></a>
            <div style={{padding:'25px'}}></div> 
     <a href="https://ffm.to/en-tu-alma" target="_blank"><img src={TrackArt2} style={{width: "500px"}}/></a> 
        <div style={{padding:'10px'}}></div> 
        <a href="https://ffm.to/en-tu-alma" target="_blank"><button class="button button1" style={{width: "115px", height: "40px"}}>Share</button></a>
            <div style={{padding:'25px'}}></div>
    <a href="https://ffm.to/baby-in-the-morning" target="_blank"><img src={TrackArt1} style={{width: "500px"}}/></a>
    <div style={{padding:'10px'}}></div> 
        <a href="https://ffm.to/baby-in-the-morning" target="_blank"><button class="button button1" style={{width: "115px", height: "40px"}}>Share</button></a>
            <div style={{padding:'25px'}}></div>
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
            backgroundColor: "#0ec257",
            alignItems: "center",
            justifyContent: "flex-start"
            
        }}
        
    >
        {/* <div style={{padding:'25px'}}></div> <img src={PopkinkLogo} style={{width: "150px"}}/> */}
    <div style={{padding:'25px'}}></div> 
    <a href="https://ffm.to/like-a-weirdo" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={TrackArt3} style={{width: "95%"}}/></a>
    <div style={{padding:'5px'}}></div> 
        <a href="https://ffm.to/like-a-weirdo" target="_blank"><button class="button button1" style={{width: "115px", height: "40px"}}>Share</button></a> 
    <div style={{padding:'15px'}}></div> 
    <a href="https://ffm.to/en-tu-alma" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={TrackArt2} style={{width: "95%"}}/></a>
    <div style={{padding:'5px'}}></div> 
        <a href="https://ffm.to/en-tu-alma" target="_blank"><button class="button button1" style={{width: "115px", height: "40px"}}>Share</button></a> 
    <div style={{padding:'15px'}}></div> 
    <a href="https://ffm.to/baby-in-the-morning" target="_blank" className='row' style={{width: "100vw", justifyContent: "center"}}><img src={TrackArt1} style={{width: "95%"}}/></a> 
     <div style={{padding:'5px'}}></div> 
    <a href="https://ffm.to/baby-in-the-morning" target="_blank"><button class="button button1" style={{width: "115px", height: "40px"}}>Share</button></a>
     <div style={{padding:'50px'}}></div> 
    </div>
    
    )
}