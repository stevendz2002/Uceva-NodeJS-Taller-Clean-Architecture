import { describe, it } from 'node:test';
import assert from 'node:assert';
import { Request, Response } from 'express';
import { OrdersController } from '../../src/infrastructure/web/controllers/orders.controller';
import { GetAllOrdersUseCase } from '../../src/application/usecases/get-all-orders.usecase';
import { OrderRepository } from '../../src/domain/repositories/order.repository';
import { Order } from '../../src/domain/models/order.model';
import { CustomError } from '../../src/infrastructure/web/erros/custom.error';

class StubOrderRepository extends OrderRepository {
  constructor(private orders: Order[] = [], private errorToThrow?: Error) {
    super();
  }

  async getAll(): Promise<Order[]> {
    if (this.errorToThrow) {
      return Promise.reject(this.errorToThrow);
    }
    return Promise.resolve(this.orders);
  }
}

function createMockResponse() {
  const res: Partial<Response> & {
    statusCode?: number;
    jsonData?: any;
    statusCalledWith?: number;
  } = {
    statusCode: 200,
    status(code: number) {
      this.statusCalledWith = code;
      this.statusCode = code;
      return this as Response;
    },
    json(data: any) {
      this.jsonData = data;
      return this as Response;
    },
  };
  return res as Response & { statusCode: number; jsonData: any; statusCalledWith: number };
}

describe('OrdersController (Infrastructure / Web Layer)', () => {
  const dummyOrders: Order[] = [
    {
      id: 1,
      orderNumber: 'ORD-2026-001',
      customerName: 'Test Client',
      total: 100000,
      status: 'COMPLETED',
    },
  ];

  it('should instantiate successfully with GetAllOrdersUseCase', () => {
    const repo = new StubOrderRepository();
    const useCase = new GetAllOrdersUseCase(repo);
    const controller = new OrdersController(useCase);

    assert.ok(controller instanceof OrdersController);
    assert.strictEqual(typeof controller.getAllOrders, 'function');
  });

  it('should return 200 and json array of orders on success', async () => {
    const repo = new StubOrderRepository(dummyOrders);
    const useCase = new GetAllOrdersUseCase(repo);
    const controller = new OrdersController(useCase);

    const req = {} as Request;
    const res = createMockResponse();

    controller.getAllOrders(req, res);

    // Wait for the async promise chain in controller to resolve
    await new Promise((resolve) => setTimeout(resolve, 50));

    assert.strictEqual(res.statusCalledWith, 200);
    assert.deepStrictEqual(res.jsonData, dummyOrders);
  });

  it('should handle custom error and return appropriate status code', async () => {
    const customErr = CustomError.badRequest('Invalid request params');
    const repo = new StubOrderRepository([], customErr);
    const useCase = new GetAllOrdersUseCase(repo);
    const controller = new OrdersController(useCase);

    const req = {} as Request;
    const res = createMockResponse();

    controller.getAllOrders(req, res);

    await new Promise((resolve) => setTimeout(resolve, 50));

    assert.strictEqual(res.statusCalledWith, 400);
    assert.deepStrictEqual(res.jsonData, { error: 'Invalid request params' });
  });

  it('should handle unexpected error and return 500 internal server error', async () => {
    const unexpectedErr = new Error('Database down');
    const repo = new StubOrderRepository([], unexpectedErr);
    const useCase = new GetAllOrdersUseCase(repo);
    const controller = new OrdersController(useCase);

    const req = {} as Request;
    const res = createMockResponse();

    controller.getAllOrders(req, res);

    await new Promise((resolve) => setTimeout(resolve, 50));

    assert.strictEqual(res.statusCalledWith, 500);
    assert.deepStrictEqual(res.jsonData, { error: 'Internal Server error' });
  });
});
