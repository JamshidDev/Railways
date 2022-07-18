const state ={
    adminDetails:null,
    permission:[]
}

const getters = {
    get_adminPermission:(state)=> (key)=>{
        return  state.permission.length>0 ? state.permission.includes(key) : null;
    },
    get_adminDetails(state){
        return state.adminDetails
    }
}

const actions ={
    set_adminPermission(ctx, payload){
        ctx.commit("update_adminPermission", payload)
    },
    set_adminDetails(ctx, payload){
        ctx.commit("update_adminDetails", payload)
    },
    
    
}

const mutations = {
    update_adminPermission(state, item){
        state.permission = item
    },
    update_adminDetails(state, item){
        state.adminDetails = item
    }
}

export default { state, actions, getters, mutations}