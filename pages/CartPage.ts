import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
  }

  async expectProduct(productName: string) {
    await expect(this.cartItems.filter({ hasText: productName })).toHaveCount(1);
  }
}
