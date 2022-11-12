import {Main} from "../components/Main";
import {gql, useQuery} from "@apollo/client";

const GET_ALL_PRODUCTS_QUERY = gql`
  query GetAllProducts {
    products {
        id
        name
        price
        slug
        images {
            url
        }
    }
   }
 `;


const HomePage = () => {
    const {data, loading, error} = useQuery(GET_ALL_PRODUCTS_QUERY);

    if (loading) return <Main><p>Loading...</p></Main>

    if (error) return <Main><pre>{JSON.stringify(error, null, 2)}</pre></Main>

    return (
        <Main>
            <pre>{JSON.stringify(data.products, null, 2)}</pre>
        </Main>
    );
};

export default HomePage;
