# 📝 Blogify

A full-stack blogging platform built with **Node.js**, **Express**, and **MongoDB**, featuring user authentication, CRUD operations, and a clean, responsive UI. Deployed on Render, it offers a seamless experience for users to create, read, update, and delete blog posts.

---

## 📌 Project Overview

**Blogify** is a personal blogging application designed to provide users with a platform to express their thoughts and ideas. It allows users to register, log in, and manage their blog posts with ease. The application is built using the MERN stack and is deployed on Render for easy access.

---

## 👤 User Stories

| User Type | Story |
|-----------|-------|
| New User  | I want to register and log in to create and manage my blog posts. |
| Returning User | I want to view, edit, or delete my existing blog posts. |
| Admin | I want to manage all users and their posts. |

---

## 🎯 Rationale

Blogify was developed to provide a simple yet powerful platform for individuals to share their thoughts and ideas. The application focuses on user experience, security, and scalability, ensuring that users can manage their content efficiently.

---

## 🎯 Target Audience

- Writers and bloggers looking for a personal blogging platform.
- Developers interested in learning full-stack JavaScript development.
- Educators seeking a project-based learning tool for Node.js and MongoDB.

---

## 💡 Motivation

The motivation behind Blogify was to create a user-friendly blogging platform that combines the power of Node.js and MongoDB with a responsive frontend. The project aims to demonstrate the capabilities of the MERN stack in building real-world applications.

---

## 💻 Proposed Solution

- **Backend:** Node.js and Express.js for server-side logic and API endpoints.
- **Frontend:** EJS templating engine for dynamic HTML rendering.
- **Database:** MongoDB for storing user data and blog posts.
- **Authentication:** Passport.js for secure user authentication.
- **Deployment:** Render for hosting the application.

---

## 🔝 Improvements Over Alternatives

- **User Authentication:** Secure login and registration system.
- **Responsive Design:** Mobile-friendly interface for users on all devices.
- **CRUD Operations:** Full functionality to create, read, update, and delete blog posts.
- **Admin Panel:** Administrative controls for managing users and posts.

---

## 📦 Project Scope & Limitations

**Scope:**  
- User registration and authentication.
- Blog post creation, editing, and deletion.
- Admin panel for user and post management.

**Limitations:**  
- No support for media uploads (images, videos).
- Limited styling and UI components.
- No advanced features like comments or tags.

---

## 🚀 Future Improvements

- Implement media upload functionality for blog posts.
- Enhance UI with modern frontend frameworks like React or Vue.js.
- Add features like comments, tags, and categories.
- Implement email notifications for user activities.

---

## ✨ Summary

Blogify is a full-stack blogging platform that demonstrates the capabilities of the MERN stack. It provides users with a secure and responsive platform to share their thoughts and ideas, with plans for future enhancements to improve functionality and user experience.

---

## 🎨 Design

### Brand Colours

| Colour | Hex | Usage |
|--------|-----|-------|
| Primary Blue | #4A90E2 | Buttons, links |
| Accent Yellow | #FFC107 | Highlights, notifications |
| Light Grey | #F7F7F7 | Backgrounds |
| Dark Grey | #333333 | Text |

### Layout & Structure

- **Header:** Navigation bar with links to home, login, and register pages.
- **Main Content:** List of blog posts with titles and excerpts.
- **Sidebar:** Links to user profile and settings.
- **Footer:** Contact information and social media links.

---

## 🧪 Testing

Testing ensures that the **Blogify** application functions correctly, is secure, and provides a seamless user experience across devices and environments.

---

### 1. Functional Testing

Functional tests verify that all core features work as intended:

| Feature | Test Description | Result |
|---------|----------------|--------|
| User Registration | New users can register with a unique email and password | ✅ Pass |
| User Login | Registered users can log in successfully | ✅ Pass |
| Blog Creation | Users can create a new blog post with a title and content | ✅ Pass |
| Blog Editing | Users can edit their own posts and save changes | ✅ Pass |
| Blog Deletion | Users can delete their own posts | ✅ Pass |
| Admin Functions | Admins can view all users, delete posts, and manage accounts | ✅ Pass |
| Error Handling | Invalid login, registration errors, and missing fields handled gracefully | ✅ Pass |

**Notes:**  
- Form validation ensures required fields are not empty.  
- User permissions restrict access to editing/deleting posts to the owner or admin.

---

### 2. Responsive Design Testing

The application was tested on multiple devices and screen sizes to ensure usability and accessibility:

| Device / Screen Size | Result | Notes |
|---------------------|--------|-------|
| iPhone 14 / 390x844 | ✅ Pass | Navigation and post content readable and tappable |
| iPad / 768x1024     | ✅ Pass | Two-column layout adjusted correctly |
| Desktop / 1920x1080 | ✅ Pass | Full content visible, sidebar aligned |
| Android / 360x800   | ✅ Pass | Mobile-friendly layout, buttons responsive |

**Tools Used:** Chrome DevTools, responsive mode; real devices testing for validation.

---

### 3. Security Testing

Ensures that user data and access controls are secure:

- **Password Hashing:** Passwords stored securely using bcrypt ✅  
- **Session Management:** Sessions created on login and invalidated on logout ✅  
- **Access Control:** Users cannot edit or delete posts they do not own ✅  
- **Input Validation:** Prevents empty or malicious inputs to reduce risk of injection attacks ✅  

**Findings & Fixes:**  
- Sanitized user input to prevent XSS vulnerabilities.  
- Ensured session cookies have proper security flags.

---

### 4. Database Testing

Verifies that CRUD operations interact correctly with MongoDB:

| Operation | Test | Result |
|-----------|------|--------|
| Create | Add a new blog post | ✅ Pass |
| Read | Fetch all posts and user-specific posts | ✅ Pass |
| Update | Modify existing blog post | ✅ Pass |
| Delete | Remove a blog post | ✅ Pass |
| Indexing | Efficient queries for posts and users | ✅ Pass |

**Notes:**  
- MongoDB collections and schemas tested for correct structure.  
- Validation ensures no duplicate user emails.

---

### 5. Performance Testing

Checks the speed and efficiency of the application:

- Page load times measured on desktop and mobile ✅  
- Database queries optimized for response time ✅  
- Minimal lag when fetching multiple posts ✅  
- Server handles multiple simultaneous requests without crashing ✅  

**Tools Used:** Chrome DevTools, Postman for API testing.

---

### 6. User Acceptance Testing (UAT)

- Multiple users tested the registration, login, and blog posting workflow ✅  
- Admin panel features verified by a test admin user ✅  
- Feedback incorporated to improve UI readability and form validation ✅  

---

### 7. Testing Summary

The **Blogify** application has passed all functional, responsive, security, and performance tests. Core features, including authentication, CRUD operations, and admin management, function correctly. The UI is responsive across devices, and the backend is secure and optimized. Any minor issues found during testing were resolved to ensure a robust and user-friendly blogging platform.

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js
- **Frontend:** EJS
- **Database:** MongoDB
- **Authentication:** Passport.js
- **Deployment:** Render

---

## 📚 Credit & References

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)

---

## 👨‍💻 Author

**Iyeme Salubi** – 

---

