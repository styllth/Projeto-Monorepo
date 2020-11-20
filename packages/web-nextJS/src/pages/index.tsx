import Head from 'next/head';

import Logo from '../assets/logo-next.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Logo />
      <h1>A Next.js structure</h1>
    </Container>
  );
};

export default Home;
