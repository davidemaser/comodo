/**
 * Created by David Maser on 08/06/2017.
 */
import {Comodo, DataStore} from './src/components/Ajax';

new Comodo('demo', 'GET', 'some', (output) => {
  /*
  * The following objects are now available. Pass the
  * objects to another function or parse them as
  * you like from here.
  * output : returns the json object
  * DataStore : returns the data store method
  * */
  console.log(output, DataStore)
});
