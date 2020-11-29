import React from 'react';
import axios from 'axios';
import UsersList from '../requests/usersList';

class Form extends React.Component {
    state = {
        name: "",
        job: 0
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
        console.log(this.state.name)
    }
    handleJobChange = (event) => {
        this.setState({ job: event.target.value })
        console.log(this.state.job);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: this.state.name,
            job: this.state.job
        }

        axios.post(`https://reqres.in/api/users`, {data})
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>User Name:</label>
                    <input type="text" name="name" onChange={this.handleNameChange}></input>
                    <label>User Job:</label>
                    <input type="text" name="job" onChange={this.handleJobChange}></input>
                    <button type="submit">Add</button>
                </form>
                <UsersList />
            </div>
        )
    }
}

export default Form;