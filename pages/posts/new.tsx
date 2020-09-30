import React, { FC } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import PostService from "../../services/PostService";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { MainHeading, Wrapper, Input, Textarea } from "../../components/views";

const NewPost: FC<IPost> = () => {
  const onSubmit = async (values) => {
    await PostService.create({
      title: values.title,
      body: values.body,
    });
    return values;
  };

  return (
    <>
      <Header />
      <MainHeading>New Post</MainHeading>
      <Formik initialValues={{ title: "", body: "" }} onSubmit={onSubmit}>
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
              <ErrorMessage name="text" component="div" />
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
