export type StatsCountT = {
  like: number;
  dislike: number;
  poo: number;
  comment: number;
  bookmark: number;
};

export type FeedCardT = {
  content: string;
  timestamp: string;
  tag: string;
};

export type NewsCardT = {
  tag: string;
  timestamp: string;
  content: string;
  stats: StatsCountT;
};

export type IncidentsCardT = {
  icon: any;
  timestamp: string;
  content: string;
  stats: StatsCountT;
};
