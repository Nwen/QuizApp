using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace testwebapp{
    public class ChatHub: Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
        public async Task SendAnwser(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveAnwser", user, message);
        }
        public async Task SendQuestion(string message)
        {
            await Clients.All.SendAsync("ReceiveQuestion", message);
        }
    }
}