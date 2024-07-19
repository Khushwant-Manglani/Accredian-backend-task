# Referral Form API

## Overview

This project provides a RESTful API for handling referral form data. Users can submit referral information, which is then stored in a MongoDB database. Upon successful submission, a confirmation email is sent to the user using the Google Mail Service API.

## Features

- **RESTful API**: Provides endpoints for submitting referral data.
- **MongoDB Integration**: Stores referral information in a NoSQL database.
- **Email Notification**: Sends a confirmation email upon successful referral submission using Gmail.
- **Validation**: Ensures all required fields are provided and properly formatted.
- **Error Handling**: Handles errors gracefully and provides informative responses.

## Tech Stack

- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **Email Service**: Nodemailer with Gmail

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Khushwant-Manglani/Accredian-backend-task.git
   cd Accredian-backend-task
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add the following variables:**

   ```env
   MONGO_URI=your_mongodb_uri
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   PORT=5000
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will start and listen on the port specified in the `.env` file.

## API Endpoints

- **POST /api/referrals**: Submits a referral. Requires the following fields in the request body:
  - `name`: The name of the referrer.
  - `email`: The email address of the referrer.
  - `referralCode`: The referral code.
  - `message`: A message from the referrer.

## License

This project is under the MIT License.

---
