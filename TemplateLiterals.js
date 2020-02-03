function sides(literals, ...expressions) {
    var area = expressions[0];
    var peri = expressions[1];
    
    var s1 = (peri + Math.sqrt(peri * peri  - (16 * area))) / 4;
    //console.log("s1: " + s1);
    var s2 = (peri - Math.sqrt(peri * peri  - (16 * area))) / 4;
    //console.log("s2: " + s2);
    var array = [s1, s2];
    array =  array.sort(function (a,b) {return a-b;});
    return array;
}
