import { Request, Response } from "express";
import { GetAllCategoriesUseCase } from "../../../application/usecases/get-all-categories.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con categorías.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Frameworks & Drivers**
 * y actúa como un **adaptador HTTP** entre Express
 * y la capa de Application.
 *
 * Su función es:
 * - Recibir y procesar la petición HTTP
 * - Delegar la ejecución al caso de uso correspondiente
 * - Retornar la respuesta estandarizada en formato JSON
 * - Manejar excepciones centralizadamente mediante {@link HandleError}
 *
 * @see {@link GetAllCategoriesUseCase}
 */
export class CategoriesController {

  /**
   * Crea una nueva instancia del controlador de categorías.
   *
   * @param getAllCategoriesUseCase - Caso de uso encargado
   * de obtener el listado de categorías
   */
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  /**
   * Maneja la petición HTTP para obtener la lista de categorías.
   *
   * @remarks
   * Ejecuta el caso de uso {@link GetAllCategoriesUseCase} y devuelve
   * la colección de categorías en formato JSON con código 200.
   *
   * Incluye un retardo artificial (`setTimeout`) con fines
   * demostrativos y de alineación con el comportamiento del backend.
   *
   * Los errores son capturados y procesados por {@link HandleError}.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
  getAllCategories = (req: Request, res: Response): void => {
    setTimeout(() => {
      this.getAllCategoriesUseCase
        .execute()
        .then((categories) => res.status(200).json(categories))
        .catch((error) => HandleError.error(error, res));
    }, 1500);
  };
}
