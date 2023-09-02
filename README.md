# Thread Web Application Clone - Fullstack Development

Webite Link: [Thread Clone](https://adekeyeadeniyi.github.io/thread-clone)
![Thred-clone Logo](https://github.com/AdekeyeAdeniyi/thread-clone/assets/57262658/eab4d481-51cb-4348-812b-47ae04304894)<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.8333 15C27.8333 22.0877 22.0877 27.8333 15 27.8333C7.91234 27.8333 2.16666 22.0877 2.16666 15C2.16666 7.91234 7.91234 2.16666 15 2.16666C22.0877 2.16666 27.8333 7.91234 27.8333 15ZM30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM23.2759 8.27591C23.2759 9.1329 22.5812 9.82763 21.7242 9.82763C20.8672 9.82763 20.1725 9.1329 20.1725 8.27591C20.1725 7.41891 20.8672 6.72418 21.7242 6.72418C22.5812 6.72418 23.2759 7.41891 23.2759 8.27591ZM15.1642 12.8396L15.3542 10.3423L15.5185 8.18184C14.7802 8.12567 14.0418 8.19007 13.3314 8.36882C12.7443 8.51654 12.1763 8.74235 11.6432 9.04275C10.4649 9.70664 9.51004 10.705 8.89922 11.9116C8.2884 13.1182 8.04909 14.4788 8.21156 15.8214C8.37403 17.164 8.93098 18.4283 9.81197 19.4544C10.693 20.4805 11.8585 21.2222 13.161 21.5859C14.4636 21.9496 15.8448 21.9189 17.1299 21.4976C18.415 21.0763 19.5463 20.2834 20.3808 19.2192C20.7584 18.7376 21.0675 18.2103 21.3023 17.6523C21.5864 16.9774 21.7617 16.2576 21.8179 15.5196L21.818 15.5186L19.6576 15.3543L17.1603 15.1643L14.9999 15L15.1642 12.8396ZM18.9619 17.4743L14.8355 17.1604L12.6751 16.996L12.8395 14.8356L13.1534 10.7092C13.0012 10.7747 12.8521 10.8485 12.7068 10.9304C11.9019 11.3839 11.2496 12.0659 10.8323 12.8902C10.415 13.7145 10.2515 14.644 10.3625 15.5611C10.4735 16.4783 10.854 17.342 11.4558 18.0429C12.0577 18.7439 12.8539 19.2506 13.7437 19.4991C14.6335 19.7475 15.5771 19.7265 16.455 19.4387C17.3329 19.151 18.1057 18.6093 18.6758 17.8823C18.7787 17.751 18.8742 17.6148 18.9619 17.4743Z" fill="url(#paint0_linear_883_4378)"/>
<defs>
<linearGradient id="paint0_linear_883_4378" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
<stop stop-color="#DD7EFF"/>
<stop offset="0.461458" stop-color="#685DFF"/>
<stop offset="1" stop-color="#2152FF"/>
</linearGradient>
</defs>
</svg>

This README provides detailed instructions and information on how to set up and develop a Fullstack Thread Clone Application using the following technologies and libraries:

- [Next.js 13](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [MongoDB](https://www.mongodb.com/docs/v7.0/tutorial/model-embedded-one-to-many-relationships-between-documents/)
- [Uploadthing](https://docs.uploadthing.com/)
- [Shadcn](https://ui.shadcn.com/docs)
- [React Hook Form](https://www.react-hook-form.com/get-started/)
- [Zod](https://zod.dev/)
- [Clerk](https://clerk.com/docs)
- [Svix](https://docs.svix.com/)

## Table of Contents

- [Thread Web Application Clone - Fullstack Development](#thread-web-application-clone---fullstack-development)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction](#1-introduction)
  - [2. Prerequisites](#2-prerequisites)
  - [3. Getting Started](#3-getting-started)
  - [4. Project Structure](#4-project-structure)
  - [5. License](#5-license)

## 1. Introduction

This Fullstack Thread Clone Application is a web-based platform that allows users to create and participate in threaded discussions, similar to popular forum websites. It utilizes modern web development technologies to provide a seamless user experience.

## 2. Prerequisites

Before you begin, ensure you have the following prerequisites installed on your development machine:

- Node.js and npm (Node Package Manager)
- MongoDB (Make sure it's running)
- Git
- A code editor of your choice (e.g., Visual Studio Code)
- API Keys (if needed, e.g., Clerk, Webhook)

## 3. Getting Started

Follow these steps to set up the Thread Clone Application locally:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd thread-clone
   ```

2. Install dependencies
   ```bash
     npm install
   ```
3. Start application
   ```bash
     npm run start
   ```
4. Open your web browser and navigate to http://localhost:4000 to access the application.

## 4. Project Structure

The project is structured into two main architecture: `server` and `client`.

- `server`: Contains the server-side code using Next.js 13, MongoDB, and other server-side technologies.

- `client`: Contains the client-side code using React, Tailwind CSS, and other front-end technologies.

Please refer to directory for more information on their specific structure and functionality.

## 5. License

This project is licensed under the MIT License. See the LICENSE file for details.
npm install --save-exact --save react react-dom next typescript @types/react @types/node @types/react-dom tailwindcss postcss autoprefixer
