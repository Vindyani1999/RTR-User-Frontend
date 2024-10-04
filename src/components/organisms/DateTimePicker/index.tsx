import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
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

// Define the props type for DateTimePicker
interface DateTimePickerProps {
  selectedDate: Dayjs | null;
  onDateChange: Dispatch<SetStateAction<Dayjs | null>>;
  startTime: string | null;
  onStartTimeChange: Dispatch<SetStateAction<string | null>>;
  endTime: string | null;
  onEndTimeChange: Dispatch<SetStateAction<string | null>>;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  selectedDate,
  onDateChange,
  startTime,
  onStartTimeChange,
  endTime,
  onEndTimeChange,
}) => {
  const currentDate = dayjs();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);
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

  useEffect(() => {
    if (startTime && endTime) {
      const start = dayjs(startTime, "hh:mm A");
      const end = dayjs(endTime, "hh:mm A");
      const diffInHours = end.diff(start, "hour", true); // Calculate difference in hours

      if (diffInHours > 2) {
        setError(
          "The time gap between start and end time cannot exceed 2 hours."
        );
      } else {
        setError(null); // Clear the error if it's valid
      }
    }
  }, [startTime, endTime]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={(newValue) => onDateChange(newValue)}
          minDate={currentDate}
          sx={{ width: 400, mb: 2 }}
        />
        {selectedDate && (
          <Grid container spacing={2} sx={{ width: 455 }}>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>Start Time</InputLabel>
                <Select
                  value={startTime || ""}
                  onChange={(e) => onStartTimeChange(e.target.value as string)}
                  label="Start Time"
                >
                  {startTimes.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="body2" sx={{ mt: 2, ml: 0.5 }}>
                to
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <FormControl fullWidth>
                <InputLabel>End Time</InputLabel>
                <Select
                  value={endTime || ""}
                  onChange={(e) => onEndTimeChange(e.target.value as string)}
                  label="End Time"
                >
                  {endTimes.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {error && (
              <Grid item xs={12}>
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              </Grid>
            )}
          </Grid>
        )}
      </Box>
    </LocalizationProvider>
  );
};

export default DateTimePicker;
