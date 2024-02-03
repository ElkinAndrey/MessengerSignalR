namespace MessengerSignalRAPI.Controllers.Dto
{
    /// <summary>
    /// Данные для выхода из чата
    /// </summary>
    /// <param name="userId">Id пользователя</param>
    /// <param name="chatName">Название чата</param>
    public sealed record class LeaveChatDto(Guid userId, string chatName);
}
