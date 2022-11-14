import {Main} from "../components/Main";
import {useQuery} from "@apollo/client";
import {GetAllProductsDocument} from "../graphql/generated/graphql";


const HomePage = () => {
    const {data, loading, error} = useQuery(GetAllProductsDocument);

    if (loading) return <Main><p>Loading...</p></Main>

    if (error) return <Main><pre>{JSON.stringify(error, null, 2)}</pre></Main>

    return (
        <Main>
            <pre>{JSON.stringify(data.products, null, 2)}</pre>
        </Main>
    );
};

export default HomePage;
