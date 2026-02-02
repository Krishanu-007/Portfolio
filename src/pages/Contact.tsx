import { Contact as ContactComponent } from "@/components/portfolio/Contact";
import { PageTransition } from "@/components/PageTransition";

const Contact = () => {
    return (
        <PageTransition className="container mx-auto px-4 py-8">
            <ContactComponent />
        </PageTransition>
    );
};

export default Contact;
