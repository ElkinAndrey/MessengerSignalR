using Microsoft.AspNetCore.SignalR;

namespace MessengerSignalRAPI.Controllers.Hubs
{
    public class ChatHub : Hub
    {
        public async Task Enter(string username, string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            await Clients.Group(groupName).SendAsync("Notify", $"{username} вошел в чат");
        }

        public async Task Send(string message, string userName, string groupName)
        {
            await Clients.Group(groupName).SendAsync("Receive", message, userName);
        }

        public async Task Exit(string username, string groupName)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
            await Clients.Group(groupName).SendAsync("Notify", $"{username} вышел из чата");
        }
    }
}
