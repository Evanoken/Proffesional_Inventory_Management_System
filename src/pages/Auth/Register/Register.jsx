import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const RegistrationPage = () => {
  const navigate = useNavigate(); // Move the hook inside the component body

  const schema = yup.object().shape({
    customer_name: yup.string().required('Customer Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Make an API call to register the customer
      const response = await axios.post('/api/register', data);
      console.log('Registration successful:', response.data);
      // Redirect to a success page or perform any other actions
      navigate('/layout');
    } catch (error) {
      console.error('Error registering customer:', error);
      // Handle registration error, display error message, etc.
    }
  };

  return (
    <div className='regCntainer'>
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='fi'>
          <label>Customer Name:</label>
          <input type="text" {...register('customer_name')} />
          {errors.customer_name && <p>{errors.customer_name.message}</p>}
        </div>
        <div className='fi'>
          <label>Email:</label>
          <input type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className='fi'>
          <label>Phone:</label>
          <input type="text" {...register('phone')} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <button type="submit">Register</button>
        <div className='lg'>
        <span>Already have account</span>
        <Link to="/login" className='llg'>
        <span> Login </span>
          </Link>
        </div>
        
      </form>
    </div>
  );
};

export default RegistrationPage;
