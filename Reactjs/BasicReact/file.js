//default module

/*import msg2 from './file2.js'

function msg(){
    console.log("hello people");
    
}
msg()
msg2()

*/

//named module
import {msg2} from './file2.js'

function msg(){
    console.log("hello people");
    
}
msg()
msg2()
