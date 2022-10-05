import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-lg mx-auto w-full  px-4 py-2 bg-teal-100">
        Właściwa zawartość
      </main>
      <Footer />
    </div>
  );
};

export default Home;
