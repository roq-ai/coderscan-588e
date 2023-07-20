import * as yup from 'yup';

export const skillValidationSchema = yup.object().shape({
  name: yup.string().required(),
  level: yup.number().integer().required(),
  developer_id: yup.string().nullable(),
});
