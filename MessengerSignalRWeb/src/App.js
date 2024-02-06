import { useEffect, useState } from "react";
import "./App.css";
import ChatApi from "./api/chatApi";
import { useFetching } from "./hooks/useFetching";

const App = () => {
  const [newChat, newChatChange] = useState("");
  const [chats, chatsChange] = useState([]);

  const getCallback = async () => {
    const response = await ChatApi.getChats();
    chatsChange(response.data);
  };

  const addCallback = async (name) => {
    await ChatApi.addChat(name);
  };

  const deleteCallback = async (name) => {
    await ChatApi.deleteChat(name);
  };

  const [fetchGet] = useFetching(getCallback);
  const [fetchAdd] = useFetching(addCallback);
  const [fetchDelete] = useFetching(deleteCallback);

  const add = () => {
    fetchAdd(newChat);
  };

  const del = (name) => {
    fetchDelete(name);
  };

  useEffect(() => {
    fetchGet();
  }, []);

  return (
    <div>
      <div>
        <input
          value={newChat}
          onChange={(e) => newChatChange(e.target.value)}
        />
        <button onClick={add}>Добавить</button>
      </div>
      {chats.map((chat, index) => (
        <div key={index}>
          <label>{chat}</label>
          <button onClick={() => del(chat)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default App;
