import { useMediaQuery } from "react-responsive";
import Flyer from "../img/Flyer.jpg"

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
            backgroundColor: "#060606",   
            alignItems: "center",
            justifyContent: "center"
        }}
    >

     <div style={{padding:'50px'}}></div>
     <iframe
            width="888" height="500"
  src='https://www.youtube.com/watch?v=eYcykKkMwdw'
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowfullscreen
  title='video'
/>
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
            backgroundColor: "#060606",
            alignItems: "center",
            justifyContent: "center"
            
        }}
    >    <div className='column' style={{width: "100%", alignItems: "center"}}>
                 <iframe
            width="400" height="224" 
  src='https://www.youtube.com/watch?v=eYcykKkMwdw'
  frameborder='0'
  allow='autoplay; encrypted-media'
  allowfullscreen
  title='video'
/> </div>            
    </div>
    )
}