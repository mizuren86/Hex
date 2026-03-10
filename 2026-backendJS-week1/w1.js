
// presonal Git is "https://github.com/mizuren86/Hex.git"
/***   作業 1 填答區開始   **/
const earphoneName = "無線藍芽耳機";
const earphonePrice = 1299;
const isOnsale = true;
console.log(earphoneName, earphonePrice, isOnsale)
/***   作業 1 填答區結束   **/


/***   作業 2 填答區開始   **/
const productName = "鍵盤";
const price = 2590; 
const stock = 10;
/***   作業 2 填答區結束   **/


/***   作業 3 填答區開始   **/
const jeansPrice = 2590;
const jeansQuantity = 2;

const hatPrice = 590;
const hatQuantity = 3;

let meiCartTotal = 0;
meiCartTotal = jeansPrice * jeansQuantity + hatPrice * hatQuantity;

console.log(`購物車總金額: ${meiCartTotal} 元`);
/***   作業 3 填答區結束   **/


/***   作業 4 填答區開始   **/
let storeQuantity = 3;
let totalPrice = 5670;
let isUserLoggedIn = true; // 加上 is 前綴
const freeShippingThreshold = 1000;
const maxCartItems = 50;
/***   作業 4 填答區結束   **/


/***   作業 5 填答區開始   **/
let courseTitle = "JavaScript 前端修煉全攻略"
let coursePrice = 2900;
let studentCount = 1548;
let trialPlatform = "Teachable"
/***   作業 5 填答區結束   **/


/***   作業 6 填答區開始   **/
let a = 1; // 宣告一個ａ的變數，並賦予一個1的數字型別
let b = 0; // 宣告一個ｂ的變數，並賦予一個0的數字型別
a = 3; // 將3賦值給a
a = b + 2; // 將b加上2的結果賦值給a, a被重新賦值 = 0+2 = 2 
a - b; // a減去b的結果為2-0=0，但沒有將結果賦值給任何變數，所以a的值仍然是2
b +=1; // 將1加到b上，b的值變為1
/***   作業 6 填答區結束   **/


/***   作業 7 填答區開始   **/
//此題目不用在 codepen 上作答，請同學用小畫家製作記憶體指向圖片，並藉由程式勇者村系統的任務留言介面上傳您的答案圖片即可
// please reference the Attached file

/***   作業 7 填答區結束   **/


/***   作業 8 填答區開始   **/
let tshirtStock = 50;
tshirtStock -= 12;
tshirtStock -= 8;
tshirtStock += 30;

console.log(`T-shirt庫存還有 ${tshirtStock} 件`);
/***   作業 8 填答區結束   **/


/***   作業 9 填答區開始   **/
let amyCarTotal = 0;
const hoodiePrice = 1280;
const hoodieCount = 2; // 宣告數量
let hoodieTotal = hoodiePrice * hoodieCount; // 宣告品項總價

const sportShoesPrice = 2590;
const sportShoesCount = 1;
let sportShoesTotal = sportShoesPrice * sportShoesCount;

amyCarTotal = hoodieTotal + sportShoesTotal;

console.log(`Amy 的購物車總金額: ${amyCarTotal} 元`);
/***   作業 9 填答區結束   **/


/***   作業 10 填答區開始   **/
let g = "hello"; // string
let h = 123; // number
let i = g + h; // string, 因為在 JavaScript 中，當使用加號（+）運算符將字符串和數字相加時，數字會被自動轉換為字符串，然後進行字符串拼接。因此，i 的值將是 "hello123"，這是一個字符串類型的值。
let j = true; // boolean
let k = h + h; // number, 因為 h 是一個數字類型的變數，當將 h 加上 h 時，會得到一個新的數字值，即 123 + 123 = 246。因此，k 的值將是 246，這是一個數字類型的值。
let l = j + k; // number, 因為 j 是一個布林值（boolean），在 JavaScript 中，當將布林值與數字相加時，布林值會被自動轉換為數字，其中 true 轉換為 1，false 轉換為 0。因此，j 的值 true 會被轉換為 1，然後與 k 的值 246 相加，得到的結果是 1 + 246 = 247。因此，l 的值將是 247，這是一個數字類型的值。
/***   作業 10 填答區結束   **/

