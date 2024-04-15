import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Grid,
    FormHelperText,
    Button,
    Typography
} from '@mui/material';
import BasicDetails from './BasicDetails';
import CurrentEmploymentDetails from './CurrentEmploymentDetails';
import ReviewInfo from './ReviewInfo';
import EmploymentStatus from './EmploymentStatus';
import FinalDetails from './FinalDetails';
import FutureOpportunities from './FutureOpportunities';

const steps = [' Basic Details', 'Employment Status', 'Current Employment Details', 'Future Opportunities Interests', 'Final Details', 'Review and Submit'];

const Form = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleBack = () => {
        if (activeStep == 3 && formik.values.employmentStatus === 'Unemployed') {
            setActiveStep((prevStep) => prevStep - 2);
        }
        else {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    const handleNext = () => {
        if (activeStep == 0) {
            if (formik.values.firstName && formik.values.lastName && formik.values.phone && formik.values.email) {
                setActiveStep((prevStep) => prevStep + 1);
            }
        } else if (activeStep == 1) {
            if (formik.values.employmentStatus === 'Unemployed') {
                setActiveStep((prevStep) => prevStep + 2);
            }
            else if (formik.values.employmentStatus === 'Employed') {
                setActiveStep((prevStep) => prevStep + 1);
            }
        }
        else if (activeStep == 2) {
            if (formik.values.organisationName && formik.values.currentWorkType) {
                setActiveStep((prevStep) => prevStep + 1);
            }
        }
        else if (activeStep == 3) {
            if (formik.values.preferedIndustry && formik.values.preferedJobDesignation && formik.values.preferedWorkType) {
                setActiveStep((prevStep) => prevStep + 1);
            }
        }
        else if (activeStep == 4) {
            if (formik.values.resumeLink) {
                setActiveStep((prevStep) => prevStep + 1);
            }
        }

    }

    const handleSubmit = () => {
        setSubmitted(true);
        alert('Thanks for filling this form. We will get back to you shortly!!!');
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            employmentStatus: '',
            organisationName: '',
            workingSince: new Date(),
            currentWorkType: '',
            currentCity: '',
            currebtState: '',
            currentCountry: '',
            preferedIndustry: '',
            preferedJobDesignation: '',
            preferedWorkType: '',
            preferedCity: '',
            preferedState: '',
            preferedCountry: '',
            resumeLink: '',
            linkeInProfile: '',
            coverLetter: '',
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Invalid email'),
            firstName: Yup.string()
                .required('First Name is required'),
            lastName: Yup.string()
                .required('Last Name is required'),
            phone: Yup.string()
                .required('Phone Number is required')
                .matches(/^[0-9]+$/, 'Must be only digits')
                .min(10, 'Must be exactly 10 digits')
                .max(10, 'Must be exactly 10 digits'),
            employmentStatus: Yup.string()
                .required('Employment Status is required'),
            organisationName: Yup.string(),
            workingSince: Yup.string(),
            currentWorkType: Yup.string(),
            'workLocation.city': Yup.string(),
            'workLocation.state': Yup.string(),
            'workLocation.country': Yup.string(),
            preferedIndustry: Yup.string()
                .required('Prefered Industry is required'),
            preferedJobDesignation: Yup.string()
                .required('Employment Status is required'),
            preferedWorkType: Yup.string()
                .required('Employment Status is required'),
            'preferedLocation.city': Yup.string(),
            'preferedLocation.state': Yup.string(),
            'preferedLocation.country': Yup.string(),
            resumeLink: Yup.string()
                .required('Resume link is required')
        }),
        onSubmit: () => {
            if (activeStep === steps.length - 1) {
                console.log('last step');
            } else {
                setActiveStep((prevStep) => prevStep + 1);
            }
        }
    });

    const formContent = (step) => {
        switch (step) {
            case 0:
                return <BasicDetails formik={formik} />;
            case 1:
                return <EmploymentStatus formik={formik} />;
            case 2:
                return <CurrentEmploymentDetails formik={formik} />;
            case 3:
                return <FutureOpportunities formik={formik} />;
            case 4:
                return <FinalDetails formik={formik} />
            case 5:
                return <ReviewInfo formik={formik} />
            default:
                return <div>404: Not Found</div>
        }
    };

    return (
        <Box
            sx={{
                maxWidth: '600px',
                padding: '20px'
            }}
        >
            <Grid
                item
                xs={12}
            >
                <Typography variant='h3' sx={{ background: '#121212', borderRadius: '10px', margin: 1, padding: 1,  color: 'white', position: 'relative', top: '5%' }}>Recruitment Form</Typography>
            </Grid>
            {
                !submitted ? <div style={{paddingX: 2}}>
                    <Grid item xs={12} sx={{ margin: 2 }}>
                        <div className="progressbar" style={{ width: '100%', border: '1px solid black' }}>
                            <div
                                style={{ width: `${((activeStep) / steps.length) * 100}%` }}
                            ></div>
                        </div>
                    </Grid>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            sx={{  }}
                        >
                            {formContent(activeStep)}
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
                        <Grid
                            item
                            xs={12}
                        >
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{margin: 2, border: '1px solid blue', borderRadius: '5px'}}
                            >
                                Back
                            </Button>
                            {activeStep === steps.length - 1 ? (
                                <Button onClick={handleSubmit} sx={{margin: 2, border: '1px solid blue', borderRadius: '5px'}}>
                                    Submit
                                </Button>
                            ) : (
                                <Button onClick={handleNext} disabled={activeStep == steps.length - 1} sx={{margin: 2, border: '1px solid blue', borderRadius: '5px'}}>
                                    Next
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </div> : <div>
                    <Grid item xs={12} sx={{ margin: 2 }}>
                        <div className="progressbar" style={{ width: '100%', border: '1px solid black' }}>
                            <div
                                style={{ width: '100%' }}
                            ></div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sx={{color: 'rgb(98, 0, 255)'}}><Typography variant='h4'>Thank you for submitting this form!</Typography></Grid>
                </div>
            }
        </Box>
    )
}

export default Form;