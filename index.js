// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius=radius;
  }


get diameter() {
  return this.radius * 2;
}

get circumference() {
  return Math.PI*this.diameter;
}
get area(){
  return Math.PI*this.radius**2;
}

set diameter(radius){
 this.radius= ;
}

set circumference(radius){
  return this.circumference;
}

set area(radius){
  return this.area;
}
}