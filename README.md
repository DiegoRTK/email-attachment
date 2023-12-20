# Email JSON Extract Data Service

This Node.js project was developed using [npm](https://www.npmjs.com/) version 10.2.5.

## Installation

1. Clone the repository: [email-attachment](https://github.com/DiegoRTK/email-attachment).
2. Run `npm install` to install project dependencies.

## Development Server

To initiate the development server, execute `npm run dev`. The service will be exposed at http://localhost:__PORT__/ (Default PORT is 3000). Live reloading is active due to the use of [Nodemon](https://www.npmjs.com/package/nodemon).

## Production Server

To run the production server, execute `npm start`. The service will be exposed at http://localhost:__PORT__/ (Default PORT is 3000).

## Usage

To utilize this project, follow these steps:
- Download an email following this [Google guide](https://support.google.com/mail/answer/9261412?hl=en).
- Attach the EML file using form-data. If you are using a Developer's Platform API like Postman, navigate to Body, then click on the "form-data" radio button. For the key, set it as "email" and upload your EML file.
- Once everything is set up, you can use __CUSTOM_URL__/email/upload. For example, http://localhost:3000/email/upload.
- Configure a POST request.
- No authentication headers are needed.
- Send the request, and you will receive a JSON with all extracted and formatted data.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## Acknowledgments

Special thanks to [Designli] for the opportunity to complete this exercise and for providing all the requirements needed.
