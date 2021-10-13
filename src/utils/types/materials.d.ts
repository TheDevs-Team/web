declare type MaterialsType = {
  id: string;
  name: string;
  user: UserType;
  course: CourseType;
  type: string;
  created_at?: Date;
  updated_at?: Date;
};