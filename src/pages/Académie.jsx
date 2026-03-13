import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Film, 
  Video, 
  Bot, 
  BookOpen, 
  FileQuestion, 
  GraduationCap,
  FileSpreadsheet,
  FileText,
  Chrome,
  FileDigit,
  Sparkles,
  Clock,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Star,
  Play,
  BookMarked,
  Download,
  Share2,
  Target,
  Zap,
  Rocket,
  Globe,
  Brain,
  Layers,
  ChevronRight
} from 'lucide-react';

export function Academie() {
    const [activeTab, setActiveTab] = useState('ia');
    const [hoveredCard, setHoveredCard] = useState(null);

    const formationIA = [
        {
            id: 1,
            title: "Montage vidéo IA publicitaire",
            description: "Apprenez à créer des vidéos publicitaires percutantes en utilisant l'intelligence artificielle pour le montage et les effets visuels.",
            icon: Video,
            color: "blue",
            level: "Intermédiaire",
            duration: "4 semaines",
            students: 234,
            rating: 4.8,
            features: ["Montage automatisé", "Effets spéciaux IA", "Rendu accéléré"]
        },
        {
            id: 2,
            title: "Création de films IA",
            description: "Découvrez comment l'intelligence artificielle peut être utilisée pour générer des scénarios, créer des personnages et réaliser des films entiers.",
            icon: Film,
            color: "purple",
            level: "Avancé",
            duration: "6 semaines",
            students: 156,
            rating: 4.9,
            features: ["Scénarios IA", "Personnages virtuels", "Animation auto"]
        },
        {
            id: 3,
            title: "Maîtrise des outils IA",
            description: "Formez-vous à l'utilisation des outils d'intelligence artificielle les plus avancés pour la création de contenu.",
            icon: Bot,
            color: "green",
            level: "Débutant",
            duration: "3 semaines",
            students: 412,
            rating: 4.7,
            features: ["ChatGPT avancé", "Midjourney", "Copilot"]
        },
        {
            id: 4,
            title: "Création de contenus pédagogiques",
            description: "Apprenez à créer des contenus pédagogiques innovants en utilisant l'intelligence artificielle.",
            icon: BookOpen,
            color: "orange",
            level: "Intermédiaire",
            duration: "4 semaines",
            students: 189,
            rating: 4.6,
            features: ["Modules e-learning", "Quiz interactifs", "Adaptive learning"]
        },
        {
            id: 5,
            title: "Génération de TP & QCM",
            description: "Apprenez à générer automatiquement des travaux pratiques et des questionnaires à partir de vos contenus.",
            icon: FileQuestion,
            color: "red",
            level: "Intermédiaire",
            duration: "3 semaines",
            students: 167,
            rating: 4.8,
            features: ["Génération auto", "Correction IA", "Analytics"]
        },
        {
            id: 6,
            title: "Avatar éducatif IA",
            description: "Créez des avatars éducatifs interactifs pour enrichir l'expérience d'apprentissage.",
            icon: GraduationCap,
            color: "indigo",
            level: "Avancé",
            duration: "5 semaines",
            students: 98,
            rating: 4.9,
            features: ["Avatars 3D", "Voix naturelle", "Interaction temps réel"]
        }
    ];

    const formationBI = [
        {
            id: 1,
            title: "Excel automatisé",
            description: "Apprenez à automatiser vos tâches Excel avec des macros, des scripts VBA et des outils d'IA.",
            icon: FileSpreadsheet,
            color: "emerald",
            level: "Intermédiaire",
            duration: "3 semaines",
            students: 567,
            rating: 4.8,
            features: ["Macros VBA", "Power Query", "Tableaux croisés"]
        },
        {
            id: 2,
            title: "Word avancé",
            description: "Découvrez les fonctionnalités avancées de Microsoft Word, modèles et automatisation.",
            icon: FileText,
            color: "blue",
            level: "Débutant",
            duration: "2 semaines",
            students: 423,
            rating: 4.7,
            features: ["Publipostage", "Modèles dynamiques", "Collaboration"]
        },
        {
            id: 3,
            title: "Google Workspace",
            description: "Formez-vous à l'utilisation de Google Workspace pour automatiser vos flux de travail.",
            icon: Chrome,
            color: "yellow",
            level: "Intermédiaire",
            duration: "3 semaines",
            students: 345,
            rating: 4.6,
            features: ["Google Apps Script", "Workflows", "Intégrations"]
        },
        {
            id: 4,
            title: "Automatisation documentaire",
            description: "Automatisez la création, gestion et partage de documents avec l'IA.",
            icon: FileDigit,
            color: "purple",
            level: "Avancé",
            duration: "4 semaines",
            students: 178,
            rating: 4.9,
            features: ["Documents intelligents", "Flux auto", "Archivage"]
        }
    ];

    const stats = [
        { icon: Users, value: "1500+", label: "Apprenants", color: "text-blue-500" },
        { icon: Award, value: "98%", label: "Satisfaction", color: "text-green-500" },
        { icon: Clock, value: "24/7", label: "Accès illimité", color: "text-purple-500" },
        { icon: Globe, value: "15+", label: "Pays", color: "text-orange-500" }
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
            y: -8,
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

    const getColorClasses = (color, isHovered = false) => {
        const colors = {
            blue: {
                bg: isHovered ? 'bg-blue-600' : 'bg-blue-500',
                light: isHovered ? 'bg-blue-800':' bg-blue-50',
                text: isHovered ? 'text-white' : 'text-blue-600',
                border: 'border-blue-200',
                gradient: 'from-blue-500 to-blue-600'
            },
            purple: {
                bg: isHovered ? 'bg-purple-600' : 'bg-purple-500',
                light: isHovered ? 'bg-purple-800':' bg-purple-50',
                text: isHovered ? 'text-white' : 'text-purple-600',
                border: 'border-purple-200',
                gradient: 'from-purple-500 to-purple-600'
            },
            green: {
                bg: isHovered ? 'bg-green-600' : 'bg-green-500',
                light: isHovered ? 'bg-green-800':' bg-green-50',
                text: isHovered ? 'text-white' : 'text-green-600',
                border: 'border-green-200',
                gradient: 'from-green-500 to-green-600'
            },
            orange: {
                bg: isHovered ? 'bg-orange-600' : 'bg-orange-500',
                light: isHovered ? 'bg-orange-800':' bg-orange-50',
                text: isHovered ? 'text-white' : 'text-orange-600',
                border: 'border-orange-200',
                gradient: 'from-orange-500 to-orange-600'
            },
            red: {
                bg: isHovered ? 'bg-red-600' : 'bg-red-500',
                light: isHovered ? 'bg-red-800':' bg-red-50',
                text: isHovered ? 'text-white' : 'text-red-600',
                border: 'border-red-200',
                gradient: 'from-red-500 to-red-600'
            },
            indigo: {
                bg: isHovered ? 'bg-indigo-600' : 'bg-indigo-500',
                light: isHovered ? 'bg-indigo-800':' bg-indigo-50',
                text: isHovered ? 'text-white' : 'text-indigo-600',
                border: 'border-indigo-200',
                gradient: 'from-indigo-500 to-indigo-600'
            },
            emerald: {
                bg: isHovered ? 'bg-emerald-600' : 'bg-emerald-500',
                light: isHovered ? 'bg-emerald-800':' bg-emerald-50',
                text: isHovered ? 'text-white' : 'text-emerald-600',
                border: 'border-emerald-200',
                gradient: 'from-emerald-500 to-emerald-600'
            },
            yellow: {
                bg: isHovered ? 'bg-yellow-600' : 'bg-yellow-500',
                light: isHovered ? 'bg-yellow-800':' bg-yellow-50',
                text: isHovered ? 'text-white' : 'text-yellow-600',
                border: 'border-yellow-200',
                gradient: 'from-yellow-500 to-yellow-600'
            }
        };
        return colors[color] || colors.blue;
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='pt-20'
        >
            {/* Hero Section avec animations améliorées */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
            >
                {/* Particules animées */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: 0
                        }}
                        animate={{
                            y: [null, -30, 30, -30],
                            x: [null, 30, -30, 30],
                            scale: [0, 1, 0.5, 0],
                            opacity: [0, 1, 0.5, 0]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                    }}
                />
                
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-center"
                    >
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold">FORMATION PROFESSIONNELLE</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6"
                        >
                            ACADÉMIE IA & 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300"> BUREAUTIQUE</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
                        >
                            Formation en Intelligence Artificielle & Bureautique Intelligente
                        </motion.p>

                        {/* Stats avec animation */}
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                {/* Tabs de navigation avec animation */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, type: "spring" }}
                    className="flex justify-center mb-12"
                >
                    <div className="bg-white p-1 rounded-2xl shadow-lg inline-flex">
                        <motion.button
                            onClick={() => setActiveTab('ia')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                                activeTab === 'ia' 
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <Brain className="w-5 h-5" />
                            Intelligence Artificielle
                        </motion.button>
                        <motion.button
                            onClick={() => setActiveTab('bureautique')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                                activeTab === 'bureautique' 
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            <Layers className="w-5 h-5" />
                            Bureautique Intelligente
                        </motion.button>
                    </div>
                </motion.div>

                {/* Formations avec animations améliorées */}
                <AnimatePresence mode="wait">
                    {activeTab === 'ia' && (
                        <motion.div
                            key="ia"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                            className="mb-16"
                        >
                            <motion.div 
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-center mb-12"
                            >
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    Formations en Intelligence Artificielle
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Maîtrisez les outils d'IA les plus avancés pour révolutionner votre façon de créer
                                </p>
                            </motion.div>
                            
                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {formationIA.map((formation) => {
                                    const Icon = formation.icon;
                                    const isHovered = hoveredCard === `ia-${formation.id}`;
                                    const colors = getColorClasses(formation.color, isHovered);

                                    return (
                                        <motion.div
                                            key={`ia-${formation.id}`}
                                            variants={cardVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            onMouseEnter={() => setHoveredCard(`ia-${formation.id}`)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                                            custom={formation.id}
                                        >
                                            {/* Effet de brillance */}
                                            <motion.div
                                                variants={shimmerVariants}
                                                initial="initial"
                                                animate="animate"
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                                            />

                                            {/* Gradient d'arrière-plan au survol */}
                                            <motion.div 
                                                className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isHovered ? 1 : 0 }}
                                                transition={{ duration: 0.5 }}
                                            />

                                            {/* Top bar colorée */}
                                            <motion.div 
                                                className={`h-2 ${colors.bg}`}
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: isHovered ? 1 : 0.3 }}
                                                transition={{ duration: 0.5 }}
                                            />

                                            <div className="relative p-6 z-10">
                                                {/* En-tête avec badge et icône */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <motion.div 
                                                        className={`${colors.light} p-3 rounded-xl`}
                                                        variants={iconVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        whileHover="hover"
                                                    >
                                                        <Icon className={`w-6 h-6 transition-colors duration-300 ${
                                                            isHovered ? 'text-white' : colors.text
                                                        }`} />
                                                    </motion.div>
                                                    <motion.div 
                                                        className="flex items-center gap-1"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 0.3 }}
                                                    >
                                                        <Star className={`w-4 h-4 ${isHovered ? 'text-white' : 'text-yellow-400'} fill-current`} />
                                                        <span className={`text-sm font-semibold ${isHovered ? 'text-white' : 'text-gray-700'}`}>
                                                            {formation.rating}
                                                        </span>
                                                    </motion.div>
                                                </div>

                                                {/* Titre */}
                                                <motion.h3 
                                                    className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                                                        isHovered ? 'text-white' : 'text-gray-800'
                                                    }`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                >
                                                    {formation.title}
                                                </motion.h3>

                                                {/* Description */}
                                                <motion.p 
                                                    className={`text-sm mb-4 transition-colors duration-300 ${
                                                        isHovered ? 'text-white/90' : 'text-gray-600'
                                                    }`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    {formation.description}
                                                </motion.p>

                                                {/* Métadonnées */}
                                                <motion.div 
                                                    className="flex items-center gap-4 mb-4"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    <motion.div 
                                                        className={`flex items-center gap-1 text-xs ${
                                                            isHovered ? 'text-white/80' : 'text-gray-500'
                                                        }`}
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        <Clock className="w-3 h-3" />
                                                        {formation.duration}
                                                    </motion.div>
                                                    <motion.div 
                                                        className={`flex items-center gap-1 text-xs ${
                                                            isHovered ? 'text-white/80' : 'text-gray-500'
                                                        }`}
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        <Users className="w-3 h-3" />
                                                        {formation.students} étudiants
                                                    </motion.div>
                                                </motion.div>

                                                {/* Features */}
                                                <motion.div 
                                                    className="space-y-2 mb-4"
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={containerVariants}
                                                >
                                                    {formation.features.map((feature, idx) => (
                                                        <motion.div 
                                                            key={idx} 
                                                            className="flex items-center gap-2"
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

                                                {/* Niveau et bouton */}
                                                <div className="flex items-center justify-between">
                                                    <motion.span 
                                                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                            isHovered 
                                                                ? 'bg-white/20 text-white' 
                                                                : 'bg-gray-100 text-gray-600'
                                                        }`}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {formation.level}
                                                    </motion.span>
                                                    
                                                    <motion.button 
                                                        className={`inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 group/btn ${
                                                            isHovered ? 'text-white' : colors.text
                                                        }`}
                                                        whileHover={{ x: 5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => window.open('https://wa.me/237677843119', '_blank')}
                                                    >
                                                        En savoir plus
                                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Formations Bureautique avec mêmes animations améliorées */}
                    {activeTab === 'bureautique' && (
                        <motion.div
                            key="bureautique"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                            className="mb-16"
                        >
                            <motion.div 
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-center mb-12"
                            >
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                    Formations en Bureautique Intelligente
                                </h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Optimisez votre productivité avec les outils bureautiques augmentés par l'IA
                                </p>
                            </motion.div>
                            
                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {formationBI.map((formation) => {
                                    const Icon = formation.icon;
                                    const isHovered = hoveredCard === `bi-${formation.id}`;
                                    const colors = getColorClasses(formation.color, isHovered);

                                    return (
                                        <motion.div
                                            key={`bi-${formation.id}`}
                                            variants={cardVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            onMouseEnter={() => setHoveredCard(`bi-${formation.id}`)}
                                            onMouseLeave={() => setHoveredCard(null)}
                                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                                            custom={formation.id}
                                        >
                                            <motion.div
                                                variants={shimmerVariants}
                                                initial="initial"
                                                animate="animate"
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                                            />

                                            <motion.div 
                                                className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isHovered ? 1 : 0 }}
                                                transition={{ duration: 0.5 }}
                                            />

                                            <motion.div 
                                                className={`h-2 ${colors.bg}`}
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: isHovered ? 1 : 0.3 }}
                                                transition={{ duration: 0.5 }}
                                            />

                                            <div className="relative p-6 z-10">
                                                <div className="flex items-start justify-between mb-4">
                                                    <motion.div 
                                                        className={`${colors.light} p-3 rounded-xl`}
                                                        variants={iconVariants}
                                                        initial="hidden"
                                                        animate="visible"
                                                        whileHover="hover"
                                                    >
                                                        <Icon className={`w-6 h-6 transition-colors duration-300 ${
                                                            isHovered ? 'text-white' : colors.text
                                                        }`} />
                                                    </motion.div>
                                                    <motion.div 
                                                        className="flex items-center gap-1"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 0.3 }}
                                                    >
                                                        <Star className={`w-4 h-4 ${isHovered ? 'text-white' : 'text-yellow-400'} fill-current`} />
                                                        <span className={`text-sm font-semibold ${isHovered ? 'text-white' : 'text-gray-700'}`}>
                                                            {formation.rating}
                                                        </span>
                                                    </motion.div>
                                                </div>

                                                <motion.h3 
                                                    className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                                                        isHovered ? 'text-white' : 'text-gray-800'
                                                    }`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                >
                                                    {formation.title}
                                                </motion.h3>

                                                <motion.p 
                                                    className={`text-sm mb-4 transition-colors duration-300 ${
                                                        isHovered ? 'text-white/90' : 'text-gray-600'
                                                    }`}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    {formation.description}
                                                </motion.p>

                                                <motion.div 
                                                    className="flex items-center gap-4 mb-4"
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    <motion.div 
                                                        className={`flex items-center gap-1 text-xs ${
                                                            isHovered ? 'text-white/80' : 'text-gray-500'
                                                        }`}
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        <Clock className="w-3 h-3" />
                                                        {formation.duration}
                                                    </motion.div>
                                                    <motion.div 
                                                        className={`flex items-center gap-1 text-xs ${
                                                            isHovered ? 'text-white/80' : 'text-gray-500'
                                                        }`}
                                                        whileHover={{ scale: 1.1 }}
                                                    >
                                                        <Users className="w-3 h-3" />
                                                        {formation.students} étudiants
                                                    </motion.div>
                                                </motion.div>

                                                <motion.div 
                                                    className="space-y-2 mb-4"
                                                    initial="hidden"
                                                    animate="visible"
                                                    variants={containerVariants}
                                                >
                                                    {formation.features.map((feature, idx) => (
                                                        <motion.div 
                                                            key={idx} 
                                                            className="flex items-center gap-2"
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

                                                <div className="flex items-center justify-between">
                                                    <motion.span 
                                                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                            isHovered 
                                                                ? 'bg-white/20 text-white' 
                                                                : 'bg-gray-100 text-gray-600'
                                                        }`}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {formation.level}
                                                    </motion.span>
                                                    
                                                    <motion.button 
                                                        className={`inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 group/btn ${
                                                            isHovered ? 'text-white' : colors.text
                                                        }`}
                                                        whileHover={{ x: 5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        En savoir plus
                                                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Section des avantages avec animation */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mt-15 mb-10"
                >
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        {/* Effet de particules */}
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
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

                        <div className="text-center mb-10">
                            <motion.h3 
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl font-bold text-gray-800 mb-3"
                            >
                                Pourquoi choisir notre académie ?
                            </motion.h3>
                            <motion.p 
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-600"
                            >
                                Des formations conçues pour votre réussite
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Award,
                                    title: "Certification reconnue",
                                    description: "Obtenez une certification valorisée par les entreprises"
                                },
                                {
                                    icon: Users,
                                    title: "Formateurs experts",
                                    description: "Apprenez auprès de professionnels du secteur"
                                },
                                {
                                    icon: Rocket,
                                    title: "Projets concrets",
                                    description: "Mettez en pratique avec des cas réels d'entreprise"
                                }
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div 
                                        key={idx}
                                        initial={{ x: -50, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + idx * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="flex items-start gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-xl"
                                    >
                                        <motion.div 
                                            className="bg-white p-3 rounded-xl shadow-md"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action avec animation */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mt-10 mb-10"
                >
                    <a href="https://wa.me/+237677843119?text=Bonjour%2C%20je%20souhaite%20m'inscrire%20à%20la%20prochaine%20session%20de%20la%20formation%20IA%20de%20BlancheNova%20Tech." target="_blank" rel="noopener noreferrer">
                    <motion.button 
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-6 mb-3 rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 text-lg overflow-hidden"
                    >
                        {/* Effet de brillance sur le bouton */}
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
                        <span>Rejoindre la prochaine session</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                    </a>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 mt-4 flex items-center justify-center gap-2"
                    >
                        <Calendar className="w-4 h-4" />
                        Prochaine session : 15 Mars 2024 - Places limitées à 20 personnes
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
}