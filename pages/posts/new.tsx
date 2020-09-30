import React, { FC } from "react";
import { Formik, Form, ErrorMessage, FormikErrors } from "formik";
import PostService from "../../services/PostService";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { MainHeading, Wrapper, Input, Textarea } from "../../components/views";

interface FormValues {
  title: string;
  body: string;
}

const NewPost: FC<IPost> = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.title) {
      errors.title = "Required title";
    } else if (!values.body) {
      errors.body = "Required content of the post";
    }
    return errors;
  };

  const onSubmit = async (values: FormValues, { resetForm }) => {
    try {
      await PostService.create({
        title: values.title,
        body: values.body,
      });

      resetForm({});
    } catch (err) {
      console.error();
    }
  };

  return (
    <>
      <Header />
      <MainHeading>New Post</MainHeading>
      <Formik
        initialValues={{ title: "", body: "" }}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ handleSubmit, handleChange, handleBlur, values }) => (
          <Form onSubmit={handleSubmit}>
            <Wrapper>
              <Input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                name="title"
              />
              <ErrorMessage name="title" component="div" />
              <Textarea
                maxLength={5000}
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
              />
              <ErrorMessage name="body" component="div" />
              <Button type="submit">Post!</Button>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default NewPost;
