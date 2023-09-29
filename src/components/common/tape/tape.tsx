import { FC } from 'react';
import s from './tape.module.scss';
import Image from 'next/image';

type Props = {
  title: string;
  icon: string;
};
export const Tape: FC<Props> = ({ icon, title }) => {
  return (
    <div className={`${s.tape}${title === 'Лента' ? ' ' + s.active : ''}`}>
      <Image src={icon} alt={title} />
      <p>{title}</p>
    </div>
  );
};
