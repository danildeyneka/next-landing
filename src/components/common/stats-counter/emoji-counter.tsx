'use client'
import { FC } from 'react';
import Image from 'next/image';
import s from './emoji-counter.module.scss';

export const EmojiCounter: FC<{ num: number; name: string }> = ({ num, name }) => (
  <div className={s.emoji}>
    <Image src={require(`assets/images/common/${name}.svg`)} alt={name} />
    <span>{num}</span>
  </div>
);
