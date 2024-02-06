using MessengerSignalRAPI.Controllers.Dto;
using MessengerSignalRAPI.Services.Abstractions;
using MessengerSignalRAPI.Services.Options;
using Microsoft.AspNetCore.Mvc;

namespace MessengerSignalRAPI.Controllers
{
    /// <summary>
    /// Контроллер для работы с чатами
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
        /// Получить список чатов
        /// </summary>
        [HttpGet("list")]
        public async Task<IActionResult> ViewListChatsAsync()
        {
            var chats = await chatService.ViewListChatsAsync();
            return Ok(chats);
        }

        /// <summary>
        /// Войти в чат
        /// </summary>
        [HttpPut("enter")]
        public async Task<IActionResult> EnterChatAsync(EnterChatDto request)
        {
            return Ok();
        }
        
        /// <summary>
        /// Покинуть чат
        /// </summary>
        [HttpPut("leave")]
        public async Task<IActionResult> LeaveChatAsync(LeaveChatDto request)
        {
            return Ok();
        }

        /// <summary>
        /// Добавить чат
        /// </summary>
        [HttpPost("add")]
        public async Task<IActionResult> AddChatAsync(AddChatDto request)
        {
            await chatService.AddChatAsync(new AddChatOptions(request.name));
            return Ok();
        }

        /// <summary>
        /// Удалить чат
        /// </summary>
        [HttpDelete("delete/{name}")]
        public async Task<IActionResult> DeleteChatAsync(string name)
        {
            await chatService.DeleteChatAsync(new DeleteChatOptions(name));
            return Ok();
        }

        /// <summary>
        /// Написать сообщение в чат
        /// </summary>
        [HttpPost("write")]
        public async Task<IActionResult> WriteMessageAsync(WriteMessageDto request)
        {
            return Ok();
        }
    }
}
