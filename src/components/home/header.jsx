import logo from '/src/assets/WhatsApp Image 2026-03-01 at 11.04.05 AM.jpeg';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, Cpu, Code, Users, Mail, Home, BookOpen, Bot, Palette, Server } from 'lucide-react';

export function Header({ onNavigate }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Synchronise le lien actif avec l'URL hash
    const navLinks = [
        { name: 'Accueil', id: 'accueil', icon: <Home className="w-4 h-4" /> },
        { name: 'Académie IA', id: 'academie-ia', icon: <BookOpen className="w-4 h-4" /> },
        { name: 'Automatisation', id: 'automatisation', icon: <Bot className="w-4 h-4" /> },
        { name: 'IA Créative', id: 'ia-creative', icon: <Palette className="w-4 h-4" /> },
        { name: 'Services IT', id: 'services-it', icon: <Server className="w-4 h-4" /> },
        { name: 'Stage', id: 'stage', icon: <Users className="w-4 h-4" /> },
        { name: 'Contact', id: 'contact', icon: <Mail className="w-4 h-4" /> },
    ];
    const getInitialActiveLink = () => {
        if (typeof window !== 'undefined') {
            const hash = window.location.hash.replace('#', '');
            const found = navLinks.find(l => l.id === hash);
            return found ? found.name : 'Accueil';
        }
        return 'Accueil';
    };
    const [activeLink, setActiveLink] = useState(getInitialActiveLink());

    // Synchronise le lien actif avec le hash de l'URL
    useEffect(() => {
        const onHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            const found = navLinks.find(l => l.id === hash);
            setActiveLink(found ? found.name : 'Accueil');
        };
        window.addEventListener('hashchange', onHashChange);
        // Initialisation au chargement
        onHashChange();
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    // Détection du scroll pour changer le style du header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
                    : 'bg-white shadow-sm py-4'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
                    
                    {/* Logo et titre - Version Desktop */}
                    <div className="flex items-center gap-4 w-full lg:w-auto justify-between">
                        <div className="flex items-center gap-3">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative"
                            >
                                <img 
                                    src={logo} 
                                    alt="BlancheNova Logo" 
                                    className="h-16 w-auto rounded-xl shadow-lg border-2 border-blue-100"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                                />
                            </motion.div>
                            
                            <div className="hidden lg:block">
                                <motion.h1 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="font-bold text-2xl text-gray-800"
                                >
                                    BlancheNova Tech
                                </motion.h1>
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-sm text-gray-600 italic"
                                >
                                    De l'héritage naît l'intelligence
                                </motion.p>
                            </div>
                        </div>

                        {/* Bouton menu mobile */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>

                    {/* Navigation Desktop */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-1">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setActiveLink(link.name);
                                            if (onNavigate) onNavigate(link.id);
                                        }}
                                        className={`relative group px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                                            activeLink === link.name
                                                ? 'text-blue-600 bg-blue-50 '
                                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        <span className="text-blue-500">{link.icon}</span>
                                        <span className="font-medium">{link.name}</span>
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                                        />
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* Badge IA (Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">IA Powered</span>
                    </motion.div>
                </div>

                {/* Version Mobile - Titre sous le logo */}
                <div className="lg:hidden text-center mt-2">
                    <motion.h1 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-bold text-xl text-gray-800"
                    >
                        BlancheNova Tech
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xs text-gray-600"
                    >
                        De l'héritage naît l'intelligence
                    </motion.p>
                </div>

                {/* Menu Mobile Déroulant */}
                <motion.div
                    initial={false}
                    animate={{ 
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden overflow-hidden"
                >
                    <nav className="mt-4 pb-4">
                        <ul className="flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setActiveLink(link.name);
                                            setIsMobileMenuOpen(false);
                                            if (onNavigate) onNavigate(link.id);
                                        }}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                            activeLink === link.name
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    >
                                        <span className="text-blue-500">{link.icon}</span>
                                        <span className="font-medium">{link.name}</span>
                                        {link.name === 'Académie IA' && (
                                            <span className="ml-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-2 py-1 rounded-full">
                                                Nouveau
                                            </span>
                                        )}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Badge IA Mobile */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold">Propulsé par l'Intelligence Artificielle</span>
                        </motion.div>
                    </nav>
                </motion.div>
            </div>

            {/* Barre de progression du scroll */}
            <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                style={{ scaleX: useScrollProgress() }}
                initial={{ scaleX: 0 }}
            />
        </motion.header>
    );
}

// Hook personnalisé pour la progression du scroll
function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) : 0;
            setProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
}