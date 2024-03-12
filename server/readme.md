# Learning Management System - Backend

A Learning Management System (LMS) is a software platform that helps organizations create, manage, and deliver online learning materials and training programs. It facilitates content creation, user management, course administration, assessment, collaboration, and performance tracking.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`

`MONGO_URI`

`JWT_SECRET` \
`JWT_EXPIRY`

`CLOUDINARY_CLOUD_NAME`\
`CLOUDINARY_API_KEY`\
`CLOUDINARY_API_SECRET`

`SMTP_HOST`\
`SMTP_PORT` \
`SMTP_USERNAME`\
`SMTP_PASSWORD` \
`SMTP_FROM_EMAIL`

`RAZORPAY_KEY_ID`\
`RAZORPAY_SECRET`\
`RAZORPAY_PLAN_ID`

`FRONTEND_URL`

`CONTACT_US_EMAIL`

## Run Locally

1. Setup Instruction

```
git clone https://github.com/sum1t-here/LMS.git
```

2. Move into the directory

```
cd server
```

3. Install dependencies

```
npm i bcryptjs cloudinary cookie-parser cors dotenv express jsonwebtoken mongoose multer nodemailer nodemon
```

4. Run the server

```
npm run dev
```
