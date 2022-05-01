import Layout from '../components/Layout/index';
import Hero from '../components/Hero';

const Home = (): JSX.Element => {
    return (
        <Layout>
            <main>
               <Hero/>
            </main>
        </Layout>
    )
}

export default Home;