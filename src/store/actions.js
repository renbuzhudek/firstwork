
import {GHANGE_PAGE , CHANGE_LANG,GOTO_PAGE} from './mutations-type';


export default{
            changePage({commit,state},n){
                commit(GHANGE_PAGE,n);
            },
            changeLang({commit,state},n){
                commit(CHANGE_LANG,n);
            },
            gotoPage({commit,state},n){
                commit(GOTO_PAGE,n);
            }
    
}