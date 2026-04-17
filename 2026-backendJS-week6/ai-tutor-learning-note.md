# 關於我時間不足，只好用課金請AI AGENT當家教這檔事

> 第六週作業：電商 API 資料串接練習  
> 學習方式：互動式對話，我寫 → AI 判斷對錯 → 對了才填入檔案

---

## How to Start？

很簡單，進到你的作業資料夾，輸入：

```bash
claude
```

然後下這個 prompt：

```
現在這下面的 homework.js，我要完成它，教我一步步完成，最好是能在這邊互動式，我打對了後你就幫我填入，打錯了就再問我直到我打對。
```

Claude Code 會讀取資料夾內的檔案，直接在本地端執行、驗證你的答案、填入程式碼，省去環境 error 來回貼 code 的時間。

---

## 這是什麼？

這週作業要實作 7 個 fetch 函式，串接電商 API。  
我沒有請 AI 直接幫我寫，而是讓它當家教——**我打答案，它判斷對錯，答對才填入**。  
錯了繼續問直到我答對為止。

---

## 學了什麼

### 任務一：基礎 GET 請求

**getProducts** — 最基本的 fetch 三步驟：

```js
async function getProducts() {
  const response = await fetch(`${BASE_URL}/api/livejs/v1/customer/${API_PATH}/products`);
  const data = await response.json();
  return data.products;
}
```

踩到的坑：
- 忘記 template literal 要用反引號 `` ` `` 而不是單/雙引號
- `response.json` 少了 `await` 和 `()`，變成拿到函式本身而不是資料

---

**getCart** — 回傳整個物件（不是 `data.products`）：

```js
async function getCart() {
  const response = await fetch(`${BASE_URL}/api/livejs/v1/customer/${API_PATH}/carts`);
  const data = await response.json();
  return data; // 回傳 { carts, total, finalTotal }
}
```

踩到的坑：
- 一開始 URL 用了 `/cart`（單數），實際 API 是 `/carts`（複數）

---

**getProductsSafe** — 加上 try-catch 與 `response.ok` 錯誤處理：

```js
async function getProductsSafe() {
  try {
    const response = await fetch(`${BASE_URL}/api/livejs/v1/customer/${API_PATH}/products`);
    const data = await response.json();
    if (response.ok) {
      return { success: true, data: data.products };
    } else {
      return { success: false, error: response.statusText };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
```

踩到的坑：
- `catch` 寫進 `if/else` 裡面，大括號對應出錯
- `data` 在 `if` 裡用了但忘記在上一行宣告

---

### 任務二：POST / PATCH / DELETE

**addToCart** — POST 需要帶 method、headers、body：

```js
async function addToCart(productId, quantity) {
  const response = await fetch(`${BASE_URL}/api/livejs/v1/customer/${API_PATH}/carts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: { productId, quantity } })
  });
  const data = await response.json();
  return data;
}
```

---

**updateCartItem** — PATCH，ID 放在 body 不放在 URL：

```js
async function updateCartItem(cartId, quantity) {
  const response = await fetch(`${BASE_URL}/api/livejs/v1/customer/${API_PATH}/carts`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: { id: cartId, quantity } })
  });
  const data = await response.json();
  return data;
}
```

踩到的坑（這個坑最深）：
- 我以為 PATCH 要在 URL 帶 `/{id}`，查了 swagger 才發現這個 API 的 PATCH 是把 ID 放 body 裡

---

**removeCartItem / clearCart** — DELETE，記得明確指定 method：

```js
// 刪單筆（ID 在 URL）
const response = await fetch(`...carts/${cartId}`, { method: 'DELETE' });

// 清空全部
const response = await fetch(`...carts`, { method: 'DELETE' });
```

踩到的坑：
- fetch 預設是 GET，忘記加 `{ method: 'DELETE' }` 就會靜默送出 GET 請求

---

## 最後測試結果

```
Tests: 15 passed, 15 total
```

---

## 今天花了多少時間

| 項目 | 時間 |
|------|------|
| 開始（fork 專案） | 19:21 |
| 結束（15/15 測試全過） | 21:39 |
| **總計** | **約 2 小時 18 分鐘** |

包含：環境設定、互動式完成 7 個函式、debug URL 路徑錯誤、撰寫學習紀錄。

---

## 這個學習方式的感想

用互動式對話學習的好處是：**每個錯誤都是我自己犯的，所以印象更深**。  
如果直接叫 AI 寫好給我，我大概看一眼就過了，下次還是不會。

比較有趣的幾個瞬間：
- 光是反引號就被問了兩次才答對
- `catch` 大括號放錯位置，自己看半天看不出來
- PATCH URL 格式靠查文件才解決，不是靠猜

---

## HTTP 知識補充（作業附加題）

| 狀態碼 | 意思 |
|--------|------|
| 1xx | 資訊/處理中 |
| 2xx | 成功 |
| 3xx | 重新導向 |
| 4xx | 客戶端錯誤（你的問題） |
| 5xx | 伺服器錯誤（server 的問題） |

| Method | 用途 |
|--------|------|
| GET | 取得資料 |
| POST | 新增資料 |
| PUT | 更新/取代整筆資料 |
| PATCH | 更新部分欄位 |
| DELETE | 刪除資料 |

**RESTful API**：一種基於 HTTP 協定的 API 設計風格，用不同的 HTTP 方法對應不同操作（CRUD），URL 代表資源，方法代表動作。
