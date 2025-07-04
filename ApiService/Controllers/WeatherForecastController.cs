using Microsoft.AspNetCore.Mvc;

namespace ApiService.Controllers;

public record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries =
    [
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    ];

    [HttpGet("")]
    public ActionResult<WeatherForecast[]> GetWeatherForecast()
    {
        var rng = new Random();
        var forecast = Enumerable.Range(1, 5).Select(index =>
            new WeatherForecast
            (
                DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                rng.Next(-20, 55),
                Summaries[rng.Next(Summaries.Length)]
            ))
            .ToArray();
        
        return Ok(forecast);
    }
}