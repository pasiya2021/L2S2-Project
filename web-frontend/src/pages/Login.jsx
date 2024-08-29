import React from 'react';
import axios from 'axios';
import {
  Box, Typography, Paper, TextField, FormControl, InputLabel, Input,
  IconButton, InputAdornment, Button,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import img from '../assets/login_image1.png';
import { useNavigate } from 'react-router-dom';

// Function to determine greeting based on current time
let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning!";
} else if (curDate >= 12 && curDate < 16) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

const Login = () => {
  // State variables for managing form inputs, errors, and submission status
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
  const [loginSuccess, setLoginSuccess] = React.useState(false);

  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle changes in Email input field
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  // Function to handle changes in Password input field
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  // Function to fetch user data and store it in local storage
  const AsignUser = async (email) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/userEmail/${email}`);
      const userData = response.data;

      // Store the user data in local storage
      localStorage.setItem('user', JSON.stringify(userData));

      console.log('User data fetched and stored:', userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Function to toggle visibility of password
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Prevents accidental form submission when toggling password visibility
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email and password before submitting
    if (!emailError && !passwordError) {
      try {
        // Send POST request to backend API for user login
        const response = await axios.post('http://localhost:8080/api/user/signin', {
          email,
          password,
        });

        if (response.status === 200) {
          AsignUser(email);
          // Handle successful login
          const token = response.data.token;
          localStorage.setItem('token', token); // Store token in localStorage
          navigate('/'); // Redirect to homepage after successful login
          setLoginSuccess(true); // Set login success state
          setLoginError(''); // Clear any previous login error
        }
      } catch (error) {
        // Handle errors from backend API
        if (error.response && error.response.status === 401) {
          setLoginError('Invalid email or password');
        } else {
          setLoginError('An error occurred. Please try again later.');
        }
      }
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Box sx={{
        display: 'flex',
        position: 'relative',
        height: '100vh',
        width: '1440px',
        borderRadius: '36px'
      }}>
        {/* Left side with background gradient */}
        <Box sx={{
          width: '417px',
          flexShrink: '0',
          background: 'linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)',
          borderRadius: '25px 0 0 25px'
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '410px',
            height: '106px',
            padding: '81px 72px 0 72px'
          }}>
            {/* Greeting messages */}
            <Typography sx={{
              color: '#FFF',
              fontSize: '24px',
              fontWeight: '500',
              lineHeight: '53px',
              letterSpacing: '2px',
            }}>
              <span>{greeting}</span>
            </Typography>
            <Typography sx={{
              color: '#FFF',
              fontSize: '48px',
              fontWeight: '900',
              lineHeight: '53px',
              letterSpacing: '2px',
            }}>
              HAVE A NICE DAY
            </Typography>
          </Box>
        </Box>

        {/* Right side with image and form */}
        <Box component="img" src={img}
          sx={{
            width: '500px',
            height: '356px',
            position: 'absolute',
            bottom: '0px',
            left: '-1px',
            borderRadius: '0 0 0 25px'
          }} />

        <Paper elevation={3} style={{
          padding: '36px',
          borderRadius: '0px 25px 25px 0px',
        }}>
          <Box sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '62px', // The gap between the child elements
            padding: '0 0 0 60px',
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '367px',
              width: '100%'
            }}>
              <Typography sx={{
                width: '379px',
                color: '#277502',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '72.917%',
                letterSpacing: '3.84px'
              }}>
                Log In
              </Typography>
            </Box>

            {/* Form fields */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '71px',
            }}>
              <div>
                {/* Email input field */}
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={handleEmailChange}
                  sx={{ width: '714.01587px', height: '52.5689px' }}
                />
                {/* Display email validation error */}
                {emailError && (
                  <Typography sx={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
                    {emailError}
                  </Typography>
                )}
              </div>

              <div>
                {/* Password input field */}
                <FormControl sx={{ width: '714px' }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                {/* Forgot Password link */}
                <Typography sx={{
                  color: 'var(--Primary, #449E2E)',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '22px',
                  letterSpacing: '-0.408px',
                }} >
                  Forget Password?
                </Typography>
              </div>
            </Box>

            {/* Log In button */}
            <Box>
              <Button
                onClick={handleSubmit}
                sx={{
                  display: 'flex',
                  padding: '16px 234px 0px 234px',
                  alignItems: 'flex-start',
                  gap: '10px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  background: 'linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)'
                }}
              >
                <Typography sx={{
                  width: '244.919px',
                  height: '57.976px',
                  color: '#FFF',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '600',
                  lineHeight: '35px',
                }}>
                  Log In
                </Typography>
              </Button>

              {/* Display login errors and success message */}
              {loginError && (
                <Typography sx={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
                  {loginError}
                </Typography>
              )}
              {loginSuccess && (
                <Typography sx={{ color: 'green', fontSize: '14px', marginTop: '10px' }}>
                  Login successful!
                </Typography>
              )}

              {/* Signup link */}
              <Typography
                sx={{
                  color: 'var(--Secondary, #5FC301)',
                  fontSize: '20px',
                  fontWeight: '400',
                  lineHeight: '22px',
                  letterSpacing: '-0.408px',
                  marginTop: '30px',
                  '& a': {
                    color: '#5FC301',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    '&:hover': {
                      color: '#408000',
                    }
                  }
                }}
              >
                Don’t You Have an Account?
                <a href="/CreateAccount">Signup Here</a>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Login;