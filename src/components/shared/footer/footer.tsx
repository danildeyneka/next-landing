import { FC } from 'react';
import s from './footer.module.scss';
import { montserrat } from '@/app/fonts';
import Image from 'next/image';
import telegram from '@/assets/images/common/telegram.svg';

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.logo}>
        <div className={montserrat.className}>ЛОГО</div>
        <p className={s.logoText}>© НАЗВАНИЕ 2023. Все права защищены</p>
      </div>
      <div className={s.contacts}>
        <section className={s.contacts__block}>
          <div>
            <p>Контакты</p>
            <p>Редакция</p>
          </div>
          <div>
            <p>Политика конфиденциальности</p>
            <p>Условия использования</p>
            <p>Реклама</p>
          </div>
        </section>

        <section className={s.contacts__info}>
          <div>
            По любым вопросам <br /> пишите на <a href="mailto:privet@yandex.com">privet@yandex.com</a>
          </div>
          <section>
            <Image src={telegram} alt="telegram" />
            <p>Подписаться</p>
          </section>
        </section>
      </div>
      <button className={s.contacts__button} type="button">
        Предложить новость
      </button>
    </footer>
  );
};
