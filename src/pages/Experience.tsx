import { Experience as ExperienceComponent } from "@/components/portfolio/Experience";
import { PageTransition } from "@/components/PageTransition";

const Experience = () => {
    return (
        <PageTransition className="container mx-auto px-4 py-8">
            <ExperienceComponent />
        </PageTransition>
    );
};

export default Experience;
