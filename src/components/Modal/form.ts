import { Yup } from '~/utils';

export const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).required(),
  document: Yup.string(),
  email: Yup.string().email(),
  financial_status: Yup.string(),
  phone: Yup.string(),
  type: Yup.string(),
  password: Yup.string(),
  confirm_password: Yup.string(),
});

export const initialValues: CreateUserType = {
  name: '',
  document: '',
  email: '',
  financial_status: '',
  phone: '',
  type: '',
  password: '',
  confirm_password: '',
};
