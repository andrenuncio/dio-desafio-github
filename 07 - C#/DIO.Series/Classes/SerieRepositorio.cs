using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DIO.Series.Interfaces;

namespace DIO.Series
{
    public class SerieRepositorio : Irepositorio<Serie>
    {
        private List<Serie> listaSerie = new List<Serie>();
		public void Atualiza(int id, Serie objeto)
		{
			listaSerie[id] = objeto;
		}

		public void Exclui(int id)
		{
			listaSerie[id].Excluir();
		}

		public void Insere(Serie objeto)
		{
			listaSerie.Add(objeto);
		}

		public List<Serie> Lista()
		{
			return listaSerie;
		}

		public int ProximoId()
		{
			return listaSerie.Count;
		}

		public Serie RetornaPorId(int id)
		{
            if(id >= listaSerie.Count){
                throw new IndexOutOfRangeException("Indice Inexistente");
            }
			return listaSerie[id];
		}
    }
}