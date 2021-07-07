# Password Generator Module

A little module to generate password, use ``fromCharCode()`` static method to convert a random "ASCII - Unicode" code to a readable character.  
```
String.fromCharCode()
```
Feel free to use it, if you like it! :D

## Ready to use
Just ``npm install ts-password-generator``, then 

```
import { generator } from 'ts-password-generator';
``` 
or
```
const tsPasswordGenerator = require("ts-password-generator");

const tsPass = tsPasswordGenerator;

tsPass.generator({});
```
and you are ready to go.

The ``generator`` method receive following params:
```
{ 
    charsQty: number, 
    isUppercase: boolean, 
    haveNumbers: boolean, 
    haveSymbols: boolean 
}
```
and returns a brand new password string.

### TODO
* Add maybe more fuctionality.

### DONE
* Make this little script an npm package just for fun, and educative purposes.