import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Video,
    Camera,
    Play,
    Zap,
    Users,
    TrendingUp,
    Target,
    Share2,
    Palette,
    Sparkles,
    ArrowRight,
    CheckCircle,
    Star,
    Clock,
    BarChart,
    Instagram,
    Youtube,
    Twitter,
    Facebook,
    Smartphone,
    Globe,
    Rocket,
    Award,
    Cpu,
    Brain,
    Layout
} from 'lucide-react';

export function IaCreative() {
    const [activeService, setActiveService] = useState(null);
    const [hoveredPlatform, setHoveredPlatform] = useState(null);
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Création vidéos marketing IA",
            description: "Des vidéos professionnelles générées par intelligence artificielle en quelques minutes",
            icon: Video,
            features: [
                "Scénarios automatisés",
                "Voix off IA multilingues",
                "Animations dynamiques",
                "Export 4K"
            ],
            stats: "10x plus rapide",
            color: "from-purple-500 to-pink-500",
            bgLight: "bg-purple-50",
            examples: ["Pub produit", "Tutoriel", "Présentation entreprise"],
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            id: 2,
            title: "Publicités intelligentes",
            description: "Campagnes publicitaires optimisées par IA pour un ROI maximal",
            icon: Target,
            features: [
                "Ciblage précis",
                "A/B testing automatique",
                "Optimisation budget",
                "Analytics prédictifs"
            ],
            stats: "+85% conversion",
            color: "from-blue-500 to-cyan-500",
            bgLight: "bg-blue-50",
            examples: ["Facebook Ads", "Google Ads", "TikTok Ads"],
            gradient: "from-blue-500/20 to-cyan-500/20"
        },
        {
            id: 3,
            title: "Automatisation réseaux sociaux",
            description: "Gestion automatisée et intelligente de votre présence sociale",
            icon: Share2,
            features: [
                "Posts automatiques",
                "Meilleurs horaires",
                "Engagement tracking",
                "Multi-plateformes"
            ],
            stats: "24/7 actif",
            color: "from-green-500 to-emerald-500",
            bgLight: "bg-green-50",
            examples: ["LinkedIn", "Instagram", "Twitter"],
            gradient: "from-green-500/20 to-emerald-500/20"
        },
        {
            id: 4,
            title: "Identité digitale assistée par IA",
            description: "Créez une identité de marque unique et cohérente avec l'IA",
            icon: Palette,
            features: [
                "Logo généré IA",
                "Charte graphique",
                "Brand voice",
                "Assets marketing"
            ],
            stats: "Design unique",
            color: "from-orange-500 to-red-500",
            bgLight: "bg-orange-50",
            examples: ["Branding", "UI/UX", "Contenus"],
            gradient: "from-orange-500/20 to-red-500/20"
        }
    ];

    const stats = [
        { icon: Zap, value: "10x", label: "Plus rapide", color: "text-yellow-500" },
        { icon: Users, value: "500+", label: "Clients", color: "text-blue-500" },
        { icon: TrendingUp, value: "85%", label: "ROI moyen", color: "text-green-500" },
        { icon: Globe, value: "15+", label: "Pays", color: "text-purple-500" }
    ];

    const platforms = [
        { icon: Instagram, name: "Instagram", color: "text-pink-600", bg: "bg-pink-50" },
        { icon: Youtube, name: "YouTube", color: "text-red-600", bg: "bg-red-50" },
        { icon: Facebook, name: "Facebook", color: "text-blue-600", bg: "bg-blue-50" },
        { icon: Twitter, name: "Twitter", color: "text-sky-500", bg: "bg-sky-50" }
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

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 overflow-hidden"
        >
            {/* Éléments décoratifs animés */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
                <motion.div 
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    custom={2}
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
                <motion.div 
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    custom={4}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                />
                
                {/* Particules animées */}
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
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

            <div className="relative max-w-7xl mx-auto px-4 py-30">
                {/* Header avec badge premium et animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">IA CRÉATIVE • NOUVELLE GÉNÉRATION</span>
                    </motion.div>

                    <motion.h1 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-6xl md:text-7xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                            IA CRÉATIVE
                        </span>
                        <br />
                        <span className="text-gray-800">& MARKETING</span>
                    </motion.h1>

                    <motion.p 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                    >
                        Révolutionnez votre marketing avec l'intelligence artificielle. 
                        Créez, automatisez et optimisez votre présence digitale.
                    </motion.p>

                    {/* Stats rapides avec animations */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12"
                    >
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
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
                                        className="font-bold text-2xl text-gray-800"
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Services Grid avec animations améliorées */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
                >
                    {services.map((service) => {
                        const Icon = service.icon;
                        const isActive = activeService === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onMouseEnter={() => setActiveService(service.id)}
                                onMouseLeave={() => setActiveService(null)}
                                onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
                                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer"
                            >
                                {/* Effet de brillance */}
                                <motion.div
                                    variants={shimmerVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                                />

                                {/* Gradient d'arrière-plan animé */}
                                <motion.div 
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${service.color}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isActive ? 1 : 0 }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Contenu */}
                                <div className="relative p-8 z-10">
                                    {/* En-tête avec icône et badge */}
                                    <div className="flex items-start justify-between mb-6">
                                        <motion.div 
                                            className={`${service.bgLight} p-4 rounded-2xl`}
                                            variants={iconVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                        >
                                            <Icon className={`w-8 h-8 transition-colors duration-300 ${
                                                isActive ? 'text-white' : `text-${service.color.split('-')[1]}-600`
                                            }`} />
                                        </motion.div>
                                        <motion.span 
                                            whileHover={{ scale: 1.05 }}
                                            className={`px-3 py-1 rounded-full text-sm font-bold ${
                                                isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                                            }`}
                                        >
                                            {service.stats}
                                        </motion.span>
                                    </div>

                                    {/* Titre et description */}
                                    <motion.h3 
                                        className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                                            isActive ? 'text-white' : 'text-gray-800'
                                        }`}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    
                                    <motion.p 
                                        className={`text-lg mb-6 transition-colors duration-300 ${
                                            isActive ? 'text-white/90' : 'text-gray-600'
                                        }`}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {service.description}
                                    </motion.p>

                                    {/* Fonctionnalités avec animation */}
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
                                                <CheckCircle className={`w-5 h-5 ${
                                                    isActive ? 'text-white' : 'text-green-500'
                                                }`} />
                                                <span className={`text-sm ${
                                                    isActive ? 'text-white/80' : 'text-gray-500'
                                                }`}>
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Exemples d'utilisation */}
                                    <motion.div 
                                        className="mb-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <p className={`text-xs uppercase tracking-wider mb-2 ${
                                            isActive ? 'text-white/60' : 'text-gray-400'
                                        }`}>
                                            Applications
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.examples.map((example, idx) => (
                                                <motion.span 
                                                    key={idx} 
                                                    whileHover={{ scale: 1.05 }}
                                                    className={`px-3 py-1 text-xs rounded-full ${
                                                        isActive 
                                                            ? 'bg-white/20 text-white' 
                                                            : 'bg-gray-100 text-gray-600'
                                                    }`}
                                                >
                                                    {example}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Bouton CTA avec animation */}
                                    <motion.button 
                                        className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group/btn ${
                                            isActive ? 'text-white' : `text-${service.color.split('-')[1]}-600`
                                        }`}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Découvrir la solution
                                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                                    </motion.button>
                                </div>

                                {/* Effet de bordure lumineuse */}
                                <motion.div 
                                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isActive ? 0.5 : 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Section plateformes supportées avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <h3 className="text-center text-gray-500 mb-8">Intégration avec vos plateformes préférées</h3>
                    <div className="flex justify-center items-center gap-8 flex-wrap">
                        {platforms.map((platform, idx) => {
                            const Icon = platform.icon;
                            const isHovered = hoveredPlatform === idx;
                            
                            return (
                                <motion.div 
                                    key={idx}
                                    onMouseEnter={() => setHoveredPlatform(idx)}
                                    onMouseLeave={() => setHoveredPlatform(null)}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="flex flex-col items-center gap-2"
                                >
                                    <motion.div 
                                        className={`${platform.bg} p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                                        animate={{ 
                                            rotate: isHovered ? [0, -10, 10, -5, 0] : 0
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Icon className={`w-8 h-8 ${platform.color}`} />
                                    </motion.div>
                                    <motion.span 
                                        className="text-sm text-gray-600"
                                        animate={{ 
                                            scale: isHovered ? 1.1 : 1
                                        }}
                                    >
                                        {platform.name}
                                    </motion.span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* CTA Principal avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl overflow-hidden shadow-2xl"
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
                                "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"8\"/%3E%3C/g%3E%3C/svg%3E')"
                        }}
                    />
                    
                    <div className="relative p-12 md:p-16 text-center">
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
                            <Rocket className="w-16 h-16 text-white/30 mx-auto mb-6" />
                        </motion.div>
                        
                        <motion.h3 
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Prêt à révolutionner votre marketing ?
                        </motion.h3>
                        
                        <motion.p 
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                        >
                            Lancez votre projet digital avec l'IA et obtenez des résultats exceptionnels
                        </motion.p>
                        
                        <motion.button 
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative bg-white text-purple-600 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transform transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3 overflow-hidden"
                        >
                            {/* Effet de brillance sur le bouton */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-200 to-transparent"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "linear",
                                    repeatDelay: 1
                                }}
                            />
                            <span className="relative">Lancer mon projet digital</span>
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

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center justify-center gap-6 mt-8 text-white/80 text-sm"
                        >
                            <motion.div 
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Clock className="w-4 h-4" />
                                <span>Réponse sous 24h</span>
                            </motion.div>
                            <motion.div 
                                className="flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Award className="w-4 h-4" />
                                <span>Garantie satisfaction</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Micro-interaction de fin */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-400 text-sm">
                        ✦ Solutions adaptées aux PME et grandes entreprises ✦
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}