import { describe, it } from 'node:test';
import assert from 'node:assert';
import { OrderRepositoryImpl } from '../../src/infrastructure/repositories/order.repository.impl';
import { OrderRepository } from '../../src/domain/repositories/order.repository';
import { OrderDatasource } from '../../src/infrastructure/datasources/order.datasource';
import { Order } from '../../src/domain/models/order.model';

class MockOrderDatasource extends OrderDatasource {
  constructor(private customOrders?: Order[]) {
    super();
  }

  async getAll(): Promise<Order[]> {
    if (this.customOrders) {
      return Promise.resolve(this.customOrders);
    }
    return super.getAll();
  }
}

describe('OrderRepositoryImpl (Infrastructure Layer)', () => {
  it('should instantiate successfully as a subclass of OrderRepository', () => {
    const datasource = new OrderDatasource();
    const repository = new OrderRepositoryImpl(datasource);

    assert.ok(repository instanceof OrderRepositoryImpl);
    assert.ok(repository instanceof OrderRepository);
  });

  it('should delegate getAll() to the provided datasource', async () => {
    const customOrders: Order[] = [
      {
        id: 99,
        orderNumber: 'ORD-CUSTOM-99',
        customerName: 'Custom Client',
        total: 99999,
        status: 'DELIVERED',
      },
    ];

    const mockDatasource = new MockOrderDatasource(customOrders);
    const repository = new OrderRepositoryImpl(mockDatasource);

    const result = await repository.getAll();

    assert.strictEqual(result.length, 1);
    assert.deepStrictEqual(result, customOrders);
  });

  it('should return all real datasource orders when using real OrderDatasource', async () => {
    const realDatasource = new OrderDatasource();
    const repository = new OrderRepositoryImpl(realDatasource);

    const result = await repository.getAll();

    assert.strictEqual(result.length, 5);
    assert.strictEqual(result[0]?.orderNumber, 'ORD-2026-001');
  });
});
