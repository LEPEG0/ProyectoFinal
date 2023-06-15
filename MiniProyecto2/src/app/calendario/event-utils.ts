import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); 

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Evento de todo el dia',
    start: TODAY_STR,
    usuario:""
  },
  {
    id: createEventId(),
    title: 'Apartado',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03:00:00',
    usuario:""
  },
  {
    id: createEventId(),
    title: 'Reservado',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00',
    usuario:""
  }
];

export function createEventId() {
  return String(eventGuid++);
}
