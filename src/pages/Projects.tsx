import { Projects as ProjectsComponent } from "@/components/portfolio/Projects";
import { PageTransition } from "@/components/PageTransition";

const Projects = () => {
    return (
        <PageTransition className="container mx-auto px-4 py-8">
            <ProjectsComponent />
        </PageTransition>
    );
};

export default Projects;
