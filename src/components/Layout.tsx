import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { AnimatePresence } from 'framer-motion';

export const Layout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-16">
                <AnimatePresence mode="wait">
                    <Outlet key={location.pathname} />
                </AnimatePresence>
            </main>
        </div>
    );
};
