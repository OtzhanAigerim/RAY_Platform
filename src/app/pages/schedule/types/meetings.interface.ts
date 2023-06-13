// import { IScheduleCourses } from "src/app/shared/types/scheduleCourses.interface";

export interface IMeetings {
  id: number;
  month: string;
  shortmonth: string;
  day: number;
  nameDay: string;
  fullDay: string;
  time: string;
  // courses: IScheduleCourses[]
}
