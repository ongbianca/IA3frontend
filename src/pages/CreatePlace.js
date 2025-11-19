import React, { useState } from 'react';
import ImageUpload from '../shared/components/FormElements/ImageUpload';

const CreatePlace = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [creator, setCreator] = useState('dummy-user');
  const [image, setImage] = useState(null);

  const imageInputHandler = (id, pickedFile, isValid) => {
    setImage(pickedFile);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('creator', creator);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5005/api/places', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      console.log('Create place response:', data);
      alert('Place created! Check backend uploads/images folder.');
    } catch (err) {
      console.error(err);
      alert('Something went wrong.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h2>Create Place</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            required 
          />
        </div>

        <div>
          <label>Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            required 
          />
        </div>

        <div>
          <label>Address</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)}
            required 
          />
        </div>

        <ImageUpload id="image" center onInput={imageInputHandler} />

        <button type="submit">ADD PLACE</button>
      </form>
    </div>
  );
};

export default CreatePlace;
