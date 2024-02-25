# Ajuba Shopping Store App

This project was bootstrapped with [Vite | Next Generation Frontend Tooling](https://vitejs.dev/).

Built using:

- Front-end library: React
  - useReducer hook
  - useContext hook
  - react-toastify library
  - react-icons library
  - css modules
  - react portals 

## About Ajuba Shopping Store App

👉 I primarily built this shopping store app in React using two main tools. Firstly, I utilized the useReducer hook for state management. While I generally use useState hook but i recentally learned about useReducer which is more suitable for managing complex states and i really liked it, as it is very simple to use .

👉 To avoid prop drilling — where I pass the same function or data through multiple layers of components like from component to child to grandChild and then finally use the function in grandchild — so to avoid prop drilling  i used the useContext hook . This made the cart items accessible to all components within the app.

👉 For creating modal(where i show the cart items ), I utilized React Portals. This allowed me to render the modal separately from the root div element, providing a cleaner user experience.

👉 Instead of using  alert function, I used  the react-toastify library for displaying alerts. And i really liked this library as it is very simple to use .

👉 For icons, I leveraged the react-icons library, which provided a wide selection to choose from. To manage CSS without naming collisions, I used CSS modules.

👉 I ensured the app's responsiveness by incorporating media queries, making it fully adaptable across various screen sizes.

👉 In terms of data management, I hardcoded product information within a separate product.js file. This file contains an array of products, which I rendered using the map method.

👉 To calculate the total price, I implemented a reducer method, which streamlined the process.

😁 Overall, I thoroughly enjoyed  the process of making this app.And i learned soo many things while making this app .

The  [Live Link](https://ajuba-shopping-store-app.netlify.app/)
 demonstrates various features implemented within the application. 

https://github.com/Anjali-Git-Hub/Ajuba-Shopping-Store/assets/122084921/1b5f8713-096b-4840-9b26-1fe9ee71300d


<hr>

  In the /shopping store app, you can run:

### `npm install`

If you haven't installed dependencies yet, you can do so by navigating to your project directory in the command line and running.

### `npm run dev`

Runs the app in the development mode.\

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`
For running unit tests or integration tests, you would use the test runner configured in your project. 
It could be Jest, Mocha, or any other testing framework.










