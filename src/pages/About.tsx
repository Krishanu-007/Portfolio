import { About as AboutComponent } from "@/components/portfolio/About";
import { PageTransition } from "@/components/PageTransition";

const About = () => {
    return (
        <PageTransition className="container mx-auto px-4 py-8">
            <AboutComponent />
        </PageTransition>
    );
};

export default About;
