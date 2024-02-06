import axios from "axios";
import { defaultURL } from "./apiSettings";

const URL = `${defaultURL}/chat`;

class ChatApi {
  static async getChats() {
    const response = await axios.get(`${URL}/list`);
    return response;
  }

  static async addChat(name) {
    const response = await axios.post(`${URL}/add`, { name: name });
    return response;
  }

  static async deleteChat(name) {
    const response = await axios.delete(`${URL}/delete/${name}`);
    return response;
  }
}

export default ChatApi;
