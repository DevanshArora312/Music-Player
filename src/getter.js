import { useState } from "react";
import youtubeDl from "youtube-dl-exec";

const useGetter = link => {
    const [source,setSource] = useState(null);
    const [title,setTitle] = useState(null);
    const [thum,setThum] = useState(null);
    const [err_msg,setErr_msg] = useState(null);
    
    return {source,title,thum,err_msg};
}

export default useGetter;