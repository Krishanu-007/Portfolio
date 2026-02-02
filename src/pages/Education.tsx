import { Education as EducationComponent } from "@/components/portfolio/Education";
import { PageTransition } from "@/components/PageTransition";

const Education = () => {
    return (
        <PageTransition className="container mx-auto px-4 py-8">
            <EducationComponent />
        </PageTransition>
    );
};

export default Education;
