import React from 'react';
import axios from 'axios';

class UsersList extends React.Component {
    state = {
        users: []
    }

    fetchData = () => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                console.log(res)
                this.setState({ users: res.data.data })
            })
    }

    render() {
        const list = this.state.users.map(user => {
            return <li key={user.id}>{user.first_name} {user.last_name}</li>
        })
        return (
            <div>
                <button onClick={this.fetchData}>Fetch data</button>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default UsersList;