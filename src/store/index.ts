// import { createStore } from 'vuex'

// export default createStore({
//     state: {
//         cartList: []
//     },
//     mutations: {
//         toCart(state: any, value: any) {
//             const hasGoods = state.cartList.find((_val: any) => {
//                 return _val.id = value.id
//             })
//             if (hasGoods) {
//                 hasGoods.cartCount += 1;
//             } else {
//                 const item = {
//                     id: value.id,
//                     title: value.info,
//                     cartCount: 1,
//                     imgUrl: value.imgUrl
//                 }
//                 state.cartList.push(item)
//             }
//         }
//     },
//     actions: {},
//     modules: {},
//     getters: {
//         getGoodsNum(_store: any) {
//             let num: Number = 0;
//             _store.cartList.forEach((ele: any, idx: Number) => {
//                 num += ele.cartCount
//             });
//             return num
//         }
//     }
// })