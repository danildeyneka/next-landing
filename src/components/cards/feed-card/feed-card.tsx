import { FC } from 'react';
import s from './feed-card.module.scss';
import Image from 'next/image';
import lightning from '@/assets/images/common/lightning-black.svg';
import moment from 'moment';
import { Tag } from '@/components/common/tag/tag';
import { FeedCardT } from "@/types/news";

export const FeedCard: FC<FeedCardT> = ({ tag, content, timestamp }) => {
  return (
    <div className={s.feed}>
      <Image src={lightning} alt="fire" />
      <div className={s.feed__content}>
        <p>{content}</p>
        <span>{moment(timestamp).format('HH:mm')}</span>
        <Tag tag={tag} className={s.feed__tag} />
      </div>
    </div>
  );
};
