namespace Clases
{
  public class ContadorPalabras{
    public int ContarPalabras(string frase)
    {
      string[] palabras = frase.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
      return palabras.Length;
    }
  }
}