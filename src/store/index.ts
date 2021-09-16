import UserStore from './user.store';
import CourseStore from './course.store';

class RootStore {
  public user: UserStore;
  public course: CourseStore;

  constructor() {
    this.user = new UserStore();
    this.course = new CourseStore();
  }
}

const store = new RootStore();

export { UserStore, CourseStore };

export default store;
