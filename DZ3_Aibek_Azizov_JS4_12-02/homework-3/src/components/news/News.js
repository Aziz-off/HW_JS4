import React from "react";
import {Header} from "../header/Header";


class News extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({showNews: false});
        this.newsAppear = this.newsAppear.bind(this);
    }

    newsAppear () {
        this.setState({showNews: !this.state.showNews});
    }

    render() {

        return (
            <div>
                <h2>Last news about GeekTech</h2>
                {this.state.showNews === true ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem cupiditate dolores eius, eveniet ex, exercitationem minima nam qui quod quos sapiente tempore temporibus vel voluptatibus. Maxime nesciunt officiis possimus quaerat? A at aut beatae deleniti Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi atque, eum, hic laboriosam modi, natus nesciunt officia quaerat rerum sapiente sequi ut? Accusamus accusantium aliquid culpa dolorem doloribus eos esse et fuga Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci amet animi culpa cum, deserunt dicta dolore doloribus eaque eos est facere harum illo libero modi nobis obcaecati officia officiis omnis porro possimus recusandae, rem suscipit temporibus voluptas voluptate voluptatum! Aliquam amet aut corporis deleniti ducimus, eum expedita ipsa ipsum magnam molestiae neque nisi nobis, placeat quam saepe suscipit unde! Aut cum cumque excepturi perspiciatis voluptatibus. Alias assumenda consectetur dolorem earum harum impedit inventore libero minima nemo nobis, perferendis quidem, ratione sequi tempore velit, vitae voluptatem! Accusantium adipisci aliquid blanditiis culpa, dolore dolores est facilis illo itaque, magnam necessitatibus obcaecati, rerum tenetur voluptas voluptatibus? Adipisci error, obcaecati recusandae rerum sit voluptate. in ipsum odit pariatur quasi quis ratione repudiandae sapiente, sequi totam. dicta eaque eos excepturi in itaque maxime minus, nesciunt officia placeat quia tempora voluptates.</p> : ""}

                <button onClick={this.newsAppear}>Show News</button>
            </div>
        )

    }
}


export default News;