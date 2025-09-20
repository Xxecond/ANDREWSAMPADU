import Front from "./home";
import Header from "./components/header";

export default function Home() {

  return (
    <div>
      <main className="h-[280vh]" >
        <Header />
        <Front />
      </main>
    </div>
  );
}