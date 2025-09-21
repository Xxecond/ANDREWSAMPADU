import Front from "./home";
import Header from "./components/header";
import Projects from "./projects";
export default function Home() {

  return (
    <div>
      <main className="h-[280vh]" >
        <Header />
        <Front />
        <Projects />
      </main>
    </div>
  );
}