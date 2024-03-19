namespace Clases
{
  public class Persona {

    public string Nombre = "Juan";

    public string Apellido = "Perez";
    public string Correo = "hola@gmail.com";

    public int Edad = 36;

    public string MostrarDatos(){
      return Nombre + Apellido + Correo +  Edad; 
    }

    public string ActualizarDatos(){
      return "Actualizando datos";
    }
    

  }
}
