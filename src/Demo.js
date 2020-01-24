import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';
import Avatar from './Avatar';


// const Demo = (props) => {
//   return <div className="main_style">
//   <h1>Hello World {props.name}</h1>
//   <p>This is test</p>
//   </div>
// }

class Demo extends Component  {
  render(){
   const Avatar_Array = [{
        id:1,
        name:"mk",
        work: "Web dev33"
      },
      {
           id:2,
           name:"ak",
           work: "Web dev23"
         }

 ]
      const avcard =  Avatar_Array.map((avatarcard, i) => {
      return  <Avatar id={Avatar_Array[i].id} name={Avatar_Array[i].name} work={Avatar_Array[i].work} />
    })
    return <div className="main_style">
    <h1>Hello World {this.props.name}</h1>
    <p>This is test</p>
        {avcard}
        
    </div>

  }

}

export default Demo
