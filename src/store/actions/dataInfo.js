import * as Types from '../action-types'
import {getData} from '../../api/dataInfo'

const starAction={
    async transStar(type,str){
        let result=await getData(type,str);
        console.log(result);
        return {type:Types.TRANSFER_DATA,payload:result,name:str}
    },
    changeIndex(index){
        return {type:Types.CHANGE_INDEX,index:index}
    },
    changeType(type){
        return {type:Types.CHANGE_TYPE,typeItem:type}
    }
};
export default starAction;