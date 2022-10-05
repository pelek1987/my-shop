import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Product } from "../components/Product";
import { DATA } from "../data";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <Product data={DATA} />
      </Main>
      <Footer />
    </div>
  );
};

export default HomePage;
