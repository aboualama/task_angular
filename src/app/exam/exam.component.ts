
import { Component } from '@angular/core';

const Apoin: Apointment[] = [
          {
            appointmentDateTimeEd: "DateTimeEd",
            chechupTupe: {name: "chechupTupe"},
            patient: {username: "patient_username", lastname: "patient_lastname"},
            doctor: { name: "doctor_name"},
            exams: [
              {name: 'Hydrogen'},
              {name: 'Helium'},
              {name: 'Lithium'},
              {name: 'Beryllium'},
            ],
            note: "patient_username patient_lastname doctor_name"
          },
          {
            appointmentDateTimeEd: "DateTimeEd",
            chechupTupe: {name: "chechupTupe"},
            patient: {username: "patient_username", lastname: "patient_lastname"},
            doctor: { name: "doctor_name"},
            exams: [
              {name: 'Hydrogen'},
              {name: 'Helium'},
              {name: 'Lithium'},
              {name: 'Beryllium'},
            ],
            note: "patient_username patient_lastname doctor_name"
          },
          {
            appointmentDateTimeEd: "DateTimeEd",
            chechupTupe: {name: "chechupTupe"},
            patient: {username: "patient_username", lastname: "patient_lastname"},
            doctor: { name: "doctor_name"},
            exams: [
              {name: 'Hydrogen'},
              {name: 'Helium'},
              {name: 'Lithium'},
              {name: 'Beryllium'},
            ],
            note: "patient_username patient_lastname doctor_name"
          },
          {
            appointmentDateTimeEd: "DateTimeEd",
            chechupTupe: {name: "chechupTupe"},
            patient: {username: "patient_username", lastname: "patient_lastname"},
            doctor: { name: "doctor_name"},
            exams: [
              {name: 'Hydrogen'},
              {name: 'Helium'},
              {name: 'Lithium'},
              {name: 'Beryllium'},
            ],
            note: "patient_username patient_lastname doctor_name"
          },
      ];

export interface Apointment {
        appointmentDateTimeEd: string,
        chechupTupe: {
          name: string
        },
        patient: {
          username: string,
          lastname: string,
        },
        doctor: {
          name: string
        },
        exams: {},
        note: string
}

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent   {
  appointmentDateTimeST = new Date('December 17, 1995 03:24:00');
  dataSource = Apoin;
}


