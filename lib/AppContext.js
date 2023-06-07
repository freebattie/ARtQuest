import { BASE_URL } from './envFile';
import React from 'react';
import { deleteJSON, fetchJSON, postJSON, putJSON } from './http.js';
export const Appcontext = React.createContext({
    async login(data) {
        console.log(BASE_URL);
        return await postJSON(BASE_URL + '/api/login', data);
    },
    async sendItem(data) {
        return await postJSON(BASE_URL + '/api/quest', data);
    },
    // POST for creating a new user
    async createUser(data) {
        // TODO: implement this

        try {
            const result = await postJSON(BASE_URL + '/api/register', data);
            alert(JSON.stringify(data));
            console.log(result);
            return result;
        } catch (e) {
            console.log(e);
        }
    },
    async getAllQuest() {
        return await fetchJSON(BASE_URL + '/api/quest');
    },
    /**
    * @description Get an array of all rewards the user has collected
    * @returns {Promise<Array>} An array of all rewards the user has collected
    */
    async getAllUserRewards() {
        console.log("getAllUserRewards");
        // WARN: the api is not merged yet. There is a mock response for now;
        // This is what the api call looks like:
        const result = await fetchJSON(BASE_URL + '/api/gallery', {});
        console.log('result: ', result);
        return result;
    },
});
