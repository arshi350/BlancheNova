import { motion } from 'framer-motion';
import { 
  Brain, 
  Video, 
  GraduationCap, 
  Rocket, 
  Shield, 
  Users,
  Bot,
  Sparkles,
  BarChart,
  Network,
  Printer,
  Shirt,
  Heart,
  CheckCircle2,
  ChevronRight,
  Sparkle,
  Target,
  Globe2,
  Palette,
  Settings2,
  Code2,
  Camera,
  BookOpen,
  Megaphone,
  Star
} from 'lucide-react';

export function Services() {
    // Enhanced data structure with categories
    const servicesData = {
        formation: {
            title: "FORMATION & INNOVATION",
            icon: GraduationCap,
            color: "blue",
            items: [
                { text: "Intelligence Artificielle (IA)", icon: Brain, description: "Maîtrisez les technologies d'avenir" },
                { text: "Montage vidéo IA", icon: Video, description: "Créez des contenus professionnels" },
                { text: "Bureautique intelligente", icon: GraduationCap, description: "Optimisez votre productivité" },
                { text: "Automatisation digitale", icon: Rocket, description: "Automatisez vos processus" },
                { text: "Cybersécurité", icon: Shield, description: "Protégez vos données" },
                { text: "Projets de soutenance & stages", icon: Users, description: "Mettez en pratique vos acquis" }
            ],
            highlight: "Développez des compétences recherchées sur le marché"
        },
        
        iaSolutions: {
            title: "SOLUTIONS INTELLIGENTES",
            icon: Bot,
            color: "purple",
            categories: [
                {
                    name: "Pour l'éducation",
                    icon: BookOpen,
                    items: [
                        { text: "Création de contenus pédagogiques IA", icon: Sparkles },
                        { text: "Génération de TP & QCM", icon: Bot },
                        { text: "Avatar éducatif intelligent", icon: GraduationCap }
                    ]
                },
                {
                    name: "Pour les entreprises",
                    icon: Settings2,
                    items: [
                        { text: "Automatisation administrative", icon: Rocket },
                        { text: "Chatbots intelligents", icon: Bot },
                        { text: "Analyse de données", icon: BarChart }
                    ]
                },
                {
                    name: "Marketing IA",
                    icon: Megaphone,
                    items: [
                        { text: "Vidéos publicitaires IA", icon: Video },
                        { text: "Gestion réseaux sociaux", icon: Users },
                        { text: "Identité digitale", icon: Sparkles }
                    ]
                }
            ]
        },
        
        informatique: {
            title: "SERVICES INFORMATIQUES",
            icon: Code2,
            color: "green",
            items: [
                { text: "Installation réseaux", icon: Network, description: "Infrastructure fiable et performante" },
                { text: "Maintenance informatique", icon: Settings2, description: "Support technique réactif" },
                { text: "Développement d'applications", icon: Code2, description: "Solutions sur mesure" },
                { text: "Vidéosurveillance", icon: Camera, description: "Sécurité renforcée" },
                { text: "Cybersécurité", icon: Shield, description: "Protection avancée" }
            ],
            highlight: "Sécurisez et digitalisez votre activité"
        },
        
        impression: {
            title: "IMPRESSION & PERSONNALISATION",
            icon: Printer,
            color: "orange",
            items: [
                { text: "Impression (documents, affiches, cartes)", icon: Printer },
                { text: "Faire-parts (mariage & obsèques)", icon: Heart },
                { text: "T-shirts personnalisés", icon: Shirt },
                { text: "Porte-clés & objets publicitaires", icon: Sparkles },
                { text: "Créations graphiques", icon: Palette }
            ]
        },
        
        entrepreneuriat: {
            title: "ENTREPRENEURIAT FÉMININ",
            icon: Heart,
            color: "pink",
            items: [
                { text: "Entreprendre dans le numérique", icon: Rocket },
                { text: "Créer leur activité", icon: Target },
                { text: "Maîtriser les technologies", icon: Brain },
                { text: "Développer leur réseau", icon: Globe2 }
            ],
            highlight: "Ensemble, construisons l'avenir numérique"
        }
    };

    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: {
            scale: 1.02,
            boxShadow: "0 25px 30px -12px rgba(0, 0, 0, 0.15)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        },
        hover: {
            x: 8,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
            }
        }
    };

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                border: "border-blue-500",
                bg: "bg-blue-50",
                text: "text-blue-600",
                icon: "text-blue-500",
                hover: "hover:bg-blue-50",
                gradient: "from-blue-50 to-white"
            },
            purple: {
                border: "border-purple-500",
                bg: "bg-purple-50",
                text: "text-purple-600",
                icon: "text-purple-500",
                hover: "hover:bg-purple-50",
                gradient: "from-purple-50 to-white"
            },
            green: {
                border: "border-green-500",
                bg: "bg-green-50",
                text: "text-green-600",
                icon: "text-green-500",
                hover: "hover:bg-green-50",
                gradient: "from-green-50 to-white"
            },
            orange: {
                border: "border-orange-500",
                bg: "bg-orange-50",
                text: "text-orange-600",
                icon: "text-orange-500",
                hover: "hover:bg-orange-50",
                gradient: "from-orange-50 to-white"
            },
            pink: {
                border: "border-pink-500",
                bg: "bg-pink-50",
                text: "text-pink-600",
                icon: "text-pink-500",
                hover: "hover:bg-pink-50",
                gradient: "from-pink-50 to-white"
            }
        };
        return colors[color] || colors.blue;
    };

    return (
        <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Formation Section */}
            <motion.section 
                className="mb-16"
                variants={sectionVariants}
            >
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 inline-flex items-center gap-3 border-b-4 border-blue-500 pb-2"
                    whileHover={{ x: 10 }}
                >
                    <GraduationCap className="w-8 h-8 text-blue-500" />
                    {servicesData.formation.title}
                </motion.h2>
                
                <motion.div 
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100"
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        {servicesData.formation.items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <div className="flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-blue-500 group-hover:rotate-12 transition-transform" />
                                </div>
                                <div>
                                    <span className="text-lg font-medium text-slate-800">{item.text}</span>
                                    {item.description && (
                                        <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <motion.div 
                        className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500"
                        whileHover={{ x: 5 }}
                    >
                        <p className="text-lg text-blue-700 flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            {servicesData.formation.highlight}
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* IA Solutions Section */}
            <motion.section 
                className="mb-16"
                variants={sectionVariants}
            >
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 inline-flex items-center gap-3 border-b-4 border-purple-500 pb-2"
                    whileHover={{ x: 10 }}
                >
                    <Bot className="w-8 h-8 text-purple-500" />
                    {servicesData.iaSolutions.title}
                </motion.h2>

                <motion.div 
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100"
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicesData.iaSolutions.categories.map((category, catIdx) => (
                            <motion.div
                                key={catIdx}
                                variants={itemVariants}
                                className="space-y-4"
                            >
                                <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 pb-2 border-b border-purple-200">
                                    <category.icon className="w-5 h-5 text-purple-500" />
                                    {category.name}
                                </h3>
                                <ul className="space-y-3">
                                    {category.items.map((item, idx) => (
                                        <motion.li 
                                            key={idx}
                                            className="flex items-center gap-3 text-slate-700 group"
                                            whileHover={{ x: 5 }}
                                        >
                                            <item.icon className="w-4 h-4 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                            <span>{item.text}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>

            {/* IT Services Section */}
            <motion.section 
                className="mb-16"
                variants={sectionVariants}
            >
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 inline-flex items-center gap-3 border-b-4 border-green-500 pb-2"
                    whileHover={{ x: 10 }}
                >
                    <Code2 className="w-8 h-8 text-green-500" />
                    {servicesData.informatique.title}
                </motion.h2>

                <motion.div 
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100"
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        {servicesData.informatique.items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-3 p-4 rounded-xl hover:bg-green-50 transition-colors group"
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <div className="flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                                </div>
                                <div>
                                    <span className="text-lg font-medium text-slate-800">{item.text}</span>
                                    {item.description && (
                                        <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        className="mt-6 p-4 bg-green-50 rounded-xl border-l-4 border-green-500"
                        whileHover={{ x: 5 }}
                    >
                        <p className="text-lg text-green-700 flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            {servicesData.informatique.highlight}
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Printing Section */}
            <motion.section 
                className="mb-16"
                variants={sectionVariants}
            >
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 inline-flex items-center gap-3 border-b-4 border-orange-500 pb-2"
                    whileHover={{ x: 10 }}
                >
                    <Printer className="w-8 h-8 text-orange-500" />
                    {servicesData.impression.title}
                </motion.h2>

                <motion.div 
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100"
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <div className="grid md:grid-cols-2 gap-4">
                        {servicesData.impression.items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-3 p-4 rounded-xl hover:bg-orange-50 transition-colors group"
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <item.icon className="w-5 h-5 text-orange-500 group-hover:rotate-12 transition-transform" />
                                <span className="text-slate-700">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>

            {/* Female Entrepreneurship Section */}
            <motion.section 
                variants={sectionVariants}
            >
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 inline-flex items-center gap-3 border-b-4 border-pink-500 pb-2"
                    whileHover={{ x: 10 }}
                >
                    <Heart className="w-8 h-8 text-pink-500" />
                    {servicesData.entrepreneuriat.title}
                </motion.h2>

                <motion.div 
                    className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-pink-100"
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <p className="text-lg text-pink-700 mb-6 flex items-center gap-2 font-medium">
                        <Sparkle className="w-5 h-5" />
                        💡 Nous accompagnons les femmes à :
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {servicesData.entrepreneuriat.items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-colors group"
                                variants={itemVariants}
                                whileHover="hover"
                            >
                                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-lg text-slate-700">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        className="p-4 bg-white rounded-xl border-l-4 border-pink-500 shadow-sm"
                        whileHover={{ x: 5 }}
                    >
                        <p className="text-lg text-pink-600 flex items-center gap-2">
                            <Heart className="w-5 h-5" />
                            {servicesData.entrepreneuriat.highlight}
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>
        </motion.div>
    );
}