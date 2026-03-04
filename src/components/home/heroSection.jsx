import img1 from "/src/assets/1.jpg";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen pt-30 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Éléments de fond décoratifs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>

            {/* Grille de fond subtile */}
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)`,
                backgroundSize: '40px 40px',
                opacity: 0.4
            }}></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    
                    {/* Partie texte */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        {/* Badge "by Arelle" amélioré */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full border border-blue-200 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-800">by Arelle</span>
                        </motion.div>

                        {/* Titre principal */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4"
                        >
                            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                                BLANCHENOVA
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                TECH
                            </span>
                        </motion.h1>

                        {/* Slogan */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-700 mt-4 font-semibold max-w-2xl mx-auto lg:mx-0"
                        >
                            Former. Innover. Transformer par l'Intelligence Artificielle.
                        </motion.p>

                        {/* Description enrichie */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 space-y-3"
                        >
                            {[
                                "Formations certifiantes en IA",
                                "Solutions d'automatisation sur mesure",
                                "Accompagnement personnalisé"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 justify-center lg:justify-start">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-600">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Boutons d'action */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
                        >
                            <a href="https://wa.me/237696185770?text=Bonjour%2C%20je%20souhaite%20m'inscrire%20à%20la%20formation%20IA%20de%20BlancheNova%20Tech." target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all duration-300"
                                >
                                    <span>S'inscrire à la formation IA</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-white border-2 border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
                            >
                                <span>Découvrir nos services</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </motion.div>

                        {/* Statistiques rapides */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start"
                        >
                            {[
                                { icon: <Users />, value: "500+", label: "Apprenants" },
                                { icon: <TrendingUp />, value: "95%", label: "Taux de réussite" },
                                { icon: <Zap />, value: "24/7", label: "Support" }
                            ].map((stat, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                                        <p className="text-xs text-gray-500">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Partie image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex-1 relative"
                    >
                        <div className="relative">
                            {/* Image principale */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative z-10"
                            >
                                <img 
                                    src={img1} 
                                    alt="BlancheNova Tech - Intelligence Artificielle" 
                                    className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-2xl h-auto object-cover rounded-2xl shadow-2xl"
                                />
                            </motion.div>

                            {/* Badges flottants */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-xl z-20"
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    <span className="text-sm font-semibold">IA Certifiée</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-6 -left-6 bg-white px-4 py-2 rounded-full shadow-xl border border-blue-200 z-20"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold text-gray-700">Formation disponible</span>
                                </div>
                            </motion.div>

                            {/* Éléments décoratifs autour de l'image */}
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full filter blur-3xl opacity-30"></div>
                        </div>

                        {/* Miniatures de technologies */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center gap-3 mt-6"
                        >
                            {['Python', 'TensorFlow', 'PyTorch', 'OpenAI'].map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-600 shadow-sm border border-gray-200">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
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
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}