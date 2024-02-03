using MessengerSignalRAPI.Services.Options;

namespace MessengerSignalRAPI.Services.Abstractions
{
    public interface IChatService
    {
        /// <summary>
        /// Получить список чатов
        /// </summary>
        Task<IEnumerable<string>> ViewListChatsAsync();

        /// <summary>
        /// Войти в чат
        /// </summary>
        Task EnterChatAsync(EnterChatOptions options);

        /// <summary>
        /// Покинуть чат
        /// </summary>
        Task LeaveChatAsync(LeaveChatOptions options);

        /// <summary>
        /// Добавить чат
        /// </summary>
        Task AddChatAsync(AddChatOptions options);

        /// <summary>
        /// Удалить чат
        /// </summary>
        Task DeleteChatAsync(DeleteChatOptions options);

        /// <summary>
        /// Написать сообщение в чат
        /// </summary>
        Task WriteMessageAsync(WriteMessageOptions options);
    }
}
