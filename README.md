# PC Builder Project

Welcome to the PC Builder project! This application allows users to explore pre-built PC options for various purposes such as gaming, productivity, content creation, and streaming. Users can also browse and select individual components like RAM, motherboards, CPUs, storage devices, and monitors. Additionally, registered users can build their own custom PCs by selecting components, and we use NextAuth for authentication via Google and GitHub providers.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Browse Pre-Built PCs](#browse-pre-built-pcs)
  - [Explore Component Categories](#explore-component-categories)
  - [Build Your Own PC](#build-your-own-pc)
- [Authentication](#authentication)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you can run this project, ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Afzzal-Mahmud/NextJs-Pc-Builder.git
   cd pc-builder
   > Configure environment variables:
   Create a .env file in the project root and add the following variables:
   
   MONGODB_URI=your-mongodb-connection-uri
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret

   npm run dev
   
## Usage
### Browse Pre-Built PCs
  - Visit the home page to see a list of pre-built PCs categorized by gaming, productivity, content creation, and streaming.
  - Click on a PC to view its details, including name, image, description, availability status, price, rating, category, key features, and reviews.
## Explore Component Categories
  - Navigate to categories to see the RAM, Motherboard, CPU, Storage Device, or Monitor pages and click to see a full list of available components.
  - Click on a component to view its details, including name, image, description, availability status, price, rating, category, key features, and reviews.
## Build Your Own PC
  - To build your own PC, you need to be logged in.
  - Click the "Build Your PC" button to start assembling your custom PC.
  - Select components for each category by clicking the "Add" button next to the desired component.
  - Review your selected components and click "Build PC" to create your custom PC configuration.
## Authentication
  - I used NextAuth for authentication, providing login options via Google and GitHub.
  - Users can register and log in using their Google or GitHub accounts to access additional features like building custom PCs.
    
## Technologies Used
  > Next.js - A React framework for building web applications.

  - NextAuth.js - Authentication library for Next.js applications.
  - MongoDB - A NoSQL database for storing application data.
    
  > Redux Toolkit - State management library for React.

  - Tailwind CSS - A utility-first CSS framework for styling the application.
    

## Project Structure
    - pages: Contains the application's pages and routes.
    - components: Reusable UI components.
    - api: Serverless functions for handling API requests.
    - auth: Authentication related files and configurations.
    - styles: Global styles and Tailwind CSS setup.
    - redux: Redux store setup and slices for managing state.
    - utils: Utility functions and helper modules.
    - public: Static assets like images and fonts.
    - Contributing
    - Contributions to this project are welcome.
## License
> This project is licensed under the MIT License.
