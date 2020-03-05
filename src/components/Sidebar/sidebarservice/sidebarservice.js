import axios from "../../../service/service";
import store from "../../../store/store";
export {getdata}
let getdata = axios({
        url:'prometheus/getJson',
        method:'get',
        changeOrigin: true,
    }).then(res=>{
        store.commit('linkdata',res)
    }).catch(err=>{
        console.log(err)
    })
