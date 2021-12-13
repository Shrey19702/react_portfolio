// import movie_app from "../images/movie-app.png";

const Projects = (props) => {
    return (  
        <div className={"projects-page "+(props.className)}>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. In amet inventore omnis fugit quia nesciunt, facilis vel molestias praesentium quam veritatis similique soluta vitae delectus dolores necessitatibus earum nostrum iure explicabo reiciendis repellat adipisci. Sapiente fugit aliquam autem! Accusantium et quod nesciunt nobis iusto aperiam vero perferendis magnam delectus architecto? Sunt officia amet repudiandae? Vitae corporis modi neque tempore, dolore harum ipsum eius, iure qui excepturi dolorem et non veritatis exercitationem consequuntur maxime consectetur. Ipsa soluta impedit quam possimus ratione explicabo quas repellat odio et aut vero ducimus recusandae voluptatem in at nisi voluptas ullam reprehenderit mollitia aspernatur quisquam, obcaecati dignissimos accusamus suscipit! Sapiente nobis, dolore libero omnis ab aliquam dignissimos. */}
            {/* <img className="project-image" src={movie_app} alt="movie-app"/>             */}
            <div className="project-page-panel">
                <div className="project-page-panel-text-box">
                    <div className="font-weight-400">
                        {props.text1}
                    </div>
                    <div className="font-weight-900">
                        {props.text2}
                    </div> 
                    <div className="font-weight-400 font-size-1-5rem">
                        {props.text3}
                    </div>
                    <br/>
                    <div className="font-weight-400 font-size-1-5rem">
                       <a href={props.text4} className="project-link" target="_blank">{props.text2}</a> 
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;