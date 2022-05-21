import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import {Services} from "../../components/services/Services";
import {Title} from "../../components/title/Title";
import News from "../../components/news/News";
import React from "react";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({showNews: false});
        this.newsAppear = this.newsAppear.bind(this);
    }

    newsAppear () {
        this.setState({showNews: !this.state.showNews});
    }

    render() {
        const servicesMain = ["ux/ui", "front-end", "back-end"];
        return (
            <div>
                <Title title="Main Page"/>
                <Header />
                <Services services={servicesMain}/>

                {this.state.showNews === true ? <News /> : ""}

                <button onClick={this.newsAppear} style={{background: "lightblue", padding: "10px", cursor: "pointer"}}>SHOW NEWS</button>
                {/*<News />*/}

                <Footer />
            </div>
        )
    }
}






export default MainPage;


