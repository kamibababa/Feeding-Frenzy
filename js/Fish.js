let c = document.getElementById("container");
let Fish = function (x, y, imgSrc, weight, direction) {

    this.x = x;
    this.y = y;
<<<<<<< HEAD
    this.width = 100 * weight;
    this.height = 60 * weight;
=======
    this.width = 50 * weight;
    this.height = 50 *  weight;
>>>>>>> 67c60db196b1903b81b64f2ff8ffdf4d79d0e9cc
    this.imgSrc = "./images/Enemies" +"/"+direction+"/" +imgSrc;
    this.direction = direction;
    this.weight = weight;
    this.speedX = 3;
    this.speedY = 0;
    this.element;
    
    
};

Fish.prototype.createFish = function () {

    this.element = document.createElement("img");
    this.element.src = this.imgSrc;
    this.element.style.position = "absolute";
    this.element.height = this.height;
    this.element.width = this.width;

    if (this.direction === "left")
        this.x = window.innerWidth + this.width;
    else if (this.direction === "right")
        this.x = 0 - this.width;

    this.element.style.top = this.y + "px";
    this.element.style.left = this.x + "px";
    
    c.appendChild(this.element);

}

Fish.prototype.moveFishes = function () {
    if (this.direction === "left") {
        this.x -= this.speedX;
        
    }
    else if (this.direction === "right") {
        this.x += this.speedX;
    }
   
    if((this.direction === "left" && (parseInt(this.element.style.left) + this.width)+200 <= 0) 
      || 
      (this.direction === "right" && (parseInt(this.element.style.left) - this.width)-200 >= window.innerWidth )

      ){
       // c.removeChild(this.element) ; 
       /* this.direction = "right" ; 
        this.imgSrc = "./images/Enemies" +"/right/" +imgSrc; */

    }
    
   /* 
  if(this.direction === "right" && (parseInt(this.element.style.left) - this.width)-200 >= window.innerWidth ){
    
    this.direction = "left" ; 
    this.imgSrc = "./images/Enemies" +"/left/" +imgSrc;
  }
     */ 
   
      this.element.style.left = this.x + "px";

}