/**
 * Created by David Maser on 08/06/2017.
 */
import {ComodoAjax, DataStore} from './src/components/ComodoAjax';
import {ComodoUtilities} from './src/utilities/ComodoUtilities';

new ComodoAjax('demo', 'GET', 'some', (output) => {
  /*
  * The following objects are now available. Pass the
  * objects to another function or parse them as
  * you like from here.
  * output : returns the json object.
  * DataStore : returns the data store method
  * */
  console.log(output, DataStore,ComodoUtilities);
});
