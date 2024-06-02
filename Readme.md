# FFmpeg Proof of Concept (FFmpeg-POC)

## Description

This project is a proof of concept demonstrating the integration of FFmpeg with a web application. It includes both backend and frontend components to handle video processing using FFmpeg.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm
- You have installed `bun` (https://bun.sh/)
- You have installed FFmpeg on your system

## FFmpeg Installation

### macOS

1. Open Terminal.
2. Install FFmpeg using Homebrew:
   ```bash
   brew install ffmpeg
   ```
3. Verify the installation:
   ```bash
   ffmpeg -version
   ```

### Linux

```bash
sudo apt update
sudo apt install ffmpeg
```

### Windows

1. Open Terminal.
2. Install FFmpeg using Homebrew:
   ```bash
   scoop install ffmpeg-shared
   ```
3. Verify the installation:
   ```bash
   ffmpeg -version
   ```

## Installation

Follow these steps to get the development environment running:

1. Clone the repository:

   ```bash
   git clone https://github.com/Night3y3/ffmpeg-poc.git
   cd ffmpeg-poc
   ```

2. Navigate to the `frontend` directory and install dependencies:

   ```bash
   cd frontend
   bun install
   ```

3. Navigate to the `backend` directory and install dependencies:
   ```bash
   bun install
   ```

## Usage

To start the application, you need to run both the frontend and backend servers. Follow these steps:

1. Start the backend server:

   ```bash
   bun run start
   ```

2. Start the frontend development server:

   ```bash
   cd ../frontend
   bun run dev
   ```

3. Open your browser and navigate to the provided local server link (usually `http://localhost:8080`).

## File Structure

Here is a brief overview of the project structure:

ffmpeg-poc/
├── backend/
├── index.js
├── multer.js
├── package.json
├─── uploads/
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── index.css
│ │ ├── main.jsx
│ │ └── VideoPlayer.jsx
│ ├── package.json
│ └── vite.config.js
├── .gitignore
└── README.md
