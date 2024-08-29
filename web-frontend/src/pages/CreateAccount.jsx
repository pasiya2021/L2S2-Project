import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, Typography, Paper, Stack, TextField, FormControl,
  InputLabel, Input, IconButton, InputAdornment, Button, Select, MenuItem
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
// import google from '../Asstes/Create Account-Log in-page/google-logo-icon-png-transparent-background-osteopathy-16 1.png';
// import facebook from '../Asstes/Create Account-Log in-page/facebook-512 1.png';
import user from '../assets/login_image1.png';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  // State variables for managing form inputs, errors, and submission status
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');  // Added state for Area
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  // Function to handle changes in Full Name input field
  const handleFullNameChange = (e) => setFullName(e.target.value);

  // Function to handle changes in Email input field
  const handleEmailChange = (e) => setEmail(e.target.value);

  // Function to handle changes in Password input field
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Password validation regex and error handling
    const passwordRegex = /^(?=.*[0-9].*[0-9])(?=.*[!@#$%^&]).{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('Password must be at least 8 characters long and include at least two numbers and one special character');
    } else {
      setPasswordError('');
    }
  };

  // Function to handle changes in Confirm Password input field
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Function to toggle visibility of password
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // Prevents accidental form submission when toggling password visibility
  const handleMouseDownPassword = (e) => e.preventDefault();


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset errors
    setErrors({});

    // Validate password match
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    try {
      // Send POST request to backend API for user signup
      const response = await axios.post('http://localhost:8080/api/user/signup', {
        name: fullName,
        email: email,
        password: password,
        area: area // Include selected area in the request body
      });

      // Handle successful response
      setFormSubmitted(true);
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/'); // Redirect to homepage after successful signup
    } catch (error) {
      // Handle errors from backend API
      if (error.response && error.response.status === 401) {
        setErrors({ email: "User already exists with that email" });
        setFormSubmitted(false);
      } else {
        console.error(error);
        setFormSubmitted(false);
      }
    }
  };

  // Determine greeting message based on current time
  let curDate = new Date().getHours();
  let greeting = '';

  if (curDate >= 1 && curDate < 12) {
    greeting = 'Good Morning!';
  } else if (curDate >= 12 && curDate < 16) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }

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
              {greeting}
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
        <Box component="img" src={user}
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
            gap: '22px', // The gap between the child elements
            padding: '0 0 0 60px',
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '367px',
              width: '100%'
            }}>
              <Typography sx={{
                width: '450px',
                color: '#277502',
                fontSize: '48px',
                fontWeight: '700',
                lineHeight: '72.917%',
                letterSpacing: '3.84px',
              }}>
                Create Account
              </Typography>
            </Box>

            {/* Form fields */}
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '40px',
            }}>
              <div>
                <TextField
                  id="fullName"
                  label="Full Name"
                  variant="standard"
                  value={fullName}
                  onChange={handleFullNameChange}
                  sx={{ width: '714.01587px' }}
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                />
              </div>
              <div>
                <TextField
                  id="emailAddress"
                  label="Email Address"
                  variant="standard"
                  value={email}
                  onChange={handleEmailChange}
                  sx={{ width: '714.01587px' }}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </div>
              
              <div>
                {/* Password input field */}
                <FormControl variant="standard" sx={{ width: '714px' }} error={!!errors.password}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {/* Password error message */}
                  {passwordError && (
                    <Typography sx={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
                      {passwordError}
                    </Typography>
                  )}
                  <Typography variant="caption" color="error">
                    {errors.password}
                  </Typography>
                </FormControl>
              </div>
              <div>
                {/* Confirm Password input field */}
                <FormControl variant="standard" sx={{ width: '714px' }} error={!!errors.confirmPassword}>
                  <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                  <Input
                    id="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  {/* Confirm Password error message */}
                  <Typography variant="caption" color="error">
                    {errors.confirmPassword}
                  </Typography>
                </FormControl>
              </div>
            </Box>

            {/* Create Account button */}
            <Box>
              <Button type="submit" variant="contained" sx={{
                display: 'flex',
                padding: '16px 234px 0px 234px',
                alignItems: 'flex-start',
                gap: '10px',
                borderRadius: '8px',
                textTransform: 'none',
                background: 'linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)'
              }}
                onClick={handleSubmit}>
                <Typography sx={{
                  width: '244.919px',
                  height: '57.976px',
                  color: '#FFF',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: '600',
                  lineHeight: '35px',
                }}>
                  Create Account
                </Typography>
              </Button>

              {/* Success message after account creation */}
              {formSubmitted && (
                <Typography variant="body1" color="primary" sx={{ marginTop: '20px', textAlign: 'center' }}>
                  Account created successfully!
                </Typography>
              )}

              {/* Login link */}
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
                Do you have an account ?
                <a href="/Createaccount">Login here</a>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default CreateAccount;