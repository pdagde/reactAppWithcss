import React, {Component} from 'react'

class AddTodo extends Component{
    state = {
        content : ''
    }
    handalChanges = (e) => {
        this.setState({
            content : e.target.value
        })
    }
    handalsubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.addTodo(this.state);
        this.setState({
            content : ''
        })
    }
    render()
        {
           return(
                <div>
                    <form onSubmit={this.handalsubmit}>
                        <label>add new todo</label>
                        <input type="text" onChange={this.handalChanges} value={this.state.content} ></input>
                    </form>
                </div>
            )
        }
}

export default AddTodo