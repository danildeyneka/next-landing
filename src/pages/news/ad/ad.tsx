import { FC } from 'react';
import s from './ad.module.scss';

export const Ad: FC = () => {
  return (
    <section className={s.ad}>
      <span className={s.ad__link}>Ссылка на сайт</span>
      <p className={s.ad__disclaimer}>Реклама</p>
      <div className={s.ad__content}>Реклама</div>
      <p className={s.ad__desc}>Текст длинного рекламного объявления</p>
    </section>
  );
};
