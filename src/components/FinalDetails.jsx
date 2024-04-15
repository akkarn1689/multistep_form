import React from 'react'
import {
    Grid,
    TextField,
    FormHelperText,
    Typography
} from "@mui/material";

import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};






const FinalDetails = (props) => {
    const { formik } = props;

    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
          box-sizing: border-box;
          width: 100%;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 1.5;
          padding: 12px;
          border-radius: 12px 12px 0 12px;
          color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
          background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
          border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
          box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      
          &:hover {
            border-color: ${blue[400]};
          }
      
          &:focus {
            outline: 0;
            border-color: ${blue[400]};
            box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
          }
      
          // firefox
          &:focus-visible {
            outline: 0;
          }
        `,
    );

    return (
        <Grid
            container
            spacing={2}
        >
            <Grid item xs={12}>
                <Typography variant='h5' sx={{background: '#2196f3',  borderRadius: '10px', padding: 1, color: 'white'}}>Other Details</Typography>
            </Grid>
            <Grid
                item
                xs={12}
            >
                <TextField
                    name="resumeLink"
                    label="Resume Link*"
                    variant="outlined"
                    type="text"
                    fullWidth
                    size="small"
                    error={Boolean(formik.touched.resumeLink && formik.errors.resumeLink)}
                    onChange={formik.handleChange}
                    value={formik.values.resumeLink}
                />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <TextField
                    name="linkeInProfile"
                    label="LinkedIn Profile"
                    variant="outlined"
                    type="text"
                    fullWidth
                    size="small"
                    error={Boolean(formik.touched.linkeInProfile && formik.errors.linkeInProfile)}
                    onChange={formik.handleChange}
                    value={formik.values.linkeInProfile}
                />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Textarea aria-label="minimum height" minRows={3} placeholder="Cover Letter" />
            </Grid>
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

export default FinalDetails