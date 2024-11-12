# SoftSkills-Enhancement
A website for enhancing communication and professional skills

This project is an English Training App developed to improve the vocabulary, speech, and pronunciation skills of new recruits in a company. Designed specifically for graduate engineers, the app offers an interactive learning experience tailored to support HR’s employee development objectives.

---

## Table of Contents

1. [Introduction](#introduction)
   - [Purpose](#purpose)
   - [Scope](#scope)
   - [Goals](#goals)
   - [Objectives](#objectives)
2. [Stakeholders](#stakeholders)
   - [Primary Stakeholders](#primary-stakeholders)
   - [Secondary Stakeholders](#secondary-stakeholders)
3. [Functional Requirements](#functional-requirements)
   - [User Management](#user-management)
   - [Vocabulary Lessons](#vocabulary-lessons)
   - [Speech Lessons](#speech-lessons)
   - [Pronunciation Lessons](#pronunciation-lessons)
   - [Practice Tests](#practice-tests)
   - [Test Reports](#test-reports)
   - [Learning Path](#learning-path)
4. [Workflows](#workflows)
   - [Role-Based Login](#role-based-login)
   - [User Dashboard](#user-dashboard)

---

## 1. Introduction

### 1.1 Purpose
The Soft Skill Enhancement AI Application is designed to help new recruits improve their English communication skills. By offering vocabulary, speech, and pronunciation lessons, the app aims to enhance recruits’ language skills through interactive lessons and tests, with progress tracked via customized learning paths to support employee growth.

### 1.2 Scope
The application includes:
- **Vocabulary Lessons:** Interactive lessons for vocabulary building.
- **Speech Lessons:** Modules for improving speaking skills.
- **Pronunciation Lessons:** Exercises to enhance pronunciation.
- **Practice Tests:** Regular assessments to track learning.
- **Test Reports:** Detailed analysis of test performance.
- **Learning Path:** A personalized learning experience based on individual performance.

### 1.3 Goals
- **Enhance Communication Skills:** Improve recruits' vocabulary, speech, and pronunciation.
- **Support HR Development Goals:** Customizable learning paths for employee development.
- **Facilitate Interactive Learning:** Engaging lessons and real-time feedback.

### 1.4 Objectives
- **Skill Enhancement:** Strengthen communication abilities in new hires.
- **Interactive Experience:** Offer an engaging learning journey.
- **Performance Tracking:** Detailed test reports to monitor improvement.
- **HR Integration:** Enable HR to track and support employee progress.

---

## 2. Stakeholders

### 2.1 Primary Stakeholders
- **HR Department:** Monitors and supports employee development.
- **Graduate Engineers:** The primary users of the app.

### 2.2 Secondary Stakeholders
- **Training Department:** Provides content and support.
- **Development Team:** Builds and maintains the app.

---

## 3. Functional Requirements

### 3.1 User Management
- **User Roles:** Admin, HR Manager, Recruiter, Interviewer, Candidate.
- **User Authentication:** Secure, role-based login.
- **User Profiles:** Detailed profiles for each user.

### 3.2 Vocabulary Lessons
- **Interactive Modules:** Lessons with quizzes and flashcards.
- **Difficulty Levels:** Beginner, Intermediate, Advanced.
- **Progress Tracking:** Track vocabulary learning over time.

### 3.3 Speech Lessons
- **Audio Lessons:** Recorded lessons to enhance speaking skills.
- **Speech Recognition:** Practice and get feedback on speech.
- **Interactive Dialogues:** Simulate real-life conversations.

### 3.4 Pronunciation Lessons
- **Phonetic Guides:** Phonetic and pronunciation rules.
- **Practice Exercises:** Interactive pronunciation activities.
- **Feedback Mechanism:** Real-time feedback on accuracy.

### 3.5 Practice Tests
- **Regular Assessments:** Scheduled tests to evaluate progress.
- **Variety of Tests:** Multiple formats like multiple-choice and fill-in-the-blank.
- **Instant Results:** Immediate feedback on performance.

### 3.6 Test Reports
- **Detailed Analysis:** Reports on strengths and areas of improvement.
- **Progress Over Time:** Track performance over time.
- **Recommendations:** Personalized suggestions for improvement.

### 3.7 Learning Path
- **Customized Path:** Individualized based on test results.
- **Milestones:** Specific goals to track progress.
- **Resource Suggestions:** Additional resources for further learning.

---

## 4. Workflows

### 4.1 Role-Based Login
#### Overview
The login system supports role-based access, allowing different functionalities for Admin and User roles.

#### Workflow Steps
1. **Login Screen:**
   - **Username/Email:** Required, email format if applicable.
   - **Password:** Required, minimum 8 characters.
   - **Remember Me:** Optional checkbox for persistent login.
   - **Login:** Authenticates and redirects to the dashboard on success.
   - **Forgot Password:** Redirects to password recovery.
   - **Sign Up:** Redirects to registration screen.
   
2. **Password Recovery Screen:**
   - **Email:** Required; validation sends a password reset email.

3. **Password Reset Screen:**
   - **New Password:** Required, minimum 8 characters.
   - **Confirm Password:** Must match the new password.

4. **Registration Screen:**
   - **Full Name, Email, Password, Confirm Password:** Required fields with validation.
   - **Sign Up:** Creates a new user account on validation success.

### 4.2 User Dashboard

#### 4.2.1 Main Screen
The dashboard provides access to various sections of the app:
- **Navigation Menu:** Links to Vocabulary, Speech, Pronunciation Lessons, Practice Tests, and Test Reports.
- **Quick Access Buttons:** Recently accessed lessons or tests.

#### 4.2.2 Vocabulary Lessons
- **Lesson List, Start Lesson Button, Search Bar, Filter Options.**
- Workflow: Browse, search, and filter lessons, start selected lessons.

#### 4.2.3 Speech Lessons
- **Lesson List, Start Lesson Button, Search Bar, Filter Options.**
- Workflow: Browse, search, and filter lessons, start selected lessons.

#### 4.2.4 Pronunciation Lessons
- **Lesson List, Start Lesson Button, Search Bar, Filter Options.**
- Workflow: Browse, search, and filter lessons, start selected lessons.

#### 4.2.5 Practice Tests
- **Test List, Start Test Button, Search Bar, Filter Options.**
- Workflow: Browse, search, and filter tests, start selected tests.

---

© 2023 Hexaware Technologies Limited. All rights reserved.




Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
