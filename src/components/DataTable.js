import React from 'react';
import ReactDOM from 'react-dom';

class DataTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title       : '',
            completed   : '',
            index       : '',
            height: window.innerHeight,
            message: 'not at bottom'
    
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        this.setState({
            title: this.state.title,
            completed: this.state.completed
        });
        this.props.todos.map((todo, key) => {
            if(this.state.index == key){
                todo.title = this.state.title;
                todo.completed = this.state.completed;
            }   
        })
        event.preventDefault();
    }

    handleEdit(index){
        this.props.todos.map((todo, key) => {
            if(index == key){
                this.setState({
                    title: todo.title,
                    completed: todo.completed,
                    index: index
                })
            }
        })
    }
    handleDelete(index){
        this.setState({
            todos: this.props.todos.splice(index, 1)
        })
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    handleScroll() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.setState({
                message: 'bottom reached'
            });
            console.log('Oldu')
        } else {
            this.setState({
                message: 'not at bottom'
            });
        }
    }    
    render(){
        return(
            <React.Fragment>
                <h1>Edit Or Delete Existing List</h1>
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Completed</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.todos.map((todo, key) => {
                                return(
                                    <tr>
                                        <th scope="row">{todo.id}</th>
                                        <td>{todo.title}</td>
                                        <td>{todo.completed ? 'True': 'False'}</td>
                                        <td>
                                            <button
                                                onClick={() => this.handleEdit(key)}
                                                className="btn btn-primary"
                                                data-target="#exampleModal"
                                                data-toggle="modal"
                                                >UPDATE
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => this.handleDelete(key)}
                                                className="btn btn-danger"
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
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Content Update</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                           <div className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={this.state.title}
                                            className="form-control"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Completed</label>
                                        <input
                                            type="text"
                                            value={this.state.completed}
                                            name="completed"
                                            className="form-control"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            className="btn btn-warning"
                                            value="Send"
                                        />
                                    </div>
                                </form>
                           </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DataTable;