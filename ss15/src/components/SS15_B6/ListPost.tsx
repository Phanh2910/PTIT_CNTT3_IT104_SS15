import React, { useState } from "react";
import { DetailPost } from "./DetailPost";
type postType = {
    id:number,
    title:string,
    content:string,
    author:string
}
export const ListPost = () => {
  const [posts] = useState<postType[]>([
    {
      id: 1,
      title: "Tại sao nên học ReactJS",
      content: "Học ReactJS để đi làm",
      author: "David",
    },
    {
      id: 2,
      title: "Props trong ReactJS",
      content: "Props giúp truyền dữ liệu từ component con xuống component cha",
      author: "Linda",
    },
    {
      id: 3,
      title: "State trong ReactJS là gì?",
      content: "State giúp trữ trạng thái dữ liệu bên trong một component",
      author: "David",
    },
  ]);
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <h3>Danh sach bai viet</h3>
     {posts.map(post =>{
        return (
            <DetailPost {...post} key = {post.id} />
        )
    })}   
    </div>
    
  )
};