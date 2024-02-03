namespace MessengerSignalRAPI.Controllers.Dto
{
    /// <summary>
    /// Данные для удаления чата
    /// </summary>
    /// <param name="name">Имя чата</param>
    public sealed record class DeleteChatDto(string name);
}
