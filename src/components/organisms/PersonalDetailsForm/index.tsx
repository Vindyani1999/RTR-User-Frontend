import React from "react";
import { Box, TextField, Grid, Button } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

// Define Yup validation schema
const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must be digits only"),
  address: yup.string().required("Address is required"),
  numberOfPeople: yup
    .number()
    .required("Number of people is required")
    .min(1, "At least one person is required"),
});

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  numberOfPeople: number;
}

interface PersonalDetailsFormProps {
  onPersonalDetailsSubmit: (details: FormData) => void;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  onPersonalDetailsSubmit,
}) => {
  const initialValues: FormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    numberOfPeople: 1,
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          onPersonalDetailsSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <Field name="firstName">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      error={touched.firstName && !!errors.firstName}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="firstName" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field name="lastName">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      error={touched.lastName && !!errors.lastName}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="lastName" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field name="phoneNumber">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      error={touched.phoneNumber && !!errors.phoneNumber}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="phoneNumber" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field name="numberOfPeople">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      type="number"
                      fullWidth
                      label="Number of People"
                      variant="outlined"
                      error={touched.numberOfPeople && !!errors.numberOfPeople}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="numberOfPeople" />}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field name="address">
                  {({ field }: any) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Address"
                      variant="outlined"
                      error={touched.address && !!errors.address}
                      InputProps={{ sx: { height: 50 } }}
                      helperText={<ErrorMessage name="address" />}
                    />
                  )}
                </Field>
              </Grid>
            </Grid>

            {/* Submit button */}
            <Box mt={1}>
              <Button type="submit" variant="contained" color="primary">
                Confirm Your Details
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PersonalDetailsForm;
