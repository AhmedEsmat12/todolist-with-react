import React,{Component} from 'react'
import './Todoitem.css'
 const Todoitem=(props)=>
{
    const item=props.items;
    const deleteItems=props.deleteItems;
    const len=item.length;
    const todolist=len?(item.map((item)=>{
        return(
            <div key={item.id}>
                <span className="name">{item.name} </span>
                <span className="age">{item.age}</span>
                <span className="action" onClick={()=>deleteItems(item.id)}>&times;</span>
            </div>
        )
    })):<span>no item to show </span>
    return(
        <div className="todoitem">
            <div>
                <span className="name te">name</span>
                <span className="age te">age</span>
                <span className="action te">action</span>
            </div>
            {todolist}
        </div>
    )
}
export default Todoitem;