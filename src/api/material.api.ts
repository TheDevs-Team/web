import api from '~/services/api';

class MaterialAPI {
  static list = async (course_id: string): Promise<MaterialsType[]> => {
    try {
      const { data } = await api.get(`/material/${course_id}`);
      return data;
    } catch (error) {
      return [];
    }
  };
  static remove = async (values: RemoveMaterialsType): Promise<boolean> => {
    try {
      await api.post(`/material/remove`, values);
      return true;
    } catch (error) {
      return false;
    }
  };
}

export default MaterialAPI;
