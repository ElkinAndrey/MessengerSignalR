namespace MessengerSignalRAPI.Services.Options
{
    /// <summary>
    /// Данные для входа в чат
    /// </summary>
    /// <param name="userId">Id пользователя</param>
    /// <param name="chatName">Название чата</param>
    public sealed record class EnterChatOptions(Guid userId, string chatName);
}
