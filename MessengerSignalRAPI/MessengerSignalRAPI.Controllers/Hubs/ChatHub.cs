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
    }
}
