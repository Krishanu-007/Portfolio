import { Skills as SkillsComponent } from "@/components/portfolio/Skills";
import { PageTransition } from "@/components/PageTransition";

const Skills = () => {
    return (
        <PageTransition className="container mx-auto px-4 py-8">
            <SkillsComponent />
        </PageTransition>
    );
};

export default Skills;
