import React from 'react';

const withSing = (WrappedComponent , song) => {
    return class extends React.Component {
        sing = () => {
            console.log(song)
        }
        
        render() {
            return <WrappedComponent sing={this.sing} />
        }
    }
}

export default withSing;