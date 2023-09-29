import pic1 from '@/assets/images/news/1.png';
import pic2 from '@/assets/images/news/2.png';
import pic3 from '@/assets/images/news/3.png';
import pic4 from '@/assets/images/news/4.png';
import { IncidentsCardT } from '@/types/news';

export const incidents: Array<IncidentsCardT> = [
  {
    content: 'Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли',
    timestamp: '2023-01-01T13:53:25+05:00',
    icon: pic1,
    stats: {
      like: 23,
      dislike: 23,
      poo: 23,
      comment: 7,
      bookmark: 14,
    },
  },
  {
    content: 'Семилетняя девочка из Екатеринбурга умерла после купания в Черном море',
    timestamp: '2023-01-01T13:53:25+05:00',
    icon: pic2,
    stats: {
      like: 23,
      dislike: 23,
      poo: 23,
      comment: 7,
      bookmark: 14,
    },
  },
  {
    content: 'Теннис — спорт леди и джентльменов. Как разобраться в нем?',
    timestamp: '2023-01-01T13:53:25+05:00',
    icon: pic3,
    stats: {
      like: 23,
      dislike: 23,
      poo: 23,
      comment: 7,
      bookmark: 14,
    },
  },
  {
    content: 'Как скейтбординг стал популярным видом спорта и модной субкультурой?',
    timestamp: '2023-01-01T13:53:25+05:00',
    icon: pic4,
    stats: {
      like: 23,
      dislike: 23,
      poo: 23,
      comment: 7,
      bookmark: 14,
    },
  },
];
