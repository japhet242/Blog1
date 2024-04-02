import { Link } from "react-router-dom"

export function AddArticle() {

    const handleSubmit = (e) => {

        e.preventDefault()
        const datas = new FormData(e.target)

          fetch(`http://localhost:3000/article`,{
                method:"POST",
                body:JSON.stringify(Object.fromEntries(datas)),
                headers:{
                    "Content-Type":"application/json"
                }
            })
     
    }
    return  <div style={{maxWidth:"700px",height:"500px",borderRadius:"20px",padding:"20px",background:"#FFFFFF",marginTop:"20px",textAlign:"center"}}>
    <h1 className="text-primary">ajout l'article</h1>
<form onSubmit={handleSubmit}>
    <div>
         <label htmlFor="title">Titre : </label>
      <input type="text" name="title" id="title"/>
    </div>
    <div>
        <label htmlFor="body">paragraphe :</label>
        <textarea name="body" id="body" cols="30" rows="8"></textarea>
    </div>
    <div>
        <label htmlFor="category">Category :</label>
        <input type="text" name="category" id="category"/>
    </div>
    
   <button type="submit" className="bg-primary">
   sauvgarder
    </button>
</form>

</div>

}