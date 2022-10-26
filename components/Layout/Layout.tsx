import {ReactNode} from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";
import Head from "next/head";

const Layout = ({children}: {
    children: ReactNode;
}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>My Shop</title>
                <meta name="description" content="Sialalala" />
            </Head>
            <Header/>
            <div className="flex-grow">
                {children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;