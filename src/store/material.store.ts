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

  @persist
  @observable
  current: string | undefined | null;

  @action
  create = async (values: CreateMaterialType): Promise<boolean> => {
    const response = await MaterialAPI.create(values);
    return response;
  };

  @action
  list = async (): Promise<MaterialsType[]> => {
    const response = await MaterialAPI.list(getCurrentCourseID()!);

    if (response) {
      return (this.materials = response);
    }

    return [];
  };

  @action
  remove = async (values: RemoveMaterialsType): Promise<boolean> => {
    const response = await MaterialAPI.remove(values);
    return response;
  };

  @action
  setCurrentMaterial = (value: string) => {
    return (this.current = value);
  };
}

export default MaterialStore;
