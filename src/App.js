import React,{Component} from 'react';
import Todoitem from './component/Todeitem/Todoitem'
import Additem from './component/Additem/Additem'
class App extends Component {
  state={
    items:[
        {id:1,name:"ahmed",age:21},
        {id:2,name:"mohamed",age:25},
        {id:3,name:"esmat",age:30}
    ]
  }
  deleteItems =(id)=>
  {
  // let items=this.state.items.filter(item=>
  //   {
  //     return(
  //           item.id!=id
  //     )
  //   });
  let items=this.state.items;
  let r=items.findIndex(item=>item.id===id);
  items.splice(r,1)
  this.setState({
    items:items
  }
  )
  }
  addItem=(ee)=>
  {
    ee.id=Math.random();
    const items=this.state.items;
    items.push(ee);
    this.setState({
      items:items
    })
  }
  render(){
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="main">
      <Todoitem items={this.state.items} deleteItems={this.deleteItems} />
      <Additem addItem={this.addItem} />
      </div>
    </div>
  )
}
}

export default App;
