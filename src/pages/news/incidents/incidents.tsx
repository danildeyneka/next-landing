import { FC } from 'react';
import s from './incidents.module.scss';
import { Heading } from '@/components/common/heading/heading';
import { IncidentCard } from '@/components/cards/incident-card/incident-card';
import { incidents } from '@/assets/data/incidents';

export const Incidents: FC = () => {
  const mappedIncidents = incidents.map((i) => (
    <IncidentCard stats={i.stats} timestamp={i.timestamp} content={i.content} icon={i.icon} key={`${i.content}${i.timestamp}`} />
  ));

  return (
    <section className={s.incidents}>
      <div className={s.incidents__header}>
        <Heading content="Происшествия" icon />
      </div>
      <div className={s.incidents__content}>{mappedIncidents}</div>
    </section>
  );
};
