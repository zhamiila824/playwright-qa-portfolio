import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { products, users } from '../../fixtures/testData';

test.describe('Shopping cart', () => {
  test('user can add a product to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();

    await inventoryPage.addProductToCart(products.backpack);
    await inventoryPage.expectCartCount(1);
    await inventoryPage.openCart();
    await cartPage.expectProduct(products.backpack);
  });
});
