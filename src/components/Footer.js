import Instagram from "../img/IG_Icon.png"
import YouTube from "../img/YT_Icon.png"

export default function Footer(){
   
    return(<div className="column"
                style={{
                   
                    width: '100vw',
                    alignItems: "center",
                   backgroundColor: '#212121',
                   paddingTop: "35px",
                    paddingBottom: "35px",
                }}
            >
                
                 <div class='row' style={{ width: '100vw',
                    justifyContent: "center"}}><a href='https://www.instagram.com/jerycoandfriends/' target='_blank'><img className='hover' src={Instagram} style={{height: "35px"}}/></a><div style={{width: "5px"}}></div><a href='https://www.youtube.com/@jerycoandfriends' target='_blank'><img className='hover' src={YouTube} style={{height: "35px"}}/></a></div>
        <div style={{color: "white",paddingTop: "20px",paddingBottom: "10px"}}>Jeryco and Friends © 2025</div>
        </div>)}


