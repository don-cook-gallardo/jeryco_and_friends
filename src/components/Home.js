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
     <iframe src="https://player.vimeo.com/video/1000817700?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="888" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Popkink ® 2024 &quot;It's TV Static&quot;"></iframe>
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
                 <iframe src="https://player.vimeo.com/video/1000817700?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="400" height="224" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Popkink ® 2024 &quot;It's TV Static&quot;"></iframe>
                </div>
               
    </div>
    )
}