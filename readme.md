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
git clone https://github.com/sum1t-here/learning-management-system-backend.git
```

2. Move into the directory

```
cd server
```

3. Install dependencies

```
npm i
```

4. Run the server

```
npm run dev
```


## API Reference

### User

##### Register
- Endpoint:
    ```api/v1/user/register```
- Method: POST
- Description: Registers a user
- Request Body:
   - `avatar` (file): avatar of the user
   - User `fullname`, `email`, `password`
- Postman Example:
  - <img width="895" alt="Screenshot 2024-03-24 at 11 59 43 AM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/271e0c5e-67c1-4fe1-a79e-1a0bbefd927b">
  - <img width="911" alt="Screenshot 2024-03-24 at 1 07 31 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/0711f640-1a37-413b-881a-a2453d8c43fb">

##### Login:
- Endpoint:
    ``` api/v1/user/login```
- Method: POST
- Description: Authenticates the user and generates access token
- Request Body: User credentials(`email`, `password`)
- Postman Example:
  - <img width="881" alt="Screenshot 2024-03-24 at 1 10 28 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/1f75acbe-882a-479d-8d97-108276822c87">
  - <img width="881" alt="Screenshot 2024-03-24 at 1 10 57 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/75fe3ebe-f53e-4a5c-8683-2f0e4532b3fa">


##### Logout:
- Endpoint:
    ``` api/v1/user/logout```
- Method: GET
- Description: Logs out the current user
- Postman Example:
  <img width="892" alt="Screenshot 2024-03-24 at 8 25 21 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/f5f92f86-04bf-4bcc-aaf8-7f0e488bbbae">


##### User Details:
- Endpoint:
    ``` api/v1/user/me```
- Method: GET
- Description: Gives the details of the user
- Prerequisite: User must be logged in
- Postman Example:
  - <img width="892" alt="Screenshot 2024-03-24 at 2 58 26 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/5a15d768-5a8b-4924-883d-665b8ee742a4">
  - <img width="892" alt="Screenshot 2024-03-24 at 2 57 51 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/a43cb599-1322-4f3e-96f0-813cf9114546">

##### Forgot Password:
- Endpoint:
    ``` api/v1/user/reset```
- Method: POST
- Description: Send an email with reset token
- Postman Example:
  - <img width="892" alt="Screenshot 2024-03-24 at 7 03 30 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/8ae4922e-5ea4-4859-ba93-b0c6bdff5b3a">
  - <img width="892" alt="Screenshot 2024-03-24 at 7 04 20 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/47deef86-9993-4547-a5f5-55365d06ccba">
  
- Email Sample:
  - ![WhatsApp Image 2024-03-24 at 19 19 09](https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/d14bd561-6e73-45ba-af37-02b94773265b)

##### Reset Password:
- Endpoint:
    ``` api/v1/user/reset/:reset```
- Method: POST
- Description: Resets password of the user
- Request Body: Updated user `password`
- Request Param: Reset token
- Postman Example:
  <img width="892" alt="Screenshot 2024-03-24 at 7 11 25 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/4a9c68cd-b1b3-409f-8e41-209146f09326">


##### Change Password:
- Endpoint:
    ``` api/v1/user/change-password```
- Method: POST
- Description: Resets password of the user
- Prerequisite: User must be logged in
- Postman Example:
<img width="892" alt="Screenshot 2024-03-24 at 7 17 35 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/89fbe4c5-77b3-4826-a29c-148cc51e93e7">

##### Update user:
- Endpoint:
    ``` api/v1/user/update```
- Method: PUT
- Description: Update user `fullname` and `avatar`
- Prerequisite: User must be logged in
- Postman Example:
  <img width="892" alt="Screenshot 2024-03-24 at 7 52 34 PM" src="https://github.com/sum1t-here/learning-management-system-backend/assets/126807055/aa6a3dd0-3d6d-45f6-8b67-ea52374b8fc7">


