import Front from "./home";
import Header from "./components/header";
import Footer from "./components/Footer"
import Projects from "./projects";
import About from "./about";
import ContactForm from "./contact";
import Try from "./try";
export default function Home() {

  return (
    <div>
      <main >
       <Header />
        <Front />
        <Projects />
        <About />
        <ContactForm />
        <Footer />
    {/*<Try />*/}
      </main>
    </div>
  );
}