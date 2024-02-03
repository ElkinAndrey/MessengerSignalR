namespace MessengerSignalRAPI.Controllers.Dto
{
    /// <summary>
    /// Данные для входа в чат
    /// </summary>
    /// <param name="userId">Id пользователя</param>
    /// <param name="chatName">Название чата</param>
    public sealed record class EnterChatDto(Guid userId, string chatName);
}
