/** #======================================================#
 *  #    Program or program file : AppContext.js
 *  #    Description: List of quest progress
 *  #    Author: Bjarte
 *  #    Co-author: Michaël
 *  #    Date: 8 June 2023
 *  #    Version 1.0
 *  #======================================================#
 * */

import { BASE_URL } from './envFile';
import React from 'react';
import { fetchJSON, postJSON } from './http.js';
/**
 * used to create a app context that can be used in any Component by using useContext hook
 */
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
        try {
            const result = await postJSON(BASE_URL + '/api/register', data);
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
        console.log('getAllUserRewards');
        const result = await fetchJSON(BASE_URL + '/api/gallery', {});
        console.log('result: ', result);
        return result;
    },

    /**
     * @description Get all info about a reward
     */
    async getRewardById(id) {
        console.log('getRewardById');
        const result = await fetchJSON(BASE_URL + '/api/gallery/' + id, {});
        console.log('result: ', result);
    },

    getImageByName(name) {
        const images = [
            {
                name: 'Scream',
                data: require('../assets/images/skrik-high.jpg'),
            },
            {
                name: 'The Girls on the Bridge',
                data: require('../assets/images/damene.jpg'),
            },
        ];
        return images.find((image) => image.id == name)['data'];
    },
});
