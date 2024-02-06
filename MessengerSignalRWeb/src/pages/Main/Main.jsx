import React from "react";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import ChatApi from "../../api/chatApi";
import classes from "./Main.module.css";
import Chats from "../../views/Chats/Chats";
import Header from "../../views/Header/Header";
import Footer from "../../views/Footer/Footer";
import Chat from "../../views/Chat/Chat";

const Main = ({ hubConnection }) => {
  const [name, nameChange] = useState("");
  const [message, messageChange] = useState("");
  const [messages, messagesChange] = useState([]);
  const [selectedChat, selectedChatChange] = useState("");
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
    if (selectedChat !== "") {
      hubConnection.invoke("Exit", name, selectedChat);
    }
    hubConnection.invoke("Enter", name, n);
    if (selectedChat !== "") {
      messagesChange([]);
    }
    selectedChatChange(n);
  };

  const del = (name) => {
    fetchDelete(name);
  };

  const send = () => {
    hubConnection
      .invoke("Send", message, name, selectedChat)
      .catch((error) => console.error(error));
  };

  const displayMessage = (m, u = null) => {
    messagesChange([{ message: m, user: u }, ...messages]);
  };

  hubConnection.on("Receive", displayMessage);
  hubConnection.on("Notify", displayMessage);

  useEffect(() => {
    fetchGet();
  }, []);

  return (
    <div className={classes.body}>
      <Chats
        chats={chats}
        selectedChat={selectedChat}
        selectedChatChange={join}
      />

      <div className={classes.chat}>
        <Header name={name} nameChange={nameChange} />
        <div className={classes.content}>
          <Chat messages={messages} selectedChat={selectedChat} />
        </div>
        <Footer message={message} messageChange={messageChange} send={send} />
      </div>
    </div>
  );
};

export default Main;
