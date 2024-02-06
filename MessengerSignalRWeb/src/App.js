import { useEffect, useState } from "react";
import "./App.css";
import ChatApi from "./api/chatApi";
import { useFetching } from "./hooks/useFetching";
import { HubConnectionBuilder } from "@microsoft/signalr";

const hubConnection = new HubConnectionBuilder()
  .withUrl("https://localhost:7263/message")
  .build();
hubConnection.start();
// получение сообщения для определенной группы
hubConnection.on("Receive", (message, user) => {
  console.log(`Пользователь: ${user}`);
  console.log(`Сообщение: ${message}`);
});

// получение общего уведомления
hubConnection.on("Notify", (message) => {
  console.log(`Сообщение: ${message}`);
});

const App = () => {
  const [name, nameChange] = useState("");
  const [message, messageChange] = useState("");
  const [selectedGroup, selectedGroupChange] = useState("");
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

  const join = (n) => {
    selectedGroupChange(n);
    hubConnection.invoke("Enter", name, n);
  };

  const del = (name) => {
    fetchDelete(name);
  };

  const send = () => {
    hubConnection
      .invoke("Send", message, name, selectedGroup)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchGet();
  }, []);

  return (
    <div>
      <div>
        <b>Имя</b>
        <input value={name} onChange={(e) => nameChange(e.target.value)} />
      </div>
      <div>
        <b>Новый чат</b>
        <input
          value={newChat}
          onChange={(e) => newChatChange(e.target.value)}
        />
        <button onClick={add}>Добавить</button>
      </div>
      <div>
        <b>Чаты</b>
        {chats.map((chat, index) => (
          <div key={index}>
            <label>{chat}</label>
            <button onClick={() => join(chat)}>Вступить</button>
            <button onClick={() => del(chat)}>Удалить</button>
          </div>
        ))}
      </div>

      <div>
        <b>{`Чат: ${selectedGroup}`}</b>
        <div>
          <input
            value={message}
            onChange={(e) => messageChange(e.target.value)}
          />
          <button onClick={send}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default App;
