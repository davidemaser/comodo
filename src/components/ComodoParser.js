/**
 * Created by David Maser on 08/06/2017.
 */
class ComodoParser{
  constructor(data,map){
    this.data = data;
    this.map = map;
  }

  injest(){
    if(typeof this.data === 'object'){
      try{
        this.digest(this.data,JSON.parse(this.map));
      }catch(e){
        throw new Error('The map is not properly formatted')
      }
    }else{
      throw new Error('Data has to be an object')
    }
  }

  digest(data,map){

  }

  regurgitate(){

  }
}

export default ComodoParser;