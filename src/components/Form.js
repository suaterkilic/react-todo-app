import React from 'react';
import ReactDOM from 'react-dom';


class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            age: '',
            statu: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event){
        console.log('Fullname: ' + this.state.fullname + ' Age: ' + this.state.age + ' Statu: ' + this.state.statu);
        event.preventDefault();
    }

    render(){
        return(
            <div className="test">
                 <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="fullname" />
                    <input onChange={this.handleChange} type="text" name="age" />
                    <input onChange={this.handleChange} type="text" name="statu" />
                    <input type="submit" value="SEND" />
                 </form>
            </div>
        )
    }
}
  

export default Form;