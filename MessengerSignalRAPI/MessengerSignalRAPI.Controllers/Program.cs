using MessengerSignalRAPI.Controllers.Hubs;
using MessengerSignalRAPI.Services.Abstractions;
using MessengerSignalRAPI.Services.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<IChatService, ChatService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(options =>
    options.WithOrigins("http://localhost:3000") //  Кому можно получать данные с сервера
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowCredentials());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapHub<ChatHub>("/message");

app.MapControllers();


app.Run();
