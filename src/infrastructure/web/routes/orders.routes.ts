import { Router } from "express";
import { OrderDatasource } from "../../datasources/order.datasource";
import { OrderRepositoryImpl } from "../../repositories/order.repository.impl";
import { GetAllOrdersUseCase } from "../../../application/usecases/get-all-orders.usecase";
import { OrdersController } from "../controllers/orders.controller";

export class OrdersRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new OrderDatasource();
    const repository = new OrderRepositoryImpl(datasource);
    const getAllOrders = new GetAllOrdersUseCase(repository);
    const controller = new OrdersController(getAllOrders);

    /**
     * @openapi
     * /api/orders:
     *   get:
     *     summary: Obtener listado de órdenes
     *     description: Retorna el listado completo de órdenes de compra registradas en el sistema.
     *     tags:
     *       - Orders
     *     responses:
     *       200:
     *         description: Lista de órdenes obtenida exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Order'
     *       500:
     *         description: Error interno del servidor
     */
    router.get("/", controller.getAllOrders);

    return router;
  }
}
