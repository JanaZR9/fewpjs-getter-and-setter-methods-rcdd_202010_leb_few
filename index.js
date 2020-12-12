// Add your Circle class here

class Circle{
  constructor(radius){
    this._radius=radius;
  }


get diameter() {
  return this._radius * 2;
}

get circumference() {
  return 2*Math.PI*this.diameter;
}
get area(){
  return Math.PI*this._radius**2;
}

set diameter(radius){
  return this.diameter;
}

set circumference(radius){
  return this.circumference;
}

set area(radius){
  return this.area;
}
}