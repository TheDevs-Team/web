import { observable, action, makeObservable } from 'mobx';
import { persist } from 'mobx-persist';
import { DashboardAPI } from '~/api';

class DashboardStore {
  @persist
  @observable
  allUsersData: AllUsersDashboard;

  @persist
  @observable
  allData: AllDashboardData;

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

  @action
  allUsers = async (): Promise<AllUsersDashboard | null> => {
    const response = await DashboardAPI.allUsers();

    if (response) {
      this.allUsersData = response;
      return response;
    }

    return null;
  };
}

export default DashboardStore;
