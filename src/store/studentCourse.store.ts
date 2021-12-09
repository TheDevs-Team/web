import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { StudentCourseAPI } from '~/api';
import { getCurrentCourseID } from '~/utils';

class StudentCourseStore {
  @persist
  @observable
  courses: StudentCourseType[] = [];

  @observable
  notInCourse: UserType[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  find = async (): Promise<StudentCourseType[] | null> => {
    const response = await StudentCourseAPI.find();

    if (response) {
      return (this.courses = response);
    }

    return null;
  };

  @action
  setNotInCourse = async (): Promise<UserType[]> => {
    const response = await StudentCourseAPI.notInCourse();

    if (response) {
      return (this.notInCourse = response);
    }

    return [];
  };
}

export default StudentCourseStore;
