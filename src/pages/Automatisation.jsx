import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ClipboardList, 
    FileText, 
    MessageSquare, 
    BarChart3, 
    LayoutDashboard,
    ArrowRight,
    Sparkles,
    Zap,
    TrendingUp,
    Users,
    Clock,
    CheckCircle,
    ChevronRight,
    Star,
    Rocket,
    Shield,
    Cpu
} from 'lucide-react';

export function Automatisation() {
    const [hoveredId, setHoveredId] = useState(null);
    
    const services = [
        {
            id: 1,
            title: "Automatisation administrative",
            description: "Simplifiez vos tâches quotidiennes et gagnez en efficacité",
            icon: ClipboardList,
            features: ["Traitement automatique", "Gestion des flux", "Zéro erreur"],
            color: "from-blue-500 to-blue-600",
            lightColor: "bg-blue-50",
            stats: "+40% productivité",
            gradient: "from-blue-500/20 to-blue-600/20"
        },
        {
            id: 2,
            title: "Génération automatique de documents",
            description: "Créez des documents professionnels en un clic",
            icon: FileText,
            features: ["Modèles personnalisés", "Bulk generation", "Format intelligent"],
            color: "from-purple-500 to-purple-600",
            lightColor: "bg-purple-50",
            stats: "Temps réduit de 70%",
            gradient: "from-purple-500/20 to-purple-600/20"
        },
        {
            id: 3,
            title: "Chatbots intelligents",
            description: "Assistez vos clients 24/7 avec l'IA",
            icon: MessageSquare,
            features: ["IA conversationnelle", "Multilingue", "Apprentissage continu"],
            color: "from-green-500 to-green-600",
            lightColor: "bg-green-50",
            stats: "98% satisfaction",
            gradient: "from-green-500/20 to-green-600/20"
        },
        {
            id: 4,
            title: "Analyse de données simplifiée",
            description: "Transformez vos données en insights actionnables",
            icon: BarChart3,
            features: ["Visualisations", "Prédictions IA", "Rapports auto"],
            color: "from-orange-500 to-orange-600",
            lightColor: "bg-orange-50",
            stats: "+150% insights",
            gradient: "from-orange-500/20 to-orange-600/20"
        },
        {
            id: 5,
            title: "Tableaux de bord automatisés",
            description: "Visualisez vos performances en temps réel",
            icon: LayoutDashboard,
            features: ["KPI temps réel", "Alertes smart", "Export 1 clic"],
            color: "from-red-500 to-red-600",
            lightColor: "bg-red-50",
            stats: "MàJ instantanée",
            gradient: "from-red-500/20 to-red-600/20"
        }
    ];

    const stats = [
        { icon: Clock, value: "10x", label: "Plus rapide", color: "text-blue-600" },
        { icon: TrendingUp, value: "85%", label: "ROI moyen", color: "text-green-600" },
        { icon: Users, value: "500+", label: "Clients satisfaits", color: "text-purple-600" },
        { icon: Sparkles, value: "24/7", label: "Disponibilité", color: "text-orange-600" }
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
            scale: 1.03,
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

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative py-34 px-4 overflow-hidden"
        >
            {/* Arrière-plan avec effet de vague et particules animées */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
            
            {/* Particules animées */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
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

            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                {/* Header Section amélioré avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-semibold">Révolutionnez votre entreprise</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="text-5xl md:text-6xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            AUTOMATISATION
                        </span>
                        <br />
                        <span className="text-gray-800">DIGITALE INTELLIGENTE</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
                    >
                        Propulsez votre PME dans l'ère de l'IA avec nos solutions d'automatisation 
                        sur mesure. Gagnez en productivité et concentrez-vous sur l'essentiel.
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
                                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm"
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

                {/* Services Section avec animations améliorées */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Solutions d'<span className="text-blue-600">Automatisation</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Des outils puissants pour transformer votre quotidien
                        </p>
                    </div>
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map(service => {
                            const IconComponent = service.icon;
                            const isHovered = hoveredId === service.id;
                            
                            return (
                                <motion.div 
                                    key={service.id}
                                    variants={cardVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onMouseEnter={() => setHoveredId(service.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                                >
                                    {/* Effet de brillance */}
                                    <motion.div
                                        variants={shimmerVariants}
                                        initial="initial"
                                        animate="animate"
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                                    />

                                    {/* Effet de gradient animé */}
                                    <motion.div 
                                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${service.color}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isHovered ? 1 : 0 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    
                                    {/* Badge statistique avec animation */}
                                    <motion.div 
                                        className="absolute top-4 right-4 z-10"
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.span 
                                            whileHover={{ scale: 1.05 }}
                                            className={`px-3 py-1 text-xs font-bold rounded-full bg-white shadow-lg ${isHovered ? 'text-blue-600' : 'text-gray-600'}`}
                                        >
                                            {service.stats}
                                        </motion.span>
                                    </motion.div>

                                    <div className="relative p-8 z-10">
                                        {/* Icône avec animation */}
                                        <motion.div 
                                            className={`${service.lightColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                                            variants={iconVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                        >
                                            <IconComponent className={`w-8 h-8 transition-colors duration-300 ${
                                                isHovered ? 'text-white' : `text-${service.color.split('-')[1]}-600`
                                            }`} />
                                        </motion.div>

                                        {/* Titre et description */}
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
                                        
                                        <motion.p 
                                            className={`text-lg mb-6 transition-colors duration-300 ${
                                                isHovered ? 'text-white/90' : 'text-gray-600'
                                            }`}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {service.description}
                                        </motion.p>

                                        {/* Fonctionnalités avec animation */}
                                        <motion.ul 
                                            className="space-y-2 mb-6"
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            {service.features.map((feature, idx) => (
                                                <motion.li 
                                                    key={idx} 
                                                    className={`flex items-center gap-2 text-sm ${
                                                        isHovered ? 'text-white/80' : 'text-gray-500'
                                                    }`}
                                                    variants={featureVariants}
                                                    custom={idx}
                                                >
                                                    <CheckCircle className={`w-4 h-4 ${
                                                        isHovered ? 'text-white' : 'text-green-500'
                                                    }`} />
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </motion.ul>

                                        {/* Bouton avec animation */}
                                        <motion.button 
                                            className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 group/btn ${
                                                isHovered ? 'text-white' : 'text-blue-600'
                                            }`}
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            En savoir plus 
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
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
                </motion.div>

                {/* Section CTA améliorée avec animations */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl"
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

                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3Ccircle cx=\"13\" cy=\"13\" r=\"3\"/%3E%3C/g%3E%3C/svg%3E')",
                            opacity: 0.1
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
                            Prêt à automatiser votre entreprise ?
                        </motion.h3>
                        
                        <motion.p 
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
                        >
                            Bénéficiez d'un audit gratuit de vos processus et découvrez 
                            comment l'automatisation peut transformer votre activité.
                        </motion.p>
                        
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
                            <span className="relative">Demander un audit gratuit</span>
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
                            transition={{ delay: 0.4 }}
                            className="text-white/70 text-sm mt-6"
                        >
                            ✦ Sans engagement ✦ Réponse sous 24h ✦
                        </motion.p>
                    </div>
                </motion.div>

                {/* Section confiance avec animations */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 mb-6">Ils nous font confiance :</p>
                    <div className="flex justify-center items-center gap-8 flex-wrap">
                        {[1,2,3,4,5].map((i) => (
                            <motion.div 
                                key={i} 
                                className="flex items-center gap-1"
                                whileHover={{ scale: 1.1, y: -2 }}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                            >
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-gray-600 font-medium">Entreprise {i}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Section avantages supplémentaires */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { icon: Rocket, title: "Mise en place rapide", desc: "Déploiement en 48h" },
                        { icon: Shield, title: "Sécurité garantie", desc: "Données chiffrées" },
                        { icon: Cpu, title: "IA intégrée", desc: "Apprentissage continu" }
                    ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white rounded-xl p-6 shadow-md text-center"
                            >
                                <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                                <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
}