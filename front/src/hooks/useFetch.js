import { useEffect, useState } from "react";

export function useFetch(url,options={}) {
    const [laoding,setLaoding] = useState(true)
    const [erreur ,setErreur] = useState("")
    const [data , setData] = useState("")
    useEffect(()=>{
        const headers = {
            Accept:"application/json",
            ...options.headers
        }
        fetch(url,{...options,headers})
        .then(r=>r.json())
        .then(json=>setData(json))
        .catch(erreur=>setErreur(erreur))
        .finally(()=>setLaoding(true))
    },[])
    return {data,erreur,laoding}
}