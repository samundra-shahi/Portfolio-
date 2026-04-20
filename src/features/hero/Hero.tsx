import { Play } from "lucide-react";
import { Button } from "../../components/Button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-24 pb-12 px-8 lg:px-12 flex flex-col lg:flex-row items-stretch">
      <div className="flex-1 flex flex-col justify-center pr-8 lg:pr-24 lg:border-r border-white/10 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="tracking-[0.4em] text-sm font-bold uppercase mb-4 opacity-80 pl-1">IT SUPPORT SPECIALIST</h2>
          <h1 className="text-[5rem] lg:text-[7.5rem] font-display font-bold leading-[0.85] mb-12 tracking-tight">
            SAMUNDRA <br /> SHAHI
          </h1>
          
          <div className="flex items-center gap-6 mb-12 pl-1">
            <p className="max-w-[240px] text-sm opacity-90 leading-relaxed font-medium">
              Samundra Shahi is a dedicated IT Support Specialist based in Pokhara.
            </p>
            <div className="w-14 h-14 rounded-full border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex-shrink-0" />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pl-1">
            <Button className="gap-4 !px-8 !py-4 shadow-xl shadow-brand-orange/20">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <Play size={14} className="text-brand-orange ml-0.5" fill="currentColor" />
              </div>
              LEARN MORE
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="flex-1 hidden lg:flex items-center justify-center p-8 lg:pl-16 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-full max-h-[80vh] bg-pattern border border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative frame inner line */}
          <div className="absolute inset-4 border border-white/5 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
