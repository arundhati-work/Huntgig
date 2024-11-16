# HUNTGIG - Job Portal

Huntgig is a job portal developed using React, Axios, and Material UI (optional), designed to offer job seekers an intuitive platform to explore job listings and company profiles. This project focuses on front-end development with session management and dynamic content rendering, providing a user-friendly experience.

This assignment has been created by Arundhati Bandopadhyaya (NUID: 002313855) as part of assignment 9 for INFO6150 course taught by Prof. Vishal Chawla.

## Features

1. **Login and Session Management**:
- A login page authenticates users using stored usernames and passwords.
- User sessions are managed using Axios for API calls, with options to login and logout.
- User information is verified against data manually entered into the backend, following secure session protocols.

2. **Job Portal Pages and Routing**:

    There are 7 pages for easy navigation:
- Home: Introduction to Huntgig.
- About: Overview of Huntgig’s mission, values, and key features.
- Job Listings: Dynamic job listings showcasing available positions.
- Company Showcase: Image gallery of companies with basic details.
- Contact: Contact form for users to reach out, including FAQs in an accordion.
- Sign up: To create user account with email, password and confirm password.
- Login: To log into user account with email and password.

3. **Job Listings with Frontend Data**:
- The Job Listings page dynamically displays job positions using front-end data, with each listing providing job title, last updated, description and link to apply.
- The data for job listings is handled on the front end for efficient rendering without API requests.

4. **Company Showcase with Image Gallery**:
- Company Showcase page displays a gallery of company images sourced from the backend.
- Images are retrieved without requiring specific user-based filtering for now, focusing on gallery display.

5. **Material UI Components**:
- Material UI components enhance design and responsiveness throughout the portal.
- Features include navigation bars, buttons, cards, accordions and form elements for a cohesive and professional look.

## Project Structure

```bash
|---Huntgig/
  |---server/
    |---models/
      |---Company.js
      |---Contact.js
      |---User.js
    |---routes/
      |---AuthRoutes.js
      |---CompanyRoutes.js
      |---ContactRoutes.js
    |---server.js
  |---src/
    |---Components/
      |---Footer/
        |---Footer.js
        |---Footer.css
      |---Job/
        |---Job.js
        |---Job.css
      |---Navbar/
        |---Navbar.js
        |---Navbar.css
      |---Testimonials/
        |---Testimonials.js
      |---AuthContext.js
    |---Data/
      |---JobPosts.js
      |---TestimonialsData.js
    |---Images/
    |---Pages/
      |---CSS/
        |---About.js
        |---Companies.js
        |---Forms.js
        |---Home.js
      |---About.js
      |---Companies.js
      |---Contact.js
      |---Home.js
      |---Jobs.js
      |---Login.js
      |---Signup.js
    |---App.css
    |---App.js
    |---App.css
    |---App.test.js
    |---index.css
    |---index.js
    |---reportWebVitals.js
    |---setupTests.js
```

## Tech Stack

- **Frontend**: React, Axios, Material UI  
- **Backend**: Node.js, Express  
- **Database**: MongoDB Compass  

## Steps to Run the Project

1. Run the mongo database
``` bash
   >> mongod --port 27018 --dbpath C:\data\db
```
2. Run the backend
``` bash
    >> cd server
    >> nodemon server.js
```
3. Run the frontend
``` bash
    >> npm start
```


