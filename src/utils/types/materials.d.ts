declare type MaterialsType = {
  id: string;
  name: string;
  user: UserType;
  course: CourseType;
  file: string;
  type: string;
  created_at?: Date;
  updated_at?: Date;
};

declare type RemoveMaterialsType = {
  course_id: string;
  id: string;
};

declare type CreateMaterialType = {
  course_id: string;
  name: string;
  file: string;
  type: string;
};
