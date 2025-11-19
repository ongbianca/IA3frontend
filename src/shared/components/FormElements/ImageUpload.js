import React, { useRef, useState, useEffect } from 'react';

const ImageUpload = props => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => setPreviewUrl(fileReader.result);
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = event => {
    let pickedFile = event.target.files[0];
    if (!pickedFile) {
      setIsValid(false);
      return;
    }

    setFile(pickedFile);
    setIsValid(true);

    props.onInput(props.id, pickedFile, true);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className={`form-control ${props.center && 'center'}`}>
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={pickedHandler}
      />

      <div className="image-upload__preview">
        {previewUrl ? <img src={previewUrl} alt="Preview" /> : <p>No image picked.</p>}
      </div>

      <button type="button" onClick={pickImageHandler}>
        PICK IMAGE
      </button>
    </div>
  );
};

export default ImageUpload;