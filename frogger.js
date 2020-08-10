class Frogger {
    constructor(){
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth/5;
        this.height = this.spriteHeight/5;
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    } 
    update(){
        if (keys[38]){
            if (this.moving === false){
                this.y -= grid;
                this.moving = true;
            }
        };
        if (keys[40]){
            if (this.moving === false && this.y < canvas.height - this.height *2){
                    this.y += grid;
                    this.moving = true;
                }
        };
        if (keys[37]){
            if (this.moving === false && this.x > this.width){
                    this.x -= grid;
                    this.moving = true;
                }
        };
        if (keys[39]){
            if (this.moving === false && this.x < canvas.width - this.width *2){
                    this.x += grid;
                    this.moving = true;
                }
        };
        if (this.y < 0) scored();
    };
    draw(){
        ctx3.fillStyle = 'green';
        ctx3.drawImage(frog, 0, 0, this.spriteWidth, this.spriteHeight, this.x - 25, this.y - 25, this.width * 2, this.height * 2);
    };
    jump(){
    
    }
};

const frogger = new Frogger();