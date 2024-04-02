import { readFile, writeFile } from "node:fs/promises"
import { errorFound } from "./errorFound.js"

const path = "public/API.json"
/**
 * permet de prendre les  articles
 * @returns {object}
 */
export async function getArticle() {
    const articles = await readFile(path,'utf8')
    return JSON.parse(articles)
}
/**
 * permet de prendre un article
 * @param {number} id 
 */
export async function getOneArticle(id) {
    const articles = await getArticle()
    const verif = articles.findIndex(index => index.id ===id )
    if (verif === -1) {
        throw new errorFound()
    }
    const article= articles.filter(todo => todo.id === id )
    let todo ={}
    article.forEach(element => {
        todo={...element}
    });
    return todo
    
}
/**
 * permet de supprimer un article
 * @param {number} id 
 */
export async function deleteArticle(id) {
    const articles = await getArticle()
    const verif = articles.find(index => index.id ===id )
    if (verif === undefined) {
        throw new errorFound()
    }
    const article= articles.filter(todo => todo.id !== id )
    await writeFile(path,JSON.stringify(article,null,2))
}
/**
 * permet d'ajouter un article
 * @param {number} id
 * @param {number} aime
 * @param {string} title 
 * @param {string} body
 * @param {string} category
 * @returns {object}
 */
export async function addArticle ({id=Date.now(),title,body,category="divers",aime=0}) {
    const articles = await getArticle()
    const article = {id,title,body,category,aime}
    const table = [article,...articles]
    await writeFile(path,JSON.stringify(table ,null,2))
    return article
    
 }
 /**
 * permet de modifier un article
 * @param {number} id 
 * @param {object} element
 */
 export async function updat (id,element) {
    const articles = await getArticle()
    const article = articles.find(todo => todo.id === id)
    if (article === undefined) {
        throw new errorFound()
    }
   Object.assign(article,element)
    await writeFile(path,JSON.stringify(articles,null,2))
    return article
    
 }
//  export async function addImg(element) {
//     const path = "public/images"
  
//  }
