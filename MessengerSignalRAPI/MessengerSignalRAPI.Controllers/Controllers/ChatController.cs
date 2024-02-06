using MessengerSignalRAPI.Controllers.Dto;
using MessengerSignalRAPI.Services.Abstractions;
using MessengerSignalRAPI.Services.Options;
using Microsoft.AspNetCore.Mvc;

namespace MessengerSignalRAPI.Controllers
{
    /// <summary>
    /// ���������� ��� ������ � ������
    /// </summary>
    [ApiController]
    [Route("api/chat")]
    public class ChatController : ControllerBase
    {
        private readonly IChatService chatService;

        public ChatController(IChatService chatService)
        {
            this.chatService = chatService;
        }

        /// <summary>
        /// �������� ������ �����
        /// </summary>
        [HttpGet("list")]
        public async Task<IActionResult> ViewListChatsAsync()
        {
            var chats = await chatService.ViewListChatsAsync();
            return Ok(chats);
        }

        /// <summary>
        /// ����� � ���
        /// </summary>
        [HttpPut("enter")]
        public async Task<IActionResult> EnterChatAsync(EnterChatDto request)
        {
            return Ok();
        }
        
        /// <summary>
        /// �������� ���
        /// </summary>
        [HttpPut("leave")]
        public async Task<IActionResult> LeaveChatAsync(LeaveChatDto request)
        {
            return Ok();
        }

        /// <summary>
        /// �������� ���
        /// </summary>
        [HttpPost("add")]
        public async Task<IActionResult> AddChatAsync(AddChatDto request)
        {
            await chatService.AddChatAsync(new AddChatOptions(request.name));
            return Ok();
        }

        /// <summary>
        /// ������� ���
        /// </summary>
        [HttpDelete("delete/{name}")]
        public async Task<IActionResult> DeleteChatAsync(string name)
        {
            await chatService.DeleteChatAsync(new DeleteChatOptions(name));
            return Ok();
        }

        /// <summary>
        /// �������� ��������� � ���
        /// </summary>
        [HttpPost("write")]
        public async Task<IActionResult> WriteMessageAsync(WriteMessageDto request)
        {
            return Ok();
        }
    }
}
