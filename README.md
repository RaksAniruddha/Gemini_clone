Here’s a step-by-step explanation of how to fetch data using the native fetch API in a React.js 

1. Set Up State Variables
Use React's useState hook to store the data you fetch, manage the loading state (whether the data is being fetched), and handle errors if the request fails.
2. Use useEffect for Fetching Data
The useEffect hook is used to perform side effects, like fetching data, when the component is first rendered (mounted).
Inside useEffect, you call the fetch API to make a GET request to the desired endpoint (e.g., a cryptocurrency API like CoinGecko).
3. Handle the API Response
fetch returns a Promise. You need to first check if the response is okay (status 200), and then convert the response to JSON format using .json().
If the response is not okay, you can throw an error and handle it accordingly.
4. Store the Data
Once the data is fetched and converted to JSON, update your component’s state with this data using the setState function (from useState).
5. Handle Loading and Errors
Initially, set a loading state to true and change it to false once the data is fetched.
If an error occurs during the fetch request, catch it and store the error in state, so you can display an appropriate message to the user.
6. Render the Data
After the data is fetched and the loading state is turned off, render the data in your component. If there’s an error, you can display an error message instead of the data.
By using this method, you’ll be able to fetch and display dynamic data from an API in your Gemini clone without needing external libraries like Axios.
