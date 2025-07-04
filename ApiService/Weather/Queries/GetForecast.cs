namespace ApiService.Weather.Queries;

using MediatR;
using DTO;

public record GetForecastRequest() : IRequest<WeatherForecast[]>;

public class GetForecastRequestHandler() : IRequestHandler<GetForecastRequest, WeatherForecast[]>
{
    private static readonly string[] Summaries =
    [
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    ];

    public Task<WeatherForecast[]> Handle(GetForecastRequest request, CancellationToken token)
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

        return Task.FromResult(forecast);
    }
}