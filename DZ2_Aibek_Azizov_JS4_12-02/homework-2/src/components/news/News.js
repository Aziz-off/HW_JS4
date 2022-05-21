import classes from "./news.module.css"

export const News = () => {
    return (
        <div style={{display: "flex", margin: "20px"}}>
            <div className={classes.text}>
                <h3>Last news about UX/UI design</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt dolorem doloremque ducimus enim et eveniet in minus, modi odio omnis quasi quia quod recusandae saepe suscipit veniam vero voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, amet architecto cupiditate distinctio ducimus minus necessitatibus numquam praesentium quod repellendus rerum sequi ullam veritatis. Aspernatur assumenda corporis est, pariatur repudiandae tempore. Adipisci impedit incidunt, iure libero odio quia repellendus totam.</p>
            </div>
            <div className={classes.text}>
                <h3>Last news about Front-end</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at deserunt doloribus est expedita, fuga inventore iusto minima neque, obcaecati quod repellendus, sed velit! Aliquid amet architecto culpa, delectus dicta dolor dolorem dolorum eaque, eveniet harum itaque iure laboriosam mollitia nemo officia pariatur quas recusandae repellendus repudiandae ullam unde, voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptates?</p>
            </div>
            <div className={classes.text}>
                <h3>Last news about Back-end</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi architecto asperiores consequatur dicta dolor eum, eveniet explicabo, ipsa minima nulla optio porro provident qui repellendus, reprehenderit tempora. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptates?</p>
            </div>
            <div className={classes.text}>
                <h3>Last news about Back-end</h3>
                <p>Lorem ipsum dolor sit amet, casperiores consequatur dicta dolor eum, eveniet explicabo, ipsa minima nulla optio porro provident qui repellendus, reprehenderit tempora. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptates?</p>
            </div>
        </div>
    )
}