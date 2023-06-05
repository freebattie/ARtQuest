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
});
