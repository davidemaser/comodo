/**
 * Created by David Maser on 08/06/2017.
 */
import {Global} from '../config/global';
import '../components/ComodoParser';
export let DataStore = {
  scope:'application'
};

export class ComodoAjax {
  /**
   *
   * @param url
   * @param method
   * @param name
   * @param callback
   */
  constructor(url,method,name,callback){
    this.url = Global.json.route+url+Global.json.ext;
    this.method = method || 'GET';
    this.name = name;
    this.callback = callback;
    this.get();
  }

  get(){
    const objNode = this.name;
    return $.ajax({
      url:this.url,
      method:this.method,
      success:(data)=>{
        let rootNode = objNode !== undefined ? data[objNode] : data;
        this.callback !== undefined ? this.callback(rootNode) : null;
      },
      error:(xhr)=>{
        this.callback !== undefined ? this.callback('error',xhr) : null;
      },
      complete:(data)=>{
        let rootNode = objNode !== undefined ? data['responseJSON'][objNode] : data['responseJSON'];
        if(objNode !== undefined){
          DataStore[objNode] = rootNode;
        }else{
          DataStore = rootNode;
        }
      }
    })
  }
}
