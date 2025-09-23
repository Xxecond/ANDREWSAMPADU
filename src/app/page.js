import Front from "./home";
import Header from "./components/header";
import Projects from "./projects";
import About from "./about";
import ContactForm from "./contact";
export default function Home() {

  return (
    <div>
      <main >
        <Header />
        <Front />
        <Projects />
        <About />
        <ContactForm />
      </main>
    </div>
  );
}