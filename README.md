# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# South Asian Social App

A modern social media platform for South Asian fans, artists, and communities, built with **React** and **Vite**. This app allows users to post content, interact with artists, and send direct messages, providing a culturally-inspired online space for connection and growth.


## Features
- **User Profiles**
  Each user has a profile page displaying their posts and content. Users can visit other profiles to see more content, and artists/actors can recieve replies from fans.

- **Direct Messaging (DMs)**
  Users can send and receive messages in real time. Accessible via the Navbar and user profiles.

- **Posts & Replies**
  - Regular users can post content and build their platform.
  - Artists and actors can receive replies from fans directly on their posts.

- **Navigation**
  Responsive Navbar and Sidebar for easy navigation across Home, Profile, Live, and DM pages.

- **Responsive Design**
  The app layout adapts seamlessly to descktop, tablet, and mobile devices.

- **Cultural Theme**
  Gradient headers and a South Asian-inspired color palette create a vibrant and welcoming aesthetic.


## Project Structure
src/
|--- assets/ # CSS and images
|--- components/ # Reusable UI components (Navbar, Sidebar, PostCard)
|--- pages/ # Pages like Home, Live, Profile, DM
|--- App.js # Main app component with routing
|--- main.js # React DOM entry point


## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/IllestBrewery4580/South-Asian-Social-App.git
    cd South-Asian-Social-App

2. Install dependencies:
    npm install

3. Run the development server:
    npm run dev

4. Open in your browser:
    The server will provide a local URL (e.g., https://localhost:5173).


Future Plans:
- Artist verification badges
- Media uploads (images, videos)
- Notifications from new messages or posts
- Enhanced search and discover page for artists and fans

