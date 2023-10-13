




export const actiontypeInsta = {
  addInsta: "addinsta",
  selectInsta: "selectInsta",
  deleteInsta: "deleteInsta",
  selectpost: "selectpost",
  addLink:"addLink",
  removeLink:"removeLink",
  addinstadata:"addinstadat",
};
const instainitialvalue={
Plays:0,
Likes:0,
Comments:0,
shares:0,
Reach:0,
tapBack:0,
Exits:0,
Replies:0,
Views:0,

}
export const instaFullInitialState={
    Instagram:{
        id:"",
        Post:[{type:"",
        link:"",
    ...instainitialvalue}]
    }
}
export const instaAccount=[{
    id:-1,
    accountName:"Select Instagram Account",
},

{
    id:1,
    accountName:"Instagram Account1",
},
{
    id:2,
    accountName:"Instagram Account2",
},
{
    id:3,
    accountName:"Instagram Account3",
}
,

]
export const instaReducer=(state,action)=>{
    switch(action.type){
        case actiontypeInsta.addInsta:
            if(state.Instagram.length<instaAccount.length-1){
                return state;
            }
       
    }

}