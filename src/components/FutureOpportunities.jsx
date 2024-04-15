import React from 'react'
import {
    Grid,
    TextField,
    FormHelperText,
    Typography,
    FormControl, InputLabel, Select, MenuItem
} from "@mui/material";

import { useState } from 'react';



const jobDesignationData = {
    "industries": [
        {
            "industry": "Finance",
            "jobs": [
                "Financial analyst",
                "Chief financial officer",
                "Personal banker",
                "Finance manager",
                "Senior accountant"
            ]
        },
        {
            "industry": "Medical",
            "jobs": [
                "Pharmacist",
                "Medical officer",
                "Veterinarian",
                "Medical lab technologist",
                "Nurse"
            ]
        },
        {
            "industry": "IT/Software",
            "jobs": [
                "Data Scientist",
                "Software Development Engineer",
                "Full Stack Developer",
                "Machine-learning Engineer",
                "Blockchain Developer"
            ]
        },
        {
            "industry": "Education",
            "jobs": [
                "Teacher",
                "Lecturer",
                "Academic manager",
                "Education counsellor",
                "Academic writer"
            ]
        },
        {
            "industry": "Hospitality",
            "jobs": [
                "Hotel general manager",
                "Chef",
                "Hotel receptionist",
                "Restaurant manager",
                "Restaurant cashier"
            ]
        }
    ]
}

const filterJobsByIndustry = (industry) => {
    const selectedIndustry = jobDesignationData.industries.find(item => item.industry === industry);
    return selectedIndustry ? selectedIndustry.jobs : [];
};

const FutureOpportunities = (props) => {
    const { formik } = props;

    const [wType, setWType] = useState('');

    const [prefIndustry, setPrefIndustry] = useState('');
    const [jobDesignation, setJobDesignation] = useState();
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid
                item
                xs={12}
            >
                <Typography variant='h5' sx={{background: '#2196f3',  borderRadius: '10px', padding: 1, color: 'white'}}>Future Opportunities Interests</Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Choose Industry</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.preferedIndustry}
                        label="Prefered Industry"
                        name="preferedIndustry" // Add name attribute
                        onChange={(e) => {
                            console.log(e);
                            const industry = e.target.value;
                            setPrefIndustry(industry);
                            const filteredJobs = filterJobsByIndustry(industry);
                            setJobDesignation(filteredJobs);
                            formik.handleChange({
                                target: {
                                    name: 'preferedIndustry',
                                    value: industry,
                                },
                            });
                        }}
                    >
                        <MenuItem value="Finance">Finance</MenuItem>
                        <MenuItem value="Medical">Medical</MenuItem>
                        <MenuItem value="IT/Software">IT/Software</MenuItem>
                        <MenuItem value="Education">Education</MenuItem>
                        <MenuItem value="Hospitality">Hospitality</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {
                jobDesignation ? <Grid item xs={12} sx={{ marginTop: 1 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Job Designation</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formik.values.preferedJobDesignation}
                            label="Prefered Job Designation"
                            name="preferedJobDesignation" // Add name attribute
                            onChange={(e) => {
                                console.log(e);
                                formik.handleChange({
                                    target: {
                                        name: 'preferedJobDesignation',
                                        value: e.target.value,
                                    },
                                });
                            }}
                        >
                            {
                                jobDesignation.map((job, index) => {
                                    return <MenuItem value={job} key={`jd_${index}`}>{job}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Grid> : null
            }
            <Grid item xs={6} sx={{ marginTop: 1 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Work Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formik.values.preferedWorkType}
                        label="Prefered Work Type"
                        name="preferedWorkType" // Add name attribute
                        onChange={(e) => {
                            console.log(e);
                            setWType(e.target.value);
                            formik.handleChange({
                                target: {
                                    name: 'preferedWorkType',
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
                ['In Office', 'Hybrid'].includes(formik.values.preferedWorkType) && <Grid
                    item
                    xs={6}
                >
                    <TextField
                        name="city"
                        label="Prefered City"
                        variant="outlined"
                        size='small'
                        fullWidth
                        value={formik.values.preferedCity}
                        onChange={formik.handleChange}
                        error={formik.touched.preferedCity && Boolean(formik.errors.preferedCity)}
                        helperText={formik.touched.preferedCity && formik.errors.preferedCity}
                    />
                </Grid>
            }
            {
                ['In Office', 'Hybrid'].includes(formik.values.preferedWorkType) && <Grid
                    item
                    xs={6}
                >
                    <TextField
                        name="state"
                        label="Prefered State"
                        variant="outlined"
                        size='small'
                        fullWidth
                        value={formik.values.preferedState}
                        onChange={formik.handleChange}
                        error={formik.touched.preferedState && Boolean(formik.errors.preferedState)}
                        helperText={formik.touched.preferedState && formik.errors.preferedState}
                    />
                </Grid>
            }
            {
                ['In Office', 'Hybrid'].includes(formik.values.preferedWorkType) && <Grid
                    item
                    xs={6}
                >
                    <TextField
                        name="country"
                        label="Prefered country"
                        variant="outlined"
                        size='small'
                        fullWidth
                        value={formik.values.preferedCountry}
                        onChange={formik.handleChange}
                        error={formik.touched.preferedCountry && Boolean(formik.errors.preferedCountry)}
                        helperText={formik.touched.preferedCountry && formik.errors.preferedCountry}
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

export default FutureOpportunities