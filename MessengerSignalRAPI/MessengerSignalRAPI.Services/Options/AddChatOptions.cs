namespace MessengerSignalRAPI.Services.Options
{
    /// <summary>
    /// Данные для добавления чата
    /// </summary>
    /// <param name="name">Имя чата</param>
    public sealed record class AddChatOptions(string name);
}
