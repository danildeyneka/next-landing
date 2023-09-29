import { FC } from 'react';
import { Heading } from '@/components/common/heading/heading';
import s from './feed.module.scss';
import { feed } from '@/assets/data/feed';
import { FeedCard } from '@/components/cards/feed-card/feed-card';

export const Feed: FC = () => {
  const mappedFeed = feed.map((i) => <FeedCard content={i.content} timestamp={i.timestamp} tag={i.tag} key={`${i.content}${i.timestamp}`} />);

  return (
    <section className={s.feed}>
      <Heading content="Лента" />
      <div className={s.feed__wrapper}>{mappedFeed}</div>
      <div className={s.feed__line}></div>
    </section>
  );
};
