import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  pendings: Yup.boolean(),
  new_courses: Yup.boolean(),
  class_notification: Yup.boolean(),
});

export const initialValues: NotificationOptionsType = {
  pendings: false,
  new_courses: false,
  class_notification: false,
};
