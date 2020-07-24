export const initialState={
    basket:[ 
      { 
        id:"23",
        title:"hello",
        price: 34,
        rating: 4,
        image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"

      }
    ]
};

function reducer(state,action){
  console.log(action);
    switch(action.type){
    case 'ADD_TO_Basket':
        //logic for adding item to basket
      break;
    case 'REMOVE_FROM_BASKET':
        //logic for removing item from basket
      break;
    default:
      return state;
}
}

export default reducer;