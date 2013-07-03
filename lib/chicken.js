var out,
    stack,
    input_ptr,
    stack_ptr;

function chicken(c, b)
{
    if(b)
    {
        // run once at the beginning of each interpretation
        // after this, chicken is only called recursively with one argument

        if(c == b)
        {
            out = b;
            c = b = input_ptr = 0;
            stack = [undefined, c, 0]
            stack[0] = stack;
            stack_ptr = 2;
            // parse the code
            chicken(1);
            // parsing is done, run the code
            input_ptr = 2;
            stack_ptr++;
        }
        else
        {
            // code is equal to input?!
            stack = [undefined, c, c = b = input_ptr = -( c == (out = b))];
            stack[b++] = stack;
            stack_ptr = ++b;
            chicken(--b);
            input_ptr = ++b;
            stack_ptr++;
        }
    }

    // either one character from the code
    // or a number of chickens to be interpreted as code
    b = out[input_ptr++];

    if(c)
    {
        // parsing
        if(b)
        {
            if(b == '\n')
            {
                // start counting on the top of the stack
                stack[++stack_ptr] = 0;
                return out = chicken(c + 1, 0);
            }
            else
            {
                // call chicken again, if:
                // 1. input it ' ' or '\r'
                // 2. input is 'chicken'
                // In the latter case, increment the top of the stack
                return out = 
                    (b == ' ' | '\r' == b) ||
                    ((b == "c" & 
                    out[input_ptr++] == "h" &
                    out[input_ptr++] == "i" &
                    out[input_ptr++] == "c" &
                    out[input_ptr++] == "k" &
                    out[input_ptr++] == "e" &
                    out[input_ptr++] == "n") &&
                    ++stack[stack_ptr]) ? 
                        chicken(c)
                    :
                        // otherwise, error
                        ["Error on line " + c + ": expected 'chicken'", stack_ptr = c++ -c];
            }
        }
        else
        {
            // parsing is done, continue running the code
            return out = stack;
        }
    }
    else
    {
        // run the code
        // out is the stack at this point
        console.assert(out === stack);

        var top = out[stack_ptr];

        if(b)
        {
            (b = --b? --b? --b? --b? --b? --b? --b? --b? --b?

                /* n push */            stack_ptr++ && --b 
                /* 9, BBQ */            : '&#' + top + ';'
                /* 8, fr */             : out[out[--stack_ptr] && (input_ptr += top), --stack_ptr]
                /* 7, peck */           : out[out[top] = out[--stack_ptr], --stack_ptr]
                /* 6, pick */           : out[out[input_ptr++]][top]
                /* 5, compare */        : out[--stack_ptr] == top
                /* 4, rooster (mult) */ : out[--stack_ptr] * top
                /* 3, fox (sub) */      : out[--stack_ptr] - top
                /* 2, add */            : out[--stack_ptr] + top
                /* 1, chicken */        : stack_ptr++ && "chicken");

            // push result on stack
            out[stack_ptr] = b;

            // next instruction
            return out = chicken();
        }
        else
        {
            /* 0, terminate */
            return top;
        }
    }
}

module.exports = chicken;