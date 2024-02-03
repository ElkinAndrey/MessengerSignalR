namespace MessengerSignalRAPI.Services.Options
{
    /// <summary>
    /// Данные для удаления чата
    /// </summary>
    /// <param name="name">Имя чата</param>
    public sealed record class DeleteChatOptions(string name);
}
