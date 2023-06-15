import { Component,ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  calendarVisible = true;
  calendarOptions!: CalendarOptions;
  currentEvents: EventApi[] = [];
  usuario!: Usuario;
  acceso: boolean = false;
  reservaciones: EventInput[] = [];
  mostrar: MostrarReservaciones[] = [];

  constructor(private changeDetector: ChangeDetectorRef) {
    if (localStorage.getItem("usuarioActual") != null) {
      this.usuario = JSON.parse(localStorage.getItem("usuarioActual") || "");
      this.acceso = true;
    } else {
      this.acceso = false;
    }
    if (localStorage.getItem("reservaciones") != null) {
      this.reservaciones = JSON.parse(localStorage.getItem("reservaciones") || "");
    } else {
      this.reservaciones = INITIAL_EVENTS;
    }
    this.calendarOptions = {
      plugins: [
        interactionPlugin,
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
      ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: 'dayGridMonth',
      initialEvents: this.reservaciones,
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this)
    };
    let aux:MostrarReservaciones;
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    if (this.acceso) {
      const title = prompt('Please enter a new title for your event');
      const calendarApi = selectInfo.view.calendar;
      var evIniciales: EventInput[] = [];
      calendarApi.unselect();

      if (localStorage.getItem("reservaciones") != null) {
        evIniciales = JSON.parse(localStorage.getItem("reservaciones") || "");
      } else {
        evIniciales = INITIAL_EVENTS;
      }


      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title: title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
          usuario: this.usuario.correo
        });
        evIniciales.push({
          id: createEventId(),
          title: title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
          usuario: this.usuario.correo
        });
        console.log(evIniciales);
        localStorage.removeItem("reservaciones");
        localStorage.setItem("reservaciones", JSON.stringify(evIniciales));
      }
    } else {
      alert("No ha iniciando sesion ningun usuario.");
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
}

interface Usuario {
  nombre: string,
  apellido: string,
  correo: string,
  telefono: string,
  contrasena: string,
  nacimiento: Date,
}

interface MostrarReservaciones {
  id: string,
  title: string,
  start: string,
  end: string,
  allDay: string,
  usuario: string
}
