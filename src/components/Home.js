import { useMediaQuery } from "react-responsive";
import ClubFamousMusic from "../img/ClubFamousMusic.jpg"
import ThePanamaSongs from "../img/ThePanamaSongs.JPG"

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
            backgroundColor: "#b0ff4a",   
            alignItems: "center",
            justifyContent: "center"
        }}
    >
<div style={{padding:'50px'}}></div>
     <a href="https://ffm.to/the-panama-songs" target="_blank"><img src={ThePanamaSongs} style={{width: "500px"}}/></a> 

            <div style={{padding:'50px'}}></div>
     <div style={{padding:'50px'}}></div>
     <a href="https://ffm.to/club-famous-music" target="_blank"><img src={ClubFamousMusic} style={{width: "500px"}}/></a> 

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
            backgroundColor: "#b0ff4a",
            alignItems: "center",
            justifyContent: "center"
            
        }}
    > 
    <a href="https://ffm.to/the-panama-songs" target="_blank"><img src={ThePanamaSongs} style={{width: "350px"}}/></a> 

           <div style={{padding:'25px'}}></div> 
     <div className='column' style={{width: "100%", alignItems: "center"}}>
        <a href="https://ffm.to/club-famous-music" target="_blank"><img src={ClubFamousMusic} style={{width: "350px"}}/></a>
                
</div>
               
    </div>
    )
}