# Goal (Romanian language)

# Changelog (Romanian language)
# Milestone 3
Pentru acest milestone am terminat implementarea componentei frontend, am început implementarea componentei backend si am început paper-ul aferent proiectului.

## Updates
Adaugarea paginii pentru cosul de cumparaturi
Implementare mecanism persistenta cos de cumparaturi
Adaugare apeluri catre componenta de backend
Configurarea functiei Lambda ce gestioneaza comenzile plasate
Redactarea primei jumatati ale documentului aferent proiectului.
Crearea unei platforme de comert electronic (eCommerce) precum Amazon.com, eMag etc., folosind o arhitectura serverless. Pentru a respecta aceasta arhitectura, partea de frontend a aplicatiei va fi implementata folosind biblioteca React.js, iar codul va fi distribuit catre clienti folosind un Content Delivery Network si va rula in broswer-ul acestora. Pentru a obtine cotinut de la partea de backend a aplicatiei, componenta de frontend va comunica cu cea de backend intr-un mod RESTful. Logica componentei de backend va fi executata folosind serivicul serverless AWS Lambda, ce va fi expus catre componenta frontend folosind un serviciu de tip API Gateway. Ca surse de date ale aplicatiei, vom folosi o baza de date NoSQL, precum AWS DynamoDB, pentru a stoca datele despre produsele disponibile pe platforma; si un serviciu de stocare Cloud, precum AWS Simple Storage Service (S3), pentru a stoca asset-urile statice ale platformei (fisiere CSS, imagini, fisiere JS etc).

# Milestone 2
Pentru acest milestone am pregatit componenta frontend a aplicatiei folosind React si biblioteca Material UI.

ADAUGARI:
- Creare aplicatie folosind create-react-app
- Instalare React Router pentru a putea naviga paginile aplicatiei
- Bara de navigatie interactiva pe paginile aplicatiei.
- Pagina principala a aplicatiei.
- Pagina de "Suport clienti" a aplicatiei, unde clientii pot trimite un formular.
- Categorii produse in bara de navigatie.
- Pagina template pentru generarea paginii fiecarei categorii de produse.
- Fisier de date in format JSON ce contine produsele disponibile. (Acest fisier va fi inlocuit cu un serviciu de baze de date in viitor).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
