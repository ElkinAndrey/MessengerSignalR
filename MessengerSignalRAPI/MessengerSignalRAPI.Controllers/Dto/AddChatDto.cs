namespace MessengerSignalRAPI.Controllers.Dto
{
    /// <summary>
    /// Данные для добавления чата
    /// </summary>
    /// <param name="name">Имя чата</param>
    public sealed record class AddChatDto(string name);
}
