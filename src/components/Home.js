import { useMediaQuery } from "react-responsive";
import TrackArt from "../img/TrackArt.jpg"
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
            backgroundColor: "#ffe000",   
            alignItems: "center",
            justifyContent: "flex-start"
        }}
    >
<div style={{padding:'25px'}}></div>
<img src={PopkinkLogo} style={{width: "200px"}}/>
    <div style={{padding:'25px'}}></div> 
     <a href="https://ffm.to/baby-in-the-morning" target="_blank"><img src={TrackArt} style={{width: "500px"}}/></a> 

            <div style={{padding:'50px'}}></div>
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
            backgroundColor: "#ffe000",
            alignItems: "center",
            justifyContent: "flex-start"
            
        }}
        
    >  <div style={{padding:'25px'}}></div> <img src={PopkinkLogo} style={{width: "150px"}}/>
    <div style={{padding:'10px'}}></div> 
    <a href="https://ffm.to/baby-in-the-morning" target="_blank"><img src={TrackArt} padding="25px" style={{width: "300px"}}/></a> 
    </div>
    )
}