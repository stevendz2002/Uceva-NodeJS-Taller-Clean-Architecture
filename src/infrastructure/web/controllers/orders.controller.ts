import { Request, Response } from "express";
import { GetAllOrdersUseCase } from "../../../application/usecases/get-all-orders.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con órdenes.
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
 * Depende del caso de uso {@link GetAllOrdersUseCase}.
 */
export class OrdersController {

  /**
   * Crea una nueva instancia del controlador de órdenes.
   *
   * @param getAllOrdersUseCase - Caso de uso encargado de obtener las órdenes
   */
  constructor(private getAllOrdersUseCase: GetAllOrdersUseCase) {}

  /**
   * Maneja la petición HTTP para obtener órdenes.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
  getAllOrders = (req: Request, res: Response): void => {
    this.getAllOrdersUseCase
      .execute()
      .then((orders) => res.status(200).json(orders))
      .catch((error) => HandleError.error(error, res));
  };
}
