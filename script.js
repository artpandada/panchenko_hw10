'use strict';


function myBind(fun, context, args) {
    return function () {
        return fun.apply(context, args);
    };

}
