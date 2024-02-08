import React from "react";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import ChatApi from "../../api/chatApi";
import classes from "./Main.module.css";
import Chats from "../../views/Chats/Chats";
import Header from "../../views/Header/Header";
import Footer from "../../views/Footer/Footer";
import Chat from "../../views/Chat/Chat";
import If from "../../views/If/If";

const Main = ({ hubConnection }) => {
  const [name, nameChange] = useState("");
  const [message, messageChange] = useState("");
  const [messages, messagesChange] = useState([]);
  const [selectedChat, selectedChatChange] = useState("");
  const [chats, chatsChange] = useState([]);

  const getCallback = async () => {
    const response = await ChatApi.getChats();
    chatsChange(response.data);
  };

  const deleteCallback = async (name) => {
    await ChatApi.deleteChat(name);
  };

  const [fetchGet] = useFetching(getCallback);
  const [fetchDelete] = useFetching(deleteCallback);

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

  const exit = () => {
    hubConnection.invoke("Exit", name, selectedChat);
    messagesChange([]);
    selectedChatChange("");
  };

  const deleteChat = (name) => {
    chatsChange([...chats.filter((ch) => ch !== name)]);
  };

  const addChat = (name) => {
    chatsChange([...chats, name]);
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
        addChat={addChat}
      />
      <If value={selectedChat !== ""}>
        <div className={classes.chat}>
          <Header
            name={name}
            nameChange={nameChange}
            chatName={selectedChat}
            deleteChat={deleteChat}
            exit={exit}
          />
          <div className={classes.content}>
            <Chat messages={messages} selectedChat={selectedChat} />
          </div>
          <Footer
            message={message}
            messageChange={messageChange}
            send={send}
            name={name}
          />
        </div>
      </If>
    </div>
  );
};

export default Main;
