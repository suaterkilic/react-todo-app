import React from 'react';
import ReactDOM from 'react-dom';

class CustomList extends React.Component{
    constructor(){
        super();
        this.state = {
            title: '',
            todos: [],
            test: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    handleSubmit = (event) => {

        const newTitle = this.state.title;

        this.setState({
            todos: [...this.state.todos, newTitle],
            title: ''
        })
        event.preventDefault();
    }

    handleDelete = (index) => {
        var todoArray = [...this.state.todos];
        todoArray.map((item, k) => {
            if(k == index){
                todoArray.splice(index, 1);
                this.setState({
                    todos: todoArray
                })
            }
        });
    }
   
    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h1>Custom Todo</h1>
                        <input 
                            className="form-control"
                            name="title"
                            value={this.state.title}
                            type="text"
                            onChange={this.handleChange}
                        />
                    </div>
                    <input 
                        type="submit"
                        value="INSERT"
                        className="btn btn-primary"
                    />
                </form>
                <table class="table table-hover custom-todo-table">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Title</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map((todo, index) => {
                                return(
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{todo}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => this.handleDelete(index)}
                                            >   
                                                DELETE
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default CustomList;