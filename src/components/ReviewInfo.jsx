import React from 'react';
import { Grid, Typography, TextField } from '@mui/material';


const ReviewInfo = ({ formik }) => {
    const { values } = formik;
    return (
        <Grid container spacing={3}>
            <Grid
                item
                xs={12}
            >
                <Typography variant='h5' sx={{ color: 'black', background: '#2196f3', paddingY: 1, borderRadius: '10px' }}>Review Your Information</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: 'black', borderBottom: '2px solid #2196f3' }}>Basic Details</Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Email"
                    value={values.email}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="First Name"
                    value={values.firstName}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Last Name"
                    value={values.lastName}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Phone"
                    value={values.phone}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: 'black', borderBottom: '2px solid #2196f3' }}>Employment Status</Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Employment Status"
                    value={values.employmentStatus}
                    fullWidth
                    disabled
                />
            </Grid>
            {
                values.employmentStatus === 'Employed' && <Grid container spacing={3} sx={{ width: '100%', marginY: 2, paddingY:2,}}>
                    <Grid item xs={12}>
                        <Typography variant="h6" sx={{ color: 'black', borderBottom: '2px solid #2196f3', marginBottom: 3 }}>Current Employment Details</Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <TextField
                            label="Organisation Name"
                            value={values.organisationName}
                            fullWidth
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Working Since"
                            type="date"
                            value={values.workingSince}
                            fullWidth
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Current Work Type"
                            value={values.currentWorkType}
                            fullWidth
                            disabled
                        />
                    </Grid>
                    {
                        values.currentWorkType !== 'Remote' ? <Grid item xs={6}>
                            <TextField
                                label="Current City"
                                value={values.currentCity}
                                fullWidth
                                disabled
                            />
                        </Grid> : null
                    }
                    {
                        values.currentWorkType !== 'Remote' ? <Grid item xs={6}>
                            <TextField
                                label="Current State"
                                value={values.currentState}
                                fullWidth
                                disabled
                            />
                        </Grid> : null
                    }
                    {
                        values.currentWorkType !== 'Remote' ? <Grid item xs={6}>
                            <TextField
                                label="Current Country"
                                value={values.currentCountry}
                                fullWidth
                                disabled
                            />
                        </Grid> : null
                    }


                </Grid>
            }
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: 'black', borderBottom: '2px solid #2196f3' }}>Future Opportunities Interests</Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Prefered Industry"
                    value={values.preferedIndustry}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Prefered Job Designation"
                    value={values.preferedJobDesignation}
                    fullWidth
                    disabled
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Prefered Work Type"
                    value={values.preferedWorkType}
                    fullWidth
                    disabled
                />
            </Grid>
            {
                ['In Office', 'Hybrid'].includes(formik.values.preferedWorkType) && <Grid item xs={6}>
                    <TextField
                        label="Prefered City"
                        value={values.preferedCity}
                        fullWidth
                        disabled
                    />
                </Grid>
            }
            {
                ['In Office', 'Hybrid'].includes(formik.values.preferedWorkType) && <Grid item xs={6}>
                    <TextField
                        label="Prefered State"
                        value={values.preferedState}
                        fullWidth
                        disabled
                    />
                </Grid>
            }
            {
                ['In Office', 'Hybrid'].includes(formik.values.preferedWorkType) && <Grid item xs={6}>
                    <TextField
                        label="Prefered Country"
                        value={values.preferedCountry}
                        fullWidth
                        disabled
                    />
                </Grid>
            }
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ color: 'black', borderBottom: '2px solid #2196f3' }}>Other Details</Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Resume Link"
                    value={values.resumeLink}
                    fullWidth
                    disabled
                />
            </Grid>
            {
                values.linkeInProfile && <Grid item xs={6}>
                    <TextField
                        label="LinkedIn Profile"
                        value={values.linkeInProfile}
                        fullWidth
                        disabled
                    />
                </Grid>
            }
            {
                values.coverLetter && <Grid item xs={12}>
                    <TextField
                        label="Cover Letter"
                        value={values.coverLetter}
                        fullWidth
                        disabled
                        multiline
                        rows={4}
                    />
                </Grid>
            }
        </Grid>
    )
}

export default ReviewInfo



