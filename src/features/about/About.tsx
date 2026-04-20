import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-8 lg:px-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-display font-bold mb-12 text-center"
        >
          Curriculum Vitae
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-6">Summary</h3>
            <div className="pl-6 border-l border-white/20 relative before:absolute before:left-[-5px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-white before:border-2 before:border-brand-blue">
              <p className="font-bold mb-4">Subject: Application for IT Support Specialist Position</p>
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                Dear Hiring Manager,
              </p>
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                I recently saw your job posting for the IT Support Specialist position at Informatics College, Pokhara. Based on the information you provided, I am quite interested in this position.
              </p>
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                I have a bachelor's degree and strong knowledge of computer networks, hardware, and software. I am confident my skills in troubleshooting and communication directly relate to the role and make me a suitable candidate.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-6">Education</h3>
              <div className="pl-6 border-l border-white/20 relative before:absolute before:left-[-5px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-white before:border-2 before:border-brand-blue">
                <h4 className="font-bold mb-1">Informatics College Pokhara</h4>
                <p className="text-sm text-white/60">Undergraduate • Bachelor 2-Year</p>
              </div>
            </div>

            <div id="skills">
              <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-6">Skills & Languages</h3>
              
              <div className="pl-6 border-l border-white/20 relative before:absolute before:left-[-5px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-white before:border-2 before:border-brand-blue mb-8">
                <h4 className="font-bold mb-2 flex items-center gap-2">Coding</h4>
                <div className="h-2 w-full bg-white/20 rounded overflow-hidden">
                  <div className="h-full bg-brand-orange w-[80%]" />
                </div>
              </div>

              <div className="pl-6 border-l border-white/20 relative before:absolute before:left-[-5px] before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-white before:border-2 before:border-brand-blue">
                <h4 className="font-bold mb-2 flex items-center gap-2">English</h4>
                <div className="h-2 w-full bg-white/20 rounded overflow-hidden">
                  <div className="h-full bg-brand-orange w-[75%]" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-6">Contact</h3>
              <ul className="text-sm space-y-2 opacity-80">
                <li>Email: samundra.shahi.55@gmail.com</li>
                <li>Phone: 9709873792</li>
                <li>Location: Pokhara</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
