import {
    TextField,
    Grid,
    Typography
} from '@mui/material';

const BasicDetails = (props) => {
    const { formik } = props;
    return (
        <Grid
            container
            spacing={2}
        >
            <Grid
                item
                xs={12}
            >
                <Typography variant='h5' sx={{background: '#2196f3',  borderRadius: '10px', padding: 1, color: 'white'}}>Basic Details</Typography>
            </Grid>
            <Grid
                item
                xs={6}
            >
                <TextField
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    size='small'
                    fullWidth
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
            </Grid>
            <Grid
                item
                xs={6}
            >
                <TextField
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastNamel)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <TextField
                    name="phone"
                    label="Phone Number"
                    variant="outlined"
                    type="phone"
                    fullWidth
                    size="small"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    size="small"
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </Grid>
        </Grid>
    )
}

export default BasicDetails