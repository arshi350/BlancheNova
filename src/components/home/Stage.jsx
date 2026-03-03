import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Briefcase,
    GraduationCap,
    Network,
    Brain,
    Award,
    Users,
    Calendar,
    Clock,
    MapPin,
    ArrowRight,
    CheckCircle,
    Star,
    FileText,
    MessageSquare,
    Laptop,
    Target,
    Rocket,
    Heart,
    Sparkles,
    BookOpen,
    Code,
    Globe,
    Trophy,
    Zap,
    TrendingUp
} from 'lucide-react';

export function Stage() {
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedType, setSelectedType] = useState('all');

    const services = [
        {
            id: 1,
            title: "Stage Intelligence Artificielle",
            description: "Plongez au cœur de l'IA et développez des solutions innovantes pour des cas d'usage réels.",
            icon: Brain,
            features: [
                "Machine Learning",
                "Computer Vision",
                "NLP & Chatbots",
                "Projet concret"
            ],
            color: "purple",
            duration: "4-6 mois",
            level: "Bac+4/5",
            spots: 5,
            category: "ia",
            gradient: "from-purple-600 to-indigo-600"
        },
        {
            id: 2,
            title: "Stage Réseaux & Sécurité",
            description: "Maîtrisez l'infrastructure réseau et la cybersécurité dans un environnement professionnel.",
            icon: Network,
            features: [
                "Configuration réseau",
                "Sécurité système",
                "Monitoring",
                "Certification Cisco"
            ],
            color: "blue",
            duration: "4-6 mois",
            level: "Bac+3/4",
            spots: 4,
            category: "reseau",
            gradient: "from-blue-600 to-cyan-600"
        },
        {
            id: 3,
            title: "Encadrement de Projets",
            description: "Encadrez des projets innovants et développez vos compétences en management d'équipe.",
            icon: Target,
            features: [
                "Gestion de projet",
                "Méthodes agiles",
                "Coaching équipe",
                "Suivi reporting"
            ],
            color: "green",
            duration: "6 mois",
            level: "Bac+5",
            spots: 3,
            category: "encadrement",
            gradient: "from-green-600 to-emerald-600"
        },
        {
            id: 4,
            title: "Attestation Officielle",
            description: "Obtenez une certification reconnue validant vos compétences et votre expérience.",
            icon: Award,
            features: [
                "Certification pro",
                "Évaluation continue",
                "Projet final",
                "Reconnu par l'État"
            ],
            color: "orange",
            duration: "Variable",
            level: "Tous niveaux",
            spots: 99,
            category: "certification",
            gradient: "from-orange-600 to-red-600"
        }
    ];

    const stats = [
        { icon: Users, value: "150+", label: "Stagiaires formés", color: "text-blue-600" },
        { icon: Trophy, value: "92%", label: "Taux d'embauche", color: "text-green-600" },
        { icon: Award, value: "5/5", label: "Satisfaction", color: "text-purple-600" },
        { icon: Globe, value: "10+", label: "Nationalités", color: "text-orange-600" }
    ];

    const benefits = [
        {
            icon: Rocket,
            title: "Projets concrets",
            description: "Travaillez sur des projets réels avec nos clients",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: Users,
            title: "Mentorat dédié",
            description: "Suivi personnalisé par des experts du secteur",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Award,
            title: "Certification",
            description: "Attestation reconnue en fin de stage",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Laptop,
            title: "Équipement fourni",
            description: "Matériel et outils professionnels mis à disposition",
            color: "from-orange-500 to-red-500"
        }
    ];

    // Variants d'animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
            }
        },
        tap: {
            scale: 0.98,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
            }
        }
    };

    const iconVariants = {
        hidden: { rotate: -180, scale: 0 },
        visible: {
            rotate: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        },
        hover: {
            rotate: [0, -10, 10, -5, 0],
            scale: 1.1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const featureVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        })
    };

    const shimmerVariants = {
        initial: { x: "-100%" },
        animate: {
            x: "100%",
            transition: {
                repeat: Infinity,
                duration: 2,
                ease: "linear"
            }
        }
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const getColorClasses = (color, isHovered = false) => {
        const colors = {
            purple: {
                text: isHovered ? 'text-white' : 'text-purple-600',
                bg: isHovered ? 'bg-purple-600' : 'bg-purple-100',
                light: 'bg-purple-50',
                border: 'border-purple-200',
                gradient: 'from-purple-600 to-indigo-600'
            },
            blue: {
                text: isHovered ? 'text-white' : 'text-blue-600',
                bg: isHovered ? 'bg-blue-600' : 'bg-blue-100',
                light: 'bg-blue-50',
                border: 'border-blue-200',
                gradient: 'from-blue-600 to-cyan-600'
            },
            green: {
                text: isHovered ? 'text-white' : 'text-green-600',
                bg: isHovered ? 'bg-green-600' : 'bg-green-100',
                light: 'bg-green-50',
                border: 'border-green-200',
                gradient: 'from-green-600 to-emerald-600'
            },
            orange: {
                text: isHovered ? 'text-white' : 'text-orange-600',
                bg: isHovered ? 'bg-orange-600' : 'bg-orange-100',
                light: 'bg-orange-50',
                border: 'border-orange-200',
                gradient: 'from-orange-600 to-red-600'
            }
        };
        return colors[color] || colors.blue;
    };

    const filteredServices = selectedType === 'all' 
        ? services 
        : services.filter(s => s.category === selectedType);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white"
        >
            {/* Hero Section avec animations */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
            >
                {/* Particules animées */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: 0
                        }}
                        animate={{
                            y: [null, -50, 50, -50],
                            x: [null, 50, -50, 50],
                            scale: [0, 1, 0.5, 0],
                            opacity: [0, 0.5, 0.2, 0]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                {/* Formes animées */}
                <motion.div 
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
                />
                <motion.div 
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"
                />

                <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-center"
                    >
                        {/* Badge animé */}
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/30"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold">PROGRAMME STAGE 2024</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6"
                        >
                            PROGRAMME 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300"> STAGE</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
                        >
                            Programme Stage & Insertion Professionnelle - Lancez votre carrière avec nous
                        </motion.p>

                        {/* Stats avec animations */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                        >
                            {stats.map((stat, idx) => {
                                const Icon = stat.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                                    >
                                        <motion.div
                                            animate={{ 
                                                rotate: [0, 10, -10, 0],
                                                scale: [1, 1.2, 1]
                                            }}
                                            transition={{ 
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatDelay: 3
                                            }}
                                        >
                                            <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                                        </motion.div>
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.8 + idx * 0.1, type: "spring" }}
                                            className="font-bold text-2xl text-white"
                                        >
                                            {stat.value}
                                        </motion.div>
                                        <div className="text-sm text-white/70">{stat.label}</div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Vague décorative avec animation */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.7 }}
                    className="absolute bottom-0 left-0 right-0"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <motion.path 
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1.5 }}
                            fill="white" 
                            fillOpacity="1" 
                            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                        />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                
                {/* Filtres avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, type: "spring" }}
                    className="flex justify-center mb-12"
                >
                    <div className="bg-white p-2 rounded-2xl shadow-lg inline-flex flex-wrap justify-center gap-2">
                        {[
                            { id: 'all', label: 'Tous les stages', color: 'indigo' },
                            { id: 'ia', label: 'IA', color: 'purple' },
                            { id: 'reseau', label: 'Réseaux', color: 'blue' },
                            { id: 'encadrement', label: 'Encadrement', color: 'green' }
                        ].map((type) => (
                            <motion.button
                                key={type.id}
                                onClick={() => setSelectedType(type.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    selectedType === type.id 
                                        ? `bg-${type.color}-600 text-white shadow-lg` 
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                {type.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Grille des stages avec animations */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={selectedType}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
                    >
                        {filteredServices.map((service) => {
                            const Icon = service.icon;
                            const isHovered = hoveredId === service.id;
                            const colors = getColorClasses(service.color, isHovered);

                            return (
                                <motion.div
                                    key={service.id}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onMouseEnter={() => setHoveredId(service.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                                >
                                    {/* Effet de brillance */}
                                    <motion.div
                                        variants={shimmerVariants}
                                        initial="initial"
                                        animate="animate"
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                                    />

                                    {/* Effet de fond au survol */}
                                    <motion.div 
                                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${colors.gradient}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isHovered ? 1 : 0 }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    {/* Badge nombre de places animé */}
                                    <motion.div 
                                        className="absolute top-4 right-4 z-10"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.span 
                                            whileHover={{ scale: 1.05 }}
                                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                service.spots < 5 
                                                    ? 'bg-red-500 text-white' 
                                                    : 'bg-green-500 text-white'
                                            }`}
                                        >
                                            {service.spots < 5 
                                                ? `Plus que ${service.spots} places` 
                                                : 'Places disponibles'}
                                        </motion.span>
                                    </motion.div>

                                    <div className="relative p-8">
                                        {/* En-tête avec icône animée */}
                                        <div className="flex items-start gap-4 mb-6">
                                            <motion.div 
                                                className={`${colors.light} p-4 rounded-2xl`}
                                                variants={iconVariants}
                                                initial="hidden"
                                                animate="visible"
                                                whileHover="hover"
                                            >
                                                <Icon className={`w-8 h-8 transition-colors duration-300 ${
                                                    isHovered ? 'text-white' : colors.text
                                                }`} />
                                            </motion.div>
                                            <div>
                                                <motion.h3 
                                                    className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                                                        isHovered ? 'text-white' : 'text-gray-800'
                                                    }`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                >
                                                    {service.title}
                                                </motion.h3>
                                                <motion.p 
                                                    className={`text-sm transition-colors duration-300 ${
                                                        isHovered ? 'text-white/80' : 'text-gray-500'
                                                    }`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    {service.description}
                                                </motion.p>
                                            </div>
                                        </div>

                                        {/* Métadonnées */}
                                        <motion.div 
                                            className="flex flex-wrap gap-4 mb-6"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <motion.div 
                                                className={`flex items-center gap-1 text-sm ${
                                                    isHovered ? 'text-white/80' : 'text-gray-500'
                                                }`}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <Clock className="w-4 h-4" />
                                                {service.duration}
                                            </motion.div>
                                            <motion.div 
                                                className={`flex items-center gap-1 text-sm ${
                                                    isHovered ? 'text-white/80' : 'text-gray-500'
                                                }`}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <GraduationCap className="w-4 h-4" />
                                                {service.level}
                                            </motion.div>
                                        </motion.div>

                                        {/* Fonctionnalités avec animations */}
                                        <motion.div 
                                            className="grid grid-cols-2 gap-2 mb-6"
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {service.features.map((feature, idx) => (
                                                <motion.div 
                                                    key={idx} 
                                                    className="flex items-center gap-1"
                                                    variants={featureVariants}
                                                    custom={idx}
                                                >
                                                    <CheckCircle className={`w-4 h-4 ${isHovered ? 'text-white' : 'text-green-500'}`} />
                                                    <span className={`text-xs ${isHovered ? 'text-white/80' : 'text-gray-500'}`}>
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        {/* Bouton animé */}
                                        <motion.button 
                                            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                                                isHovered 
                                                    ? 'bg-white text-indigo-600' 
                                                    : `bg-${service.color}-600 text-white hover:bg-${service.color}-700`
                                            }`}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span>Postuler maintenant</span>
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        </motion.button>
                                    </div>

                                    {/* Effet de bordure lumineuse */}
                                    <motion.div 
                                        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isHovered ? 0.5 : 0 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Section Avantages avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Pourquoi rejoindre notre programme ?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Un accompagnement complet pour booster votre carrière
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div 
                                    key={idx} 
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                                >
                                    <motion.div 
                                        className={`bg-gradient-to-r ${benefit.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Icon className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Section Témoignages avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        {/* Particules décoratives */}
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
                                initial={{
                                    x: Math.random() * 800,
                                    y: Math.random() * 400,
                                }}
                                animate={{
                                    y: [null, -20, 20, -20],
                                    x: [null, 20, -20, 20],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 8 + Math.random() * 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        ))}

                        <div className="text-center mb-8 relative z-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Ils témoignent
                            </h2>
                            <p className="text-gray-600">
                                Découvrez les parcours de nos anciens stagiaires
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            {[
                                {
                                    name: "Sophie Martin",
                                    role: "Ingénieure IA",
                                    testimonial: "Ce stage m'a permis de décrocher mon premier poste en CDI. L'encadrement était exceptionnel.",
                                    rating: 5
                                },
                                {
                                    name: "Thomas Dubois",
                                    role: "Administrateur Réseau",
                                    testimonial: "Une expérience formatrice avec des projets concrets. Je recommande vivement !",
                                    rating: 5
                                }
                            ].map((testimonial, idx) => (
                                <motion.div 
                                    key={idx} 
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="bg-white p-6 rounded-xl shadow-md"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                            >
                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4">"{testimonial.testimonial}"</p>
                                    <div className="flex items-center gap-3">
                                        <motion.div 
                                            className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Users className="w-5 h-5 text-indigo-600" />
                                        </motion.div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA Final avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.button 
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-5 px-12 rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 text-xl overflow-hidden"
                    >
                        {/* Effet de brillance */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "linear",
                                repeatDelay: 1
                            }}
                        />
                        <Heart className="w-6 h-6 relative" />
                        <span className="relative">Postuler au programme de stage</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <ArrowRight className="w-6 h-6" />
                        </motion.div>
                    </motion.button>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 mt-4 flex items-center justify-center gap-2"
                    >
                        <Calendar className="w-4 h-4" />
                        Prochaine session : Septembre 2024 - Candidatures ouvertes
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
}