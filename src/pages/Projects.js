import Project from '../components/project/Project';
import { projects } from '../helpers/projectList'

const Projects = () => {
    return (
        <main className="section">
        <div className="container">
            <h2 className="title-1">Реализованные проекты</h2>
            <ul className="projects">
                {projects.map((project, index) => {
                    return (<Project key={index} title={project.title} img={project.img} index={index}/>
                );
                })}
           {console.log(projects)}

            </ul>
        </div>
    </main>
    );
}
 
export default Projects;