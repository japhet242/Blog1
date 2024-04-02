import { useEffect } from "react"
import { Link } from "react-router-dom"

export function EditeArticle({onSetClose,data}) {

    const handleSubmit = (e) => {

        e.preventDefault()
        const datas = new FormData(e.target)

          fetch(`http://localhost:3000/article?id=${data.id}`,{
                method:"PUT",
                body:JSON.stringify(Object.fromEntries(datas)),
                headers:{
                    "Content-Type":"application/json"
                }
            })
     
    }

    return <div style={{width:"450px",height:"500px",borderRadius:"20px",padding:"20px",boxShadow:"2px 2px 2px 1px  #00ffffdb",background:"#FFFFFF",marginTop:"20px"}}>
            <h1 className="text-primary">Editer l'article</h1>
        <form onSubmit={handleSubmit}>
            <div>
                 <label htmlFor="title">Titre : </label>
              <input type="text" name="title" id="title" defaultValue={data.title} />
            </div>
            <div>
                <label htmlFor="body">paragraphe :</label>
                <textarea name="body" id="body" cols="30" rows="8" defaultValue={data.body}></textarea>
            </div>
            <div>
                <label htmlFor="category">Category :</label>
                <input type="text" name="category" id="category" defaultValue={data.category} />
            </div>
            
           <button type="submit" className="bg-primary">
           sauvgarder
            </button>
            <Link to={`/blog/${data.id}`}>
                <button type="button" className="bg-danger" onClick={()=>onSetClose(false)}>
                close
            </button>
            </Link>
            
        </form>
     
    </div>
}