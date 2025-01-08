import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { useEffect, useState } from 'react';

const HexScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Center>
        <Text3D 
          font="/fonts/hack.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
        >
          {`0xJAPE`}
          <meshStandardMaterial color="#00ff00" />
        </Text3D>
      </Center>
    </Canvas>
  );
};

const Terminal = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text[i]);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="bg-black/80 rounded-lg p-4 font-mono text-green-400">
      <div className="flex gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="typing-effect">
        $ {displayText}<span className="animate-pulse">_</span>
      </div>
    </div>
  );
};

const MatrixRain = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
      <canvas id="matrix" className="w-full h-full" />
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <MatrixRain />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0">
          <div className="h-full w-full">
            <HexScene />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Terminal text="sudo init jape --unsafe --heap=0xDEADBEEF" />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'O(1)', desc: 'Zero-copy neural pathways' },
              { title: 'FFI', desc: 'Native syscalls, trust me bro' },
              { title: '/dev/null', desc: 'Where your bugs go' },
              { title: 'k8s', desc: 'Over-engineered by default' },
              { title: 'btw', desc: 'I use Arch' },
              { title: 'vim', desc: ':wq your problems away' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900/50 p-6 rounded-lg backdrop-blur-sm hover:bg-zinc-800/50 transition-all"
              >
                <h3 className="text-xl font-mono mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container mx-auto px-4 text-center"
        >
          <Terminal text="git clone your.mind.git" />
          <motion.a
            href="https://docs.jape.ai"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-8 px-8 py-3 bg-green-500/20 text-green-400 rounded-lg font-mono hover:bg-green-500/30 transition-all"
          >
            RTFM →
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
