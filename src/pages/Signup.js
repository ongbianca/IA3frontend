import React, { useState } from 'react';
import ImageUpload from '../shared/components/FormElements/ImageUpload';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  const imageInputHandler = (id, pickedFile, isValid) => {
    setImage(pickedFile);
  };

  const signupSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5005/api/users/signup', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      console.log('Signup response:', data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h2>Signup</h2>
      <form onSubmit={signupSubmitHandler}>
        <div>
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Your Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <ImageUpload id="image" center onInput={imageInputHandler} />

        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Signup;
