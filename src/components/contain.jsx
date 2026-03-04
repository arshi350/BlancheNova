
import { Header } from "./home/header";
import { Footer } from "./home/footer";
import { Home } from "../pages/home"
import { Academie } from "../pages/Académie"
import { Automatisation } from "../pages/automatisation";
import { IaCreative } from "../pages/IACréative";
import { ServicesIT } from "../pages/ServicesIT";
import { Stage } from "./home/Stage";
import { Contact } from "../pages/contact";

import { useState } from "react";


export function Contain() {

    const [activeSection, setActiveSection] = useState('accueil');

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