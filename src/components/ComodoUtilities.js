/**
 * Created by David Maser on 08/06/2017.
 */
export const ComodoUtilities = {
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
  remove:{
    object: (obj) => {
      if(Array.isArray(obj)){
        let o;
        for(o in obj){
          $(obj[o]).remove();
        }
      }else{
        $(obj).remove();
      }
    },
    string: (str) => {

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
  },
  map: (obj) => {
    obj.map(function(a){
      console.log(a);
    })
  }
};