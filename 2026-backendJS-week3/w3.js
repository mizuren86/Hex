/***   作業 1 填答區開始   **/

const { act } = require("react");

let obj = {};
obj.productName = "無線藍牙耳機";
obj.price = 1299;
obj.tags = ["3C", "電子產品", "藍芽"];
obj.inStock = true;
console.log(obj);

/***   作業 1 填答區結束   **/

/***   作業 2 填答區開始   **/
let cartItems = ["T-shirt", "牛仔褲", "背包"];
cartItems.push("運動鞋");
console.log(cartItems.length);


/***   作業 2 填答區結束   **/

/***   作業 3 填答區開始   **/
let shoppingCart = [
    {
        user: "Amy",
        totalItem: 2,
        products: ["連帽外套", "運動鞋"],
    }
]
shoppingCart[0].totalItem += 1;
shoppingCart[0].products.push("帽子");
console.log(shoppingCart);


/***   作業 3 填答區結束   **/

/***   作業 4 填答區開始   **/
const productData = {
  success: true,
  products: [
    {
      id: "prod001",
      title: "無線藍牙耳機",
      category: "3C電子",
      origin_price: 2500,
      price: 1980,
      unit: "個",
      description: "高音質藍牙5.0無線耳機",
      imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
      is_enabled: 1,
    },
    {
      id: "prod002",
      title: "機械鍵盤",
      category: "3C電子",
      origin_price: 3500,
      price: 2800,
      unit: "個",
      description: "青軸機械式鍵盤",
      imageUrl: "https://images.unsplash.com/photo-1595225474674-87563907a212?w=500",
      is_enabled: 1,
    },
    {
      id: "prod003",
      title: "運動背包",
      category: "戶外用品",
      origin_price: 1500,
      price: 1200,
      unit: "個",
      description: "大容量防潑水運動背包",
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      is_enabled: 1,
    },
  ],
};

productData.products[0].title;
productData.products[1].origin_price;
productData.products[2].category;


/***   作業 4 填答區結束   **/

/***   作業 5 填答區開始   **/
let OderData = {
    id: "ORD20240101001",
    customerName: "王小明",
    productName: "無線藍牙耳機",
    quantity: 1,
    deliveryMethod: ["宅配", "超商取貨"]
};


/***   作業 5 填答區結束   **/

/***   作業 6 填答區開始   **/
const annualPromotions = {
    activeyName: "年度大促銷",
    startDate: "2024-01-01",
    endDate: "2024-01-31",
    promotionSchemes: [
        {
            name: "滿額折扣",
            discountAmount: 500,
            minPurchase: 3000,
            isVip: false,
            category: "全館商品",
            usageCount: 1250,
            isActivePeriod: true
        },
        {
            name: "VIP 專屬",
            discountAmount: 1000,
            minPurchase: 5000,
            isVip: true,
            category: "3C商品",
            usageCount: 368,
            isActivePeriod: true
        }
    ]
};



/***   作業 6 填答區結束   **/

/***   作業 7 填答區開始   **/


// /*** 第七題完整資料開始
let cartData = {
	success: true,
	carts: [
		{
			id: "cart001",
			product: {
				id: "prod001",
				title: "無線藍牙耳機",
				origin_price: 2500,
				price: 1980,
			},
			quantity: 2,
		},
		{
			id: "cart002",
			product: {
				id: "prod002",
				title: "機械鍵盤",
				origin_price: 3500,
				price: 2800,
			},
			quantity: 1,
		},
		{
			id: "cart003",
			product: {
				id: "prod003",
				title: "無線滑鼠",
				origin_price: 1200,
				price: 990,
			},
			quantity: 3,
		},
		{
			id: "cart004",
			product: {
				id: "prod004",
				title: "USB-C 充電線",
				origin_price: 500,
				price: 399,
			},
			quantity: 5,
		},
	],
};
// *** 第七題完整資料結束/
let totalCount = 0;
for (let i = 0; i < cartData.carts.length; i++) {
    totalCount += cartData.carts[i].quantity * cartData.carts[i].product.price;
}
console.log(totalCount);

/***   作業 7 填答區結束   **/

/***   作業 8 填答區開始   **/
let storeInfo = {
    storeName: "ABC商城",
    owner: "John",
    products: [
        {
            name: "無線藍牙耳機",
            price: 1299,
        },
        {
            name: "運動手錶",
            price: 1580,
        }
    ]
};

if (storeInfo.products[0].price <= 2000) {
    storeInfo.products[0].price = 2000;
};

if (storeInfo.products[1].price <= 2000) {
    storeInfo.products[1].price = 2000;
};



/***   作業 8 填答區結束   **/

/***   作業 9 填答區開始   **/
// 輕軌車站出入口 JSON data
// 最外層是一個物件，包含 isImage、success、data、id 四個屬性
{
  "isImage": false, // isImage: 布林值（Boolean），標示此資料是否為影像格式。
  "data": // data: 這是一個陣列 (Array)，由中括號 [ ] 包裹，裡面包含多個車站的詳細資訊。
  [ 
    // 每個車站的資訊是一個物件 (Object)，由大括號 { } 包裹
    {
      "seq": 1, // seq: 數字（Number），代表車站的序號。
      "站序": "1", // 站序: 字串（String），代表車站的順序編號。
      "車站代碼": "C1", // 車站代碼: 字串（String），代表車站的唯一識別碼。
      "車站中文站名": "籬仔內", // 車站中文站名: 字串（String），代表車站的中文名稱。
      "車站英文站名": "Lizihnei", // 車站英文站名: 字串（String），代表車站的英文名稱。
      "站位地點": "凱旋四路、一心路及瑞隆路交會路口南側", // 站位地點: 字串（String），代表車站的具體位置描述。
      "備註": "" // 備註: 字串（String），代表對車站的其他補充說明，這裡為空字串表示沒有額外備註。
    },
    {
      "seq": 2,
      "站序": "2",
      "車站代碼": "C2",
      "車站中文站名": "凱旋瑞田",
      "車站英文站名": "Kaisyuan Rueitian",
      "站位地點": "凱旋四路、瑞田街路口",
      "備註": ""
    },
  ],
  "id": "12053fa0-46d6-476e-b9e1-20dfb4c8f5a9", // id: 字串（String），此筆請求的識別碼。
  "success": true // success: 布林值（Boolean），代表 API 請求是否成功。
}




/***   作業 9 填答區結束   **/

/***   作業 10 填答區開始   **/
const shippingRules = {
    // 免運費類型
  freeShipping: {
    minAmount: 2000,
    shippingFee: 0,
    description: "免運"
  },
    // 一般運費類型
  standardShipping: {
    minAmount: 1000,
    maxAmount: 1999,
    shippingFee: 60,
    description: "一般運費"
  },
    // 基本運費類型
  basicShipping: {
    maxAmount: 999,
    shippingFee: 80,
    description: "基本運費"
  }
};



/***   作業 10 填答區結束   **/

