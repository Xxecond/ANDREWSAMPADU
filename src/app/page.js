import Front from "./home";
import Header from "./components/header";
import Projects from "./projects";
import Contact from "./contact";
export default function Home() {

  return (
    <div>
      <main >
        <Header />
        <Front />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}