import { ReactNode } from 'react';
import s from './news-feed.module.scss';
import { Heading } from '@/components/common/heading/heading';
import { news } from '@/assets/data/news';
import { NewsCard } from '@/components/cards/news-card/news-card';

export default function NewsFeed(): ReactNode {
  const mappedNews = news.map((i) => (
    <NewsCard tag={i.tag} content={i.content} timestamp={i.timestamp} stats={i.stats} key={`${i.content}${i.timestamp}`} />
  ));

  return (
    <section className={s.news}>
      <Heading content="Читайте также" icon />
      <div className={s.news__content}>{mappedNews}</div>
    </section>
  );
}
