import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Make an API call to validate login credentials
      // You can customize this part to fit your authentication mechanism
      console.log('Login credentials:', data);
      // Simulating API response with setTimeout
      setTimeout(() => {
        // Assuming successful login
        // Redirect to the dashboard or desired page
        navigate('/layout');
      }, 2000);
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error, display error message, etc.
    }
  };

  return (
    <div className='login-container'>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
        <div className='lc'>
          <label>Email:</label>
          <input type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className='lc'>
          <label>Password:</label>
          <input type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
        <div className='lg'>
        <span>You don't have account</span>
        <Link to="/register" className='llc'>
        <span> Register </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
