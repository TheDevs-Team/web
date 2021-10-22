import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { DashboardAPI } from '~/api';

class DashboardStore {
  @persist
  @observable
  allUsersData: AllUsersDashboard;

  @persist
  @observable
  allData: AllDashboardData = {
    users: 0,
    pendings: 0,
    courses: 0,
    materials: 0,
    dataGraphics: [
      {
        month: '',
        value: 0,
      },
    ],
  };

  constructor() {
    makeObservable(this);
  }

  @action
  index = async (): Promise<AllUsersDashboard | null> => {
    const response = await DashboardAPI.index();

    if (response) {
      this.allData = response;
      return response;
    }

    return null;
  };
}

export default DashboardStore;
