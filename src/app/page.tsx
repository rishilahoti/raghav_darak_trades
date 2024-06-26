import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Landing from "./Pages/Landing";

export default function Home() {
  return (
    <main>
      <div>
        <Nav/>
        <Hero/>
        <Landing/>
      </div>
    </main>
  );
}
