/**
 * Created by David Maser on 08/06/2017.
 */
import {Ajax, DataStore} from './src/components/Ajax';

new Ajax('demo', 'GET', 'some', (output) => {
  console.log(output, DataStore)
});
