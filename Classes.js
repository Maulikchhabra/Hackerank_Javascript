class Polygon{
    constructor(arr){
        this.sides = arr;
    }
    perimeter(){
        var peri = 0;
        for(var i=0;i<this.sides.length;i++){
            peri =peri +this.sides[i];
        }
        return peri;
    }
}
