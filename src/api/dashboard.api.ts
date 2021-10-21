import api from '~/services/api';

class DashboardAPI {
  static index = async (): Promise<AllDashboardData | null> => {
    try {
      const { data } = await api.get('/dashboard/index');
      return data;
    } catch (error) {
      return null;
    }
  };

  static allUsers = async (): Promise<AllUsersDashboard | null> => {
    try {
      const { data } = await api.get('/dashboard/users/all');
      return data;
    } catch (error) {
      return null;
    }
  };
}

export default DashboardAPI;
