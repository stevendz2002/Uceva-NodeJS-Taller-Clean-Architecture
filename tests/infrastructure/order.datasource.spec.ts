import { describe, it } from 'node:test';
import assert from 'node:assert';
import { OrderDatasource } from '../../src/infrastructure/datasources/order.datasource';
import { OrderStatus } from '../../src/domain/models/order.model';

describe('OrderDatasource (Infrastructure Layer)', () => {
  const validStatuses: OrderStatus[] = [
    'COMPLETED',
    'PENDING',
    'PROCESSING',
    'DELIVERED',
    'CANCELLED',
  ];

  it('should instantiate successfully', () => {
    const datasource = new OrderDatasource();
    assert.ok(datasource instanceof OrderDatasource);
  });

  it('should return a list of 5 mock orders with getAll()', async () => {
    const datasource = new OrderDatasource();
    const orders = await datasource.getAll();

    assert.strictEqual(Array.isArray(orders), true);
    assert.strictEqual(orders.length, 5);
  });

  it('should verify each order contains valid fields and types', async () => {
    const datasource = new OrderDatasource();
    const orders = await datasource.getAll();

    for (const order of orders) {
      assert.strictEqual(typeof order.id, 'number');
      assert.strictEqual(typeof order.orderNumber, 'string');
      assert.ok(order.orderNumber.startsWith('ORD-'));
      assert.strictEqual(typeof order.customerName, 'string');
      assert.ok(order.customerName.length > 0);
      assert.strictEqual(typeof order.total, 'number');
      assert.ok(order.total >= 0);
      assert.ok(validStatuses.includes(order.status));
    }
  });

  it('should return unique ids and orderNumbers for all orders', async () => {
    const datasource = new OrderDatasource();
    const orders = await datasource.getAll();

    const ids = new Set(orders.map((o) => o.id));
    const orderNumbers = new Set(orders.map((o) => o.orderNumber));

    assert.strictEqual(ids.size, orders.length);
    assert.strictEqual(orderNumbers.size, orders.length);
  });

  it('should return a new array instance on each call to prevent unintended mutations', async () => {
    const datasource = new OrderDatasource();
    const orders1 = await datasource.getAll();
    const originalLength = orders1.length;

    // Mutate the returned array
    orders1.pop();

    const orders2 = await datasource.getAll();
    assert.strictEqual(orders2.length, originalLength);
  });
});
