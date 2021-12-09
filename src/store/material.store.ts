import { action, makeObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';

import { MaterialAPI } from '~/api';
import { getCurrentCourseID } from '~/utils';

class MaterialStore {
  constructor() {
    makeObservable(this);
  }

  @persist
  @observable
  materials: MaterialsType[] = [];

  @action
  list = async (): Promise<MaterialsType[]> => {
    const response = await MaterialAPI.list(getCurrentCourseID()!);

    if (response) {
      return (this.materials = response);
    }

    return [];
  };
}

export default MaterialStore;
