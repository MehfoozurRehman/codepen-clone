# CodePen Clone

A desktop CodePen-like code editor and live previewer built with React and Electron. This project allows you to write HTML, CSS, and JavaScript code in separate editors and see the live output instantly, similar to the CodePen online editor.

## Features

- **Live Preview:** Instantly see the output of your HTML, CSS, and JavaScript code in a preview pane.
- **Persistent Storage:** Your code is saved in local storage, so you won't lose your work on refresh.
- **Theme Toggle:** Switch between light and dark themes.
- **Resizable Editors:** Collapse or expand each code editor pane.
- **Desktop App:** Runs as a desktop application using Electron.

## Project Structure

```
codepen-clone/
├── public/
│   ├── electron.js         # Electron main process (for desktop app)
│   ├── index.html          # Main HTML file
│   └── ...                 # Static assets
├── src/
│   ├── App.js              # Main React component
│   ├── Editor.js           # Editor component (CodeMirror wrapper)
│   ├── useLocalStorage.js  # Custom hook for local storage
│   ├── electron.js         # Electron entry (for packaging)
│   └── ...                 # Styles and assets
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
├── LICENSE                 # MIT License
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [pnpm](https://pnpm.io/) or npm/yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/codepen-clone.git
   cd codepen-clone
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Running in Development Mode (Web)

```sh
pnpm start
# or
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Running as a Desktop App (Electron)

1. **Build the React app:**
   ```sh
   pnpm run build
   # or
   npm run build
   # or
   yarn build
   ```
2. **Start Electron:**
   ```sh
   npx electron .
   ```

## Usage

- Write HTML, CSS, and JavaScript in their respective editors.
- The output pane updates live as you type.
- Use the toggle switch in the header to change the theme.
- Collapse/expand editors using the button in each editor's title bar.

## Technologies Used

- [React](https://reactjs.org/)
- [Electron](https://www.electronjs.org/)
- [CodeMirror](https://codemirror.net/) (for code editing)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
