import api from '~/services/api';

class StudentCourseAPI {
  static find = async (): Promise<StudentCourseType[] | null> => {
    try {
      const { data } = await api.get('/student-course/find');
      return data;
    } catch (error) {
      return null;
    }
  };
  static notInCourse = async (): Promise<UserType[]> => {
    try {
      const { data } = await api.get('/student-course/not-in-course');

      return data;
    } catch (error) {
      return [];
    }
  };
  static addInCourse = async (values: CreateStudentCourseType): Promise<boolean> => {
    try {
      await api.post('/student-course/create', values);

      return true;
    } catch (error) {
      return false;
    }
  };
  static listInCourse = async (course_id: string): Promise<StudentCourseType[]> => {
    try {
      const { data } = await api.get(`/student-course/${course_id}`);
      console.log(data);
      return data;
    } catch (error) {
      return [];
    }
  };

  static removeInCourse = async (values: CreateStudentCourseType): Promise<boolean> => {
    try {
      await api.post('/student-course/remove', values);

      return true;
    } catch (error) {
      return false;
    }
  };
}

export default StudentCourseAPI;
