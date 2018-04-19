import {GHANGE_PAGE , CHANGE_LANG,GOTO_PAGE} from './mutations-type';
import data from '@/api/data.json'

export default{
    CHANGE_PAGE(state,n){
            state.pageIndex+=n;
    },
    GOTO_PAGE(state,n){
        state.pageIndex=n;
    },

    CHANGE_LANG(state,n){
        state.lang=n;
        state.data=data[n];
    }
}