let cart = []

// 1st step 
// 功能:加入購物車
function addToCart(originalPrice, salePrice, quantity){
  const isValid =
    originalPrice > 0 &&
    salePrice > 0 &&
    quantity > 0 &&
    salePrice <= originalPrice;

  if (!isValid) {
    console.log("輸入資料有誤，請重新輸入");
    return;
  }

  cart.push({originalPrice, salePrice, quantity});
  console.log(`已加入購物車:商品原價 ${originalPrice} 元，售價 ${salePrice} 元，數量 ${quantity}`);
}

// 2nd step
// 運費計算規則
const shippingRules = {
  free:{minAmount:2000, maxAmount:Infinity, fee:0, description:"免運費"},
  standard:{minAmount:1000, maxAmount:1999, fee:60, description:"折扣運費60"},
  basic:{minAmount:0, maxAmount:999, fee:80, description:"基本運費80"}
}

// 功能：運費計算
function calculateTotal(){
  // edge case
  if (cart.length === 0){
    console.log("購物車是空的，請先加入商品");
    return;
  }

  let totalOriginal = 0;
  let totalSale = 0;

  cart.forEach( item => {
    totalOriginal += item.originalPrice * item.quantity;
    totalSale += item.salePrice * item.quantity;
  });

  const savings = totalOriginal - totalSale;

  //運費判斷
  let shippingFee = 0;
  let shippingDesc = "";

  let rule = null;

  if (totalSale >= shippingRules.free.minAmount && totalSale <= shippingRules.free.maxAmount) {
    rule = shippingRules.free;
  } else if (totalSale >= shippingRules.standard.minAmount && totalSale <= shippingRules.standard.maxAmount) {
    rule = shippingRules.standard;
  } else if (totalSale >= shippingRules.basic.minAmount && totalSale <= shippingRules.basic.maxAmount) {
    rule = shippingRules.basic;
  }

  if (rule !== null) {
    shippingFee = rule.fee;
    
    if (rule.description !== "") {
      shippingDesc = `（${rule.description}）`;
    } else {
      shippingDesc = "";
    }
  }
  
  const finalAmount = totalSale + shippingFee;

  console.log(`購物車原價總計 ${totalOriginal} 元，售價總計 ${totalSale} 元，省下 ${savings} 元，運費 ${shippingFee} 元${shippingDesc}，最終應付 ${finalAmount} 元`);
}

// 3rd step 清空購物車
function clearCart() {
  cart = [];
  console.log("購物車已清空");
}


// --- 測試流程 ---

// 測試第一階段驗證與加入
addToCart(1000, 1000, 2);
addToCart(800, 720, 3);
addToCart(2500, 2000, 1);
addToCart(0, 500, 2);
addToCart(1000, 800, 0);
addToCart(500, 600, 1);

// 測試第二階段計算
calculateTotal();

// 測試第三階段完整流程
clearCart();
addToCart(500, 450, 2);
addToCart(300, 280, 3);
calculateTotal();
clearCart();
calculateTotal();
