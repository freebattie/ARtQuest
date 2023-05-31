export const IP = "172.20.10.2"; //"20.253.246.222"; // change to your ip if running local setup
const BASE_URL = `http://${IP}:${"3000"}`;
import React from "react";
import { deleteJSON, fetchJSON, postJSON, putJSON } from "./http.js";
export const Appcontext = React.createContext({
  async login(data) {
    return await postJSON(BASE_URL + "/api/login", data);
  },
});
