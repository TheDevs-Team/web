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
}

export default StudentCourseAPI;
