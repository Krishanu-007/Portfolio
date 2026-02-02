import { Certifications as CertificationsComponent } from "@/components/portfolio/Certifications";
import { PageTransition } from "@/components/PageTransition";

const Certifications = () => {
    return (
        <PageTransition className="container mx-auto px-4 py-8">
            <CertificationsComponent />
        </PageTransition>
    );
};

export default Certifications;
