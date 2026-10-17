import { Provider } from "../../domain/models/provider.model";

/**
 * Datasource encargado de proveer proveedores simulados en memoria.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * una **fuente de datos (Datasource)**.
 *
 * Provee datos en memoria con 5 proveedores realistas.
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No implementa repositorios del dominio.
 *
 * Es consumida por `ProviderRepositoryImpl`, que se encarga
 * de adaptar los datos al dominio y exponerlos mediante
 * el contrato `ProviderRepository`.
 */
export class ProviderDatasource {

  private providers: Provider[] = [
    {
      id: 1,
      name: "Distribuidora Andina S.A.S.",
      email: "contacto@distribuidoraandina.com",
      phone: "+57 315 789 4512",
      city: "Cali"
    },
    {
      id: 2,
      name: "Lácteos del Valle Ltda.",
      email: "ventas@lacteosdelvalle.co",
      phone: "+57 310 456 7890",
      city: "Tuluá"
    },
    {
      id: 3,
      name: "Avícola y Carnes Santa Cruz",
      email: "pedidos@carnessantacruz.com",
      phone: "+57 320 654 9871",
      city: "Buga"
    },
    {
      id: 4,
      name: "Agrícola San Fernando E.U.",
      email: "comercial@sanfernandoagricola.com",
      phone: "+57 318 234 5678",
      city: "Palmira"
    },
    {
      id: 5,
      name: "Logística y Suministros del Café",
      email: "servicio@suministroscafe.com",
      phone: "+57 312 987 6543",
      city: "Armenia"
    }
  ];

  /**
   * Obtiene la lista de proveedores registrados en memoria.
   *
   * @returns Promesa que resuelve un arreglo de {@link Provider}
   */
  async getAll(): Promise<Provider[]> {
    return Promise.resolve([...this.providers]);
  }
}
