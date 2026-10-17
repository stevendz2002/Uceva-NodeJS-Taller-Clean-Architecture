/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       description: Representa una categoría de productos del sistema
 *       required:
 *         - id
 *         - name
 *         - description
 *         - active
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Lácteos
 *         description:
 *           type: string
 *           example: Productos derivados de la leche como quesos, yogures y mantequilla
 *         active:
 *           type: boolean
 *           example: true
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Provider:
 *       type: object
 *       description: Representa un proveedor del sistema
 *       required:
 *         - id
 *         - name
 *         - email
 *         - phone
 *         - city
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Distribuidora Andina S.A.S.
 *         email:
 *           type: string
 *           format: email
 *           example: contacto@distribuidoraandina.com
 *         phone:
 *           type: string
 *           example: +57 315 789 4512
 *         city:
 *           type: string
 *           example: Cali
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa una orden de compra del sistema
 *       required:
 *         - id
 *         - orderNumber
 *         - customerName
 *         - total
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         orderNumber:
 *           type: string
 *           example: ORD-2026-001
 *         customerName:
 *           type: string
 *           example: Andres Felipe Saavedra
 *         total:
 *           type: number
 *           example: 155000
 *         status:
 *           type: string
 *           enum:
 *             - COMPLETED
 *             - PENDING
 *             - PROCESSING
 *             - DELIVERED
 *             - CANCELLED
 *           example: COMPLETED
 */
export {};
