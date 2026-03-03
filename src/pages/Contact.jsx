import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    MessageCircle,
    Send,
    User,
    Users,
    Video,
    Briefcase,
    Clock,
    CheckCircle,
    AlertCircle,
    ArrowRight,
    Globe,
    Linkedin,
    Twitter,
    Youtube,
    Sparkles,
    Heart,
    Star,
    Zap,
    Loader2,
    ChevronRight,
    Menu,
    X,
    PhoneCall,
    MailOpen,
    MapPinned,
    Clock4,
    ThumbsUp,
    Award,
    Shield,
    Rocket,
    Sun,
    Moon,
    Bell,
    BellRing,
    Volume2,
    VolumeX,
    Mic,
    MicOff
} from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        sujet: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(null);
    const [selectedService, setSelectedService] = useState('');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [focusedField, setFocusedField] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollY } = useScroll();
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('loading');
        
        // Simulation d'envoi avec son
        if (soundEnabled) {
            // Jouer un son d'envoi (simulé)
            console.log('🔔 Son de notification joué');
        }

        setTimeout(() => {
            setFormStatus('success');
            if (notifications) {
                // Notification simulée
                if (Notification.permission === 'granted') {
                    new Notification('Message envoyé !', {
                        body: 'Nous vous répondrons sous 24h',
                        icon: '/favicon.ico'
                    });
                }
            }
            setTimeout(() => setFormStatus(null), 3000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Adresse",
            content: "Yaoundé, Cameroun",
            detail: "Quartier Mvan, Rue 3.456",
            color: "red",
            action: "https://maps.google.com",
            gradient: "from-red-500 to-pink-500",
            bgLight: "bg-red-50",
            iconColor: "text-red-600"
        },
        {
            icon: Mail,
            title: "Email",
            content: "contact@votreentreprise.com",
            detail: "support@votreentreprise.com",
            color: "blue",
            action: "mailto:contact@votreentreprise.com",
            gradient: "from-blue-500 to-cyan-500",
            bgLight: "bg-blue-50",
            iconColor: "text-blue-600"
        },
        {
            icon: Phone,
            title: "WhatsApp",
            content: "+237 123 456 789",
            detail: "Disponible 24/7",
            color: "green",
            action: "https://wa.me/237123456789",
            gradient: "from-green-500 to-emerald-500",
            bgLight: "bg-green-50",
            iconColor: "text-green-600"
        },
        {
            icon: Clock,
            title: "Horaires",
            content: "Lun - Ven: 8h - 18h",
            detail: "Sam: 9h - 13h",
            color: "purple",
            gradient: "from-purple-500 to-indigo-500",
            bgLight: "bg-purple-50",
            iconColor: "text-purple-600"
        }
    ];

    const socialNetworks = [
        { icon: Facebook, name: "Facebook", link: "https://facebook.com", color: "bg-blue-600", hover: "hover:bg-blue-700", gradient: "from-blue-600 to-blue-800" },
        { icon: Instagram, name: "Instagram", link: "https://instagram.com", color: "bg-pink-600", hover: "hover:bg-pink-700", gradient: "from-pink-600 to-purple-600" },
        { icon: MessageCircle, name: "TikTok", link: "https://tiktok.com", color: "bg-black", hover: "hover:bg-gray-800", gradient: "from-gray-900 to-black" },
        { icon: Linkedin, name: "LinkedIn", link: "https://linkedin.com", color: "bg-blue-700", hover: "hover:bg-blue-800", gradient: "from-blue-700 to-blue-900" },
        { icon: Twitter, name: "Twitter", link: "https://twitter.com", color: "bg-sky-500", hover: "hover:bg-sky-600", gradient: "from-sky-500 to-sky-700" },
        { icon: Youtube, name: "YouTube", link: "https://youtube.com", color: "bg-red-600", hover: "hover:bg-red-700", gradient: "from-red-600 to-red-800" }
    ];

    const services = [
        { name: "Automatisation Digitale", icon: Zap, color: "text-blue-600", bg: "bg-blue-50" },
        { name: "IA Créative", icon: Sparkles, color: "text-purple-600", bg: "bg-purple-50" },
        { name: "Académie & Formation", icon: Award, color: "text-green-600", bg: "bg-green-50" },
        { name: "Services IT", icon: Shield, color: "text-orange-600", bg: "bg-orange-50" },
        { name: "Programme Stage", icon: Rocket, color: "text-red-600", bg: "bg-red-50" }
    ];

    const stats = [
        { icon: ThumbsUp, value: "98%", label: "Satisfaction", color: "text-green-600" },
        { icon: Clock, value: "24h", label: "Réponse", color: "text-blue-600" },
        { icon: Users, value: "500+", label: "Clients", color: "text-purple-600" },
        { icon: Award, value: "5 ans", label: "Expérience", color: "text-orange-600" }
    ];

    // Variants d'animation avancés
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
                staggerDirection: 1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                mass: 1
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0, rotateY: -10 },
        visible: {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1
            }
        },
        hover: {
            y: -10,
            scale: 1.05,
            rotateY: 5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
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
            rotate: [0, -15, 15, -10, 10, 0],
            scale: 1.2,
            transition: {
                duration: 0.7,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.9,
            rotate: 0,
            transition: {
                duration: 0.2
            }
        }
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-15, 15, -15],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const pulseVariants = {
        initial: { scale: 1, opacity: 1 },
        animate: {
            scale: [1, 1.1, 1],
            opacity: [1, 0.8, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
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

    const formFieldVariants = {
        focused: {
            scale: 1.02,
            boxShadow: "0 20px 30px -10px rgba(59, 130, 246, 0.3)",
            borderColor: "#3b82f6",
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
            }
        },
        blurred: {
            scale: 1,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            borderColor: "#e5e7eb",
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
            }
        },
        error: {
            scale: 1.02,
            boxShadow: "0 20px 30px -10px rgba(239, 68, 68, 0.3)",
            borderColor: "#ef4444",
            transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
            }
        }
    };

    const pageTransition = {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.5, ease: "easeInOut" }
    };

    const mouseGlowVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 0.3,
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
            transition: {
                type: "tween",
                ease: "linear",
                duration: 0.1
            }
        }
    };

    return (
        <motion.div 
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`min-h-screen transition-colors duration-500 ${
                isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-red-50 via-white to-white'
            } overflow-hidden relative`}
        >
            {/* Effet de glow qui suit la souris */}
            <motion.div
                variants={mouseGlowVariants}
                initial="initial"
                animate="animate"
                className="fixed w-64 h-64 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none z-0"
            />

            {/* Particules décoratives améliorées */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 h-1 ${
                            isDarkMode ? 'bg-white/10' : 'bg-red-400/20'
                        } rounded-full`}
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            scale: 0
                        }}
                        animate={{
                            y: [null, -100, 100, -100],
                            x: [null, 100, -100, 100],
                            scale: [0, 1, 0.5, 0],
                            opacity: [0, 0.3, 0.1, 0]
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* Barre de contrôle flottante */}
            <motion.div 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-2 border border-gray-200"
            >
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={`p-2 rounded-xl transition-colors ${
                        isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
                    }`}
                >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setNotifications(!notifications)}
                    className={`p-2 rounded-xl transition-colors ${
                        notifications ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                >
                    {notifications ? <Bell size={18} /> : <BellRing size={18} />}
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className={`p-2 rounded-xl transition-colors ${
                        soundEnabled ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                    }`}
                >
                    {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </motion.button>
            </motion.div>

            {/* Hero Section avec parallaxe */}
            <motion.div 
                style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
                className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-28"
            >
                {/* Formes décoratives animées */}
                <motion.div 
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"
                />
                <motion.div 
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, type: "spring" }}
                    >
                        <motion.div 
                            variants={pulseVariants}
                            initial="initial"
                            animate="animate"
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/30"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold">✨ NOUS SOMMES À VOTRE ÉCOUTE</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-6xl md:text-7xl font-bold text-white mb-4"
                        >
                            CONTACT
                        </motion.h1>

                        <motion.p 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-xl text-white/90 max-w-3xl mx-auto"
                        >
                            Contactez-nous pour toute demande d'information ou de collaboration
                        </motion.p>
                        
                        {/* Indicateur de disponibilité amélioré */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mt-8 border border-white/30"
                        >
                            <div className="flex items-center gap-2">
                                <motion.div 
                                    className="w-3 h-3 bg-green-400 rounded-full"
                                    animate={{ 
                                        scale: [1, 1.5, 1],
                                        boxShadow: [
                                            "0 0 0 0 rgba(74, 222, 128, 0.7)",
                                            "0 0 0 10px rgba(74, 222, 128, 0)",
                                            "0 0 0 0 rgba(74, 222, 128, 0)"
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-sm font-medium">Équipe disponible</span>
                            </div>
                            <div className="w-px h-4 bg-white/30" />
                            <span className="text-sm">Réponse sous 24h</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Vague décorative */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path 
                            fill={isDarkMode ? '#111827' : '#ffffff'} 
                            fillOpacity="1" 
                            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                        />
                    </svg>
                </div>
            </motion.div>

            {/* Stats rapides animées */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className={`bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center ${
                                    isDarkMode ? 'bg-gray-800 border-gray-700' : ''
                                }`}
                            >
                                <Icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                                <div className={`font-bold text-2xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {stat.value}
                                </div>
                                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Section Contact principale */}
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'text-white' : ''}`}>
                {/* Cartes d'information améliorées */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {contactInfo.map((info, idx) => {
                        const Icon = info.icon;
                        return (
                            <motion.a
                                key={idx}
                                href={info.action}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={cardVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onHoverStart={() => setHoveredCard(`info-${idx}`)}
                                onHoverEnd={() => setHoveredCard(null)}
                                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer overflow-hidden ${
                                    isDarkMode ? 'bg-gray-800 border-gray-700' : ''
                                }`}
                            >
                                {/* Effet de brillance */}
                                <motion.div
                                    variants={shimmerVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] pointer-events-none"
                                />

                                <motion.div 
                                    className={`${info.bgLight} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative z-10`}
                                    variants={iconVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <Icon className={`w-7 h-7 ${info.iconColor}`} />
                                </motion.div>
                                
                                <h3 className={`font-bold text-lg mb-1 relative z-10 ${
                                    isDarkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    {info.title}
                                </h3>
                                <p className={`font-medium mb-1 relative z-10 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    {info.content}
                                </p>
                                <p className={`text-sm relative z-10 ${
                                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                    {info.detail}
                                </p>

                                {/* Effet de bordure au survol */}
                                <motion.div 
                                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${info.gradient}`}
                                    initial={{ width: "0%" }}
                                    animate={{ width: hoveredCard === `info-${idx}` ? "100%" : "0%" }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Effet de glow au survol */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${info.color}20, transparent 70%)`
                                    }}
                                />
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Formulaire et carte avec animations améliorées */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Formulaire de contact */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className={`lg:col-span-2 rounded-2xl shadow-xl p-8 ${
                            isDarkMode ? 'bg-gray-800' : 'bg-white'
                        }`}
                    >
                        <h2 className={`text-2xl font-bold mb-6 ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                        }`}>
                            Envoyez-nous un message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nom */}
                            <motion.div
                                variants={formFieldVariants}
                                animate={focusedField === 'nom' ? 'focused' : 'blurred'}
                            >
                                <label className={`block text-sm font-medium mb-2 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Nom complet *
                                </label>
                                <div className="relative">
                                    <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                                        isDarkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`} />
                                    <input
                                        type="text"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('nom')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                                            isDarkMode 
                                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                                : 'bg-white border-gray-200 text-gray-900'
                                        }`}
                                        placeholder="Votre nom"
                                    />
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                variants={formFieldVariants}
                                animate={focusedField === 'email' ? 'focused' : 'blurred'}
                            >
                                <label className={`block text-sm font-medium mb-2 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Email *
                                </label>
                                <div className="relative">
                                    <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                                        isDarkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                                            isDarkMode 
                                                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                                : 'bg-white border-gray-200 text-gray-900'
                                        }`}
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </motion.div>

                            {/* Service souhaité */}
                            <motion.div
                                variants={formFieldVariants}
                                animate={focusedField === 'service' ? 'focused' : 'blurred'}
                            >
                                <label className={`block text-sm font-medium mb-2 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Service concerné
                                </label>
                                <div className="relative">
                                    <Briefcase className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                                        isDarkMode ? 'text-gray-500' : 'text-gray-400'
                                    }`} />
                                    <select
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        onFocus={() => setFocusedField('service')}
                                        onBlur={() => setFocusedField(null)}
                                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 appearance-none ${
                                            isDarkMode 
                                                ? 'bg-gray-700 border-gray-600 text-white' 
                                                : 'bg-white border-gray-200 text-gray-900'
                                        }`}
                                    >
                                        <option value="">Sélectionnez un service</option>
                                        {services.map((service, idx) => {
                                            const Icon = service.icon;
                                            return (
                                                <option key={idx} value={service.name} className="flex items-center gap-2">
                                                    {service.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                variants={formFieldVariants}
                                animate={focusedField === 'message' ? 'focused' : 'blurred'}
                            >
                                <label className={`block text-sm font-medium mb-2 ${
                                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    required
                                    rows="5"
                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ${
                                        isDarkMode 
                                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                            : 'bg-white border-gray-200 text-gray-900'
                                    }`}
                                    placeholder="Décrivez votre projet ou votre demande..."
                                ></textarea>
                            </motion.div>

                            {/* Services rapides */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-2"
                            >
                                {services.map((service, idx) => {
                                    const Icon = service.icon;
                                    return (
                                        <motion.button
                                            key={idx}
                                            type="button"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedService(service.name)}
                                            className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                                                selectedService === service.name
                                                    ? `${service.bg} ${service.color} ring-2 ring-offset-2`
                                                    : isDarkMode
                                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                        >
                                            <Icon size={12} />
                                            {service.name}
                                        </motion.button>
                                    );
                                })}
                            </motion.div>

                            {/* Status message amélioré */}
                            <AnimatePresence mode="wait">
                                {formStatus === 'loading' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3"
                                    >
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Loader2 className="w-5 h-5 text-blue-600" />
                                        </motion.div>
                                        <p className="text-blue-700">Envoi en cours...</p>
                                    </motion.div>
                                )}

                                {formStatus === 'success' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", bounce: 0.5 }}
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        </motion.div>
                                        <div>
                                            <p className="text-green-700 font-medium">Message envoyé avec succès !</p>
                                            <p className="text-green-600 text-sm">Nous vous répondrons sous 24h</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Bouton submit animé */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-900 transition-all duration-300 transform shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "linear"
                                    }}
                                />
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                <span className="relative z-10">Envoyer le message</span>
                                <motion.div
                                    className="absolute top-0 right-0 w-20 h-full bg-white/10 skew-x-12"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: "-20%" }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Sidebar améliorée */}
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* WhatsApp direct avec animation 3D */}
                        <motion.div 
                            whileHover={{ 
                                rotateY: 5,
                                rotateX: 5,
                                scale: 1.02,
                                boxShadow: "0 30px 40px -20px rgba(0,0,0,0.3)"
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden transform-gpu"
                        >
                            <motion.div
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-10 -mt-10"
                            />
                            <motion.div
                                variants={floatingVariants}
                                initial="initial"
                                animate="animate"
                                className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-10 -mb-10"
                            />
                            
                            <MessageCircle className="w-12 h-12 mb-4 relative z-10" />
                            <h3 className="text-xl font-bold mb-2 relative z-10">WhatsApp Direct</h3>
                            <p className="text-white/90 mb-4 relative z-10">
                                Besoin d'une réponse immédiate ? Contactez-nous sur WhatsApp
                            </p>
                            <motion.a
                                href="https://wa.me/237123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 relative z-10"
                            >
                                <Phone className="w-4 h-4" />
                                Démarrer la discussion
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>
                        </motion.div>

                        {/* Localisation détaillée */}
                        <motion.div 
                            whileHover={{ y: -5, rotateY: 2 }}
                            className={`rounded-2xl shadow-xl p-6 transform-gpu ${
                                isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <motion.div 
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-red-100 p-2 rounded-lg"
                                >
                                    <MapPin className="w-5 h-5 text-red-600" />
                                </motion.div>
                                <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                    Notre localisation
                                </h3>
                            </div>
                            <p className={`mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                <span className="font-medium">Yaoundé, Cameroun</span>
                            </p>
                            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                Quartier Mvan, Rue 3.456<br />
                                Immeuble ABC, 3ème étage
                            </p>
                            <motion.a
                                href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 5 }}
                                className="text-red-600 font-medium hover:text-red-700 transition-colors inline-flex items-center gap-1"
                            >
                                Voir sur Google Maps
                                <ArrowRight className="w-4 h-4" />
                            </motion.a>
                        </motion.div>

                        {/* Réseaux sociaux avec animations */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`rounded-2xl shadow-xl p-6 ${
                                isDarkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                        >
                            <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                Suivez-nous
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                {socialNetworks.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={idx}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variants={itemVariants}
                                            whileHover={{ 
                                                scale: 1.1, 
                                                rotateY: 10,
                                                rotateX: 5,
                                                boxShadow: "0 20px 30px -10px rgba(0,0,0,0.3)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`${social.color} ${social.hover} text-white p-3 rounded-xl flex flex-col items-center gap-1 transition-all duration-300 transform-gpu`}
                                            style={{ transformStyle: "preserve-3d" }}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="text-xs">{social.name}</span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Temps de réponse amélioré */}
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className={`rounded-xl p-4 border ${
                                isDarkMode 
                                    ? 'bg-gray-800 border-gray-700' 
                                    : 'bg-gray-50 border-gray-200'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                >
                                    <Clock className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                                </motion.div>
                                <div>
                                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        Temps de réponse moyen
                                    </p>
                                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        Moins de 24h ouvrées
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Carte interactive améliorée */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className={`rounded-2xl h-96 relative overflow-hidden shadow-xl ${
                        isDarkMode ? 'ring-1 ring-gray-700' : ''
                    }`}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.758269503576!2d11.50204871475395!3d3.866666996924641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc0e4c2e5c6b7%3A0x123456789abcdef!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl"
                        ></iframe>
                        
                        {/* Overlay d'information amélioré */}
                        <motion.div 
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute bottom-4 left-4 bg-white rounded-lg shadow-xl p-4 border-l-4 border-red-600"
                        >
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-red-600" />
                                <span className="font-medium text-gray-800">Yaoundé, Cameroun</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Quartier Mvan - Rue 3.456</p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-2 text-xs text-red-600 font-medium flex items-center gap-1"
                            >
                                Obtenir l'itinéraire
                                <ChevronRight size={12} />
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>

                {/* FAQ améliorée avec accordéon */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`rounded-2xl shadow-xl p-8 mb-16 ${
                        isDarkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
                >
                    <h2 className={`text-2xl font-bold mb-6 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        Questions fréquentes
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                q: "Quels sont vos délais de réponse ?",
                                r: "Nous répondons à toutes les demandes sous 24h ouvrées.",
                                icon: Clock
                            },
                            {
                                q: "Proposez-vous des visioconférences ?",
                                r: "Oui, nous pouvons organiser des rendez-vous en visioconférence sur demande.",
                                icon: Video
                            },
                            {
                                q: "Travaillez-vous avec des clients internationaux ?",
                                r: "Absolument ! Nous accompagnons des clients dans toute la zone CEMAC et au-delà.",
                                icon: Globe
                            },
                            {
                                q: "Comment se déroule un premier rendez-vous ?",
                                r: "Nous organisons un appel découverte gratuit de 30 min pour discuter de votre projet.",
                                icon: PhoneCall
                            }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                                        isDarkMode 
                                            ? 'hover:bg-gray-700' 
                                            : 'hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className={`p-2 rounded-lg ${
                                            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                                        }`}>
                                            <Icon className={`w-5 h-5 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-600'
                                            }`} />
                                        </div>
                                        <div>
                                            <h3 className={`font-semibold mb-1 ${
                                                isDarkMode ? 'text-white' : 'text-gray-800'
                                            }`}>
                                                {item.q}
                                            </h3>
                                            <p className={`text-sm ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                {item.r}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Newsletter améliorée */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-2xl shadow-xl p-8 mb-16 text-center text-white relative overflow-hidden"
                >
                    {/* Éléments décoratifs */}
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
                    
                    <div className="relative z-10">
                        <motion.div
                            animate={{ 
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <MailOpen className="w-16 h-16 text-white/30 mx-auto mb-6" />
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
                        <p className="text-white/90 mb-6 max-w-md mx-auto">
                            Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres exclusives
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
                            />
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Send className="w-4 h-4" />
                                S'inscrire
                            </motion.button>
                        </div>
                        
                        <div className="flex items-center justify-center gap-4 mt-6 text-xs text-white/70">
                            <span className="flex items-center gap-1">
                                <CheckCircle size={12} />
                                Gratuit
                            </span>
                            <span className="w-1 h-1 bg-white/30 rounded-full" />
                            <span className="flex items-center gap-1">
                                <CheckCircle size={12} />
                                Désinscription facile
                            </span>
                            <span className="w-1 h-1 bg-white/30 rounded-full" />
                            <span className="flex items-center gap-1">
                                <CheckCircle size={12} />
                                Sans spam
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}