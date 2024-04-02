import { useLoaderData } from "react-router-dom"
import { Button } from "./button"
import {createPortal} from "react-dom"
import { useState } from "react"
import { EditeArticle } from "./editArticle"

export function Single () {
   const [open , setOpen] = useState(false)
    const data = useLoaderData()

   const andlePortal = (e)=>{
    setOpen(true)
   }

    return <div style={{margin:"20px"}}>
        <div>
              <h1>{data.title}</h1>
             <p>{data.body}</p>
             
        </div>
        {open &&  createPortal(
            <div  style={{display:"flex", justifyContent:"center",height:"100Vmax",width:"100%",background:"#010c0ca3" ,position:"absolute",top:"0px"}}>
                <EditeArticle data={data} onSetClose={setOpen}/>
            </div>
         ,
            document.body
        )}
        <Button children="editer" onClick={andlePortal}/>
       
    </div>
}
