import { useEffect, useId, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { Card } from "./card"
import { useFetch } from "../hooks/useFetch"

export function BlogHome () {
    const [id ,setId] = useState("")
    let datas = useLoaderData() 
    useEffect(()=>{
        fetch(`http://localhost:3000/article?id=${id}`,{
            method:"delete"
            })
    },[id])
const [categorie , setCategorie] = useState("")
    //filtre
   const data = datas.filter(el => {
    if (categorie === "tout") {
        return true
    }
    if (categorie && el.category !== categorie) {
        return false
    }
    return true
   })

 const category =[
    {
        categorie:"tout",
        id:1
    },
    {
        categorie:"danse",
        id:2
    }
    ,
    {
        categorie:"sport",
        id:3
    }
    ,{
        categorie:"philosophie",
        id:4
    }
 ]

    return (
        <>
        <div>
            <label htmlFor="trie"><h4>trier par category:</h4></label>
            <select name="trie" id="trie" onChange={(e)=>{
               setCategorie(e.target.value)
            }}>
                {category.map(el => <option key={el.id}>{el.categorie}</option>)}
            </select>
        </div>
        <div style={{display:"flex",flexWrap:"wrap"}}> 
             {data.map(data =><Card element={data} onSetId={setId}  key={data.id}/>)}
        </div>
        </>
    )
}