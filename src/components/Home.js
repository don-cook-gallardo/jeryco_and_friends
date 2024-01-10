import { useMediaQuery } from "react-responsive";
import Logo from "../img/sundried_logo.jpg";
import Radioburner from "../img/Radioburner.jpg";

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
                backgroundColor: "#ffffff",
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
            ><img className='logo' src={Logo} style={{width: "500px"}}/> 
            </div>
            <div
                className='padding-light row'
                style={{
                  
                    width: "100%",
                    height: "70%",
                    justifyContent: "center"
                }}
            ><a href="https://ffm.to/radioburner" target="_blank"><img src={Radioburner} style={{width: "900px", height: "900px"}}/></a> 
            </div><div
                className='padding-medium row'
                style={{
                    width: "100%",
                    height: "15%",
                    justifyContent: "center",color: "#595959"
                }}
            >Copyright © 2024 Sundried - All Rights Reserved
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
            height: "90%",
            width: "85%",
            backgroundColor: "#ffffff",
        }}
    >
        <div
            className='stdBottomMargin hoverable row'
            style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
        >
            <div style={{ width: "33%", padding: "0.625rem" }}></div>
            <div
                className='row'
                style={{ width: "33%", justifyContent: "center" }}
            >
            </div>
            <div
                className='row'
                style={{
                    width: "33%",
                    justifyContent: "flex-end",
                }}
            >
            </div>
        </div>
    </div>
    )
}