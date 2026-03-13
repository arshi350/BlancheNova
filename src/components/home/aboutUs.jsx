import { motion } from "framer-motion";
import { 
  Target, 
  Rocket, 
  Users, 
  Globe2, 
  Award, 
  Lightbulb,
  ChevronRight,
  Sparkles,
  Brain,
  Cpu,
  Code2,
  TrendingUp
} from 'lucide-react';

export function AboutUs() {
  const stats = [
    { value: "5+", label: "Années d'expertise", icon: <Award className="w-5 h-5" /> },
    { value: "500+", label: "Apprenants formés", icon: <Users className="w-5 h-5" /> },
    { value: "50+", label: "Entreprises accompagnées", icon: <Target className="w-5 h-5" /> },
    { value: "10+", label: "Pays couverts", icon: <Globe2 className="w-5 h-5" /> }
  ];

  const values = [
    {
      title: "Innovation",
      description: "À la pointe de la technologie IA",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Excellence",
      description: "Formations certifiantes de qualité",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Impact",
      description: "Transformation digitale durable",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Accessibilité",
      description: "Formation pour tous les niveaux",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const services = [
    { name: "IA & Machine Learning", icon: <Brain className="w-4 h-4" /> },
    { name: "Automatisation", icon: <Cpu className="w-4 h-4" /> },
    { name: "Développement", icon: <Code2 className="w-4 h-4" /> }
  ];

  return (
    <section className="relative py-10 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 ">
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
            <span className="text-sm font-semibold text-blue-800">Qui sommes-nous ?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              À propos de nous
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Carte principale de présentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Décoration de fond */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-1 scale-105 opacity-20 blur-xl"></div>
          
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
            {/* Pattern de fond */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
            
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Contenu texte */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 mb-4"
                  >
                    <Rocket className="w-6 h-6 text-yellow-300" />
                    <span className="text-yellow-300 font-semibold">Innovation & Excellence</span>
                  </motion.div>

                  <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
                    BlancheNova Tech est une entreprise camerounaise spécialisée en Intelligence Artificielle, 
                    automatisation digitale et services informatiques innovants. Nous accompagnons étudiants 
                    et entreprises vers la maîtrise des technologies du futur.
                  </p>

                  {/* Tags services */}
                  <div className="flex flex-wrap gap-3">
                    {services.map((service, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/30"
                      >
                        {service.icon}
                        {service.name}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Statistiques rapides */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="text-yellow-300 mb-2">{stat.icon}</div>
                      <p className="text-2xl font-black text-white">{stat.value}</p>
                      <p className="text-xs text-white/80">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Nos valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Nos valeurs</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-xl p-6 overflow-hidden cursor-pointer"
              >
                {/* Bande de couleur en haut */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${value.color}`}></div>
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${value.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
                
                {/* Effet de survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Mission et Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800">Notre Mission</h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Démocratiser l'accès à l'intelligence artificielle en Afrique et former la prochaine 
              génération de talents tech, tout en accompagnant les entreprises dans leur transformation 
              digitale.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800">Notre Vision</h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Devenir le leader africain de la formation et de l'innovation en Intelligence Artificielle, 
              en créant un écosystème tech durable et inclusif sur tout le continent.
            </p>
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