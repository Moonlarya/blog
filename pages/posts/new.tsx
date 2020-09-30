import React, { FC } from "react";
import { Formik, Form, FormikErrors } from "formik";
import styled from "styled-components";
import PostService from "../../services/PostService";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { MainHeading, Wrapper, Input, Textarea } from "../../components/views";

const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.error};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeigths.medium};
  font-family: ${(props) => props.theme.font};
  margin-bottom: 15px;
`;

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
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Wrapper>
              <Input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                name="title"
              />
              {touched.title && errors.title && (
                <ErrorMessage>{errors.title}</ErrorMessage>
              )}
              <Textarea
                maxLength={5000}
                name="body"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.body}
              />
              {touched.body && errors.body && (
                <ErrorMessage>{errors.body}</ErrorMessage>
              )}
              <Button type="submit">Post!</Button>
            </Wrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default NewPost;
