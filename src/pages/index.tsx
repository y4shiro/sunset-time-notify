import type { NextPage } from 'next';
import NextHeadSeo from 'next-head-seo';

import MainContent from '../components/MainContent';

const Home: NextPage = () => {
  const title = 'Sunset Time Notify';
  const description =
    '任意の日時 / 地点の日没時刻を表示したり、Push 通知などで日没が近づくと通知する Web サービス';
  const url = 'https://sunset-time-notify.y4shiro.net/';
  const ogpImgPath = 'sunset.png';
  console.log(`${url}${ogpImgPath}`);

  return (
    <>
      <NextHeadSeo
        title={title}
        description={description}
        canonical={url}
        og={{
          title,
          description,
          url,
          siteName: title,
          type: 'website',
          image: `${url}${ogpImgPath}`,
        }}
        twitter={{
          card: 'summary',
        }}
      />
      <MainContent />
    </>
  );
};

export default Home;
