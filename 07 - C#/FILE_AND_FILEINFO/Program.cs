using System.IO;  // Nao precisa pq ja tem no implicit usings
using static System.Console;

WriteLine("Digite o nome do arquivo: ");
string name = ReadLine();

while(name == null || name == "")
{
    WriteLine("Digite um nome valido: ");
    name = ReadLine();
}

string path = Path.Combine(Environment.CurrentDirectory , $"{name}.txt");

CreateFile(path);

WriteLine("Aperte Enter para finalizar...");
ReadLine();

static void CreateFile(string path)
{

    try
    {
        using (StreamWriter sw = File.CreateText(path))
    {
        sw.WriteLine("Linha 1");
        sw.WriteLine("Linha 2");
        sw.WriteLine("Linha 3");
    }
    }
    catch 
    {
        
        WriteLine("O Nome do arquivo esta invalido!!!");
    }
    
}







