using Clases;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

/* Actualizo los datos */
app.MapGet("/empleados/", () => {
    Empleado empleados = new Empleado();
    empleados.Apellido = "Monterrey";
    empleados.Nombre = "Mauricio";
    empleados.Correo = "nuevoEmail@gmail.com";
    return $"{empleados.Nombre} {empleados.Apellido} {empleados.Correo}";
});

app.MapGet("/perros/", () => {
    Perro perros = new Perro();
    return perros.Ladrar(); 
});

app.MapGet("/gatos/", () => {
    Gato gato = new Gato();
    return gato.Raza; 
});



app.Run();
