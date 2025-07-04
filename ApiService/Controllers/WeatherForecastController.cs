namespace ApiService.Controllers;

using Microsoft.AspNetCore.Mvc;
using MediatR;
using Weather.DTO;
using Weather.Queries;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController(IMediator mediator) : ControllerBase
{
    [HttpGet("")]
    public async Task<ActionResult<WeatherForecast[]>> GetWeatherForecast()
    {
        var result = await mediator.Send(new GetForecastRequest());
        return Ok(result);
    }
}