import {
    LOADING,
    LOGO_BG,
    NAVBAR_BG,
    SIDEBAR_BG,
    THEME,
    DIRECTION,
    SIDEBAR_POSITION,
    HEADER_POSITION,
    LAYOUT,
    GET_FEATURED_PRODUCT,
    UPDATE_FEATURED_PRODUCT,
    UPDATE_TOPSELL_PRODUCT,
    UPDATE_ONSALE_PRODUCT, SELECT_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART,
    ONE_DETAIL,
    ADD_TO_ORDER_CART,
    ADD_LIST,
    LIST_PRODUCT,
    SELECT_LIST_NAME,
    SHIP_DETAIL,
    GET_ORDER_PRODUCT,
    UPDATE_ALL_PRODUCT,
    ALL_CATEGORY,
    UPDATE_PRICE,
    FIRST_CATEGORIES,
    SECOND_CATEGORIES,
    THIRD_CATEGORIES,
    UPDATE_SEARCH_VALUE_TC,
    UPDATE_SEARCH_VALUE_C,
    PAGE_NUMBER,
    SEARCH_PRODUCT,
    PAGE_PRODUCT,
    UPDATE_SEARCH_VALUE_B,   
    UPDATE_SEARCH_VALUE_CON, 
    SORT_PRODUCT,
    SEARCH_NAV_LIST,
    SEARCHED_NUMBER,
    
} from '../constants/';
import * as api from "../../Api/OrderApi"

let INIT_STATE = {    
    search_nav_list:{"value1":"","value2":""},
    brand: ["Diesel","ADIDAS","NIKE","Lacoste","SONY","CANON","H&M"],
    search_product:[],
    page_product:[],
    search_values:{"category":"0","brand":"","min_price":0,"max_price":4000,"text":"","condition":"new"},
    all_category: [],
    first_categories: [],
    second_categories: [],
    third_categories: [],
    all_product: [],
    featured_products: [],
    topsell_products: [],
    onsale_products:[],
    selected_product:JSON.parse(localStorage.getItem('selected_product')),
    cart:[],
    one_detail:[],
    order_cart:[],
    order_category_list:[{"selectValue":"none","inputValue":"ADD TO LIST"}],
    list_product: [],
    selected_listname: "",
    page_number:1,
    ship_detail: {"shipName":"","shipAddress":"","shipPhone":"","shipPayment":"","shipDeliveryOption":""},
}

function divideCategory(state,payload){
    let all_category = payload
    let total_number= all_category.length
    let first_number = Math.ceil(total_number/3)
    let second_number = first_number
    let third_number = total_number-first_number-second_number
    let first_categories = []
    let second_categories = []
    let third_categories = []
    for (var i=0; i<first_number; i++)
    {
        first_categories.push(all_category[i])
        second_categories.push(all_category[i+first_number])
        if (i<third_number){
            third_categories.push(all_category[i+first_number+second_number])
        }
    }    
    return {
        ...state,
        all_category: payload,
        first_categories: first_categories,
        second_categories: second_categories,
        third_categories: third_categories
    }
}

function searchProduct(state,search_init){
    let search_values = search_init
    let products = state.all_product
    let brand = state.brand
    let all_category = state.all_category
    let tmp_category=[]
    for (var j=0;j<all_category.length;j++)
    {
        if(search_values.category=="0"){
            tmp_category=all_category
            break;
        }
        if(all_category[j].parent==search_values.category)
        {
            tmp_category.push(all_category[j])
        }
    }
    if(tmp_category==[]){
        for(var j=0; j<all_category.length; j++){
            if(search_values.category==all_category[j].id){
                tmp_category.push(all_category[j])
                break;
            }
        }
    }
    let tmp=[]
    for (var i=0; i<products.length;i++)
    {   
        let title=products[i].title
        let description=products[i].description
        let category=products[i].categories[0]
        if((title.includes(search_values.text) || description.includes(search_values.text)) &&(products[i].cost_price > search_values.min_price && products[i].sales_price < search_values.max_price)&&(products[i].brand==search_values.brand||search_values.brand=="")&&(products[i].condition==search_values.condition)) 
        {
            for (var k=0; k<tmp_category.length;k++){
                if (tmp_category[k].id==parseInt(products[i].categories[0]) || tmp_category[k].parent==parseInt(products[i].categories[0])){
                    tmp.push(products[i])                                   
                    break;
                }
            }            
        }
    }
    return tmp
}

function pageProduct(state,searchedProduct){
    var pageNumber = state.page_number
    var pagepro = searchedProduct.slice((pageNumber-1)*10,10)
    return pagepro
}

function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
  }

function bubble_Sort(arr,sort_value){
    var len = arr.length,i, j;  
    for (i=0; i < len; i++){
      for (j=0; j < len-i-1; j++){
        switch(sort_value){
                
            case 1:
                {
                    if (parseInt(arr[j].sales_price) < parseInt(arr[j+1].sales_price)){
                        swap(arr, j, j+1);
                    } 
                    break;
                }
            case 2:
                if (parseInt(arr[j].sales_price) > parseInt(arr[j+1].sales_price)){
                    swap(arr, j, j+1);
                }     
                break;
            case 3:
                {
                    let regtime_a=arr[j].productId
                    let regtime_b=arr[j+1].productId
                    if (parseInt(regtime_a.substring(3)) < parseInt(regtime_b.substring(3))){
                        swap(arr, j, j+1);
                    }
                    break;
                }
            case 4:
                {
                    if (parseInt(arr[j].raty) < parseInt(arr[j+1].raty)){
                        swap(arr, j, j+1);
                    }
                    break;
                }
            default:
            }            
        }
    }  
    return arr;
}

function sort_product(state, payload){
    let tmp = state.search_product
    let tmp_searchProduct = bubble_Sort(tmp,payload)
    let tmp_pageProduct = pageProduct(state, tmp_searchProduct)
    return {
        ...state, page_number:1, search_product: tmp_searchProduct,page_product:tmp_pageProduct
    }    
}

function updateSearchValue_con(state, payload){
    let tmp = state.search_values
    let tmp_search_nav = state.search_nav_list
    tmp_search_nav["value1"] = "condition"
    tmp_search_nav["value2"] = payload.condition
    tmp["condition"] = payload.condition
    
    if (payload.condition==true)
        {tmp["condition"]="new"
        tmp_search_nav["value2"] = "new"}
    else
        {tmp["condition"]="used"
        tmp_search_nav["value2"] = "used"}
    let tmp_searchProduct = searchProduct(state, tmp)
    let tmp_pageProduct = pageProduct(state, tmp_searchProduct)
    return {
        ...state,search_values: tmp, page_number:1, searched_number:tmp_searchProduct.length, search_product: tmp_searchProduct, page_product:tmp_pageProduct, search_nav_list: tmp_search_nav
    }
}

function updateSearchValue_p(state,payload){
    let tmp = state.search_values
    let tmp_search_nav = state.search_nav_list
    tmp["min_price"]=payload[0]
    tmp["max_price"]=payload[1]
    
    tmp_search_nav["value1"] = payload[0]
    tmp_search_nav["value2"] = payload[1]
    let tmp_searchProduct=[]
    tmp_searchProduct=searchProduct(state, tmp)
    let tmp_pageProduct = pageProduct(state, tmp_searchProduct)
    return {
        ...state,search_values: tmp, page_number:1, searched_number:tmp_searchProduct.length, search_product: tmp_searchProduct, page_product:tmp_pageProduct, search_nav_list:tmp_search_nav
    }
}

function updateSearchValue_c(state,payload){
    let tmp=state.search_values
    let tmp_search_nav = state.search_nav_list
    tmp["category"] = payload.category
    tmp_search_nav["value1"] = "General"
    let all_category = state.all_category
    for(var i=0;i<all_category.length;i++){
        if (all_category[i].id==payload.category)
            {tmp_search_nav["value2"] = all_category[i].title
            break;}
    }
    
    let tmp_searchProduct=[]
    tmp_searchProduct=searchProduct(state, tmp)
    let tmp_pageProduct = pageProduct(state, tmp_searchProduct)
    return {
        ...state,search_values: tmp, page_number:1, searched_number:tmp_searchProduct.length, search_product: tmp_searchProduct, page_product:tmp_pageProduct, search_nav_list:tmp_search_nav
    }
}

function updateSearchValue_b(state,payload){
    let tmp=state.search_values
    let tmp_search_nav = state.search_nav_list
    tmp["brand"] = payload.brand
    tmp_search_nav["value1"] = "brand"
    tmp_search_nav["value2"] = payload.brand
    let tmp_searchProduct=[]
    tmp_searchProduct = searchProduct(state, tmp)
    let tmp_pageProduct = pageProduct(state, tmp_searchProduct)
    return {
        ...state,search_values: tmp, page_number:1, searched_number:tmp_searchProduct.length, search_product: tmp_searchProduct, page_product:tmp_pageProduct, search_nav_list:tmp_search_nav
    }
}

function updateSearchValue_tc(state,payload){
    let tmp=state.search_values
    let tmp_search_nav = state.search_nav_list
    tmp["category"]=payload.category
    tmp["text"]=payload.text
    let tmp_searchProduct=[]
    let tmp_pageProduct = []
    if (payload.category=="0" && payload.text=="")
        {tmp_search_nav["value1"] = "All_product"
        tmp_searchProduct=state.all_product}
    else{
        let all_category = state.all_category
        for(var i=0;i<all_category.length;i++){
            if (all_category[i].id==payload.category)
                {tmp_search_nav["value1"] = all_category[i].title
                break;}
        }
        tmp_searchProduct=searchProduct(state, tmp)
    }
        
    tmp_search_nav["value2"] = payload.text    
    
    tmp_pageProduct = pageProduct(state, tmp_searchProduct)

    return {
        ...state,search_values: tmp, page_number:1, searched_number:tmp_searchProduct.length, search_product: tmp_searchProduct, page_product:tmp_pageProduct, search_nav_list:tmp_search_nav
    }
}

function addToOrderCart(state,payload){
    let tmp =[]    
    let orderProduct=state.cart
    let customerEmail=payload.email
    let customerName = payload.surname +' '+payload.name 
    // let orderMilli=Date.now()
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var dbUtc = utc.toString()
    for(let i=0;i<orderProduct.length;i++){
        let element=orderProduct[i]
        let obj={
            userEmail: customerEmail,
            orderId: element.orderId,
            customerName: customerName,
            customerPhone: payload.phone,
            shippingAddress: payload.address,            
            productTitle: element.product.title,
            productShortName: element.product.short_name,
            productImage:element.product.image_urls[0],
            productDescription: element.product.description,
            quantity: element.quantity,                      
            costPrice: element.product.cost_price,
            salesPrice: element.product.sales_price,
            shopName: element.product.shopname,
            orderMilli: dbUtc,
            updateMilli: dbUtc,
            paymentMode: "C",
            paymentStatus:true,
            deliveryStatus: "a",
            review: "ok",
            shopId:element.product.shopId,
            listStatus:element.listStatus,
            productId: element.product.productId
        }
        tmp.push(obj)
    }
    api.addToOrderCart(tmp)

    return {
        ...state, order_cart:tmp, cart:[]
    }
}

function addToCart(state,payload){
    let tmp =  [...state.cart]
    let id = state.selected_product.id
    let now= new Date()
    let nowmili=Date.now()
    let orderId=state.selected_product.id+nowmili.toString()
    let index = tmp.findIndex(x => x.id === id);
    if(index===-1){
        let obj = {
            id: id,
            orderId:orderId,
            product:state.selected_product,
            quantity:payload.quantity,
            listStatus:payload.listStatus,
        }
        tmp.push(obj)
    }else{
        tmp[index].quantity+=payload.quantity
    }
    return {
        ...state, cart: tmp
    }
}

function addToList(state,payload){
    let tmp = [...state.order_category_list]
    for (let i=1;i<tmp.length;i++)
    {   
        if(tmp[i].inputValue==payload.inputValue && tmp[i].selectValue==payload.selectValue.value)
            return {
                ...state, order_category_list: tmp,
            }
    }  
    let tmp_last={"selectValue":payload.selectValue.value,
            "inputValue":payload.inputValue}
    tmp.push(tmp_last)
    return {
        ...state, order_category_list: tmp
    }
}

function addToListProduct(state,payload){
    let tmp = [...state.list_product]
    let index = tmp.findIndex(x => x.product.id === payload.product.id && x.listStatus===payload.listStatus);
    if(index===-1){
        let obj = {           
            "product":payload.product,
            "quantity":payload.quantity,
            "listStatus":payload.listStatus,
            "orderstatus":payload.orderstatus,            
        }
        tmp.push(obj)
    }else{
        tmp[index].quantity+=payload.quantity
    }
    return {
        ...state, list_product:tmp
    }
}

function removeFromCart(state, payload){
    let tmp =  [...state.cart]
    let id = payload
    let index = tmp.findIndex(x=>x.id === id)
    if(index ===-1){
        return state
    }else{
        tmp.splice(index, 1);
    }
    return {
        ...state, cart: tmp
    }
}

function selectProduct(state, payload) {
    localStorage.setItem('selected_product', JSON.stringify(payload));
    return {
        ...state, selected_product: payload
    }
}

function addToShipDetail(state, payload) {
    let tmp = {...state.ship_detail}
    // if (payload.stage=="1")
    // {
    //     tmp.shipName=payload.shipName
    //     tmp.shipAddress= payload.shipAddress
    //     tmp.shipPhone= payload.shipPhone
    // }
    // else if(payload.stage=="2"){
    //     tmp.shipPayment=payload.shipPayment
    // }
    // else{
    //     tmp.shipDeliveryOption=payload.shipDeliveryOption
    // }
    return{
        ...state, ship_detail: tmp
    }
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        
        case UPDATE_ALL_PRODUCT:
            return{
                ...state,
                all_product: action.payload, search_product:action.payload
            }
        case UPDATE_FEATURED_PRODUCT:
            return {
                ...state,
                featured_products: action.payload
            }
        case UPDATE_TOPSELL_PRODUCT:
            return {
                ...state,
                topsell_products: action.payload
            }
        case UPDATE_ONSALE_PRODUCT:
            return {
                ...state,
                onsale_products: action.payload
            }
        case ONE_DETAIL:
            return {
                ...state,
                one_detail: action.payload
            }
        case SELECT_LIST_NAME:
            return {
                ...state,
                selected_listname: action.payload
            }
        case PAGE_NUMBER:
            return {
                ...state,
                page_number: action.payload
            }
        case SEARCHED_NUMBER:
            return{
                ...state,
                searched_number: action.payload
            }
        case ALL_CATEGORY:
            return divideCategory(state, action.payload)
        case ADD_LIST:
            return addToList(state, action.payload)
        case LIST_PRODUCT:
            return addToListProduct(state, action.payload)
        case SELECT_PRODUCT:
            return selectProduct(state, action.payload)
        case ADD_TO_CART:
            return addToCart(state, action.payload)
        case ADD_TO_ORDER_CART:
            return addToOrderCart(state,action.payload)
        case SHIP_DETAIL:
            return addToShipDetail(state,action.payload)
        case REMOVE_FROM_CART:
            return removeFromCart(state, action.payload)
        case UPDATE_SEARCH_VALUE_TC:
            return updateSearchValue_tc(state, action.payload)
        case UPDATE_SEARCH_VALUE_C:
            return updateSearchValue_c(state,action.payload)
        case UPDATE_SEARCH_VALUE_B:
            return updateSearchValue_b(state,action.payload)
        case UPDATE_PRICE:
            return updateSearchValue_p(state,action.payload) 
        case UPDATE_SEARCH_VALUE_CON:
            return updateSearchValue_con(state, action.payload)    
        case SORT_PRODUCT:
            return sort_product(state,action.payload)  
        default:
            return state;
    }
};


