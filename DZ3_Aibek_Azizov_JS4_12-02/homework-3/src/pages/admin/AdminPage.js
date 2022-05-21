import React from "react";


class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({time: new Date()})
    }

    componentDidMount() {
        this.timeId = setInterval( () => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeId)
    }

    tick() {
        this.setState({time: new Date()})
    }

    render() {
        return (
            <div>
                <h2>Время: {this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


export default AdminPage;