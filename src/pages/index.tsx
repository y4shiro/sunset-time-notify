import type { NextPage } from 'next';
import NextHeadSeo from 'next-head-seo';

import MainContent from '../components/MainContent';

const Home: NextPage = () => {
  return (
    <>
      <NextHeadSeo
        title='Sunset Time Notify'
        description='任意の日時 / 地点の日没時刻を表示したり、Push 通知などで日没が近づくと通知する Web サービス'
        canonical='https://sunset-time-notify.y4shiro.net/'
      />
      <MainContent />
    </>
  );
};

export default Home;
