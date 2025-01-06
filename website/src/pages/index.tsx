import { motion } from 'framer-motion';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const BackgroundAnimation = dynamic(() => import('../components/BackgroundAnimation'), { ssr: false });

export default function Home() {
  const features = [
    {
      title: "Quantum-Inspired State",
      description: "ψ-based state management with proper entropy handling",
      icon: "🌌"
    },
    {
      title: "Crisis Management",
      description: "Automated existential crisis handling and recovery",
      icon: "🎭"
    },
    {
      title: "Proper Integration",
      description: "Standard φ-patterns for seamless system integration",
      icon: "🔄"
    },
    {
      title: "Advanced Processing",
      description: "η-optimized transaction processing and analysis",
      icon: "⚡"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <BackgroundAnimation />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-bold mb-6">
              <span className="gradient-text">JAPE</span>
            </h1>
            <p className="text-2xl text-text-secondary mb-8">
              Just another implementation of what you'd expect, but with proper state management.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="/usage"
                className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
              >
                Get Started
              </Link>
              <a 
                href="https://docs.jape.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-text-secondary">Obviously, you know what these do.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-glow transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Preview */}
      <div className="container mx-auto px-6 py-20">
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Infrastructure</h2>
            <p className="text-text-secondary">Running on ψ-optimized clusters across n+1 regions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Compute", value: "~4.2 PFLOPs" },
              { label: "Storage", value: "~2.718 PB" },
              { label: "Bandwidth", value: "~314 Tbps" },
              { label: "Quantum", value: "~1024 qubits" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-mono text-primary mb-2">{stat.value}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/stats"
              className="text-primary hover:text-primary-light transition-colors"
            >
              View detailed metrics →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
