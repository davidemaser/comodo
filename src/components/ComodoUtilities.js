/**
 * Created by David Maser on 08/06/2017.
 */
export const ComodoUtilities = {
  swap: {
    /*
     * args format is
     * {string:'',find:'',replace:''}
     */
    string: (args) => {
        return args[string].replace(new RegExp(args[find], 'g'), args[replace]);
    },
    object: (args) => {
      if(typeof args === 'object') {
        let originParent = $(args.origin).parent();
        let destinParent = $(args.destination).parent();
        $(args.origin).detach().appendTo($(destinParent));
        $(args.destination).detach().appendTo($(originParent));
      }else{
        throw new Error('Arguments must be an object')
      }
    }
  },
  duplicate: (args) => {
      /*
      * args format is
      * {origin:'',destination:''}
      */
    if(typeof args === 'object'){
      $(args.origin).clone().appendTo(args.destination);
    }else{
      throw new Error('Arguments must be an object')
    }
  },
  move: (args) => {
    /*
     * args format is
     * {origin:'',destination:''}
     */
    if(typeof args === 'object'){
      $(args.origin).detach().appendTo(args.destination);
    }else{
      throw new Error('Arguments must be an object')
    }
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
    string: (str,remove) => {
        return str.replace(new RegExp(remove, 'g'), '');
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
  },
  store: {
    local: (args) => {
      localStorage.setItem(args.key,args.data);
    }
  }
};