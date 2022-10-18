import Link from "next/link";

const Header = () => (
  <header className="max-w-lg mx-auto w-full">
    <nav className="flex gap-3 bg-gray-700 text-white px-4 py-2">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
     <Link href="/products">
         <a>Products</a>
     </Link>
    </nav>
  </header>
);

export default Header;
