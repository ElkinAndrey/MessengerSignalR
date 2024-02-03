using MessengerSignalRAPI.Services.Abstractions;
using MessengerSignalRAPI.Services.Data;
using MessengerSignalRAPI.Services.Options;

namespace MessengerSignalRAPI.Services.Services
{
    public class ChatService : IChatService
    {
        public async Task AddChatAsync(AddChatOptions options)
        {
            if (!ChatList.Chats.Contains(options.name))
                ChatList.Chats.Add(options.name);
        }

        public async Task DeleteChatAsync(DeleteChatOptions options)
        {
            ChatList.Chats.Remove(options.name);
        }

        public async Task EnterChatAsync(EnterChatOptions options)
        {
            throw new NotImplementedException();
        }

        public async Task LeaveChatAsync(LeaveChatOptions options)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<string>> ViewListChatsAsync()
        {
            return ChatList.Chats;
        }

        public async Task WriteMessageAsync(WriteMessageOptions options)
        {
            throw new NotImplementedException();
        }
    }
}
