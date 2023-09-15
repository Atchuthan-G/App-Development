import './signup.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState hook

function Signup() {
  // Define state variables to hold form field values and error messages
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    height: '',
    weight: '',
    mail: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // Handle form field changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 18) {
      newErrors.age = 'Age must be at least 18';
    }
    if (!formData.height) {
      newErrors.height = 'Height is required';
    }
    if (!formData.weight) {
      newErrors.weight = 'Weight is required';
    }
    if (!formData.mail.trim()) {
      newErrors.mail = 'Email is required';
    } else if (!isValidEmail(formData.mail)) {
      newErrors.mail = 'Invalid email format';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // If there are validation errors, update the errors state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If there are no errors, proceed with form submission
      // You can add your logic here, e.g., sending data to a server
    }
  };

  // Function to validate email format using a regular expression
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className='boo'>
        <h5 className='heading'>SignUp here</h5>
        <form className='shi' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Username</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              className='vertical-center'
              required
            />
            {errors.username && <div className='error'>{errors.username}</div>}
          </div>
          <div className='form-group'>
            <label>Age</label>
            <input
              type='number'
              name='age'
              value={formData.age}
              onChange={handleInputChange}
              className='vertical-center'
              required
            />
            {errors.age && <div className='error'>{errors.age}</div>}
          </div>
          <div className='form-group'>
            <label>Height</label>
            <input
              type='number'
              name='height'
              value={formData.height}
              onChange={handleInputChange}
              className='vertical-center'
              required
            />
            {errors.height && <div className='error'>{errors.height}</div>}
          </div>
          <div className='form-group'>
            <label>Weight</label>
            <input
              type='number'
              name='weight'
              value={formData.weight}
              onChange={handleInputChange}
              className='vertical-center'
              required
            />
            {errors.weight && <div className='error'>{errors.weight}</div>}
          </div>
          <div className='form-group'>
            <label>Mail</label>
            <input
              type='email'
              name='mail'
              value={formData.mail}
              onChange={handleInputChange}
              className='vertical-center'
              required
            />
            {errors.mail && <div className='error'>{errors.mail}</div>}
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleInputChange}
              className='vertical-center'
              required
            />
            {errors.password && <div className='error'>{errors.password}</div>}
          </div>
          <br />
          <button type='submit' className='button'>
            There you go
          </button>
        </form>
        <Link to='/difficulty'>Cancel</Link>
      </div>
    </>
  );
}

export default Signup;
