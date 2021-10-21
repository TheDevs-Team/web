import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { CourseAPI } from '~/api';

class CourseStore {
  @persist('object')
  @observable
  courses: CourseType[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  list = async (): Promise<CourseType[]> => {
    const response = await CourseAPI.list();

    if (response) {
      this.courses = response;
      return response;
    }

    return (this.courses = []);
  };
}

export default CourseStore;
