namespace Clases
{
  public class Contraseña{

    public string EvaluarSeguridad(string contraseña)
    {
      int longitud = contraseña.Length;
      bool tieneMayusculas = contraseña.Any(char.IsUpper);
      bool tieneMinusculas = contraseña.Any(char.IsLower);
      bool tieneNumeros = contraseña.Any(char.IsDigit);
      bool tieneCaracteresEspeciales = contraseña.Any(c => !char.IsLetterOrDigit(c));

      if (longitud >= 0 && longitud <= 10 && !tieneCaracteresEspeciales && !tieneNumeros)
      {
        return "Nivel Bajo";
      }
      else if (longitud >= 0 && longitud <= 12 && !tieneCaracteresEspeciales && !tieneNumeros)
      {
        return "Nivel Medio";
      }
      else if (longitud >= 8 && longitud <= 40 && tieneMayusculas && tieneMinusculas && tieneNumeros && tieneCaracteresEspeciales)
      {
        return "Nivel Alto";
      }
      else
      {
        return "Nivel no definido";
      }
    }
  }
}