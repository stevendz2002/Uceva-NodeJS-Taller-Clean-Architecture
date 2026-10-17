import { Request, Response } from "express";
import { GetAllProvidersUseCase } from "../../../application/usecases/get-all-providers.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con proveedores.
 *
 * @remarks
 * Esta clase pertenece a la **capa más externa** de la aplicación
 * (*Frameworks & Drivers*), y su responsabilidad es:
 *
 * - Recibir solicitudes HTTP
 * - Delegar la lógica al caso de uso correspondiente
 * - Transformar la respuesta del caso de uso en una respuesta HTTP JSON
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No accede directamente a repositorios ni datasources.
 *
 * Depende del caso de uso {@link GetAllProvidersUseCase}.
 */
export class ProvidersController {

  /**
   * Crea una nueva instancia del controlador de proveedores.
   *
   * @param getAllProvidersUseCase - Caso de uso encargado de obtener los proveedores
   */
  constructor(private getAllProvidersUseCase: GetAllProvidersUseCase) {}

  /**
   * Maneja la petición HTTP para obtener proveedores.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
  getAllProviders = (req: Request, res: Response): void => {
    this.getAllProvidersUseCase
      .execute()
      .then((providers) => res.status(200).json(providers))
      .catch((error) => HandleError.error(error, res));
  };
}
