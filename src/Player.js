// import { useEffect } from "react";

const Player = ({link}) => {
    return ( 
        <div style={{marginTop : "2rem"}}>
            <div id="youtube-audio">
                {/* {console.log("Chal to raha h")} */}
                <div style={{backgroundColor:"red",width:"100%",height:"30px"}}>
                    {link}
                </div>
            </div>
        </div>
     );
}
 
export default Player;
