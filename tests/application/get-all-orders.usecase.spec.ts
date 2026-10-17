import { describe, it } from 'node:test';
import assert from 'node:assert';
import { GetAllOrdersUseCase } from '../../src/application/usecases/get-all-orders.usecase';
import { OrderRepository } from '../../src/domain/repositories/order.repository';
import { Order } from '../../src/domain/models/order.model';

class MockOrderRepository extends OrderRepository {
  constructor(
    private mockOrders: Order[] = [],
    private shouldFail: boolean = false,
    private errorMessage: string = 'Repository error'
  ) {
    super();
  }

  async getAll(): Promise<Order[]> {
    if (this.shouldFail) {
      throw new Error(this.errorMessage);
    }
    return Promise.resolve(this.mockOrders);
  }
}

describe('GetAllOrdersUseCase (Application Layer)', () => {
  const sampleOrders: Order[] = [
    {
      id: 1,
      orderNumber: 'ORD-2026-001',
      customerName: 'Andres Felipe Saavedra',
      total: 155000,
      status: 'COMPLETED',
    },
    {
      id: 2,
      orderNumber: 'ORD-2026-002',
      customerName: 'Jhon Edward Loaiza',
      total: 320000,
      status: 'PROCESSING',
    },
  ];

  it('should instantiate successfully with an OrderRepository instance', () => {
    const repo = new MockOrderRepository();
    const useCase = new GetAllOrdersUseCase(repo);
    assert.ok(useCase instanceof GetAllOrdersUseCase);
  });

  it('should execute and return the list of orders from the repository', async () => {
    const repo = new MockOrderRepository(sampleOrders);
    const useCase = new GetAllOrdersUseCase(repo);

    const result = await useCase.execute();

    assert.strictEqual(Array.isArray(result), true);
    assert.strictEqual(result.length, 2);
    assert.deepStrictEqual(result, sampleOrders);
  });

  it('should return empty array when repository returns empty array', async () => {
    const repo = new MockOrderRepository([]);
    const useCase = new GetAllOrdersUseCase(repo);

    const result = await useCase.execute();

    assert.strictEqual(Array.isArray(result), true);
    assert.strictEqual(result.length, 0);
  });

  it('should reject when repository throws an error', async () => {
    const repo = new MockOrderRepository([], true, 'Database connection failed');
    const useCase = new GetAllOrdersUseCase(repo);

    await assert.rejects(
      async () => {
        await useCase.execute();
      },
      {
        name: 'Error',
        message: 'Database connection failed',
      }
    );
  });
});
