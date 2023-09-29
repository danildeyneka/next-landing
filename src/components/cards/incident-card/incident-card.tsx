import { FC } from 'react';
import s from './incident-card.module.scss';
import { IncidentsCardT } from '@/types/news';
import Image from 'next/image';
import { StatsCounter } from '@/components/common/stats-counter/stats-counter';
import { getDateNTime } from '@/utils/moment/get-date-n-time';

export const IncidentCard: FC<IncidentsCardT> = ({ content, timestamp, stats, icon }) => {
  return (
    <div className={s.incident}>
      <Image src={icon} alt={content} />
      <div className={s.incident__content}>
        <span className={s.incident__time}>{getDateNTime(timestamp)}</span>
        <p className={s.incident__desc}>{content}</p>
        <div>{<StatsCounter stats={stats} />}</div>
      </div>
    </div>
  );
};
