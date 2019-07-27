import React,{Component} from 'react'
import './Additem.css'
class Additem extends Component
{
    state={
        name:"",
        age:""
    }
    chValue=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    suValue=(e)=>
    {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name:"",
            age:""
        })
    }
    render(){
        return(
            <div className="additem">
              <form onSubmit={this.suValue}>
                  <input type="text" placeholder="enter your name" id="name" onChange={this.chValue} value={this.state.name} />
                  <input type="text" placeholder="enter your age" id="age" onChange={this.chValue} value={this.state.age}/>
                  <button className="w">add</button>
              </form>
                </div>
        )
    }
}
export default Additem