import React from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

export default function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field className={css.input} type="text" name="name"></Field>
          <ErrorMessage
            name="name"
            component="div"
            className={css.error}
          ></ErrorMessage>
        </div>
        <div className={css.container}>
          <label className={css.label} htmlFor="number">
            Number
          </label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            className={css.error}
          ></ErrorMessage>
        </div>
        <button className={css.submit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
