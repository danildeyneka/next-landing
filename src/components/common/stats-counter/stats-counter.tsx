import { FC } from 'react';
import s from './stats-counter.module.scss';
import { StatsCountT } from '@/types/news';
import { EmojiCounter } from '@/components/common/stats-counter/emoji-counter';

export const StatsCounter: FC<{ stats: StatsCountT }> = ({ stats }) => {
  const { comment, poo, like, dislike, bookmark } = stats;

  return (
    <div className={s.stats}>
      <EmojiCounter name="like" num={like} />
      <EmojiCounter name="dislike" num={dislike} />
      <EmojiCounter name="poo" num={poo} />
      <EmojiCounter name="comment" num={comment} />
      <EmojiCounter name="bookmark" num={bookmark} />
    </div>
  );
};
