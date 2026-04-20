

const FacebookIcon = () => (<svg xmlns="http://www.apache.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);
const YoutubeIcon = () => (<svg xmlns="http://www.apache.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>);
const TwitterIcon = () => (<svg xmlns="http://www.apache.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>);

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between border-b border-white/10 bg-brand-blue/90 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="font-display font-bold text-2xl tracking-widest">.: SS</span>
        <div className="flex flex-col uppercase text-[10px] leading-tight font-display tracking-[0.2em] opacity-80">
          <span>Samundra</span>
          <span>Shahi</span>
        </div>
      </div>
      
      <nav className="hidden md:flex items-center gap-12 font-bold text-sm tracking-widest">
        <a href="#hero" className="hover:text-brand-orange transition-colors">WORKS</a>
        <a href="#about" className="hover:text-brand-orange transition-colors">ABOUT</a>
        <a href="#skills" className="hover:text-brand-orange transition-colors">SKILLS</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="#" className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center hover:scale-110 transition-transform">
          <FacebookIcon />
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:scale-110 transition-transform">
          <YoutubeIcon />
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:scale-110 transition-transform">
          <TwitterIcon />
        </a>
      </div>
    </header>
  );
}
