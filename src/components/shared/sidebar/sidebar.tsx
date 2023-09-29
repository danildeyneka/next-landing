import { FC } from 'react';
import s from './sidebar.module.scss';
import { sidebar } from '@/components/shared/sidebar/data';
import { Tape } from '@/components/common/tape/tape';

export const Sidebar: FC = () => {
  const mappedSidebar = sidebar.map((i) => <Tape title={i.name} icon={i.icon} key={i.key} />);

  return <nav className={s.sidebar}>{mappedSidebar}</nav>;
};
