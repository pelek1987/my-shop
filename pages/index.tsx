import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-lg mx-auto grid sm:grid-cols-2 gap-6 p-6">
        <img src="https://picsum.photos/536/364" alt="random photo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          exercitationem libero molestias nemo, magni debitis. Suscipit fugit
          numquam, sed dolorem ab, voluptatem repellendus voluptate vero dolorum
          accusantium pariatur impedit nostrum.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
