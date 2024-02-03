namespace MessengerSignalRAPI.Controllers.Dto
{
    /// <summary>
    /// Данные для отправки сообщения
    /// </summary>
    /// <param name="userId">Id пользователя</param>
    /// <param name="message">Сообщение</param>
    /// <param name="chatName">Имя чата</param>
    public sealed record class WriteMessageDto(Guid userId, string message, string chatName);
}
