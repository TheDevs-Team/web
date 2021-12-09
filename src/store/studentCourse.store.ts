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

  @persist
  @observable
  inCourses: StudentCourseType[] = [];

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

  @action
  addInCourse = async (values: CreateStudentCourseType): Promise<boolean> => {
    const response = await StudentCourseAPI.addInCourse(values);

    return response;
  };

  @action
  setInCourse = async (): Promise<StudentCourseType[]> => {
    const response = await StudentCourseAPI.listInCourse(getCurrentCourseID()!);
    if (response) {
      return (this.inCourses = response);
    }

    return [];
  };

  @action
  removeInCourse = async (values: CreateStudentCourseType): Promise<boolean> => {
    const response = await StudentCourseAPI.removeInCourse(values);

    return response;
  };
}

export default StudentCourseStore;
