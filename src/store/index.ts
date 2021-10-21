import { create } from 'mobx-persist';
import UserStore from './user.store';
import CourseStore from './course.store';
import DashboardStore from './dashboard.store';

class RootStore {
  public user: UserStore;
  public course: CourseStore;
  public dashboard: DashboardStore;

  constructor() {
    this.user = new UserStore();
    this.course = new CourseStore();
    this.dashboard = new DashboardStore();
  }
}

const store = new RootStore();

const hydrate = create({
  storage: localStorage,
});

hydrate('user', store.user);
hydrate('course', store.course);
hydrate('dashboard', store.dashboard);

export { UserStore, CourseStore, DashboardStore };

export default store;
