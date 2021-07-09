<p align="center">
    <img src="https://user-images.githubusercontent.com/20530235/124830986-a5f70200-df48-11eb-8800-22eaed9b21ba.png?sanitize=true">
</p>
<p align="center">
    <img alt="GitHub branch checks state" src="https://img.shields.io/github/checks-status/fsjorgeluis/password-generator/main">
    <img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/fsjorgeluis/password-generator">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/ts-password-generator">
    <img src="https://img.shields.io/coveralls/github/badges/shields" alt="coverage">
    <a href="https://twitter.com/intent/follow?screen_name=linktodev">
        <img src="https://img.shields.io/twitter/follow/linktodev?logo=twitter&style=social" alt="follow on Twitter">
    </a>         
</p>

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

### Accepted params by generator method
Any of these can be passed into the options object for each function.

| Name                     | Description                                                                                                    | Default Value |
|--------------------------|----------------------------------------------------------------------------------------------------------------|---------------|
| charsQty                 | Integer, optional param, password length.                                                                                      | 10            |
| isUppercase              | Boolean, optional param, add uppercase chars to the generated password.                                        | false         |
| haveNumbers              | Boolean, optional param, add numbers to the generated password.                                                | false         |
| haveSymbols              | Boolean, optional param, add symbols (special characters) to the generated password                            | false         |

*NOTE: by default, if you don't pass any parameter to the ``generator`` method, the generated password will be in lowercase.*

### TODO
* Add maybe more fuctionality.

### DONE
* Make this little script an npm package just for fun, and educative purposes.
* Added more documentation.