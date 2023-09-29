import { FC } from 'react';
import s from './chips.module.scss';
import Image from 'next/image';

type Props = {
  icon?: string;
  symbol?: string;
  content: string;
};
export const Chips: FC<Props> = ({ icon, symbol, content }) => {
  return (
    <div className={s.chips}>
      <div className={s.icon}>
        {icon && <Image src={icon} alt={content} />}
        {symbol && <p className={s.symbol}>{symbol}</p>}
      </div>
      <p className={s.content}>{content}</p>
    </div>
  );
};
