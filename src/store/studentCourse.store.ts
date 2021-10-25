import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { StudentCourseAPI } from '~/api';

class StudentCourseStore {
  @persist
  @observable
  courses: StudentCourseType[] = [];

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
}

export default StudentCourseStore;
