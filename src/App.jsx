import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Navbar />
      <section className="divide-y divide-solid">
        <Hero />
        <Skill />
        <Project />
        <Contact />
      </section>
    </>
  );
}

export default App;
