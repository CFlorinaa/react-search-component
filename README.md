## React-search-component

A React Component allowing you to add a search bar — with its functionality encapsulated away from the rest of your code — and utilize it in your React apps.

### Technologies

-React
-HTML
-CSS

### Features

This component creates a search bar that allows the user to customize the search experience.

Takes as input a function called when the user do the search action, a boolean to decide if the search is visible or not, a string value to be displayed in the input text after the search action is done, a function used when there is any change inside the text input, a string for the placeholder's message and a function used to clear the search.

The user can perform the following actions:

click on the search icon and the text input will be displayed
write inside the text input
search after the value from the text input
decide what happens on search
click on the clear icon and come back to the initial state
decide what happens on clear
click outside the text input:
  - the component will remain expended if there is any text input
  - collapse otherwise


Can be used in a toolbar.

### Live Preview

Please see demo 

### Approach

It consists of two main technologies, which were used together to create the custom element with encapsulated functionality that can be reused wherever you like without fear of code collisions.
  - Custom elements: A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface
  - React Hooks: React provides some built-in hooks that are functions which are dealing with the state and lifecycle features of function components. 

The approach for implementing the react component looks something like this:

Created a functional class in which the react component functionality was specified, using the ECMAScript 2015 class syntax.
Use React Hooks like: useState and useEffect to determine the logic when the user introduce something in the text input or if the user click outside the component.
Added methods like onClick, onChange, title as HTML attributes.
Export by default the new custom functional class.

### Usage

run npm install in order to create the package-lock.json and the node_modules.
Use the component like this: <Search/> with the following properties:
  -onClick, 
  -isVisible, 
  -onChange, 
  -placeHolderMessage, 
  -value, 
  -clearFunction, 
  -clearButtonTitle

Usage example:
  const [searchValue, setSearchValue] = useState("");
  const onSearch = (filterValue) => {
    setSearchValue(filterValue);
  }
  const removeSearch = () => {
    setSearchValue('');
  }
  <Search value={searchValue} onClick={onSearch} clearFunction={removeSearch}/>
  
# Getting Started with Create React ExampleSearch

This project was bootstrapped with [Create React ExampleSearch](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
  
### Author

Carbune Florina-Ioana | cflorina1998@gmail.com
