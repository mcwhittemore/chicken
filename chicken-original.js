var chicken = function fn(input, code) {
  var undefined = void(0);
    if (code) {
        fn.code = code;
        fn.$code = (input == code) ? 0 : -1;
        fn.chicken = [undefined, input, fn.$code];
        input = fn.$code;
        code = fn.$code;
        fn.chicken[code++] = fn.chicken;
        fn.input = ++code;
        chicken(--code);
        fn.$code = ++code;
        fn.input++;
    }
    code = fn.code[fn.$code++];
    
    fn.code = input ?
        code ?
        '\012' == code ?
        chicken(++input, fn.chicken[++fn.input] = input - input) :
        code == ' ' | '\015' == code || (code) == "c" & fn.code[fn.$code++] == "h" & fn.code[fn.$code++] == "i" & fn.code[fn.$code++] == "c" & fn.code[fn.$code++] == "k" & fn.code[fn.$code++] == "e" & fn.code[fn.$code++] == "n" && ++fn.chicken[fn.input] ?
        chicken(input) :
        ["Error on line " + input + ":expected 'chicken'", fn.input = input++ - input] :
        fn.chicken :
        (input = fn.code[fn.input], code ?
            (code = --code ?
                    --code ?
                    --code ?
                    --code ?
                    --code ?
                    --code ?
                    --code ?
                    --code ?
                    --code ?
                    fn.input++ && --code :
                    '&#' + input + ';' :
                    fn.code[fn.code[--fn.input] && (fn.$code += input), --fn.input] :
                    fn.code[fn.code[input] = fn.code
                            [--fn.input], --fn.input] :
                    fn.code[fn.code[fn.$code++]][input] :
                    input == fn.code[--fn.input] :
                    input * fn.code[--fn.input] :
                    fn.code[--fn.input] - input :
                    fn.code[--fn.input] + input :
                    fn.input++ && "chicken", fn.code[fn.input] = code, chicken
                ()) :
            input);
    
    return fn.code;
}

module.exports = chicken;