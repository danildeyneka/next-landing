import { ReactNode } from 'react';
import s from './news.module.scss';
import Feed from '@/pages/news/feed/feed';
import Ad from '@/pages/news/ad/ad';
import NewsFeed from '@/pages/news/news-feed/news-feed';
import Incidents from '@/pages/news/incidents/incidents';

export default function News(): ReactNode {
  return (
    <main className={s.main}>
      <Feed />
      <Ad />
      <NewsFeed />
      <Incidents />
    </main>
  );
}
