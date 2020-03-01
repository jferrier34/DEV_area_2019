// Configuration for GitHub Application
export const gatekeeperConfig = {
    development: {
      client_id: 'Iv1.4d33de2f61615a98', // your Client ID from GitHub
      redirect_uri: 'http://localhost:4200/authGithub', // authentication url
      gatekeeper: 'http://localhost:9999' // url from gatekeeper
    },
    production: {
      // add your production configuration here
    }
  };
  