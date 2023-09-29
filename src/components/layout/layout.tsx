import { FC } from 'react';
import s from './layout.module.scss';
import { Sidebar } from '@/components/shared/sidebar/sidebar';
import { News } from '@/pages/news/news';

export const Layout: FC = () => {
  return (
    <div className={s.layout}>
      <Sidebar />
      <News />
    </div>
  );
};
