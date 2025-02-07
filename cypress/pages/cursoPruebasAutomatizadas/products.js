class Products {
  url = "https://www.saucedemo.com/inventory.html";
  goToSite() {
    cy.visit(this.url);
  }

  verifySite() {
    cy.url().should("eq", this.url);
  }

  clickReactBurgerMenuBtn() {
    cy.get("button[id='react-burger-menu-btn']").click();
  }

  clickInventorySidebarLink() {
    cy.get("a[id='inventory_sidebar_link']").click();
  }

  clickAboutSidebarLink() {
    cy.get("a[id='about_sidebar_link']").click();
  }

  clickLogoutSidebarLink() {
    cy.get("a[id='logout_sidebar_link']").click();
  }

  clickResetSidebarLink() {
    cy.get("a[id='reset_sidebar_link']").click();
  }

  clickReactBurgerCrossBtn() {
    cy.get("button[id='react-burger-cross-btn']").click();
  }

  clickItem4ImgLink() {
    cy.get("a[id='item_4_img_link']").click();
  }

  clickItem4TitleLink() {
    cy.get("a[id='item_4_title_link']").click();
  }

  clickAddToCartSauceLabsBackpack() {
    cy.get("button[id='add-to-cart-sauce-labs-backpack']").click();
  }

  clickItem0ImgLink() {
    cy.get("a[id='item_0_img_link']").click();
  }

  clickItem0TitleLink() {
    cy.get("a[id='item_0_title_link']").click();
  }

  clickAddToCartSauceLabsBikeLight() {
    cy.get("button[id='add-to-cart-sauce-labs-bike-light']").click();
  }

  clickItem1ImgLink() {
    cy.get("a[id='item_1_img_link']").click();
  }

  clickItem1TitleLink() {
    cy.get("a[id='item_1_title_link']").click();
  }

  clickAddToCartSauceLabsBoltTShirt() {
    cy.get("button[id='add-to-cart-sauce-labs-bolt-t-shirt']").click();
  }

  clickItem5ImgLink() {
    cy.get("a[id='item_5_img_link']").click();
  }

  clickItem5TitleLink() {
    cy.get("a[id='item_5_title_link']").click();
  }

  clickAddToCartSauceLabsFleeceJacket() {
    cy.get("button[id='add-to-cart-sauce-labs-fleece-jacket']").click();
  }

  clickItem2ImgLink() {
    cy.get("a[id='item_2_img_link']").click();
  }

  clickItem2TitleLink() {
    cy.get("a[id='item_2_title_link']").click();
  }

  clickAddToCartSauceLabsOnesie() {
    cy.get("button[id='add-to-cart-sauce-labs-onesie']").click();
  }

  clickItem3ImgLink() {
    cy.get("a[id='item_3_img_link']").click();
  }

  clickItem3TitleLink() {
    cy.get("a[id='item_3_title_link']").click();
  }

  clickAddToCartTestAllthethingsTShirtRed() {
    cy.get(
      "button[id='add-to-cart-test.allthethings()-t-shirt-(red)']"
    ).click();
  }

  verifyRemoveBackpack(value) {
    cy.get("button[id='add-to-cart-sauce-labs-backpack']").contains(value);
  }
}
export default Products;
