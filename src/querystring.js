/*
 *  querystring.js - v1.0.1
 *  Querystring utility in Javascript
 *  https://github.com/EldonMcGuinness/querystring.js
 *
 *  Made by Eldon McGuinness
 *  Under MIT License
 *
 *  Parameters:
 *  str - A string that you want the script to treat as the querystring
 *        instead of the actual page's querystring.
 */

querystring = function(str) {
    var obj = {};

    (str || location.search).split(/^.*\?|&/)
        .filter(function(part) { return part; })
        .map(function(arg) {
            var parts = arg.split(/=((?!=).*)/),
                key = decodeURIComponent(parts[0]),
                val = parts[1] === '' ? null : parts[1]
            ;

            if(!obj[key]) obj[key] = val;
            else {
                if(!Array.isArray(obj[key])) obj[key] = [obj[key]];
                obj[key].push(val);
            }
        });

    return obj;
}
