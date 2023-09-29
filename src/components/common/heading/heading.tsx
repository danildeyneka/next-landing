import { FC } from 'react';
import s from './heading.module.scss';
import Image from 'next/image';
import arrowRight from '@/assets/images/common/arrow-right.svg';

type Props = {
  content: string;
  icon?: boolean;
};
export const Heading: FC<Props> = ({ icon, content }) => {
  return (
    <h2 className={s.heading}>
      {content}
      {icon && <Image src={arrowRight} alt="arrowRight" />}
    </h2>
  );
};
