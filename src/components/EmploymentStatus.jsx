import React from 'react';
import {
    Grid,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography
} from "@mui/material";

const EmploymentStatus = (props) => {
    const { formik } = props;

    return (
        <Grid container spacing={2}>
            <Grid
                item
                xs={12}
            >
                <Typography variant='h5' sx={{background: '#2196f3',  borderRadius: '10px', padding: 1, color: 'white'}}>Employment Status</Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControl component="fieldset" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
                    {/* <FormLabel component="legend">Employment Status</FormLabel> */}
                    <RadioGroup
                        name="employmentStatus"
                        value={formik.values.employmentStatus}
                        onChange={formik.handleChange}
                        sx={{ color: 'black' }}
                    >
                        <FormControlLabel value="Employed" control={<Radio />} label="Employed" />
                        <FormControlLabel value="Unemployed" control={<Radio />} label="Unemployed" />
                    </RadioGroup>
                </FormControl>
            </Grid>

            {formik.errors.submit && (
                <Grid item xs={12}>
                    <FormHelperText error>
                        {formik.errors.submit}
                    </FormHelperText>
                </Grid>
            )}
        </Grid>
    );
}

export default EmploymentStatus;
