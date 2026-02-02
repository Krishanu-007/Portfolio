import { Publications as PublicationsComponent } from "@/components/portfolio/Publications";
import { PageTransition } from "@/components/PageTransition";

const Publications = () => {
    return (
        <PageTransition className="container mx-auto px-4 py-8">
            <PublicationsComponent />
        </PageTransition>
    );
};

export default Publications;
