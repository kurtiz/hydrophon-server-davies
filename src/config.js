/**
 * General configurations and common constants for APIs
 * @module Config
 */

import {cosmiconfig} from "cosmiconfig";

/**
 * Loads the environment file (Looks for it within the project scope)
 * the environment file is not .env but .envrc.json. An example file
 * (".envrc.example.json" which is a copy of it) has been added for reference.
 * Just like the .env file, the .envrc.json file is a JSON file.
 * The .env files are in key-value pair. For every environment variable
 * you want to use, it is recommended you add it to the .envrc.json file
 * and export it as a constant in the config.js (this file)
 * @param {String}
 * @type {PublicExplorer}
 */
const explorer = cosmiconfig('env', {
    searchStrategy: "project"
});

/**
 * asynchronously search for the configuration file
 * @type {CosmiconfigResult}
 */
const env = await explorer.search();

if (!env) {
    console.error('Configuration file not found.');
}

export const serviceAccount = env.config.serviceAccount;