import { FC } from 'react';
import s from './news-card.module.scss';
import { NewsCardT } from '@/types/news';
import { Tag } from '@/components/common/tag/tag';
import { getDateNTime } from '@/utils/moment/get-date-n-time';
import { StatsCounter } from '@/components/common/stats-counter/stats-counter';

export const NewsCard: FC<NewsCardT> = ({ tag, content, timestamp, stats }) => {
  return (
    <div className={s.news}>
      <div className={s.news__header}>
        <Tag tag={tag} />
        <span>{getDateNTime(timestamp)}</span>
      </div>
      <p>{content}</p>
      <div className={s.news__stats}>
        <StatsCounter stats={stats} />
      </div>
    </div>
  );
};
