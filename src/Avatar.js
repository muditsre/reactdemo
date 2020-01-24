import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Avatar.css';

class Avatar extends Component  {
  render(){
    return (<div className="avatar_style" >
      <img src="https://joeschmoe.io/api/v1/vinod" alt="Avatar" />
    <h5>{this.props.name}</h5>
    <p>{this.props.work}</p>
    </div>)
  }
}

export default Avatar
