Register a new user.
This endpoint will allow users to register on the app using email, password, and other necessary information.

Method: POST
Endpoint: /api/auth/register
Request
{
	"emai": "test@test.com",
	"password": "password",
	"name": "Test Name",
	"accountType":"user", // User or Admin
	"country": "Nigeria",
	"countryCode": "+123",
	"state":"Rivers",
	"address":"No. 6 Prince Okey",
	"phoneNumber":"8124566736",
	...etc
}

Response
Success
  {
    "status": 201,
    "message": "User registered successfully",
    data: {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        user: {
          email: "test@test.com",
          name: "Test Name",
          "accountType": "user",
          // ...custom user data
        }
    }
  }

Error
{
	"status": 400, // Any status goes here
	"message": "Your error message",
}
