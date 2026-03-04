import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Bot, 
  Palette, 
  Server,
  Users,
  ArrowRight,
  Brain,
  Cpu,
  Sparkles,
  Code2,
  BookOpen
} from 'lucide-react';

export function Expertise({ onNavigate }) {
    const poles = [
        {
            id: 1,
            title: "Académie IA",
            description: "Formations complètes en Intelligence Artificielle pour tous les niveaux, de l’initiation à l’expertise avancée.",
            icon: <GraduationCap className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            bgLight: "bg-blue-50",
            iconeColor: "text-blue-600",
            link: "#academie-ia"
        },
        {
            id: 2,
            title: "Automatisation Digitale",
            description: "Conception et déploiement de solutions d’automatisation pour améliorer l’efficacité des processus métiers.",
            icon: <Bot className="w-8 h-8" />,
            color: "from-green-500 to-emerald-500",
            bgLight: "bg-green-50",
            iconeColor: "text-green-600",
            link: "#automatisation"
        },
        {
            id: 3,
            title: "IA Créative",
            description: "Développement d’applications innovantes utilisant l’Intelligence Artificielle pour générer des contenus créatifs.",
            icon: <Palette className="w-8 h-8" />,
            color: "from-purple-500 to-pink-500",
            bgLight: "bg-purple-50",
            iconeColor: "text-purple-600",
            link: "#ia-creative"
        },
        {
            id: 4,
            title: "Services informatiques",
            description: "Offre complète de services informatiques, incluant le développement logiciel, la gestion de projets et le support technique.",
            icon: <Server className="w-8 h-8" />,
            color: "from-orange-500 to-red-500",
            bgLight: "bg-orange-50",
            iconeColor: "text-orange-600",
            link: "#services-it"
        },
        {
            id: 5,
            title: "Stage & Accompagnement",
            description: "Programmes de stage et d’accompagnement pour les étudiants et les professionnels souhaitant se spécialiser en IA.",
            icon: <Users className="w-8 h-8" />,
            color: "from-indigo-500 to-purple-500",
            bgLight: "bg-indigo-50",
            iconeColor: "text-indigo-600",
            link: "#stage"
        }
    ];

    // Variants d'animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Éléments décoratifs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête de section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full border border-blue-200 mb-4">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-800">Notre expertise</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4">
                        <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                            Nos Pôles d'Expertise
                        </span>
                    </h1>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        Découvrez nos domaines d'expertise et laissez-vous guider vers l'innovation technologique
                    </p>
                </motion.div>

                {/* Grille des pôles d'expertise */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
                >
                    {poles.map((pole) => (
                        <motion.div
                            key={pole.id}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -8,
                                scale: 1.02,
                                transition: { type: "spring", stiffness: 400 }
                            }}
                            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer w-full max-w-md hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Bande de couleur en haut */}
                            <div className={`h-2 w-full bg-gradient-to-r ${pole.color}`} />

                            <div className="p-8">
                                {/* En-tête avec icône et titre */}
                                <div className="flex items-start gap-4 mb-4">
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className={`w-16 h-16 rounded-2xl ${pole.bgLight} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                                    >
                                        <div className={`${pole.iconeColor} bg-gradient-to-r ${pole.color} bg-clip-text`}>
                                            {pole.icon}
                                        </div>
                                    </motion.div>
                                    
                                    <h2 className={`text-2xl font-black bg-gradient-to-r ${pole.color} bg-clip-text text-transparent flex-1`}>
                                        {pole.title}
                                    </h2>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {pole.description}
                                </p>

                                {/* Bouton "En savoir plus" */}
                                <motion.button
                                    type="button"
                                    whileHover={{ x: 5 }}
                                    className={`inline-flex items-center gap-2 text-transparent bg-gradient-to-r ${pole.color} bg-clip-text font-semibold group/btn relative`}
                                    onClick={() => {
                                        const sectionId = pole.link.replace('#', '');
                                        if (onNavigate) onNavigate(sectionId);
                                        // Met à jour le header avec le nom exact du lien
                                        const headerLinks = [
                                            { id: 'accueil', name: 'Accueil' },
                                            { id: 'academie-ia', name: 'Académie IA' },
                                            { id: 'automatisation', name: 'Automatisation' },
                                            { id: 'ia-creative', name: 'IA Créative' },
                                            { id: 'services-it', name: 'Services IT' },
                                            { id: 'stage', name: 'Stage' },
                                            { id: 'contact', name: 'Contact' }
                                        ];
                                        const found = headerLinks.find(l => l.id === sectionId);
                                        if (window.setActiveLink && found) window.setActiveLink(found.name);
                                    }}
                                >
                                    <span>En savoir plus</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    {/* Ligne animée sous le bouton */}
                                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${pole.color} group-hover/btn:w-full transition-all duration-300`}></span>
                                </motion.button>
                            </div>

                            {/* Effet de survol avec pattern */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none">
                                <div 
                                    className="w-full h-full"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 20px 20px, ${pole.color.split(' ')[1]} 2px, transparent 2px)`,
                                        backgroundSize: '30px 30px'
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Section des technologies utilisées */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-gray-500 mb-4">Technologies maîtrisées</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: "Python", icon: <Code2 className="w-4 h-4" /> },
                            { name: "TensorFlow", icon: <Brain className="w-4 h-4" /> },
                            { name: "PyTorch", icon: <Cpu className="w-4 h-4" /> },
                            { name: "OpenAI", icon: <Sparkles className="w-4 h-4" /> },
                            { name: "RPA", icon: <Bot className="w-4 h-4" /> }
                        ].map((tech, idx) => (
                            <motion.span
                                key={idx}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="inline-flex items-center gap-1 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                            >
                                {tech.icon}
                                {tech.name}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Style pour les animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </section>
    );
}