/**
 * Created by David Maser on 08/06/2017.
 */
import {ComodoAjax, DataStore} from './src/components/ComodoAjax';
import {ComodoUtilities} from './src/components/ComodoUtilities';
import {Structure} from './src/config/global';
import './src/scss/app.scss';

new ComodoAjax('demo', 'GET', 'demo', (output) => {
  /*
  * The following objects are now available. Pass the
  * objects to another function or parse them as
  * you like from here.
  * output : returns the json object.
  * DataStore : returns the data store method
  * */
  //console.log(output, DataStore);
  ComodoUtilities.map(output);
});
