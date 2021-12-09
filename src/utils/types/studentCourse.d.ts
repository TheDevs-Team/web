declare type StudentCourseType = {
  id: string;
  course: CourseType;
  course_id: string;
  user_id: string;
  status: string;
  user: UserType;
  created_at: Date;
  updated_at: Date;
};

declare type CreateStudentCourseType = {
  user_id: string;
  course_id: string;
};
