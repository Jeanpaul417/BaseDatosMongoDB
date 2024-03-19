using Clases;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/lo-mejor", () => "Pepe es lo mejor que hay en el mundo mundial es mejor de todos :3");


app.MapGet("/calculadora/suma", () => {
    Calculadora calculadora = new Calculadora();
    return calculadora.Suma(1, 2);
});

app.MapGet("/calculadora/resta", () => {
    Calculadora calculadora = new Calculadora();
    return calculadora.Resta(1, 2);
});

app.MapGet("/calculadora/multi", () => {
    Calculadora calculadora = new Calculadora();
    return calculadora.Multiplicacion(1, 2);
});

app.MapGet("/calculadora/divi", () => {
    Calculadora calculadora = new Calculadora();
    return calculadora.Division(1, 2);
});

app.MapGet("/bienvenido/nombre", () =>
{
  Bienvenido bienvenido = new Bienvenido();
  return bienvenido.Nombre("JUan", "Giraldo");
});

app.MapGet("/contarpalabras/frase", () =>
{
  ContadorPalabras contarpalabras = new ContadorPalabras();
  return contarpalabras.ContarPalabras("Hoy es un día muy frío");
});

app.MapGet("/contraseña/nueva", () => 
{ 
  Contraseña contra = new Contraseña();
  return contra.EvaluarSeguridad("holamund345@");
});




app.Run();