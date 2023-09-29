import feed from '@/assets/images/sidebar/feed.svg';
import business from '@/assets/images/sidebar/business.svg';
import auto from '@/assets/images/sidebar/auto.svg';
import crypto from '@/assets/images/sidebar/crypto.svg';
import economics from '@/assets/images/sidebar/economics.svg';
import education from '@/assets/images/sidebar/education.svg';
import estate from '@/assets/images/sidebar/estate.svg';
import health from '@/assets/images/sidebar/health.svg';
import incidents from '@/assets/images/sidebar/incidents.svg';
import show from '@/assets/images/sidebar/show.svg';
import sports from '@/assets/images/sidebar/sports.svg';
import politics from '@/assets/images/sidebar/politics.svg';
import style from '@/assets/images/sidebar/style.svg';
import tech from '@/assets/images/sidebar/tech.svg';
import tourism from '@/assets/images/sidebar/tourism.svg';

export const sidebar: Array<{ name: string; key: number; icon: any }> = [
  {
    name: 'Лента',
    key: 0,
    icon: feed,
  },
  {
    name: 'Происшествия',
    key: 1,
    icon: incidents,
  },
  {
    name: 'Авто',
    key: 2,
    icon: auto,
  },
  {
    name: 'Бизнес',
    key: 3,
    icon: business,
  },
  {
    name: 'Здоровье',
    key: 4,
    icon: health,
  },
  {
    name: 'Крипто',
    key: 5,
    icon: crypto,
  },
  {
    name: 'Недвижимость',
    key: 6,
    icon: estate,
  },
  {
    name: 'Образование',
    key: 7,
    icon: education,
  },
  {
    name: 'Политика',
    key: 8,
    icon: politics,
  },
  {
    name: 'Туризм',
    key: 9,
    icon: tourism,
  },
  {
    name: 'Шоу-бизнес',
    key: 10,
    icon: show,
  },
  {
    name: 'Спорт',
    key: 11,
    icon: sports,
  },
  {
    name: 'Стиль',
    key: 12,
    icon: style,
  },
  {
    name: 'Наука и технологии',
    key: 13,
    icon: tech,
  },
  {
    name: 'Экономика',
    key: 14,
    icon: economics,
  },
];
