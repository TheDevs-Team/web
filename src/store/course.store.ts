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

  @observable
  current = '';

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

  @action
  create = async (values: CreateCourseType): Promise<CourseType | boolean> => {
    const response = await CourseAPI.create(values);

    if (response) {
      return true;
    }

    return false;
  };

  @action
  update = async (values?: UpdateCourseType): Promise<CourseType | boolean> => {
    const response = await CourseAPI.update(values);

    if (response) {
      return true;
    }

    return false;
  };

  @action
  delete = async (values: string): Promise<boolean> => {
    const response = await CourseAPI.delete(values);

    return response;
  };

  @action
  setCurrent = (value: string): string => {
    return (this.current = value);
  };
}

export default CourseStore;
