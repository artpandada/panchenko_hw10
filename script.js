'use strict';


function myBind(fun, context) {

    const argsBind = Array.from(arguments).slice(2);

    return function () {

        const args = argsBind.concat(Array.from(arguments));
        return fun.apply(context, args);

    };

}


