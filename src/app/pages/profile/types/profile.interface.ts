import { IShortEntity } from "src/app/shared/types/shortEntity.interface";
import { ICourseTaking } from "./courseTaking.interface";

export interface IProfile {
  fio: string;
  email: string;
  logo: string;
  procent: number;
  course_taking: ICourseTaking[];
  mentor_choose: IShortEntity[];
  favourites: IShortEntity[];
}
