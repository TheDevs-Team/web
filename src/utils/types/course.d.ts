declare type CourseType = {
  id: string;
  active: boolean;
  name: string;
  description: string;
  manager_id: string;
  created_at: Date;
  updated_at: Date;
  user: UserType;
};

declare type CreateCourseType = {
  name: string;
  description: string;
};

declare type UpdateCourseType = {
  id: string;
  name: string;
};
