import { FC } from 'react';
import s from './header.module.scss';
import { inter } from '@/app/fonts';
import { Chips } from '@/components/common/chips/chips';
import calendar from '@/assets/images/common/calendar.svg';
import Image from 'next/image';
import search from '@/assets/images/common/search.svg';
import profile from '@/assets/images/common/profile.svg';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={`${s.logo} ${inter.className}`}>ЛОГО</div>
      <section className={s.section}>
        <div className={s.wrapper}>
          <Chips icon={calendar} content="ПН, 4.08.2023" />
          <Chips symbol="$" content="96.34" />
          <Chips symbol="€" content="104.61" />
          <Chips symbol="₿" content="25.725" />
        </div>
        <div>
          <Image alt="search" src={search} className={s.icon} />
          <Image alt="profile" src={profile} className={s.icon} />
        </div>
      </section>
    </header>
  );
};
