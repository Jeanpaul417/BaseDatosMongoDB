namespace Clases
{
    public class Empleado : Persona{

        public string CodigoEmpleado = "S-20";

        public int Salario = 12000;

        public int CalcularSalario(){
            return Salario;
        }
    }
}