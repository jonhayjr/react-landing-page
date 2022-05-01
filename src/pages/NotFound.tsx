import Layout from '../components/Layout'
import Error from '../components/Error/index';

const NotFound = () => {
    return (
        <Layout>
            <Error>
                <h2>An error has occurred.</h2>
                <p>Please try again.</p>
            </Error>
        </Layout>
    )
}

export default NotFound;