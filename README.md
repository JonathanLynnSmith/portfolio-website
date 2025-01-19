# portfolio-site
Source code for my personal website, jonathanlynnsmith.com. Showcasing my portfolio, blog, and insights as a Freelance Developer &amp; IT Consultant.

## Dependencies

### Node.js
- The JavaScript runtime needed to run SvelteKit and other project scripts.
- Recommended version: Node 16.x or higher.
- To install, download from [nodejs.org](https://nodejs.org/).

### NPM
- The Node package manager used for installing project dependencies.
- Comes bundled with Node.js.

### Firebase CLI
- Firebase command-line interface for managing and deploying the website.
- Install with npm:

  ```bash
  npm install -g firebase-tools
  ```

## Getting Started

### Setup

Install the npm packages from the `package.json`

```bash
npm install
```

### Running

To run the app:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

To create a production version of your app, run the following:



```bash
npm run build

# or you can preview the production build with 
npm run preview
```


### Deploying

To deploy your website to Firebase Hosting:

1. Install Firebase via `npm`

    ```bash
    npm install -g firebase-tools
    ```

2. Enable Firebase Experimental Hosting

    ```bash
    firebase experiments:enable webframeworks
    ```

3. Log in to Firebase: If you haven’t already, log in to your Firebase account by running:

    ```bash
    firebase login
    ```

4. Initialize Firebase: In the root of your project, run:

    ```bash
    firebase init
    ```

5. This will guide you through the setup process. Make sure to select Firebase Hosting.


6. After initializing, you can deploy your site to Firebase Hosting with:

    ```bash
    firebase deploy
    ```
    - This will upload the built app to Firebase and provide you with a URL to access the site.
    - Configuration for this deployment can be found in the `firebase.json` file.

