import React, { Dispatch, SetStateAction } from "react";
import {
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Grid,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik } from "formik";
import * as Yup from "yup";
import GradientButton from "../../atoms/GradientButton";
import {
  DatePickerErrorStyle,
  DatePickerStyle,
  DateTimeMainContainer,
  DateTimeSubmitButtonStyle,
  TimePickerGridStyle,
} from "./styles";

interface DateTimePickerProps {
  selectedDate: Dayjs | null;
  onDateChange: Dispatch<SetStateAction<Dayjs | null>>;
  startTime: string | null;
  onStartTimeChange: Dispatch<SetStateAction<string | null>>;
  endTime: string | null;
  onEndTimeChange: Dispatch<SetStateAction<string | null>>;
  onDateTimeConfirm: (
    date: Dayjs | null,
    startTime: string | null,
    endTime: string | null
  ) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selectedDate,
  onDateChange,
  startTime,
  onStartTimeChange,
  endTime,
  onEndTimeChange,
  onDateTimeConfirm,
}) => {
  const currentDate = dayjs();

  const startTimes = Array.from({ length: 8 }, (_, i) =>
    dayjs()
      .hour(10 + i)
      .minute((i % 2) * 30)
      .format("hh:mm A")
  );

  const endTimes = Array.from({ length: 23 }, (_, i) =>
    dayjs()
      .hour(10 + Math.floor(i / 2))
      .minute((i % 2) * 30)
      .format("hh:mm A")
  );

  const formik = useFormik({
    initialValues: {
      selectedDate: selectedDate,
      startTime: startTime,
      endTime: endTime,
    },

    validationSchema: Yup.object({
      selectedDate: Yup.date()
        .nullable()
        .required("Please select your reservation date.")
        .min(currentDate, "Date cannot be in the past."),
      startTime: Yup.string().required("Please select start time."),
      endTime: Yup.string()
        .required("Please select end time.")
        .test(
          "time-range",
          "Maximum reserve time is 2 hours.",
          function (value) {
            const start = dayjs(this.parent.startTime, "hh:mm A");
            const end = dayjs(value, "hh:mm A");
            return end.diff(start, "hour", true) <= 2;
          }
        ),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      onDateChange(values.selectedDate);
      onStartTimeChange(values.startTime);
      onEndTimeChange(values.endTime);
      onDateTimeConfirm(values.selectedDate, values.startTime, values.endTime);
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={DateTimeMainContainer}>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DatePicker
            label="Select Date"
            value={formik.values.selectedDate}
            onChange={(newValue) =>
              formik.setFieldValue("selectedDate", newValue)
            }
            minDate={currentDate}
            sx={DatePickerStyle}
          />

          {formik.touched.selectedDate && formik.errors.selectedDate && (
            <Typography color="error" variant="body2" sx={DatePickerErrorStyle}>
              {formik.errors.selectedDate}
            </Typography>
          )}

          {formik.values.selectedDate && (
            <Grid container spacing={1} sx={TimePickerGridStyle}>
              <Grid item xs={5}>
                <FormControl fullWidth>
                  <InputLabel>Start Time</InputLabel>
                  <Select
                    sx={{ textAlign: "left" }}
                    value={formik.values.startTime || ""}
                    onChange={(e) =>
                      formik.setFieldValue("startTime", e.target.value)
                    }
                    label="Start Time"
                    error={Boolean(
                      formik.errors.startTime && formik.touched.startTime
                    )}
                  >
                    {startTimes.map((time) => (
                      <MenuItem key={time} value={time}>
                        {time}
                      </MenuItem>
                    ))}
                  </Select>

                  {formik.touched.startTime && formik.errors.startTime && (
                    <Typography color="error" variant="body2">
                      {formik.errors.startTime}
                    </Typography>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={0.5}>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  to
                </Typography>
              </Grid>

              <Grid item xs={5}>
                <FormControl fullWidth>
                  <InputLabel>End Time</InputLabel>
                  <Select
                    sx={{ textAlign: "left" }}
                    value={formik.values.endTime || ""}
                    onChange={(e) =>
                      formik.setFieldValue("endTime", e.target.value)
                    }
                    label="End Time"
                    error={Boolean(
                      formik.errors.endTime && formik.touched.endTime
                    )}
                  >
                    {endTimes.map((time) => (
                      <MenuItem key={time} value={time}>
                        {time}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.endTime && formik.errors.endTime && (
                    <Typography color="error" variant="body2">
                      {formik.errors.endTime}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
            </Grid>
          )}

          <Box sx={DateTimeSubmitButtonStyle}>
            <GradientButton
              label="Confirm Date & Time"
              sx={{
                mt: 2,
              }}
            />
          </Box>
        </form>
      </Box>
    </LocalizationProvider>
  );
};

export default DateTimePicker;
