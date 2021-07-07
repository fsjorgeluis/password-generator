# Password Generator Module

A little module to generate password, use fromCharCode() function to convert a random ASCII code to a readable character.  
```
String.fromCharCode()
```
Feel free to use it, if you like it! :D

## Ready to use
Just npm install, ``import generator from './src/generator;`` and you are ready to go.

The ``generator`` function receive following params:
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
Make this little script an npm package just for fun, and educative purposes.
