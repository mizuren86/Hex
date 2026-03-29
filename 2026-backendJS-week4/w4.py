# 購物車資料儲存
cart = []

# 運費規則設定
shipping_rules = {
    "free": {"min": 2000, "max": float('inf'), "fee": 0, "desc": "（免運）"},
    "standard": {"min": 1000, "max": 1999, "fee": 60, "desc": ""},
    "basic": {"min": 0, "max": 999, "fee": 80, "desc": ""}
}

def add_to_cart(original_price, sale_price, quantity):
    """第一階段：加入購物車並驗證"""
    is_valid = (
        original_price > 0 and 
        sale_price > 0 and 
        quantity > 0 and 
        isinstance(quantity, int) and 
        sale_price <= original_price
    )
    
    if not is_valid:
        print("輸入資料有誤，請重新輸入")
        return
    
    cart.append({
        "original_price": original_price,
        "sale_price": sale_price,
        "quantity": quantity
    })
    print(f"已加入購物車：商品原價 {original_price} 元，售價 {sale_price} 元，數量 {quantity} 件")

def calculate_total():
    """第二階段：計算總金額與運費"""
    if not cart:
        print("購物車是空的，請先加入商品")
        return

    total_original = sum(item["original_price"] * item["quantity"] for item in cart)
    total_sale = sum(item["sale_price"] * item["quantity"] for item in cart)
    savings = total_original - total_sale

    # 判定運費
    fee = 0
    desc = ""
    for rule in shipping_rules.values():
        if rule["min"] <= total_sale <= rule["max"]:
            fee = rule["fee"]
            desc = rule["desc"]
            break
            
    final_payable = total_sale + fee
    print(f"購物車原價總計 {total_original} 元，售價總計 {total_sale} 元，省下 {savings} 元，運費 {fee} 元{desc}，最終應付 {final_payable} 元")

def clear_cart():
    """第三階段：清空購物車"""
    cart.clear()
    print("購物車已清空")

# --- 測試流程 ---

# 第一階段測試
add_to_cart(1000, 1000, 2)
add_to_cart(800, 720, 3)
add_to_cart(2500, 2000, 1)
add_to_cart(0, 500, 2)
add_to_cart(1000, 800, 0)
add_to_cart(500, 600, 1)

# 第二階段測試
calculate_total()

# 第三階段測試
clear_cart()
add_to_cart(500, 450, 2)
add_to_cart(300, 280, 3)
calculate_total()
clear_cart()
calculate_total()