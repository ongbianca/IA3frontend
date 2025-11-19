# IA3frontend

# IA3 Frontend – Image Upload (React)

This React application implements the client-side requirements for the IA3 File Upload Activity.  
It includes a reusable ImageUpload component, Signup form, and Create Place form that sends image files to the backend using **FormData**.

---

## 🚀 Features
- Reusable **ImageUpload** component (file picker + preview)
- Signup page with:
  - Name
  - Email
  - Password
  - Profile picture upload
- Create Place page with:
  - Title
  - Description
  - Address
  - Image upload
- Uses **FileReader** for live image preview
- Sends form data to backend using **multipart/form-data**
- Fully integrated with backend Multer upload system

---

## 📁 Project Structure
ia3frontend
│── package.json
│── /src
│ ├── App.js
│ ├── index.js
│ ├── /pages
│ │ ├── Signup.js
│ │ └── CreatePlace.js
│ └── /shared
│ └── /components
│ └── /FormElements
│ ├── ImageUpload.js
│ └── ImageUpload.css

---

## 🔧 Installation
1. Clone this repository:
   ```bash
   git clone <repo-link>
2. Install dependencies:
   npm install
3. Start the development server:
   npm start

The frontend runs on http://localhost:3000.

---

## 🔌 Backend Connection
This project communicates with the backend at:

http://localhost:5005
CORS must be enabled on the backend.

---
## 🧪 How to Test Image Upload
Signup:
1. Open /signup (or wherever Signup is rendered)
2. Enter name, email, password
3. Upload an image
4. Submit → should store file in /uploads/images

Create Place:
1. Open /create-place
2. Fill in title, description, address
3. Upload an image
4. Submit → should show alert and backend logs

---
## ⚠️ Notes
1. Image files should not be committed.
2. ImageUpload component accepts only .jpg, .jpeg, .png.
