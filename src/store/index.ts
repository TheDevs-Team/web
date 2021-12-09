import { create } from 'mobx-persist';
import UserStore from './user.store';
import CourseStore from './course.store';
import DashboardStore from './dashboard.store';
import StudentCourseStore from './studentCourse.store';
import NotificationStore from './notification.store';
import MaterialStore from './material.store';

class RootStore {
  public user: UserStore;
  public course: CourseStore;
  public dashboard: DashboardStore;
  public studentCourse: StudentCourseStore;
  public notification: NotificationStore;
  public material: MaterialStore;

  constructor() {
    this.user = new UserStore();
    this.course = new CourseStore();
    this.dashboard = new DashboardStore();
    this.studentCourse = new StudentCourseStore();
    this.notification = new NotificationStore();
    this.material = new MaterialStore();
  }
}

const store = new RootStore();

const hydrate = create({
  storage: localStorage,
});

hydrate('user', store.user);
hydrate('course', store.course);
hydrate('dashboard', store.dashboard);
hydrate('studentCourse', store.studentCourse);
hydrate('notification', store.notification);
hydrate('material', store.material);

export { UserStore, CourseStore, DashboardStore, StudentCourseStore, NotificationStore, MaterialStore };

export default store;
