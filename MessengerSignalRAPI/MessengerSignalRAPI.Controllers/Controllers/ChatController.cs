using MessengerSignalRAPI.Controllers.Dto;
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
        /// <summary>
        /// �������� ������ �����
        /// </summary>
        [HttpGet("list")]
        public async Task<IActionResult> ViewListChatsAsync()
        {
            return Ok();
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
            return Ok();
        }

        /// <summary>
        /// ������� ���
        /// </summary>
        [HttpDelete("delete")]
        public async Task<IActionResult> DeleteChatAsync(DeleteChatDto request)
        {
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
