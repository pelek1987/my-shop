import Link from "next/link";
import {useRouter} from "next/router";
import {AppRoute} from "../../types/AppRoute";

const Header = () => {
    const router = useRouter();

    return (
        <header className="max-w-lg mx-auto w-full">
            <nav className="flex gap-3 bg-gray-700 text-white px-4 py-2">
                <Link href={AppRoute.home}>
                    <a className={router.pathname === AppRoute.home ? "selected" : ""}>Home</a>
                </Link>
                <Link href={AppRoute.about}>
                    <a className={router.pathname === AppRoute.about ? "selected" : ""}>About</a>
                </Link>
                <Link href={AppRoute.products}>
                    <a className={router.pathname === AppRoute.products ? "selected" : ""}>Products</a>
                </Link>
            </nav>
        </header>
    )
};

export default Header;
