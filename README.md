# Hostelmate: Hostel Grievance Redressal System

## Project Overview

The **Hostelmate: Hostel Grievance Redressal System** is a web application that enables students to submit grievances and allows staff and wardens to address them efficiently. Built with a full-stack architecture, it supports real-time messaging, structured role-based dashboards, and secure OTP-based registration. The application is fully responsive and live at:

🔗 [https://hostel-mate-psi.vercel.app/](https://hostel-mate-psi.vercel.app/)

## Demo Credentials

You can try the application using the following credentials:

### Student

* **Email**: [imt_2022002@iiitm.ac.in](mailto:imt_2022002@iiitm.ac.in)
* **Password**: Abc@1234

### Staff

* **Email**: [vijaykumar1234@iiitm.ac.in](mailto:staff@iiitm.ac.in)
* **Password**: Abcd@123

### Warden/Admin

* **Email**: [imt_2022103@iiitm.ac.in](mailto:warden@iiitm.ac.in)
* **Password**: password123

## Demo Videos

🎥 [Student Dashboard Demo](https://iiitmacin-my.sharepoint.com/:v:/g/personal/imt_2022103_iiitm_ac_in/ETTeXxMHc1BAm5JSwZNtgpwBPlwWYF3Toluq2-vQ2WwiDw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=80PoeD)
🎥 [Staff Dashboard Demo](https://iiitmacin-my.sharepoint.com/personal/imt_2022103_iiitm_ac_in/_layouts/15/stream.aspx?id=%2Fpersonal%2Fimt%5F2022103%5Fiiitm%5Fac%5Fin%2FDocuments%2FHostelMate%20Demo%2FHostelMate%20Staff%20Dashboard%20Demo%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E5f2e7b2d%2D0013%2D4f54%2Db5ca%2D1f4dd1f435f1)
🎥 [Warden/Admin Dashboard Demo](https://iiitmacin-my.sharepoint.com/:v:/g/personal/imt_2022103_iiitm_ac_in/EUFx54kP0MpOiGMsmyGi1yAB1x6WfnLA3tgxiHL0cx0qTQ?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=PKUaKG)


## Key Features Implemented

### ✅ OTP-Based Email Registration

* Users receive a One-Time Password via email using **Nodemailer**.
* Used during signup to verify ownership of the email address.

### ✅ Role-Based Access Control

* Separate views and access permissions for **Students**, **Staff**, and **Warden/Admins**.
* Protected routes using frontend logic and token validation.

### ✅ Real-Time Chat Support

* Implemented with **Socket.io**.
* When a grievance is registered, a chatroom is automatically created to connect the student and the staff.

### ✅ Grievance Lifecycle Tracking

* Students can view the status of their complaints in real-time.
* Staff can mark issues as resolved and update complaint statuses.

### ✅ Dashboard UI for All Roles

* Student Dashboard: Raise and track grievances.
* Staff Dashboard: View assigned grievances and resolve them.
* Warden Dashboard: Monitor and manage all grievances.

## Technologies Used

### Frontend

* **React.js**
* **Tailwind CSS**
* 
### Backend

* **Node.js**
* **Express.js**
* **MongoDB Atlas** (Cloud DB)
* **Redis** (OTP caching)
* **Socket.io** (real-time communication)
* **Nodemailer** (email services)

### Tools

* **Postman** (API testing)
* **Git/GitHub** (version control)
* **Render** (for backend deployment)
* **Vercel** (for frontend deployment)

## My Contributions & Learnings

### 1. Nodemailer for Email Notifications

* **What I Learned**: Sending OTPs via email to verify users during signup.
* **Use Case**: When a student registers, an OTP is emailed to confirm the email address.
* **Tech Used**: Nodemailer, Gmail SMTP.
* **Source**: Node.js Docs, YouTube, ChatGPT.

### 2. Redis for OTP Caching

* **What I Learned**: How Redis stores temporary data efficiently.
* **Use Case**: OTPs are cached for a few minutes to prevent repeated database writes.
* **Tech Used**: Redis, Node.js.
* **Source**: Redis Docs, Tutorials.

### 3. Socket.io for Real-Time Chat

* **What I Learned**: Bidirectional communication with persistent connections.
* **Use Case**: Each complaint opens a dedicated chatroom.
* **Tech Used**: Socket.io, Express.
* **Source**: Socket.io Docs, YouTube.

### 4. Postman & MongoDB Atlas

* **What I Learned**: API testing and managing a cloud-hosted MongoDB database.
* **Use Case**: CRUD operations for grievances, user data.
* **Tech Used**: Postman, MongoDB Atlas.
* **Source**: Docs, YouTube.

## Screenshots

| Role                      | Screenshot                                             |
| ------------------------- | ------------------------------------------------------ |
| Login                     | ![Login](./images/login\(1\).png)                      |
| Signup                    | ![Signup](./images/signup\(2\).png)                    |
| Student Dashboard         | ![Student](./images/studentDashboard\(3\).png)         |
| Complaint Submission      | ![Create](./images/createComplaint\(4\).png)           |
| Student Complaint View    | ![Complaint](./images/studentComplaint\(5\).png)       |
| Warden Dashboard          | ![Warden](./images/wardenDashboard\(6\).png)           |
| Warden Resolves           | ![Resolved](./images/wardenResolvedComplaint\(7\).png) |
| Staff Dashboard | ![staff](./images/studentDashboardUpdated\(8\).png)  |
| Chat                | ![chat](./images/hostelDatabaseErDiagram.png)            |

---

Made with ❤️ by **Shreshtha Garg**
🔗 [Connect with me on LinkedIn](https://www.linkedin.com/in/shreshth-garg-3ba629208/)
