import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import { Head } from "./composant/head"
import { BlogHome } from "./composant/blog"
import { Single } from "./composant/single"
import { AddArticle } from "./composant/addArticle"


const router = createBrowserRouter([
    {
      path:"/",
      element:<Head/>,
      children:[
        {
            path:"",
            element:<div>
              <h1>bienvenue dans mon blog </h1>
              <p>les mielleurs click sur la partie blog en haut de la navBarre pour voir les article </p>
              </div>
        },
        {
          path:"blog",
          element:<BlogHome/>,
          loader:()=> fetch("http://localhost:3000/article")
        },
        {
          path:"blog/:id",
          element:<Single/>,
          loader:({params})=>{
            return fetch(`http://localhost:3000/article/${params.id}`)
          }
        },
        {
          path:"blog/ajout",
          element:<AddArticle/>
        }
         
      ]
    }
])

function App() {
  
  return <RouterProvider router={router}/>
}

export default App
