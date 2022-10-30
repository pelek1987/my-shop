import Link from "next/link";
import {CartBar} from "../Cart";
import {AppRoutes} from "../../types/app-routes";

const Header = () => (
    <Link href={AppRoutes.CART}>
        <a>
            <header className="max-w-screen-md mx-auto w-full flex items-center justify-between bg-gray-700 px-4">
                <nav className="flex gap-3 text-white px-4 py-2">
                    <Link href={AppRoutes.HOME}>
                        <a>Home</a>
                    </Link>
                    <Link href={AppRoutes.ABOUT}>
                        <a>About</a>
                    </Link>
                    <Link href={AppRoutes.PRODUCTS}>
                        <a>Products</a>
                    </Link>
                </nav>
                <CartBar/>
            </header>
        </a>
    </Link>
);

export default Header;
