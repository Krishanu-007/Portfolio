import { Hero } from "@/components/portfolio/Hero";
import { PageTransition } from "@/components/PageTransition";

const Home = () => {
    return (
        <PageTransition className="container mx-auto px-4 py-8">
            <Hero />
        </PageTransition>
    );
};

export default Home;
