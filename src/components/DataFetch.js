import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from './DataTable';

class DataFetch extends React.Component{

    state = {
        todos: []
    }
    
    componentDidMount(){
        this.todoFetch();
    }

    todoFetch(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            this.setState({
                todos
            })
        })
        .catch(error => {
            console.log('Error Message: ' + error);
        })
    }

    render(){
        const {
            todos
        } = this.state
        return(
            <DataTable todos={this.state.todos} />
        )
    }
}

export default DataFetch;