import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Network,
    Wifi,
    Server,
    HardDrive,
    Code,
    Shield,
    Globe,
    Database,
    Monitor,
    Lock,
    Cloud,
    Cpu,
    Users,
    Clock,
    CheckCircle,
    ArrowRight,
    Zap,
    Award,
    Headphones,
    Truck,
    Settings,
    AlertCircle,
    Phone,
    Star,
    TrendingUp,
    Sparkles
} from 'lucide-react';

export function ServicesIT() {
    const [hoveredId, setHoveredId] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const services = [
        {
            id: 1,
            title: "Réseaux informatiques",
            description: "Conception, déploiement et optimisation de réseaux d'entreprise performants et évolutifs.",
            icon: Network,
            features: [
                "Architecture réseau",
                "Configuration switch/routeur",
                "LAN/WAN/VLAN",
                "Optimisation débit"
            ],
            category: "infrastructure",
            color: "blue",
            stats: "99.9% disponibilité",
            bgImage: "bg-gradient-to-br from-blue-50 to-indigo-50",
            gradient: "from-blue-600 to-indigo-600"
        },
        {
            id: 2,
            title: "Sécurisation WiFi",
            description: "Protection avancée de vos réseaux sans fil contre les intrusions et les cyberattaques.",
            icon: Wifi,
            features: [
                "Chiffrement WPA3",
                "Contrôle d'accès",
                "Détection intrusion",
                "Audit sécurité"
            ],
            category: "securite",
            color: "green",
            stats: "100% sécurisé",
            bgImage: "bg-gradient-to-br from-green-50 to-emerald-50",
            gradient: "from-green-600 to-emerald-600"
        },
        {
            id: 3,
            title: "Installation infrastructures",
            description: "Déploiement complet de vos infrastructures IT : serveurs, câblage, baies de brassage.",
            icon: Server,
            features: [
                "Câblage structuré",
                "Baies de brassage",
                "Salles serveurs",
                "Mise en production"
            ],
            category: "infrastructure",
            color: "purple",
            stats: "Installation clé en main",
            bgImage: "bg-gradient-to-br from-purple-50 to-pink-50",
            gradient: "from-purple-600 to-pink-600"
        },
        {
            id: 4,
            title: "Sauvegarde & surveillance système",
            description: "Protection de vos données et monitoring 24/7 de vos systèmes pour une continuité d'activité.",
            icon: HardDrive,
            features: [
                "Backup automatisé",
                "Monitoring temps réel",
                "Alertes proactive",
                "Plan reprise activité"
            ],
            category: "securite",
            color: "orange",
            stats: "24/7 surveillance",
            bgImage: "bg-gradient-to-br from-orange-50 to-red-50",
            gradient: "from-orange-600 to-red-600"
        },
        {
            id: 5,
            title: "Développement d'applications simples",
            description: "Création d'applications sur mesure pour optimiser vos processus métier.",
            icon: Code,
            features: [
                "Applications web",
                "Outils internes",
                "Automatisation",
                "Interface intuitive"
            ],
            category: "dev",
            color: "red",
            stats: "Sur mesure",
            bgImage: "bg-gradient-to-br from-red-50 to-rose-50",
            gradient: "from-red-600 to-rose-600"
        },
        {
            id:6,
            title:"Cyber Sécurité ",
            description:"Protection avancée de vos systèmes contre les menaces cybernétiques.",
            icon: Shield,
            features:[
                "Protection contre les attaques DDoS",
                "Détection et réponse aux incidents",
                "Audit de sécurité",
                "Formation à la sensibilisation à la sécurité"
            ],
            category:"securite",
            color:"blue",
            stats:"",
            bgImage:"",
            gradient:"from-blue-600 to-cyan-600"
        }
    ];

    const categories = [
        { id: 'all', label: 'Tous les services', icon: Globe },
        { id: 'infrastructure', label: 'Infrastructure', icon: Server },
        { id: 'securite', label: 'Sécurité', icon: Shield },
        { id: 'dev', label: 'Développement', icon: Code }
    ];

    const stats = [
        { icon: Users, value: "200+", label: "Clients satisfaits", color: "text-blue-600" },
        { icon: Clock, value: "15+", label: "Années d'expérience", color: "text-green-600" },
        { icon: Award, value: "24/7", label: "Support disponible", color: "text-purple-600" },
        { icon: Zap, value: "99.9%", label: "Taux de disponibilité", color: "text-orange-600" }
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

    const networkLineVariants = {
        initial: { pathLength: 0, opacity: 0 },
        animate: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    };

    const getColorClasses = (color, isHovered = false) => {
        const colors = {
            blue: {
                text: 'text-blue-600',
                bg: isHovered ? 'bg-blue-600' : 'bg-blue-100',
                border: 'border-blue-200',
                gradient: 'from-blue-600 to-indigo-600',
                light: 'bg-blue-50',
                transition: "transition-colors duration-300"
            },
            green: {
                text: 'text-green-600',
                bg: isHovered ? 'bg-green-600' : 'bg-green-100',
                border: 'border-green-200',
                gradient: 'from-green-600 to-emerald-600',
                light: 'bg-green-50',
                transition: "transition-colors duration-300"
            },
            purple: {
                text:  'text-purple-600',
                bg: isHovered ? 'bg-purple-600' : 'bg-purple-100',
                border: 'border-purple-200',
                gradient: 'from-purple-600 to-pink-600',
                light: 'bg-purple-50',
                transition: "transition-colors duration-300"
            },
            orange: {
                text:  'text-orange-600',
                bg: isHovered ? 'bg-orange-600' : 'bg-orange-100',
                border: 'border-orange-200',
                gradient: 'from-orange-600 to-red-600',
                light: 'bg-orange-50',
                transition: "transition-colors duration-300"
            },
            red: {
                text: 'text-red-600',
                bg: isHovered ? 'bg-red-600' : 'bg-red-100',
                border: 'border-red-200',
                gradient: 'from-red-600 to-rose-600',
                light: 'bg-red-50',
                transition: "transition-colors duration-300"
            }
        };
        return colors[color] || colors.blue;
    };

    const filteredServices = activeCategory === 'all' 
        ? services 
        : services.filter(s => s.category === activeCategory);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-gray-50 pt-20 to-white"
        >
            {/* Hero Section avec effet de réseau animé */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900"
            >
                {/* Animation de réseau dynamique */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <motion.path 
                                    d="M 40 0 L 0 0 0 40" 
                                    fill="none" 
                                    stroke="white" 
                                    strokeWidth="0.5"
                                    variants={networkLineVariants}
                                    initial="initial"
                                    animate="animate"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                    
                    {/* Particules animées */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
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
                </div>

                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-center"
                    >
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20"
                        >
                            <Shield className="w-4 h-4" />
                            <span className="text-sm font-semibold">EXPERTISE IT & CYBERSÉCURITÉ</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                        >
                            SERVICES 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"> INFORMATIQUES</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
                        >
                            Infrastructure & Cybersécurité pour entreprises
                        </motion.p>

                        {/* Stats rapides avec animations */}
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

                {/* Wave separator avec animation */}
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
                            fill="#f9fafb" 
                            fillOpacity="1" 
                            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                        />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                
                {/* Filtres par catégorie avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, type: "spring" }}
                    className="flex justify-center mb-12"
                >
                    <div className="bg-white p-2 rounded-2xl shadow-lg flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = activeCategory === cat.id;
                            return (
                                <motion.button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                                        isActive 
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {cat.label}
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Grille des services avec animations */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeCategory}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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
                                    className={`group relative ${colors.light} rounded-2xl shadow-lg  hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer`}
                                >
                                    {/* Effet de brillance */}
                                    <motion.div
                                        variants={shimmerVariants}
                                        initial="initial"
                                        animate="animate"
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                                    />

                                    {/* Image de fond avec overlay */}
                                    <motion.div 
                                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${colors.light}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isHovered ? 1 : 0 }}
                                        transition={{ duration: 0.5 }}
                                    />

                                    {/* Barre de progression au survol */}
                                    <motion.div 
                                        className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${colors.gradient}`}
                                        initial={{ width: "0%" }}
                                        animate={{ width: isHovered ? "100%" : "0%" }}
                                        transition={{ duration: 0.7 }}
                                    />

                                    <div className={`relative p-8 ${colors.bg}`}>
                                        {/* En-tête avec icône */}
                                        <div className="flex items-start justify-between mb-6">
                                            <motion.div 
                                                className={`${colors.light} p-4 rounded-2xl`}
                                                variants={iconVariants}
                                                initial="hidden"
                                                animate="visible"
                                                whileHover="hover"
                                            >
                                                <Icon className={`w-8 h-8 transition-colors duration-300 ${colors.text}`} />
                                            </motion.div>
                                            {/* Badge stat */}
                                            <motion.span 
                                                whileHover={{ scale: 1.05 }}
                                                className={`px-3 py-1 text-xs font-bold rounded-full ${
                                                    isHovered 
                                                        ? 'bg-white/20 text-white' 
                                                        : 'bg-gray-100 text-gray-600'
                                                }`}
                                            >
                                                {service.stats}
                                            </motion.span>
                                        </div>

                                        {/* Titre */}
                                        <motion.h3 
                                            className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                                                isHovered ? 'text-white' : 'text-gray-800'
                                            }`}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {service.title}
                                        </motion.h3>

                                        {/* Description */}
                                        <motion.p 
                                            className={`mb-6 transition-colors duration-300 ${
                                                isHovered ? 'text-white/90' : 'text-gray-600'
                                            }`}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {service.description}
                                        </motion.p>

                                        {/* Caractéristiques */}
                                        <motion.div 
                                            className="space-y-3 mb-6"
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {service.features.map((feature, idx) => (
                                                <motion.div 
                                                    key={idx} 
                                                    className="flex items-center gap-2"
                                                    variants={featureVariants}
                                                    custom={idx}
                                                >
                                                    <CheckCircle className={`w-5 h-5 ${isHovered ? 'text-white' : 'text-green-500'}`} />
                                                    <span className={`text-sm ${isHovered ? 'text-white/80' : 'text-gray-500'}`}>
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        {/* Bouton */}
                                        <motion.button 
                                            className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group/btn ${
                                                isHovered ? 'text-white' : colors.text
                                            }`}
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            En savoir plus
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                        </motion.button>
                                    </div>

                                    {/* Effet de brillance sur les bords */}
                                    <motion.div 
                                        className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-all duration-300 pointer-events-none"
                                        animate={{ borderColor: isHovered ? 'rgba(255,255,255,0.2)' : 'transparent' }}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Section des garanties avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {[
                        {
                            icon: Clock,
                            title: "Intervention rapide",
                            description: "Délai d'intervention sous 4h ouvrées",
                            color: "blue"
                        },
                        {
                            icon: Award,
                            title: "Expertise certifiée",
                            description: "Équipes certifiées et expérimentées",
                            color: "green"
                        },
                        {
                            icon: Headphones,
                            title: "Support dédié",
                            description: "Assistance technique personnalisée",
                            color: "purple"
                        }
                    ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div 
                                key={idx} 
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-start gap-4"
                            >
                                <motion.div 
                                    className={`bg-${item.color}-100 p-3 rounded-lg`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Icon className={`w-6 h-6 text-${item.color}-600`} />
                                </motion.div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA principal avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl mb-20"
                >
                    {/* Éléments flottants */}
                    <motion.div
                        variants={floatingVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
                    />
                    <motion.div
                        variants={floatingVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
                    />
                    
                    {/* Effet de pulsation */}
                    <motion.div
                        variants={pulseVariants}
                        initial="initial"
                        animate="animate"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full"
                    />

                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')"
                        }}
                    />
                    
                    <div className="relative p-12 md:p-16 text-center">
                        <motion.h3 
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Prêt à sécuriser votre infrastructure ?
                        </motion.h3>
                        
                        <motion.p 
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                        >
                            Bénéficiez d'un audit gratuit et d'un devis personnalisé pour vos besoins IT
                        </motion.p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transform transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 overflow-hidden"
                            >
                                {/* Effet de brillance sur le bouton */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200 to-transparent"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "linear",
                                        repeatDelay: 1
                                    }}
                                />
                                <span className="relative">Demander un devis</span>
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
                            
                            <motion.button 
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative border-2 border-white text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-white/10 transform transition-all duration-300 inline-flex items-center gap-3 overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "linear",
                                        repeatDelay: 1
                                    }}
                                />
                                <Phone className="w-6 h-6 relative" />
                                <span className="relative">Être rappelé</span>
                            </motion.button>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center justify-center gap-6 mt-8 text-white/80 text-sm"
                        >
                            {[
                                { icon: CheckCircle, text: "Devis gratuit" },
                                { icon: CheckCircle, text: "Sans engagement" },
                                { icon: CheckCircle, text: "Réponse sous 24h" }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Section des partenaires/certifications avec animations */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-gray-500 mb-6">Ils nous font confiance et nous certifient</p>
                    <div className="flex justify-center items-center gap-8 flex-wrap">
                        {['Cisco', 'Microsoft', 'Fortinet', 'VMware'].map((partner, idx) => (
                            <motion.div 
                                key={idx} 
                                whileHover={{ scale: 1.05, y: -5 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + idx * 0.1 }}
                                className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-200"
                            >
                                <span className="font-semibold text-gray-700">{partner}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Section témoignages */}
                {/* <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">Ce que disent nos clients</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-xl shadow-md"
                            >
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "Service exceptionnel ! Installation rapide et professionnelle. Je recommande vivement."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                    <div>
                                        <p className="font-semibold text-gray-800">Client {i}</p>
                                        <p className="text-xs text-gray-500">Entreprise {i}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}
            </div>
        </motion.div>
    );
}