import React from 'react'
type PropType = {
    id:number,
    title:string,
    content:string,
    author:string
}
export const DetailPost = (prop:PropType) => {
  return (
    <div key = {prop.id} style={{marginBottom:"2%", padding:"1%", display:"flex", flexDirection:"column", width: "50%", borderBottom:"1px solid gray"}}>
        <span>ID: {prop.id}</span>
        <span>Title: {prop.title}</span>
        <span>Content: {prop.content}</span>
        <span>Author: {prop.author}</span>
    </div>
  )
}