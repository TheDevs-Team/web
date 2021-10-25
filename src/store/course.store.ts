/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { CourseAPI } from '~/api';
import { getCurrentCourseID } from '~/utils';

class CourseStore {
  @persist
  @observable
  courses: CourseType[] = [];

  @persist
  @observable
  course: CourseType = {
    id: '',
    active: false,
    name: '',
    description: '',
    manager_id: '',
    created_at: '',
    updated_at: '',
  };

  constructor() {
    makeObservable(this);
  }

  @action
  list = async (): Promise<CourseType[] | null> => {
    const response = await CourseAPI.list();

    if (response) {
      return (this.courses = response);
    }

    return null;
  };

  @action
  find = async (): Promise<CourseType | null> => {
    const response = await CourseAPI.find(getCurrentCourseID()!);

    if (response) {
      return (this.course = response);
    }

    return null;
  };
}

export default CourseStore;
