import { FC } from 'react';
import { Heading } from '@/components/common/heading/heading';
import s from './feed.module.scss';
import { feed } from '@/assets/data/feed';
import { FeedCard } from '@/components/cards/feed-card/feed-card';
import Image from 'next/image';
import fire from '@/assets/images/common/fire.svg';

export const Feed: FC = () => {
  const mappedFeed = feed.map((i) => <FeedCard content={i.content} timestamp={i.timestamp} tag={i.tag} key={`${i.content}${i.timestamp}`} />);
  const runningLineBody = [...Array(6)].map((i, n) => (
    <span className={s.feed__line} key={n}>
      <Image src={fire} alt="fire" />
      <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
    </span>
  ));
  // duplicated to make unique keys
  const runningLineBodyShadow = [...Array(6)].map((i, n) => (
    <span className={s.feed__line} key={n + 6}>
      <Image src={fire} alt="fire" />
      <p>ОЧЕНЬ ВАЖНАЯ НОВОСТЬ</p>
    </span>
  ));

  return (
    <section className={s.feed}>
      <Heading content="Лента" />
      <div className={s.feed__content}>{mappedFeed}</div>
      <div className={s.feed__lineWrapper}>
        <div>{runningLineBody}</div>
        <div>{runningLineBodyShadow}</div>
      </div>
    </section>
  );
};
