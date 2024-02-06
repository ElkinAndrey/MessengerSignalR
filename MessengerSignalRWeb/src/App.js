import "./App.css";
import { HubConnectionBuilder } from "@microsoft/signalr";
import Main from "./pages/Main/Main";
const hubConnection = new HubConnectionBuilder()
  .withUrl("https://localhost:7263/message")
  .build();
hubConnection.start();
const App = () => {
  return (
    <div>
      <Main hubConnection={hubConnection} />
    </div>
  );
};

export default App;
