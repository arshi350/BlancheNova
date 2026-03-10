
import { Header } from "./home/header";
import { Footer } from "./home/footer";
import { Home } from "../pages/home"
import { Academie } from "../pages/Académie"
import { Automatisation } from "../pages/automatisation";
import { IaCreative } from "../pages/IACréative";
import { ServicesIT } from "../pages/ServicesIT";
import { Stage } from "./home/Stage";
import { Contact } from "../pages/contact";

import { useState, useEffect } from "react";


export function Contain() {

    // Synchronisation de la section active avec l'URL (hash)
    const getInitialSection = () => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash.replace('#', '');
            return hash || 'accueil';
        }
        return 'accueil';
    };
    const [activeSection, setActiveSectionState] = useState(getInitialSection());

    // Met à jour l'URL et l'état
    const setActiveSection = (sectionId) => {
        setActiveSectionState(sectionId);
        if (typeof window !== 'undefined') {
            window.location.hash = sectionId;
        }
    };

    // Synchronise l'état avec l'URL lors de l'actualisation ou navigation
    useEffect(() => {
        const onHashChange = () => {
            const hash = window.location.hash.replace('#', '') || 'accueil';
            setActiveSectionState(hash);
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    const sections = [
        { id: 'accueil', component: <Home onNavigate={setActiveSection} /> },
        { id: 'academie-ia', component: <Academie /> },
        { id: 'automatisation', component: <Automatisation /> },
        { id: 'ia-creative', component: <IaCreative /> },
        { id: 'services-it', component: <ServicesIT /> },
        { id: 'stage', component: <Stage /> },
        { id: 'contact', component: <Contact /> },
    ];
    
    return (
        <>
           <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
                <Header onNavigate={setActiveSection} />
                <div className=" mx-auto px-4">
                    {sections.find(s => s.id === activeSection)?.component}
                </div>
                <Footer />
           </section>
        </>
    );
}