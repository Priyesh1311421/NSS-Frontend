# NSS NSUT Website

This repository contains the code for the official website of the NSS NSUT Cell, hosted on Vercel.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The NSS NSUT website serves as the online presence of the NSS (National Service Scheme) Cell of Netaji Subhas University of Technology (NSUT). The website provides information about the organization, its achievements, and upcoming events. It also includes contact information and links to the NSS NSUT's social media profiles.

## Features

- **Home Page**: Welcomes visitors with an image and a brief introduction.
- **About Us**: Describes the aim and objectives of the NSS NSUT Cell.
- **Achievements**: Showcases the accomplishments of the NSS NSUT Cell with an image carousel.
- **Events**: Displays upcoming events and activities organized by the NSS NSUT.
- **Footer**: Includes links to social media profiles and other relevant information.
- **Responsive Design**: The website is fully responsive and adapts to different screen sizes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Google Sheets**: Used as the backend for storing and managing data.
- **Vercel**: Hosting platform for deploying the website.

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Priyesh1311421/NSS-Frontend.git
   cd NSS-Frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm start
   ```
   The website will be available at `http://localhost:3000`.

4. **Build for Production:**
   ```bash
   npm run build
   ```
   This will create an optimized production build in the `build/` directory.

5. **Deploy:**
   The website is hosted on Vercel. You can deploy the site by connecting the repository to Vercel and pushing your changes.

## Project Structure

```
├── public/
│   ├── assets/          # Images and other static assets
│   └── index.html       # Main HTML file
├── src/
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── App.js           # Main application component
│   └── index.js         # Entry point of the application
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## Contact

If you have any questions, feel free to reach out:

- **Email**: [priyeshchaudhari35@gmail.com](mailto:priyeshchaudhari35@gmail.com)
- **Website**: [nss-nsut-two.vercel.app](https://nss-nsut-two.vercel.app/)
