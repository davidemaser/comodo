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
    this.method = method;
    this.name = name || 'default';
    this.callback = callback;
    this.get();
  }

  get(){
    const objNode = this.name;
    return $.ajax({
      url:this.url,
      method:this.method,
      success:(data)=>{
        this.callback(data);
      },
      error:(xhr)=>{
        this.callback('error',xhr);
      },
      complete:(data)=>{
        DataStore[objNode] = data;
      }
    })
  }
}
