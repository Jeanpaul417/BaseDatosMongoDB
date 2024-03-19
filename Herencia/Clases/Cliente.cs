namespace Clases
{
  public class Cliente : Persona{

    public string TipoCliente = "VIP";

    public int PuntosCliente = 10;

    public int CalcularPuntos(){
        return PuntosCliente;
    }
  }
}