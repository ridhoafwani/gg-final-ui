# Gigih Final Project Frontend (Simple Tokopedia Play Clone)

Welcome to the Gigih 3.0 Final Project Frontend repository! This project is a simple clone of Tokopedia Play, but with a twist – instead of using livestream, we've integrated YouTube videos as the main source of content. The project is built using the Vite + React stack and utilizes the Chakra UI library for UI components.

## Table of Contents

- [Gigih Final Project Frontend (Simple Tokopedia Play Clone)](#gigih-final-project-frontend-simple-tokopedia-play-clone)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
    - [Required Features](#required-features)
      - [A. Multi-Page Navigation](#a-multi-page-navigation)
      - [B. Video List with Thumbnails](#b-video-list-with-thumbnails)
      - [C. Video Detail Page](#c-video-detail-page)
      - [D. Detailed Video Information](#d-detailed-video-information)
      - [E. Comment Submission](#e-comment-submission)
      - [F. Comment Display](#f-comment-display)
    - [Bonus Features](#bonus-features)
      - [A. User Profile Integration](#a-user-profile-integration)
      - [B. Real-Time Comment Updates](#b-real-time-comment-updates)
      - [C. Search Functionality](#c-search-functionality)
    - [Extra Features](#extra-features)
      - [A. Authentication](#a-authentication)
      - [B. Simple, Responsive, and User-Friendly UI/UX](#b-simple-responsive-and-user-friendly-uiux)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Pages](#pages)
  - [Project Structure](#project-structure)
  - [Deployment](#deployment)
  - [Backend](#backend)

## Introduction

The Gigih 3.0 Final Project Frontend is a part of the Gigih 3.0 series, designed as a demonstration of utilizing YouTube videos for content consumption similar to Tokopedia Play's livestream feature.

## Features

This project includes the following features:

### Required Features

#### A. Multi-Page Navigation

1. **Home Page**: Users can access the home page.
2. **Video Detail Page**: Users can navigate to the video detail page.

#### B. Video List with Thumbnails

- On the **Home Page**, users can view a list of videos, each displayed with a title and thumbnail.

#### C. Video Detail Page

- Users can click on each video on the home page to navigate to a dedicated **Video Detail Page**.

#### D. Detailed Video Information

- On the **Video Detail Page**, users can view:
  - Video title.
  - A list of related products.
  - An embedded YouTube video.
  - A list of comments.
  - A form to submit comments.

#### E. Comment Submission

- Users can provide their comments inputs in the comment submission form:

#### F. Comment Display

- After successfully submitting a comment, users can see their comments displayed in the list of comments section.

### Bonus Features

In addition to the core requirements, the project also includes the following bonus features:

#### A. User Profile Integration

- Users have the ability to see their profile picture and username displayed on the top right corner of the page.

#### B. Real-Time Comment Updates

- Implemented real-time updates for the comment list using WebSockets to ensure instant feedback and interaction.

#### C. Search Functionality

- Added a search feature to allow users to search for specific videos or content, enhancing user experience.

These bonus features enhance the functionality of the application and provide additional convenience and interactivity to users.

### Extra Features

Additionally, the project offers the following extra features:

#### A. Authentication

- Implemented user authentication to provide secure access and personalized experiences for users.

#### B. Simple, Responsive, and User-Friendly UI/UX

- Designed a clean, responsive, and intuitive user interface and experience to ensure easy navigation and usage.

## Tech Stack

This project is built using the following technologies:

- **React**: A popular JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web applications.
- **Chakra UI**: A simple, modular, and accessible component library for React.
- **Socket.io**: A JavaScript library that facilitates real-time, bidirectional communication between web clients and servers, ideal for creating applications requiring instant updates like chat and gaming.
- **Axios**: A promise-based HTTP client for making requests to APIs.
- **React Router**: A library for routing and navigation in React applications.
- **Vercel**: A cloud platform that simplifies deployment and hosting for web applications, providing seamless scalability and performance optimization.

These technologies work together to create a responsive and interactive user interface, facilitate real-time communication, and ensure efficient deployment and hosting.

## Installation

Follow these steps to set up and run the project locally:

1. Clone this repository: `git clone https://github.com/ridhoafwani/gg-final-ui.git`
2. Navigate to the project directory: `cd gg-final-ui`
3. Install dependencies: `npm install`

## Usage

Start the development server using :

```
npm run dev
```

Once the development server is up and running, open your web browser and navigate to `http://localhost:5173` (or the port specified in your configuration) to access the application.

## Pages

- `/` : Home page, displaying a list of videos with title and thumbnails.
- `/video/:id` : Video detail page, showing video details, related products, and comments
- `/signup` : Signup page
- `/signin` : Signin page

## Project Structure

```plaintext
gg-final-ui/
|-- src/
|  |-- components/
|  |-- context/
|  |-- guard/
|  |-- hooks/
|  |-- layouts/
|  |-- pages/
|  |-- app.jsx
|  |-- main.jsx
|-- public/
|-- index.html
```

## Deployment

This project is deployed and accessible at: [https://ggfinalui.ridhoafwani.dev/](https://ggfinalui.ridhoafwani.dev/)

## Backend

The backend for this project is developed separately to provide the necessary server-side functionality. It complements the frontend and enables seamless data exchange and communication.

If you're interested in exploring the backend code and its features, you can find the repository here: [Backend Repository](https://github.com/ridhoafwani/gg-final-api)

Feel free to check out the backend repository to understand how the frontend and backend components work together to create a cohesive application.
