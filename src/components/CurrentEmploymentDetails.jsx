import {
    Grid,
    TextField,
    FormHelperText,
    Typography,
    FormControl, InputLabel, Select, MenuItem
} from "@mui/material";

import dayjs from 'dayjs';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { FormikConsumer } from "formik";
import { useState } from "react";


const CurrentEmploymentDetailss = (props) => {
    const { formik } = props;
    const [startDate, setStartDate] = useState(new Date());
    const [wType, setWType] = useState('');

    const handleDateChange = (newValue) => {
        setDate(newValue.$d);
        // formik.handleChange(date);
        // console.log(newValue);
    }
    // console.log(date);

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid
                item
                xs={12}
            >
                <Typography variant='h5' sx={{background: '#2196f3',  borderRadius: '10px', padding: 1, color: 'white'}}>Current Employment Details</Typography>
            </Grid>
            <Grid
                item
                xs={12}
            >
                <TextField
                    name="organisationName"
                    label="Organisation Name"
                    variant="outlined"
                    type="text"
                    fullWidth
                    size="small"
                    error={Boolean(formik.touched.organisationName && formik.errors.organisationName)}
                    onChange={formik.handleChange}
                    value={formik.values.organisationName}
                />
            </Grid>
            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            label="Working Since"
                            inputFormat="dd/MM/yyyy"
                            value={dayjs('2022-04-17')}
                            onChange={(date) => {
                                console.log(formik.values);
                                formik.handleChange({
                                    target: {
                                        name: 'workingSince',
                                        value: date.$d,
                                    },
                                });
                                console.log(formik.values);
                            }}
                        />

                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Work Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.currentWorkType}
                        label="Work Type"
                        name="currentWorkType" // Add name attribute
                        onChange={(e) => {
                            console.log(e);
                            setWType(e.target.value);
                            formik.handleChange({
                                target: {
                                    name: 'currentWorkType',
                                    value: e.target.value,
                                },
                            });
                        }}
                    >
                        <MenuItem value="Remote">Remote</MenuItem>
                        <MenuItem value="In Office">In Office</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            {
                ['In Office', 'Hybrid'].includes(formik.values.currentWorkType) && <Grid
                    item
                    xs={6}
                >
                    <TextField
                        name="city"
                        label="Current City"
                        variant="outlined"
                        size='small'
                        fullWidth
                        value={formik.values.currentCity}
                        onChange={formik.handleChange}
                        error={formik.touched.currentCity && Boolean(formik.errors.currentCity)}
                        helperText={formik.touched.currentCity && formik.errors.currentCity}
                    />
                </Grid>
            }
            {
                ['In Office', 'Hybrid'].includes(formik.values.currentWorkType) && <Grid
                    item
                    xs={6}
                >
                    <TextField
                        name="state"
                        label="Current State"
                        variant="outlined"
                        size='small'
                        fullWidth
                        value={formik.values.currentState}
                        onChange={formik.handleChange}
                        error={formik.touched.currentState && Boolean(formik.errors.currentState)}
                        helperText={formik.touched.currentState && formik.errors.currentState}
                    />
                </Grid>
            }
            {
                ['In Office', 'Hybrid'].includes(formik.values.currentWorkType) && <Grid
                    item
                    xs={6}
                >
                    <TextField
                        name="country"
                        label="Current country"
                        variant="outlined"
                        size='small'
                        fullWidth
                        value={formik.values.currentCountry}
                        onChange={formik.handleChange}
                        error={formik.touched.currentCountry && Boolean(formik.errors.currentCountry)}
                        helperText={formik.touched.currentCountry && formik.errors.currentCountry}
                    />
                </Grid>
            }
            {formik.errors.submit && (
                <Grid
                    item
                    xs={12}
                >
                    <FormHelperText error>
                        {formik.errors.submit}
                    </FormHelperText>
                </Grid>
            )}
        </Grid>
    )
}

export default CurrentEmploymentDetailss