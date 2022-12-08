const burgerState ={
    burger:{salad:1,cheese:1,beef:1},
    menu:{
        salad:10,
        cheese:20,
        beef:55
    },
    total:85
}
export const BurgerReducer = (state=burgerState,action)=>{
    switch(action.type){
        case 'ADD_BREADMID':{
            let{propsBurger,amount}=action;
            //thay doi so luong
            let burgerUpdate={...state.burger};
            if(amount===-1&&state.burger[propsBurger]<1){
                return {...state}
            }
            burgerUpdate[propsBurger]+=amount;
            state.burger=burgerUpdate
            //tongtien
            state.total+=amount*state.menu[propsBurger]
            return {...state}
        }
    }
    return {...state}
}