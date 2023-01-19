import Header from "../header/Header";
import Hero from "../hero/Hero";

export default function Home() {
  return (
    <div className="max-w-5xl container mx-auto">
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>body</div>
    </div>
  );
}
