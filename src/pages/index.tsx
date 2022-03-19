import type { NextPage } from 'next';
import MainContent from '../components/MainContent';

const Home: NextPage = () => {
  return (
    <div className='h-96 flex items-center justify-center'>
      <MainContent />
    </div>
  );
};

export default Home;
