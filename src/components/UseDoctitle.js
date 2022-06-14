import { useEffect } from "react";

function UseDocTitle(Count){
    useEffect(()=>{
        document.title=`count${Count}`}
    ,[Count])
}
export default UseDocTitle