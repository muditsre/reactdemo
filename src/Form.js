import React,{Component} from 'react';
//import  './Form.css'

class Form extends Component {
constructor(props){
  super(props);
  this.state = {fullname:'Mk', email:'test@test.com'}
}
handleall = (event) => {
  //this.setState({'fullname':event.target.value})
  this.setState({[event.target.name]:event.target.value})
}
handleSubmit = (event) => {
 alert(`my name is ${this.state.fullname} and my email is ${this.state.email} `);
  alert(JSON.stringify(this.state));
 event.preventDefault();
}
render() {
  return (<div  >
    <form onSubmit={this.handleSubmit}>
    <label>Full Name</label>
    <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleall} />
    <label>Email</label>
    <input type="text" name="email" value={this.state.email} onChange={this.handleall} />
    <input type="submit" value="Submit"/>
    </form>
  </div>)
}
}
export default Form;
