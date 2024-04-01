import { useMediaQuery } from "react-responsive";
import Artwork from "../img/expanded_promo.jpg"

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
                height: "100%",
                width: "100%",
                minWidth: "100vw",
                maxWidth: "3840px",
                minHeight: "100vh",
                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
                   
            }}
        >
            <div
                className='padding-medium row'
                style={{
                    
                    width: "100%",
                    height: "15%",
                    justifyContent: "center"
                }}
            > 
            </div>
            <div
                className='padding-light row'
                style={{
                  
                    width: "100%",
                    height: "70%",
                    justifyContent: "center"
                }}
            ><a href="https://ffm.to/intropack-expanded" target="_blank"><img src={Artwork} style={{width: "900px", height: "900px"}}/></a> 
            </div><div
                className='padding-medium row'
                style={{
                    width: "100%",
                    height: "15%",
                    justifyContent: "center",color: "white"
                }}
            >
            </div>
        </div>
    )
}

function Mobile(){
    return(
        <div
        className='column padding-light'
        style={{
            alignItems: "center",
            justifyContent:"center",
            height: "100vh",
            width: "100vw",
            backgroundColor: "black",
        }}
    >
        
           <a href="https://ffm.to/intropack-expanded" target="_blank"><img src={Artwork} style={{width: "385px", height: "385px", position: "relative", left: "-15px"}}/></a> 
    </div>
    )
}