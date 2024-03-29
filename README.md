# Password Strength Meter

A tool to check password strength, estimated time to crack it, determine if it has been exposed in a data breach, and check if it is in dictionaries available online

It was build with the help of the following tools:

- [Have I Been Pwned Passwords API v3](https://haveibeenpwned.com/API/v3#PwnedPasswords)
- [CrackStation's Password Cracking Dictionary, Smaller Wordlist (Human Passwords Only)
  ](https://crackstation.net/crackstation-wordlist-password-cracking-dictionary.htm)


In the project directory, you should:

- run `npm i` in both, `client` and `server` directory.
- extract `realhuman_phill.txt` (from [https://crackstation.net/crackstation-wordlist-password-cracking-dictionary.htm](https://crackstation.net/crackstation-wordlist-password-cracking-dictionary.htm)) into `server/public/files` if you want to know if password can be found in dictionary (file exceeds git size limit)

## Backend

### `nodemon ./bin/www`

in `server` folder to start the server on port `3001`.

## Frontend

### `npm start`

in `client` folder runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
