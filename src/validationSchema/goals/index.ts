import * as yup from 'yup';

export const goalValidationSchema = yup.object().shape({
  name: yup.string().required(),
  value: yup.number().integer().required(),
  developer_id: yup.string().nullable(),
});
