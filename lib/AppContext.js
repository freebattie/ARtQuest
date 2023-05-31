export const IP = "192.168.26.96"; //"20.253.246.222"; // change to your ip if running local setup
const BASE_URL = `http://${IP}:${"3090"}`;
import React from "react";
import { deleteJSON, fetchJSON, postJSON, putJSON } from "./http.js";
export const Appcontext = React.createContext({
  async login(data) {
    return await postJSON(BASE_URL + "/api/login", data);
  },

  // POST for creating a new user
  async createUser(data) {
    // TODO: implement this
    
    try {
      
      const result = await postJSON(BASE_URL + "/api/register", data);
      alert(JSON.stringify(data));
      console.log(result);
      return result;
     
    } catch (e) {
      console.log(e)
    } 
    

  },

});
