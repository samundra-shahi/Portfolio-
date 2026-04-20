import { Header } from "./layouts/Header";
import { Hero } from "./features/hero/Hero";
import { About } from "./features/about/About";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
