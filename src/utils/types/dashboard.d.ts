declare type AllDashboardData = {
  users?: number;
  courses?: number;
  materials?: number;
  pendings?: number;
  newCourses?: CourseType[];
  dataGraphics: [
    {
      month: string;
      value: number;
    },
  ];
};

declare type AllUsersDashboard = {
  users?: number;
};
