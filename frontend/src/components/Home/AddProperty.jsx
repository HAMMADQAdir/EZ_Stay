// import React, { useState } from "react";
// import { Form } from "react-bootstrap";


// export default function AddProperty({addTodo}) {
//     const [title,setTitle] = useState("");
//     const [desc,setDesc] = useState("");
//     const submit = (e)=>{
//         e.preventDefault(); // for preventing default
//         if(!title | !desc){
//             alert("add missing")
//         }
//        addTodo(title,desc)
       
//     }
//   return (
//     <div style={{margin:'10px'}}>
//       <form onSubmit={submit}>
//         <div className="mb-3">
//           <label for="title" className="form-label">
//             Email address
//           </label>
//           <input
//             type="text"
//             value={title} onChange={(e)=>{
//                 setTitle(e.target.value)
//             }}
//             className="form-control"
//             id="title"
//             aria-describedby="emailHelp"
//           />
          
//         </div>
//         <div className="mb-3">
//           <label for="description" className="form-label">
//            description
//           </label>
//           <input
//             type="text"
//             value={desc} onChange={(e)=>{
//                 setDesc(e.target.value)
//             }}
//             className="form-control"
//             id="description"
//           />
//         </div>
     
//         <button type="submit" className="btn btn-primary btn-sm btn-success">
//           AddTodo
//         </button>
//       </form>
//     </div>
//   );
// }
