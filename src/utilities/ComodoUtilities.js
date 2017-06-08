/**
 * Created by David Maser on 08/06/2017.
 */
export const ComodoUtilities = {
  bind: (args) => {

  },
  swap: (args) => {

  },
  duplicate: (args) => {
      /*
      * args format is
      * {origin:'',destination:''}
      */
  },
  move: (args) => {
    /*
     * args format is
     * {origin:'',destination:''}
     */
  },
  remove: (obj) => {
    if(Array.isArray(obj)){
      let o;
      for(o in obj){
        $(obj[o]).remove();
      }
    }else{
      $(obj).remove();
    }
  },
  bind: (args) => {
    /*
     * args format is
     * {origin:'',destination:''}
     */
  },
  unBind: (args) => {
    /*
     * args format is
     * {origin:'',destination:''}
     */
  }
};