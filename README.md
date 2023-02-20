# DeviApp - Backend

DeviApp, project developed for BCNC Group.

## Demo link:

Access the demo at [here](https://inditex-frontend.vercel.app/)

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [Tests](#tests)
- [Postman](#postman)
- [Deployment](#deployment)
- [Approach](#approach)
- [Credits](#credits)
- [License](#license)

## About The App

`DeviApp - Backend` is a API for the application at BCNC group developed with by Adrián Coll ❤️

The project handles a lists of smartphones and its cart.


## Technologies

I used `NodeJS` with `ExpressJS`, using `ECMSModules`.

For the data managment i've used NoSQL with Mongodb, and `Mongoose` ORM.

## Setup

1. Download or clone the repository
2. Install dependencies:

```bash
# npm
npm run install
# yarn
yarn install
# pnpm
pnpm install
```

3. Clone `.env.template` and rename to `.env`
4. Set the `MONGODB_URI` to you'r mongodb connection.

## Tests

Stack used:

- Jest
- Supertest

How to run tests:

```bash
npm run test
```

## Postman

Take a look to the public API at [postman docs](https://documenter.getpostman.com/view/15939676/2s93CHvvqz).

## Deployment

To deploy the application I have chosen Vercel as usual.

I think Vercel is the best [PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service), for its dynamism and ease of deployment in a matter of seconds.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fadriancoll%2Finditex-back&env=MONGODB_URI&project-name=adriancoll-bcnc-inditext-backend&repository-name=adriancoll-bcnc-inditext-backend)

## Approach

I have used the model view controller [MVC](`https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.html`) to build all the file routing/architecture.

This coupled with the `Mongoose ORM` models to facilitate document manipulation.

## Credits

List of contriubutors:

- [Adrián Coll](adriancoll.dev)

## License

MIT license @ [author](author.com)
