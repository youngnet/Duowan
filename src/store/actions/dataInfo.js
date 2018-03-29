import * as Types from '../action-types'
import {getData} from '../../api/dataInfo'

const starAction={
    async transStar(type,str){
        return {type:Types.TRANSFER_DATA,payload:await getData(type,str)}
    }
};
export default starAction;