/***   作業 1 填答區開始   **/
let a = 4;
let b = 5;
console.log(a > 0); // true
console.log(b > a); // true
console.log(a + b > 1); // true

let c = 5;
let d = 6;
console.log(c == d); // false
console.log(c !== d); // true

let e = 7;
let f = 5;
console.log(f >= e); // false
console.log(f != e); // true
console.log(f == e); // false
/***   作業 1 填答區結束   **/






/***   作業 2 填答區開始   **/
let g = 8;
let h = "8";
console.log(g * h == 88); // false
console.log(g * h == 64); // true
console.log(g * h === 64); // true

let i = "9";
let j = "9";
console.log(i + j == 99); // true
console.log(i + j === "99"); // true
console.log(i + j === 99); // false

var k = 2;
var l = "5";
// 請以文字解釋為什麼
// k * l >= 5 的結果是 true
// 原因是: k * l 的結果是 10，10 大於等於 5，所以結果是 true
// 雖然k是nunmer型別，l是字串型別，但在運算過程中，JavaScript會將l轉換為數字型別，因此k * l的結果是10，而不是NaN。
console.log(k * l >= 5); // true

/***   作業 2 填答區結束   **/




/***   作業 3 填答區開始   **/

// 範例回覆：解答是 
// m 為：
// m 為：
// 原因是

// 情境一
let productStock = 15;
let safeStockLevel = 20;

if (productStock < safeStockLevel) {
    productStock += 30;
}
console.log(productStock); // 45
// 最後 productStock 的值是 45。
// 因為 productStock (15) 小於 safeStockLevel (20)，所以執行 if 區塊，將 productStock 增加 30，變成 45。

// 情境二
let carQuantity = 2;
let hasPromotion = true;

if(hasPromotion){
    carQuantity += 1;
}

console.log(carQuantity);
// 最後 carQuantity 的值是 3。
// 因為 hasPromotion 是 true，所以執行 if 區塊，將 carQuantity 增加 1，變成 3。

/***   作業 3 填答區結束   **/




/***   作業 4 填答區開始   **/
// 請將作業四截圖程式碼都寫在這，並刻意練習
let isVipMember = true;
let jacketPrice = 1200;
let finalPrice = jacketPrice; 

// 如果是 VIP 會員，則享有 20% 的折扣
// 如果不是 VIP 會員，則沒有折扣，價格不變
if (isVipMember) {
    finalPrice = jacketPrice * 0.8; // 計算折扣後的價格
} else {
    finalPrice = jacketPrice; // 沒有折扣，價格不變
}

console.log(`最後需支付 ${finalPrice} 元`);
// 最後需支付 960 元

/***   作業 4 填答區結束   **/





/***   作業 5 填答區開始   **/
// 請將作業五截圖程式碼都寫過來，並附上您的答案
let memberPoints = 50;


// 最後小華只消費了 800 元
// 增加變數 monthlySpending，代表小華本月的消費金額
let monthlySpending = 800;

// 根據 monthlySpending 的值，決定要給小華多少積分
// 本月滿 1000 元，再給 100 點積分
// 未滿 1000 元，只給 20 點積分
if (monthlySpending >= 1000) {
    memberPoints += 100; // 本月滿 1000 元，給 100 點積分
} else {
    memberPoints += 20; // 未滿 1000 元，給 20 點積分
}

console.log(`小華目前有 ${memberPoints} 點積分`); // 小華目前有 70 點積分

/***   作業 5 填答區結束   **/



/***   作業 6 填答區開始   **/
// 範例回覆：解答是
// false
// false
// false
let warehouseStock = 200;
let retailPrice = 300;

console.log(warehouseStock == 200 || retailPrice); // true
console.log(warehouseStock !== 200 || retailPrice !== 300); // false
console.log(warehouseStock == 200 && retailPrice == 300); // true

//是否有折扣資格
// true 
// 原因是:
// 15 * 150 = 2250，2250 大於 2000，所以有折扣資格，結果是 true。


/***   作業 6 填答區結束   **/



/***   作業 7 填答區開始   **/
// 請將作業七截圖程式碼都寫過來，並附上您的答案
let stockLevel = 60;
if(stockLevel >= 10 && stockLevel < 50){
    console.log("庫存偏低");
} else if(stockLevel >= 50 && stockLevel < 100){
    console.log("庫存正常");
} else if(stockLevel >= 100){
    console.log("庫存充足");
}



/***   作業 7 填答區結束   **/






/***   作業 8 填答區開始   **/
// 請將作業八截圖程式碼都寫過來，並附上您的答案
let couponNum = 500
let couponPriceRule = 999;
let amyAmount = 1200;
let amyIsVip = false;

if (amyAmount >= couponPriceRule || amyIsVip === true) {
    console.log("客戶您好，您有符合折價券資格");
    couponNum--;
} else {
    console.log("客戶您好，您沒有符合折價券資格");
}

console.log(`折價券還剩下 ${couponNum} 張`);

/***   作業 8 填答區結束   **/


/***   作業 9 填答區開始   **/
// 請將作業九截圖程式碼都寫過來，並附上您的答案
let mingAmount = 4200;
let cashbackRate = 0;
let cashback = 0;

if (mingAmount < 1000) {
    cashbackRate = 0.01;
} else if (mingAmount >= 1000 && mingAmount < 3000) {
    cashbackRate = 0.03;
} else if (mingAmount >= 3000 && mingAmount < 5000) {
    cashbackRate = 0.05; 
} else if (mingAmount >= 5000) {
    cashbackRate = 0.08
}
cashback = mingAmount * cashbackRate;

console.log(
    `小名本次消費 ${mingAmount} 元，獲得 ${cashback} 元購物金回饋(下次可使用) `
);

/***   作業 9 填答區結束   **/



/***   作業 10 填答區開始   **/
let orderA = "待付款";
let orderB = "待付款";

// approach 1
const statusPriority = {
    "退貨處理中": 3,
    "待出貨": 2,
    "待付款": 1
};

function compareOrderStatus(status1, status2) {
    const priority1 = statusPriority[status1] || 0;
    const priority2 = statusPriority[status2] || 0;

    if (priority1 > priority2) {
        return `${status1} 的優先順序較高`;
    } else if (priority1 < priority2) {
        return `${status2} 的優先順序較高`;
    }   else { 
        return "兩個訂單優先順序相同";
    }
}

console.log(compareOrderStatus(orderA, orderB)); 

// apporach 2
// let orderA = "待出貨";
// let orderB = "待出貨";

// if (orderA === orderB) {
//     console.log("兩個訂單優先順序相同");
// } else {
//     // 當 A 與 B 不同時，開始細分判斷
//     if (orderA === "退貨處理中") {
//         // A 是最高等級，所以不管 B 是什麼，A 都優先
//         console.log("orderA (退貨處理中) 優先順序最高");
//     } else if (orderA === "待出貨") {
//         // A 是中等，如果 B 是待付款，則 A 優先；若 B 是退貨，則 B 優先
//         if (orderB === "待付款") {
//             console.log("orderA (待出貨) 優先於 orderB (待付款)");
//         } else {
//             console.log("orderB (退貨處理中) 優先於 orderA (待出貨)");
//         }
//     } else {
//         // A 是最低等級 (待付款)，所以 B 只要不是待付款，B 就優先
//         console.log(`orderB (${orderB}) 優先順序較高`);
//     }
// }


/***   作業 10 填答區結束   **/