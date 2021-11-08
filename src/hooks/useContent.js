import {useState, useEffect, useContext} from "react";
import { FBContext } from "../context/firebase";
import { collection, getDocs} from "firebase/firestore";

export default function useContent(target){
    const [content, setContent] = useState([])
    const {db} = useContext(FBContext);

    useEffect( async()=>{
        const snapshot = await getDocs(collection(db, target));
        const allContent=[];
        snapshot.forEach((doc) => {
            allContent.push(doc.data())
        });
        setContent(allContent);
    },[])

    return { [target]: content };
}
