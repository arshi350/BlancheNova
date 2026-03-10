import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import emailjs from '@emailjs/browser';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    MessageCircle,
    Send,
    User,
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
    Zap
} from 'lucide-react';
import { useForm } from '../hooks/useform';


export function Contact() {
    
    const formRef = useRef();

   const {sendEmail, loading, error, success } = useForm()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        services: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState(null);
    const [service, setservice] = useState('');
    const [hoveredCard, setHoveredCard] = useState(null);
    const [focusedField, setFocusedField] = useState(null);
    const [emailStatus, setEmailStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // Fonction pour ouvrir le client mail par défaut
    const openMailClient = (to, subject, body) => {
        const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('loading');
        const dataToSend = { ...formData, services: service };
        try {
            await sendEmail(dataToSend);
            if (success) {
                setFormStatus('success');
                setFormData({ name: '', email: '', services: '', message: '' });
                setservice('');
            } else if (error) {
                setFormStatus('error');
            }
        } catch (err) {
            setFormStatus('error');
            console.log(err);
        }
        setTimeout(() => setFormStatus(null), 3000);
    };

    // Fonction pour gérer le clic sur la carte email
    const handleEmailClick = (e) => {
        e.preventDefault();
        
        const subject = "Demande d'information depuis le site Newsafrix";
        const body = `Bonjour l'équipe Newsafrix, Je vous contacte suite à ma visite sur votre site web. Cordialement.`;
        
        // Ouvrir le client mail par défaut
        openMailClient('arelletagne@gmail.com', subject, body);
        
        // Afficher un message de confirmation
        setEmailStatus('mailto');
        setTimeout(() => setEmailStatus(null), 3000);
    };

    // Fonction alternative pour ouvrir Gmail directement
    const openGmailCompose = () => {
        const to = 'arelletagne@gmail.com';
        const subject = encodeURIComponent("Demande d'information depuis le site Newsafrix");
        const body = encodeURIComponent(`Bonjour l'équipe Newsafrix, Je vous contacte suite à ma visite sur votre site web. Cordialement.`);
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, '_blank');
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Adresse",
            content: "Yaoundé, Cameroun",
            detail: "Quartier Awae,",
            color: "red",
            action: "https://maps.google.com",
            gradient: "from-red-500 to-pink-500",
            onClick: () => window.open('https://maps.google.com', '_blank')
        },
        {
            icon: Mail,
            title: "Email",
            content: "arelletagne@gmail.com",
            detail: "Cliquez pour nous écrire",
            color: "blue",
            action: "#", // Changé pour éviter la redirection par défaut
            gradient: "from-blue-500 to-cyan-500",
            onClick: handleEmailClick,
            isMail: true
        },
        {
            icon: Phone,
            title: "WhatsApp",
            content: "+237 6 77 84 31 19",
            detail: "Disponible 24/7",
            color: "green",
            action: "https://wa.me/237677843119",
            gradient: "from-green-500 to-emerald-500",
            onClick: () => window.open('https://wa.me/237677843119', '_blank')
        },
        {
            icon: Clock,
            title: "Horaires",
            content: "Lun - Ven: 8h - 18h",
            detail: "Sam: 9h - 13h",
            color: "purple",
            gradient: "from-purple-500 to-indigo-500",
            onClick: null
        }
    ];

    const socialNetworks = [
        { icon: Facebook, name: "Facebook", link: "https://facebook.com", color: "bg-blue-600", hover: "hover:bg-blue-700" },
        { icon: Instagram, name: "Instagram", link: "https://instagram.com", color: "bg-pink-600", hover: "hover:bg-pink-700" },
        { icon: MessageCircle, name: "TikTok", link: "https://tiktok.com", color: "bg-black", hover: "hover:bg-gray-800" },
        { icon: Linkedin, name: "LinkedIn", link: "https://linkedin.com", color: "bg-blue-700", hover: "hover:bg-blue-800" },
        { icon: Twitter, name: "Twitter", link: "https://twitter.com", color: "bg-sky-500", hover: "hover:bg-sky-600" },
        { icon: Youtube, name: "YouTube", link: "https://youtube.com", color: "bg-red-600", hover: "hover:bg-red-700" }
    ];

    const services = [
        "Automatisation Digitale",
        "IA Créative",
        "Académie & Formation",
        "Services IT",
        "Programme Stage"
    ];

    // Variants d'animation (inchangés)
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
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
            transition: { type: "spring", stiffness: 400, damping: 17 }
        },
        blurred: {
            scale: 1,
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            transition: { type: "spring", stiffness: 400, damping: 17 }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b pt-10 from-red-50 via-white to-white overflow-hidden"
        >
            {/* Notifications Email */}
            <AnimatePresence>
                {emailStatus === 'mailto' && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-4 right-4 z-50 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-lg flex items-center gap-3"
                    >
                        <Mail className="w-5 h-5 text-blue-600" />
                        <p className="text-blue-700">Ouverture du client mail...</p>
                    </motion.div>
                )}

                {emailStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-4 right-4 z-50 bg-green-50 border border-green-200 rounded-xl p-4 shadow-lg flex items-center gap-3"
                    >
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-700">Email envoyé avec succès !</p>
                    </motion.div>
                )}

                {emailStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="fixed top-4 right-4 z-50 bg-red-50 border border-red-200 rounded-xl p-4 shadow-lg flex items-center gap-3"
                    >
                        <AlertCircle className="w-5 h-5 text-red-600" />
                        <p className="text-red-700">Erreur lors de l'envoi. Veuillez réessayer.</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Particules décoratives (inchangées) */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-red-400/20 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: 0
                        }}
                        animate={{
                            y: [null, -50, 50, -50],
                            x: [null, 50, -50, 50],
                            scale: [0, 1, 0.5, 0],
                            opacity: [0, 0.3, 0.1, 0]
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            {/* Hero Section (inchangée) */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 py-20"
            >
                {/* ... (contenu inchangé) ... */}
                <motion.div 
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div 
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
                />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/30"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-semibold">NOUS SOMMES À VOTRE ÉCOUTE</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-4"
                        >
                            CONTACT
                        </motion.h1>

                        <motion.p 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-xl text-white/90 max-w-2xl mx-auto"
                        >
                            Contactez-nous pour toute demande d'information ou de collaboration
                        </motion.p>
                        
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6, type: "spring" }}
                            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mt-8 border border-white/30"
                        >
                            <motion.div 
                                className="w-2 h-2 bg-green-400 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <span className="text-sm font-medium">Équipe disponible - Réponse sous 24h</span>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Section Contact principale */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
                {/* Cartes d'information avec gestion du clic sur email */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {contactInfo.map((info, idx) => {
                        const Icon = info.icon;
                        const isClickable = info.onClick !== null;
                        
                        return (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                whileHover={isClickable ? "hover" : {}}
                                whileTap={isClickable ? "tap" : {}}
                                onMouseEnter={() => setHoveredCard(`info-${idx}`)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={info.onClick || undefined}
                                className={`group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${
                                    isClickable ? 'cursor-pointer' : 'cursor-default'
                                } overflow-hidden`}
                            >
                                {/* Effet de brillance */}
                                <motion.div
                                    variants={shimmerVariants}
                                    initial="initial"
                                    animate="animate"
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                                />

                                <motion.div 
                                    className={`bg-${info.color}-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                                    variants={iconVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                >
                                    <Icon className={`w-6 h-6 text-${info.color}-600`} />
                                </motion.div>
                                
                                <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                                <p className="text-gray-600 font-medium">{info.content}</p>
                                <p className="text-sm text-gray-500 mt-1">{info.detail}</p>

                                {/* Badge "Cliquez pour écrire" pour l'email */}
                                {info.isMail && (
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute top-2 right-2 bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                                    >
                                        Cliquez pour écrire
                                    </motion.div>
                                )}

                                {/* Effet de bordure au survol */}
                                <motion.div 
                                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${info.gradient}`}
                                    initial={{ width: "0%" }}
                                    animate={{ width: hoveredCard === `info-${idx}` ? "100%" : "0%" }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Formulaire et carte (inchangé) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    
                    {/* Formulaire de contact avec EmailJS */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Envoyez-nous un message
                        </h2>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            {/* Nom */}
                            <motion.div
                                variants={formFieldVariants}
                                animate={focusedField === 'nom' ? 'focused' : 'blurred'}
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom complet *
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('nom')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Votre nom"
                                    />
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                variants={formFieldVariants}
                                animate={focusedField === 'email' ? 'focused' : 'blurred'}
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </motion.div>

                            {/* Service souhaité */}
                            <motion.div
                                variants={formFieldVariants}
                                animate={focusedField === 'service' ? 'focused' : 'blurred'}
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Service concerné
                                </label>
                                <div className="relative">
                                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <select
                                        value={service}
                                        onChange={(e) => setservice(e.target.value)}
                                        onFocus={() => setFocusedField('service')}
                                        onBlur={() => setFocusedField(null)}
                                        name='object'
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                                    >
                                        <option value="">Sélectionnez un service</option>
                                        {services.map((service, idx) => (
                                            <option key={idx} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                variants={formFieldVariants}
                                animate={focusedField === 'message' ? 'focused' : 'blurred'}
                            >
                                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Décrivez votre projet ou votre demande..."
                                ></textarea>
                            </motion.div>

                            {/* Status message */}
                            <AnimatePresence mode="wait">
                                {formStatus === 'loading' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3"
                                    >
                                        <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                                        <p className="text-blue-700">Envoi en cours...</p>
                                    </motion.div>
                                )}

                                {formStatus === 'success' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring" }}
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-600" />
                                        </motion.div>
                                        <p className="text-green-700">Message envoyé avec succès ! Nous vous répondrons sous 24h.</p>
                                    </motion.div>
                                )}

                                {formStatus === 'error' && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3"
                                    >
                                        <AlertCircle className="w-5 h-5 text-red-600" />
                                        <p className="text-red-700">Erreur lors de l'envoi. Veuillez réessayer.</p>
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
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Sidebar (inchangée) */}
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* WhatsApp direct */}
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-xl p-6 text-white relative overflow-hidden cursor-pointer"
                            onClick={() => window.open('https://wa.me/237677843119', '_blank')}
                        >
                            <motion.div
                                variants={pulseVariants}
                                initial="initial"
                                animate="animate"
                                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10"
                            />
                            
                            <MessageCircle className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-bold mb-2">WhatsApp Direct</h3>
                            <p className="text-white/90 mb-4">
                                Besoin d'une réponse immédiate ? Contactez-nous sur WhatsApp
                            </p>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                Démarrer la discussion
                                <ArrowRight className="w-4 h-4" />
                            </motion.div>
                        </motion.div>

                        {/* Localisation détaillée */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-xl p-6 cursor-pointer"
                            onClick={() => window.open('https://maps.google.com', '_blank')}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <motion.div 
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-red-100 p-2 rounded-lg"
                                >
                                    <MapPin className="w-5 h-5 text-red-600" />
                                </motion.div>
                                <h3 className="font-semibold text-gray-800">Notre localisation</h3>
                            </div>
                            <p className="text-gray-600 mb-2">
                                <span className="font-medium">Yaoundé, Cameroun</span>
                            </p>
                            <p className="text-sm text-gray-500 mb-4">
                                Quartier Mvan, Rue 3.456<br />
                                Immeuble ABC, 3ème étage
                            </p>
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="text-red-600 font-medium hover:text-red-700 transition-colors inline-flex items-center gap-1"
                            >
                                Voir sur Google Maps
                                <ArrowRight className="w-4 h-4" />
                            </motion.div>
                        </motion.div>

                        {/* Réseaux sociaux */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-xl p-6"
                        >
                            <h3 className="font-semibold text-gray-800 mb-4">Suivez-nous</h3>
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
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`${social.color} ${social.hover} text-white p-3 rounded-xl flex flex-col items-center gap-1 transition-all duration-300`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="text-xs">{social.name}</span>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Temps de réponse */}
                        <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                >
                                    <Clock className="w-5 h-5 text-gray-600" />
                                </motion.div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Temps de réponse moyen</p>
                                    <p className="text-xs text-gray-500">Moins de 24h ouvrées</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Carte interactive */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className="bg-gray-200 rounded-2xl h-96 relative overflow-hidden">
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
                        
                        <motion.div 
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 cursor-pointer"
                            onClick={() => window.open('https://maps.google.com', '_blank')}
                        >
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-red-600" />
                                <span className="font-medium text-gray-800">Yaoundé, Cameroun</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Quartier Mvan - Rue 3.456</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* FAQ rapide */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-white rounded-2xl shadow-xl p-8 mb-16"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Questions fréquentes</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                q: "Quels sont vos délais de réponse ?",
                                r: "Nous répondons à toutes les demandes sous 24h ouvrées."
                            },
                            {
                                q: "Proposez-vous des visioconférences ?",
                                r: "Oui, nous pouvons organiser des rendez-vous en visioconférence sur demande."
                            },
                            {
                                q: "Travaillez-vous avec des clients internationaux ?",
                                r: "Absolument ! Nous accompagnons des clients dans toute la zone CEMAC et au-delà."
                            },
                            {
                                q: "Comment se déroule un premier rendez-vous ?",
                                r: "Nous organisons un appel découverte gratuit de 30 min pour discuter de votre projet."
                            }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ x: 5 }}
                                className="border-b border-gray-100 pb-4 last:border-0 cursor-pointer"
                            >
                                <h3 className="font-semibold text-gray-800 mb-2">{item.q}</h3>
                                <p className="text-gray-600 text-sm">{item.r}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Newsletter */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl shadow-xl p-8 mb-16 text-center text-white relative overflow-hidden"
                >
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
                            <Heart className="w-16 h-16 text-white/30 mx-auto mb-6" />
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold mb-2">Restez informé</h3>
                        <p className="text-white/90 mb-6">
                            Inscrivez-vous à notre newsletter pour recevoir nos actualités
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                S'inscrire
                            </motion.button>
                        </div>
                        
                        <p className="text-xs text-white/70 mt-4">
                            En vous inscrivant, vous acceptez de recevoir nos communications.
                            Vous pouvez vous désabonner à tout moment.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}