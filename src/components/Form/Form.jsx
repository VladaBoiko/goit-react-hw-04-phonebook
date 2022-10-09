import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Input, Forma, Label, Button, ErMessage } from './Form.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
});
const formValues = {
  name: '',
  number: '',
  id: null,
};

// const schema = yup.object({
//   name: yup
//     .string()
//     .label('Full Name')
//     .required()
//     .test(
//       'is-full-name',
//       'Please enter both your first and last name',
//       function (value) {
//         const nameArr = value.split(' ');
//         return nameArr.length >= 2;
//       }
//     ),
// });
const generateID = () => {
  return nanoid(4);
};
export const AddForm = ({ updateContacts, iNeedName }) => {
  const handleSubmit = (values, { resetForm }) => {
    updateContacts(values);
    iNeedName(values);
    values.id = generateID();
    resetForm();
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Forma autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErMessage name="name" component="p" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErMessage name="number" component="p" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
    </Formik>
  );
};
