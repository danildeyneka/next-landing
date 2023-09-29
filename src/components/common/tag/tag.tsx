import { FC } from 'react';
import s from './tag.module.scss';

export const Tag: FC<{ tag: string; className?: string }> = ({ tag, className }) => {
  return <p className={`${s.tag}${className ? ' ' + className : ''}`}>{tag}</p>;
};
