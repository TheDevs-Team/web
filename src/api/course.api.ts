import api from '~/services/api';

class CourseAPI {
  static find = async (id: string): Promise<CourseType | null> => {
    try {
      const { data } = await api.post('/course', { id });
      return data;
    } catch (error) {
      return null;
    }
  };

  static list = async (): Promise<CourseType[] | []> => {
    try {
      const { data } = await api.get('/course/list');
      return data;
    } catch (error) {
      return [];
    }
  };

  static create = async (values: CreateCourseType): Promise<boolean> => {
    try {
      await api.post('/course/create', values);
      return true;
    } catch (error) {
      return false;
    }
  };

  static update = async (values: UpdateCourseType): Promise<boolean> => {
    try {
      await api.put('/course', values);
      return true;
    } catch (error) {
      return false;
    }
  };

  static delete = async (id: string): Promise<boolean> => {
    try {
      await api.post('/course/delete', { id });
      return true;
    } catch (error) {
      return false;
    }
  };
}

export default CourseAPI;
