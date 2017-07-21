var prepend = function prepend (element, list) {
        return {
            val: element,
            next: list
        };
    },
    nth = function nth (n, list) {
        return n < 1 || list === undefined ?
                   undefined:
               n === 1 ? 
                   list.val:
               //ELSE
                    nth(n-1, list.next);
    },
    arrayToList = function arrayToList (arr) {
        return arr.reduceRight(function (nextNode, nodeElement) {
            return prepend(nodeElement, nextNode);
        }, undefined);
    },
    listToArray = function listToArray (list) { //nth helper function was not used because it would give this function's algorithm quadratic instead of the better linear time complexity
        var arr = [];
        for (;list !== undefined; list = list.next) {
            arr.push(list.val);
        };
        return arr;
    };

console.log("[1, 2, 3] to list: " + arrayToList([1, 2, 3]));
console.log("peviously generated list to array: " + listToArray(arrayToList([1, 2, 3])));
