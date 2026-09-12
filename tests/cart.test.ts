import { CartService } from '../src/cartService';

describe('CartService Checkout', () => {
  it('should correctly process checkout with a 20% discount', () => {
    const service = new CartService();
    
    // A $100 cart with a 20% discount should produce a final total of $80.
    const finalTotal = service.processCheckout(100, 20);
    
    expect(finalTotal).toBe(80);
  });
});
