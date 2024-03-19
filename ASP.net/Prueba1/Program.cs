using Clases;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/lo-mejor", () => "Pepe es lo mejor que hay en el mundo mundial es mejor de todos :3");


app.MapGet("calculadora/suma", () => {
    Calculadora calculadora = new Calculadora();
    return calculadora.Suma(1, 2);
});

app.MapGet("calculadora/resta", () => {
    Calculadora calculadora = new Calculadora();
    return calculadora.Resta(1, 2);
});

app.MapGet("calculadora/multi", () => {
    Calculadora calculadora = new Calculadora();
    return calculadora.Multiplicacion(1, 2);
});

app.MapGet("/calculadora/divi", () => {
    Calculadora calculadora = new Calculadora();
    return calculadora.Division(1, 2);
});




app.Run();