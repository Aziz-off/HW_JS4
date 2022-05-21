import React from "react";
import {Header} from "../../components/header/Header";

class BlogPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({statusMenu: false})
        this.handleMenu = this.handleMenu.bind(this)
    }

    handleMenu () {
        this.setState({statusMenu: !this.state.statusMenu})
    }

    render() {
        return (
            <div>
                <h2>Title = {this.props.title}</h2>

                {this.state.statusMenu === true ? <Header/> : ""}
                {/*/!*{this.state.statusMenu && <Header />}*!/ это тоже самое что и верхняя запись, только короче*/}

                <button onClick={this.handleMenu}>menu</button>
            </div>
        );
    }
}
export default BlogPage;