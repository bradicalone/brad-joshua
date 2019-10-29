import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.js';

console.log('updated four')

ReactDOM.render(<App />, document.getElementById('photo-imgs'))

/******  GLOBAL VARIABLES  *******/ 
const animate768 = "M565.1,0v900H0c0,0,0-75.3,0-192.4c0-211.7,0-303.7,0-533.1C0,50.5,0,0,0,0H565.1z;"+
                 "M565.1,0v900H182.7c0,0-44-72.5-44-191.7c0-107.5,121.8-396.1,121.8-533.8C260.5,41,245.9,0,245.9,0H565.1z;"+
                 "M571.8,0v900H386.7c0,0-31.4-42.7-31.4-191.7C355.3,568,555,285,555,80.7C555,20,551.5,0,551.5,0H571.8z;"+
                 "M573,0v900h-2.3c0,0,0.4-65.2,0.4-192.4c0-176.8-0.2-347.9-0.2-533.4c0-124-0.2-174.2-0.2-174.2H573z";

const animate400 = "M390,800H6c0,0-6-45.9-6-161.3C0,443.6,5,286.1,5,47.3C5,10.7,3,0,3,0h387V800z;"+
                 "M390,800H96c0,0-46-45.9-46-161.3c0-195.1,130-352.6,130-591.3c0-36.7-3-47.3-3-47.3h213V800z;"+
                 "M390,800H243c0,0-37-45.9-37-161.3c0-195.1,176-352.6,176-591.3c0-36.7-1-47.3-1-47.3h9V800z;"+
                 "M390,800h-7c0,0,0-45.9,0-161.3c0-195.1,5-352.6,5-591.3c0-36.7-1-47.3-1-47.3h3V800z";

const isFirefox = typeof InstallTrigger !== 'undefined';
const isSafari = navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") === -1;
//If user is on ipad / iphone / ipod
let isIOS = function(){
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
}

const wW = window.innerWidth;
const wH = window.innerHeight;

//Firefox Bug, transforms not working, so sets attribute to 0 instead
if(isFirefox){
    //svg morfing problem
    document.getElementsByTagName('feGaussianBlur')[0].setAttribute('stdDeviation', '6')
    //svg css problem
    _('svg-circle').setAttribute('r', 0);
    _('svg-circle').style.transform = 'scale(1)'
} 

if(isSafari) _('svg-page').style.visibility = "hidden"

function _(clss){

    let classes = document.getElementsByClassName(clss);

    if(classes.length === 1){
        return classes[0]
    }
    if(classes.length > 1){
        return classes
    }else return "Not a working class"
};

var easeOut = function(progress){
    return Math.pow(--progress, 5) + 1;
};

//String: indicates new size of width or height that you want. Size: of the new size of the string. El: the element you want it for
var newSize = function(string, size, el){
    if(typeof el  !== 'undefined'){
        

        var ogWidth = el.getBoundingClientRect().width
        var ogHeight = el.getBoundingClientRect().height
        if(ogWidth === 0 || ogHeight === 0){
            ogWidth = el.getAttribute('width')
            ogHeight = el.getAttribute('height')
        }
    }else{
        var ogWidth = 762.22
        var ogHeight = 668.97
    }
    
    if(string === 'height' ){
        let ratio = ogHeight / size
        return {
            height: size,
            width: ogWidth / ratio
        }

    }else if(string === 'width' ){
        let ratio = ogWidth / size
        return {
            width: size,
            height: ogHeight / ratio
        }
    }else console.log('check parameters');
}


WebFont.load({
    google: {
      families: ['Do Hyeon', 'Orbitron']
    },
    active: function(){
        //Starts when google fonts are loaded     
        slotMachine();
        Stretch();
    }
})

function slotMachine(){

    var canvas = document.getElementById('slot-machine');
    var ctx = canvas.getContext('2d');
      
    var Slot = function(){
	    this.x = 0;
		this.width = canvas.width = wW < 970 ? 360 : 475;
	    this.height = canvas.height = wW < 970 ? 360 : 475;
		this.text = 'PHOTO'
	    this.letters = [];

	    this.addLetter = function(n){

	        var letterHeight = wW < 970 ? -124 : -158;

	        //Places letters at top index 1,3,5
	        var bottom = wW < 970 ? this.height + 60 : this.height + 96;
	        for(var j = 0; j < n; j++ ){
	            //Resets x every iteration
	            this.x = 0
	            //Adjust bottom and height all letters
	            letterHeight = wW < 970 ? letterHeight + 121 : letterHeight + 158
	            for(var i = 0; i < this.text.length; i++){

	                var data = {
	                    top: letterHeight,
	                    letter: this.text[i],
	                    x: i === 0 ? -5 : wW < 970 ? this.x+=74 : this.x+=100.8,
	                    speed: 9, 
	                    bottom: bottom - letterHeight,
	                    start: i % 2 === 0 ? "up" : "down"
	                }
	                n === 4 ? this.letters.push(data) : this.letters.unshift(data)

	                var letter = data
	        
	                if(i%2 === 0){
	                    this.drawUp(letter)
	                }else{

                        if( wW < 970 ){
                            //fixes spacing issue Orbitron font
                            i === 3 ? letter.x += 3 : true
                            i === 1 ? letter.x -= 3 : true
                        }
	                    this.drawDown(letter)
	                } 
	            }
	        }
	    }
	   this.addLetter(4)
	}

    Slot.prototype.drawUp = function(text){
      
        ctx.font = wW < 970 ?  "Bold 62pt Orbitron" : "105pt Do Hyeon";
        ctx.fillText(text.letter,text.x, text.bottom)
    }
    Slot.prototype.drawDown = function(text){
        
		ctx.fillStyle = "#0D1B56";
         ctx.font = wW < 970 ? "Bold 62pt Orbitron" : "105pt Do Hyeon";
        ctx.fillText(text.letter,text.x, text.top)

    }

    Slot.prototype.update = function(){

        // var push = wW < 970 ? -61 : -74
        var push = wW < 970 ? -61 : -75
    	if(!slotMachine.prototype.toggle) return;
    
        //New set if letters drawn based on spacing
        if(this.letters[19].bottom <= push ){
              
            this.letters.splice(15,5)
            this.addLetter(1)
        }

        ctx.clearRect(0,0,canvas.width, canvas.height)
        
    	for(var i = 0; i < this.letters.length; i++){
             
            var letter = this.letters[i]

            letter.top += letter.speed 
            letter.bottom -= letter.speed 
            
            if(letter.start === "up"){

                this.drawUp(letter)

            }else this.drawDown(letter)
    	}
        requestAnimationFrame(this.update.bind(this))
    }
    var slot = new Slot()
    
    document.querySelector('.photo .start-canvas').addEventListener('click', function(){
        
    	//Start Canvas
    	slotMachine.prototype.toggle = true
        requestAnimationFrame(slot.update.bind(slot))
    });

    document.querySelector('.photo .stop-canvas').addEventListener('click', function(){
      	//Stop Canvas
    	slotMachine.prototype.toggle = false
    });

}



function Stretch(){

    var canvas = document.getElementById('stretch');
    var ctx = canvas.getContext('2d');
  
    if(wW < 970){
        var width = 400
        var height =  375
        var strtch = 15
        var letterDist = 53
        var x = 65
        var stretchX = 5
        var mixedNum = 5
    }
    if(wW < 400){
        var width = 360
        var height =  375
        var x = 50
        var mixedNum = -10
    }
    if(wW > 970){
        var width = 650
        var height =  450
        var strtch = 30
        var letterDist = 65
        var x = 125
        var mixedNum = 5
    }
    /** CHANGE NUMBER FOR lineCount TO ADD OR SUBTRACT HOW MANY LINES OF WORDS **/
    var lineCount = 7;
    var count = 0;
    var t = lineCount - 1;
    var colors = ["#DAF7A6", "#FFC300 ", "#FF5733", "#C70039", "#900C3F", "#581845", "#37102b"]
    var Letters = function(){
        // this.text = 'SOLUTIONS'
        this.letters = [];
        this.total = this.letters.length - 1
        this.total = 0;
        this.y = 0;

        
        this.width = canvas.width = width
        this.height = canvas.height = height
        this.text = 'DEVELOPER'
        
        this.pushLetters = function(x, dist){
            //If pushLetters is ran again makes sure this.y = 0
            if(this.y) this.y = 0
            var canvasHeight = this.height
            for(var i = 0; i < lineCount; i++){
                var data = {
                    x: x,
                    letter: this.text,
                    stretch: strtch,
                    start: 0,
                    speed: i,
                    dist: typeof dist === 'number' ? dist : 0,
                    //Letters distance between each other virticle 
                     distance: this.y += letterDist,
                     //Letters start on the bottom
                    bottom: wW < 970 ? canvasHeight + 45 : canvasHeight + 62,
                    begin: 1,
                    //When the next rotation starts
                    beginY: 0,
                    scaleTotal: 4,
                    distY: 0,
                    color: colors[i]
                }
                this.letters.push(data)
            }
        }
        this.pushLetters(x)
    }

    var drawUp = function(letter, dist){

        ctx.setTransform(1,0,0, letter.scale,letter.x, letter.bottom - dist )
        ctx.font = wW < 970 ? "40pt Do Hyeon" : "60pt Do Hyeon";
        ctx.fillStyle = letter.color
        ctx.fillText(letter.letter, 0, letter.textY);
        // var text = ctx.measureText(letter.letter)
    }
    var stretch = function(text){
        ctx.canvas.style.letterSpacing = text.dist +'px'
        ctx.font = wW < 970 ? "40pt Do Hyeon" : "60pt Do Hyeon";
        ctx.fillStyle = text.color
        ctx.fillText(text.letter, text.x, text.bottom - text.distance )
    }

    var drawDown = function(letter){
        ctx.font = wW < 970 ? "40pt Do Hyeon" : "60pt Do Hyeon";
        ctx.fillStyle = letter.color
        ctx.fillText(letter.letter, letter.x, letter.y)
    }

    var drawBackFlip = function(letter){
        ctx.font = wW < 970 ? "40pt Do Hyeon" : "60pt Do Hyeon";
        ctx.fillStyle = letter.color
        ctx.setTransform(1,0,0, letter.scale,letter.x, letter.y )
        ctx.fillText(letter.letter, 0, letter.textY);
    }
    
    Letters.prototype.addLetters = function(timestamp){

    	if(!Stretch.prototype.toggle) return;
       	var j = 0;
	
        ctx.globalCompositeOperation = 'destination-under';
        ctx.setTransform(1,0,0,1,0,0);
        ctx.clearRect(0,0,canvas.width, canvas.height)

        for(var i = 0; i < this.letters.length; i++){
            
            var letter = this.letters[i];
            letter.y = letter.bottom - letter.distance

            //FOURTH AND LAST CALL, REMOVE WORDS
            if(count === 3 && i === t) {

                if(!letter.start) letter.start = timestamp
                var runtime = timestamp - letter.start
                var progress = Math.min(runtime / 600, 1)
                letter.y += (letter.distance * progress)

                letter.scale = 0 || (letter.begin - ( letter.scaleTotal * progress) ).toFixed(2)
                letter.textY =  (letter.beginY + ( letter.distY * progress) ).toFixed(2)
                drawBackFlip(letter)

                 if(letter.scale == -1 || letter.scale < -1){
                
                    letter.beginY = 10
                    letter.distY = wW < 970 ? -5 : -10
                    letter.scaleTotal = -4
                    letter.begin = -3
                }

                if( progress === 1 ){
                    //Removes item from array after each word is finished animating
                    this.letters.splice(t,1)
                    t--
                }
                if( t === -1 ){
                    setTimeout(function(){
                        this.total = 0
                        count = 0
                        t = lineCount - 1
                        this.letters.length = 0
                        this.pushLetters(x)
                    }.bind(this), 200)
                } 
            }
            if( count === 3 && i !== t ) drawDown(letter)


            //THIRD, LETTER STRETCH IN
            if( count === 2 && i === t ) {
                if(!letter.start) letter.start = timestamp
                var runtime = timestamp - letter.start
                var progress = Math.min(runtime / 125, 1)
                letter.dist = letter.stretch - (letter.stretch * progress)

                letter.x = mixedNum + (letter.stretch * progress) * 4
                
                stretch(letter)

               if(progress === 1 ){
                    t--
                }
                //RESETS VARIABLES, CALLS FUNCTION ALL OVER AGAIN
                if(t === -1){
                    setTimeout(function(){
                        count++
                        t = lineCount - 1
                        this.letters.length = 0
                        this.pushLetters(x, 0)
                    }.bind(this), 200)
                }
            }
            if(count === 2 && i !== t) {

                stretch(letter)
            }
          
            //SECOND, LETTER STRETCH OUT
            if( count === 1 && i === j ) {

                if(!letter.start) letter.start = timestamp
                var runtime = timestamp - letter.start
                var progress = Math.min(runtime / 150, 1);

                letter.dist = letter.stretch * progress;
                letter.x = x - (letter.dist * 4)
           
                stretch(letter)

                if( progress === 1 ){
                    j++
                }

                if( j === this.letters.length ){
                    count++
                    this.letters.length = 0;
                    // -5 because letters stretched to far, need to fix numbers
                    // wW < 970 ? this.pushLetters(5, 15) : this.pushLetters(5, 30);
                    this.pushLetters(mixedNum, wW < 970 ? 15 : 30 )
                }
            }
            if( count == 1 && i !== j ) {
                letter.x = letter.x
                letter.dist = letter.dist
                stretch(letter)
            }

            //FIRST, LETTER CLIMBE
            if( i === j && count === 0 ){

                if(!letter.start) letter.start = timestamp 
                var runtime = timestamp - letter.start
                var progress = Math.min(runtime / 600, 1)
                var dist = letter.distance * progress;
    
                letter.scale = 0 || (letter.begin - ( letter.scaleTotal * progress) ).toFixed(2)
                letter.textY =  (letter.beginY + ( letter.distY * progress) ).toFixed(2)
   
                drawUp(letter, dist)
  
                //Adds second flip to make upright text half way up canvas
                if(letter.scale == -1 || letter.scale < -1){
                    //When the next rotation starts for beginY and distY
                    letter.beginY = wW < 970 ? 5 : 10
                    letter.distY = wW < 970 ? -5 : -10
                    letter.scaleTotal = -4
                    letter.begin = -3
                }
                
                if( progress === 1) {
                    j++
                }      
        
                if( j === this.letters.length ){
                    count++
                    this.letters.length = 0;
                    this.pushLetters(x, 0)

                }
            }
        }
        requestAnimationFrame(this.addLetters.bind(this))
    }
    var letters = new Letters()

    document.querySelector('.developer .start-canvas').addEventListener('click', function(e){

        Stretch.prototype.toggle = true
        requestAnimationFrame( letters.addLetters.bind(letters) )
 
    });   

    document.querySelector('.developer .stop-canvas').addEventListener('click', function(){

       Stretch.prototype.toggle = false

    })
};

function ImageShatter(){
    var sizing = function(content){
        if(content === 'dur'){
            if (window.innerWidth < 600)
                return 2.6
            else if (window.innerWidth > 600)
                return 3.5
                
        }
        if(content === 'img'){
            if(window.innerWidth <= 600) 
                return 400
            else if (window.innerWidth > 1200)

                return 580
            else
                return 500
        }
    }

    var ns = 'http://www.w3.org/2000/svg';
    var img = new Image();
    var ctx, canvas;
    var particleCanvas, particleCtx;
    var canvasParentWidth;
    var canvasParentHeight;
    var ending = []
    var retractStart = 0;
    var imgCanvas = function(width, height, img,callback){
        //Watch where this is loaded into when portfolio done
        // document.body.innerHTML += '<canvas id="img-canvas"></canvas>';
        // canvas = document.getElementById('img-canvas')
        canvas = document.getElementById('particle')
        ctx = canvas.getContext("2d");

        canvas.width = width
        canvas.height = height
        canvasParentWidth = _('svg-page').getBoundingClientRect().width
        canvasParentHeight = _('svg-page').getBoundingClientRect().height

        ctx.drawImage(img, 0, 0, width,height)

        //Calls function for clickable event listener to run and appends background canvas
        callback(canvas,createParticleCanvas())
    }


    function createParticleCanvas() {

        // Create our canvas
        particleCanvas = document.createElement("canvas");
        particleCtx = particleCanvas.getContext("2d");

        // Size our canvas with additional sizing
        particleCanvas.width = canvasParentWidth
        particleCanvas.height = canvasParentHeight
      
        // Position out canvas
        particleCanvas.style.position = "absolute";
        particleCanvas.style.top = "0";
        particleCanvas.style.left = "0";
      
        // Make sure it's on top of other elements
        particleCanvas.style.zIndex = "500";
        
        // Make sure other elements under it are clickable
        particleCanvas.style.pointerEvents = "none";
        var foreignObject = document.createElementNS( ns, "foreignObject");
        foreignObject.setAttribute('class', "particleObject")
        foreignObject.setAttribute('width', canvasParentWidth)
        foreignObject.setAttribute('height', canvasParentHeight)
        foreignObject.appendChild(particleCanvas)
       
        document.querySelector('g.design').appendChild(foreignObject)

    }

    
        
    //Image comes appart
    var ExplodingParticle = function() {
        this.begin = 0

        // Set how long we want our particle to animate for
        this.animationDuration = 1000; // in ms

        // Set the speed / distance for our particle
        this.speed = {
            x: window.innerWidth < 768 ? -5 + Math.random() * 10 : -10 + Math.random() * 20,
            y: window.innerWidth < 768 ? -5 + Math.random() * 10 : -10 + Math.random() * 20
        };
      
        // Size our particle
        window.innerWidth < 768 ? this.radius = 3 + Math.random() * 3 : this.radius = 4 + Math.random() * 4;
      
      
        // Set a max time to live for our particle
        this.life = 30 + Math.random() * 10;
        this.remainingLife = this.life

        // This function will be called by our animation logic later on
        this.draw = ctx => {

            let p = this
             
            if(this.remainingLife > 0 && this.radius > 0) {
                
                // Draw a circle at the current location
                ctx.beginPath()
                ctx.arc(p.startX, p.startY, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(" + this.rgbArray[0] + ',' + this.rgbArray[1] + ',' + this.rgbArray[2] + ", 1)"
                ctx.fill()
          
                // Update the particle's location and life
                p.remainingLife--
                p.radius -= 0.25
                p.startX += p.speed.x
                p.startY += p.speed.y
                
            }
        }
        this.retract = (begin, finale, timestamp) => {

                
            if(!retractStart) retractStart = timestamp
        
                var runtime = timestamp - retractStart
                var progress = Math.min(runtime / 3000, 1)
        
                
                // canvas.style.opacity = 1 - progress
                particleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for(let i = 0; i < begin.length; i++) {
                var start = begin[i]
                var end = finale[i]
                
     
                var distX = Math.abs(start.startX  - end.x)
                var distY = Math.abs(start.startY - end.y)
                
                //If end x or y is greater than x or y subtract else add
                start.x = start.startX > end.x ? start.startX - (distX * progress) : start.startX + (distX * progress)
                start.y = start.startY > end.y ? start.startY - (distY * progress) : start.startY + (distY * progress)
                start.rad = start.begin + (end.rad * progress)
                
                particleCtx.beginPath()
                
                particleCtx.arc(start.x, start.y, start.rad, 0, Math.PI * 2);
                particleCtx.fillStyle = "rgba(" + start.rgbArray[0] + ',' + start.rgbArray[1] + ',' + start.rgbArray[2] + ','+ start.rgbArray[3]+")"
            
                particleCtx.fill()
            
            }
          if(progress === 1 ){
            //returns the photo back if ran again
            return 
          }
           
            requestAnimationFrame(function(timestamp){
                this.retract(begin, finale, timestamp)
            }.bind(this))
        }
    }



    var particles = [];

    function createParticleAtPoint(x, y, colorData) {
        let particle = new ExplodingParticle();
        
        particle.rgbArray = colorData;
        particle.startX = x;
        particle.startY = y;
        particle.startTime = Date.now();
        
        particles.push(particle);
        let end = {}
        end.start = 0;
        end.rad = particle.radius;
        end.x = x;
        end.y = y;
        ending.push(end)
      
    }

    var opac = 1;
    function update() {
        if(typeof particleCtx !== "undefined") {
            particleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
        //image fades as it's breaking apart
        canvas.style.opacity = (opac = opac - .08)

        // Draw all of our particles in their new location
        for(let i = 0; i < particles.length; i++) {

            particles[i].draw(particleCtx);

            // When particles 
            if(particles[i].radius < 0) {
                let percent = (Date.now() - particles[i].startTime) / particles[i].animationDuration                
                let dur = sizing('dur')
               
                if(percent > dur) {
                
                    let particle = new ExplodingParticle();

                    particle.retract(particles, ending)
    
                    return;
                }
            }
        }
        window.requestAnimationFrame(update);
    }

    var clearData = function(){
        retractStart = null
        canvas.removeAttribute('style')
        particleCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ending = []
        particles = []
    }

    img.onload = function(){
        var width = sizing('img')
        var height = width;
        imgCanvas(width,height,this,runEvents)
        
    }
    img.src = 'images/design-img.png'

    function runEvents(imgCanvas){
        var foreignObject = document.querySelector('.design .item-canvas')
     
        let imageLeft = parseInt(foreignObject.getAttribute('x') );
        let imageTop = parseInt(foreignObject.getAttribute('y') );
        // let reductionFactor = window.width <= 400 ? 15 : Math.round(imgCanvas.width / 15)
        if(window.innerWidth < 600)
            var reductionFactor = 15
        if(window.innerWidth >=600) 
            var reductionFactor = 22
        if(window.innerWidth >= 1200)
            var reductionFactor = 33
        
        //Removes canvas with particles made from when closing svg page
        _('close-btn').addEventListener('click', clearData)

        imgCanvas.addEventListener('click', function(e){
            if(e.target.style.opacity ){
              
                return clearData()
            }
          
            //width first one pixel, then all of height pixels, width another pixel then all of height pixels 
            let rgbaData = ctx.getImageData(0,0, this.width, this.height).data;
            let count = 0;
            for(let x = 0; x < this.width; x++){
                for(let y = 0; y < this.height; y++){
    
                    if(count % reductionFactor === 0) {
           
                    let index = (y * this.width + x) * 4;
                    let rgbaColorArr = rgbaData.slice(index, index + 4);
                   
                    let globalX = imageLeft + x;
                    let globalY = imageTop + y;
                   
                    createParticleAtPoint(globalX, globalY, rgbaColorArr)

                    }
                    count++
                }
            }
            update()
        });
    }
}
ImageShatter();



function StarryNight(){
       
    var canvas = document.getElementById('starryNight');
    var ctx = canvas.getContext('2d');
    var data = []
    var trailData = []
    var rgb =  trailData.length > 1 && 150 / trailData.length
    var j = 0;
    var houseWidth = window.innerWidth < 768 ? 380 : 600;
    var houseHeight = newSize('width', houseWidth).height;
    this.width = canvas.width = _('svg-page').getAttribute('width');
    this.height = canvas.height = _('svg-page').getAttribute('height');
    this.toggle = true;

    this.images = []

    //Men Data
    var menData = {
        headArc: window.innerWidth < 768 ? 4 : 6,
        stepDown: window.innerWidth < 768 ? 12 : 17,
        rotatedPos: 0,
        rotateDegree: 14,
        j: 0, //Each point of animation, walk, stand still, rotate ,falling
        start: 0,
        begin: 0,
        lastPosX: 90,
        lastPosY: undefined,
        arcStartX: window.innerWidth < 768 ? 7 : 10,
        arcStartY: 5
    }

    //House animation Data
    this.house = {
        houseImg: undefined,
        toggle: undefined,
        currentY: undefined,
        start: 0,
        right: this.width - houseWidth,
        bottom: this.height - houseHeight,
        startY: function(){
            return this.bottom + houseWidth / 2.4
        },
        startX: function(){
            return this.right
        },
        begin: function(){
            menData.lastPosY = (houseHeight / 2.24) - starryNight.images[0].height
            ctx.drawImage(this.houseImg, this.startX(), this.startY(), houseWidth, houseHeight )
        },
        rise: this.height / 2,
        moveLeft: window.innerWidth < 500 ? this.width / 20 : this.width / 8
    }

    //Star Trail Data
    var lastPosition = function(xPos, yPos, radius, alpha){
        trailData.push({
            x: xPos,
            y: yPos,
            radius: radius,
            alpha: alpha
        })
        if(trailData.length > 25) trailData.shift()
    }

    this.randomMax = function(min, max){
        return Math.floor( Math.random() * (max - min) + min )
    }

    //Adds data for Shooting star
    this.addData = function(){
        for(let i = 0; i < 8; i++){
            var measurements = {
                // Starts randomly on the x axis
                delay: i === 0 ? 0 : this.randomMax(1, 2),
                x: this.randomMax(0, this.width/2),
                y: this.randomMax(200, this.height),
                radius: window.innerWidth < 768 ? this.randomMax(5, 13) : this.randomMax(8, 16),
                distance: this.width + 100,
                globAlpha: 1,
                opac: 1,
                endPos: this.randomMax(100, this.width),
                start: 0,
                time: 0,
                explodeStart: 0,
                explodeSize: window.innerWidth < 768 ? 20 : 35
            }
            data.push(measurements)
           
        }
    }.bind(this)

    //When prototype.toggle = false this automatically gets ran to be able to run animation again
    this.restoreData = function(){
        data = []
        trailData = []
        j = 0
        this.addData()
        menData.begin = null
    }

    function drawHouse(image,timestamp){
        if(!image.start) image.start = timestamp
        var runtime = timestamp - image.start
        var progress = runtime / 2000

        var distance = image.rise * progress
        
        //Floating in place
        if(image.currentY){

            image.toggle ? image.x = image.currentX - distance  : image.x = image.currentX + distance
            image.toggle ? image.y = image.currentY + distance  : image.y = image.currentY - distance
        }
        
        if(distance >= image.rise){
            //Makes currentY true and updates postion of the image
            image.currentY = image.y
            image.currentX = image.x
            image.toggle ? image.toggle = false : image.toggle = true
            image.start = 0
            image.rise = 50

        }
        //Ends the first rise of the image
        if(!image.currentY) {
            image.x = image.startX() - (image.moveLeft * progress)
            image.y = image.startY() - (image.rise * progress)
        }

        ctx.drawImage(image.houseImg, image.x, image.y, houseWidth, houseHeight )
    }

    function drawStars(cir){
        ctx.save()
        ctx.globalAlpha = cir.alpha

        ctx.beginPath();
        ctx.arc(cir.xPos, cir.yPos, cir.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 255, 73, ' + cir.opacity + ')'
        ctx.fill();
        ctx.restore()
        lastPosition(cir.xPos, cir.yPos, cir.radius, cir.alpha)
    }

    function drawTrail(trail){
        ctx.save()
        ctx.globalAlpha = 0.2
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, trail.rad, 0, 2 * Math.PI, true);
        ctx.fillStyle = 'rgba(238,'+trail.color+', 6, ' + trail.fade + ')'
        ctx.fill();
        ctx.restore()
    }
    function drawExplosion(circle, timestamp){
                
        if(!circle.explodeStart) circle.explodeStart = timestamp
        var runtime = timestamp - circle.explodeStart
        var progress = runtime / 400
        var ease = easeOut(progress)
        ctx.beginPath()
        ctx.arc(circle.xPos, circle.yPos, 0 + (circle.explodeSize * ease), 0, 2 * Math.PI, true)
        ctx.fillStyle = 'rgba(249, 255, 0, ' + (1 - (.9 * progress) ) + ')'
        ctx.fill()
            
    }
    function drawMen(men){

        if(menData.j >= 4 && menData.j <= 5){
            ctx.translate(men.translateX, men.translateY);
            ctx.rotate(men.rotate * Math.PI / 180);
            ctx.drawImage(men.img, -men.width/2, -men.height, men.width, men.height)
            ctx.setTransform(1,0,0,1,0,0)
        }else{ 
            ctx.save()
            ctx.globalAlpha = men.opac
            ctx.beginPath();
            ctx.arc(men.arcX, men.arcY, men.arcRadius, 0, 2 * Math.PI);
            ctx.fillStyle = "#000"
            ctx.fill();
            ctx.drawImage(men.img, men.x, men.y, men.width, men.height)
            ctx.restore()
        }
    }

    var draw = function(timestamp){
        if(!StarryNight.prototype.toggle){
            return this.restoreData()
        } 

        //House
        var image = this.house

        ctx.clearRect(0, 0, this.width, this.height)
        
        //Men running start , Stars start after house gets to top. 
        if(image.currentY){

            //**  START OF STARS  **/

            // Draws the trail opacity  
            if(menData.j >= 1){
                for(let i = 0; i < trailData.length; i++){
                    var trail = trailData[i]
                    var fadeSize =  i / trailData.length

                    //Trail tapers as it goes.
                    var radiusTaper =   (trail.radius-2) / trailData.length
                    trail.color = 240 - (i+j)
                    trail.fade = i / trailData.length

                    //Tapers down the raidus of the trail
                    trail.rad = (trail.radius = trail.radius - radiusTaper )
                    // trail.rad = trail.radius
                    drawTrail(trail)
                }

                //Draws stars
                for(let i = 0; i < data.length; i++){
                    var circle = data[i];
                    
                    if( j >= i ){
                        
                        if(!circle.start) circle.start = timestamp
                        let runtime = timestamp - circle.start
                        let progress = runtime / 2000
                        var ease = easeOut(progress)
                        circle.time = (circle.delay - ease)

                        //If the current circle delay = progress draws next circle, (random drawing look)
                        if(circle.time <= 0){

                            //current circle set to undefined keep from running again
                            circle.delay = undefined
                            j++
                        }
                        circle.alpha = circle.globAlpha - (1*progress)
                        circle.opacity = circle.opac -  (.9*progress) 
                        // circle.duration = ease
                        
                        if(j%3 !==0 && menData.j >= 1){
                            circle.xPos = circle.x + (circle.endPos * ease)
                            circle.yPos = 0 + (circle.y * ease)
                            ctx.globalCompositeOperation = 'destination-over'
                        }else {
                            circle.xPos = circle.x + (circle.endPos * ease)
                            circle.yPos = 0 + (circle.y * progress)
                            ctx.globalCompositeOperation = 'source-over'
                        }
                    
                        drawStars(circle)

                        //Explosion start
                        if(circle.xPos > image.x && circle.yPos > image.y){

                            drawExplosion(circle, timestamp)
                        
                        }
                    
                        if(j === data.length) {
                            j = 0
                            data = []
                            trailData = []
                            this.addData()
                        }
                    }
                }
            }
            //**  START OF MEN  **/
            var menLength = starryNight.images.length-1

            for(let i = 0; i < menLength; i++){ 
                var men = starryNight.images[i]
         
                if(!menData.begin) menData.begin = timestamp
                var runtime = timestamp - menData.begin
                var progress = Math.min(runtime / 2000, 1)

                //First walk out
                if(menData.j === 0) {
                    menData.start = parseInt( ( progress * 15).toFixed(0) );
                    menData.distanceX = window.innerWidth < 768 ? 95 : 205
                    
                }
                //Second Walk stands still
                if(menData.j === 1){
                    //Starts and ends with last dude
                    menData.start = 15
                    // Keeping count at last man instead of counting through them to animate
                    menData.distanceX = 0
                } 

                //Third walk down and to the end
                if(menData.j === 2){
                    menData.start = parseInt( ( progress * 15).toFixed(0) );
                    men.walkDown = Math.min( ( progress * 6), 1 ) * menData.stepDown
                    // menData.distanceX = 250
                    menData.distanceX = window.innerWidth < 768 ? 159 : 250
                } 

                //Looks down
                if(menData.j === 3){
                    var headIterate = Math.min(runtime / 1000, 1)

                    //updates men.walkdown that gets ran before back to 0
                    men.walkDown = 0
                    menData.start = 16
                    menData.distanceX = 0
                    men.arcX = (image.x + ( menData.lastPosX + (men.width/2+2) )) + ( menData.arcStartX * headIterate )
                    men.arcY = image.y + ( menData.lastPosY+ 4) + ( menData.arcStartY * headIterate )
                    men.arcRadius = menData.headArc 
                }
                //Rotates back and forth
                if(menData.j === 4){
                    //2nd rotated position
                    var newRotatedPos = menData.rotatedPos - ( (menData.rotateDegree * iterate ) - menData.rotatedPos)
                    menData.start = 14

                    menData.distanceX = 0

                    men.translateX = image.x + (menData.lastPosX + men.width/1.8)
                    men.translateY = image.y + (menData.lastPosY + men.height)
                    var iterate = Math.min( ( progress * 3), 3 )
                    
                    if(menData.rotatedPos <= menData.rotateDegree){
                        menData.rotatedPos = (menData.rotateDegree * iterate) 
                        men.rotate  =  menData.rotatedPos

                    }else {
                        //Rotate back and forth
                        if(newRotatedPos >= 0) men.rotate = newRotatedPos
                        if(newRotatedPos <= 0) men.rotate = -newRotatedPos;

                    }
                    
                    //updates roatedPos for mendata.js = 5 to be used below
                    if(progress === 1){
                        men.arcRadius = 0
                        menData.roatedPos = men.rotate
                    }
                }
                //Falls Down
                if(menData.j === 5){
                    menData.start = parseInt( ( progress * 10).toFixed(0) );

                    men.translateX = image.x + (menData.lastPosX + men.width / 2) + ( (this.width / 6 ) * progress )
                    men.translateY = image.y + (menData.lastPosY + men.height)  + ( (this.height / 2) * progress )
                    men.rotate = menData.roatedPos + (180 * progress)
                    menData.distanceX = 0
                    if(progress === 1) men.opacity = 0
                }
                if(menData.j === 6){
                    
                    men.opac = men.opacity + (1 * progress)
                }
                
                if(men.startPos === menData.start){ 

                    //Constanatly updates men location on the House
                    var lastX = menData.lastPosX + ( menData.distanceX * progress );
                    var lastY = menData.lastPosY + ( men.walkDown || 0 )

                    men.x = image.x + (menData.lastPosX + ( menData.distanceX * progress) )
                    men.y = image.y  + (menData.lastPosY + (men.walkDown || 0) )
                
                    drawMen(men)
            
                    if(progress < 1){

            
                    }else{
                        //Resets or updates positions
                        menData.lastPosX = lastX
                        menData.lastPosY = lastY
                        menData.j++
                        menData.begin = 0
                        menData.start=0
                    }
                }
            }
        };
        drawHouse(image,timestamp)

        requestAnimationFrame(draw)

    }.bind(this);

    document.querySelector('.animations .start-canvas').addEventListener('click', function(){

        StarryNight.prototype.toggle = true
        requestAnimationFrame(draw)

    }.bind(this))

     document.querySelector('.animations .stop-canvas').addEventListener('click', function(){

        StarryNight.prototype.toggle = false
    })
}

StarryNight.prototype.loadImages = function(){
    var height = window.innerWidth < 768 ? 60 : 80
    var width = window.innerWidth < 768 ? 48 : 64
    var $this = this
    var count = 0;
    var images = []
    var ext = isFirefox ? "png" : "svg";
 
    var men = [         
        {src: "images/men/zero."+ext, height: height, width: width},
        {src: "images/men/one."+ext, height: height, width: width},
        {src: "images/men/two."+ext, height: height, width: width},
        {src: "images/men/three."+ext, height: height, width: width},
        {src: "images/men/four."+ext, height: height, width: width},
        {src: "images/men/five."+ext, height: height, width: width},
        {src: "images/men/six."+ext, height: height, width: width},
        {src: "images/men/seven."+ext, height: height, width: width},
        {src: "images/men/eight."+ext, height: height, width: width},
        {src: "images/men/nine."+ext, height: height, width: width},
        {src: "images/men/ten."+ext, height: height, width: width},
        {src: "images/men/eleven."+ext, height: height, width: width},
        {src: "images/men/twelve."+ext, height: height, width: width},
        {src: "images/men/thirteen."+ext, height: height, width: width},
        {src: "images/men/fourteen."+ext, height: height, width: width},
        {src: "images/men/fifteen."+ext, height: height, width: width},
        {src: "images/men/headless."+ext, height: height, width: width},
        {src: "images/men/house-floating."+ext}
    ];

    for(let i = 0; i < men.length; i++){
        
        var img = new Image();
        
        try{
            throw i
        }catch(i){
            img.onload = function(){
   
                images.push({
                    img: this,
                    height: men[i].height,
                    width: men[i].width,
                    start: 0,
                    startPos: i
                })
              
                if(++count === men.length){
                    
                    //Sorts the men array in order due to loading images differently
                    images.sort(function(a,b){
                        return a.startPos - b.startPos;
                    })

                    starryNight.images = images;
                    //updates the undefined house property with this img
                    $this.house.houseImg = img;
                    $this.addData()
                    $this.house.begin()
                }
            }
            img.src = men[i].src
        }
    }
};
function setTechnologiesWidth(canvasWidth, svgHeight){
    
        let canvas = document.getElementById('techIcons');
        if(wW < 768)  canvas.style.width = canvasWidth * .90 + 'px'
        if(wW < 540)  canvas.style.width = canvasWidth * .75 + 'px'
        canvas.style.top = svgHeight - canvas.getBoundingClientRect().height + 'px'
    
}
var Technologies = function() { 
    var svgPageWidth =  _('svg-page').getAttribute('width')
    var svgPageHeight = _('svg-page').getAttribute('height')
    var width = svgPageWidth < 970  || svgPageHeight < 800;
    this.canvas = document.getElementById('techIcons');
    
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width = svgPageWidth;
    this.height = this.canvas.height = svgPageHeight;
    this.start = 0;
    this.start;
    this.duration = 1000;
    this.bodyData = [];
    this.icons;
    this.j = 0;
    var newTechnologies = this;
    //Sets canvas width again
    if(wW < 768) setTechnologiesWidth(this.width, svgPageHeight)
    this.data = {
        addBodyData:  function(){
    
            if(width){
                //Body location X and Y
                return {
                    x : newTechnologies.width/2  - (newTechnologies.bodyData[1].width / 2.2),
                    y : (newTechnologies.height - newTechnologies.bodyData[1].height) ,
                    translateX: newTechnologies.width/2 - (newTechnologies.bodyData[3].width/2)+60,
                    translateY: (newTechnologies.height - newTechnologies.bodyData[1].height) +70,
                    headX: newTechnologies.width/2  - (newTechnologies.bodyData[1].width / 2.2) + 41,
                    headY: (newTechnologies.height - newTechnologies.bodyData[1].height) - 61
                }
            }else{
                return {
                    x : newTechnologies.width/2  - (newTechnologies.bodyData[1].width / 2.2),
                    y : (newTechnologies.height - newTechnologies.bodyData[1].height),
                    //Translate head rotation
                    translateX: newTechnologies.width/2 - (newTechnologies.bodyData[3].width/2)+85,
                    //Translate head rotation
                    translateY: (newTechnologies.height - newTechnologies.bodyData[1].height) + 100,
                    headX: newTechnologies.width/2  - (newTechnologies.bodyData[1].width / 2.2) + 57,
                    headY: (newTechnologies.height - newTechnologies.bodyData[1].height) - 87
                }
            }
        },
        rotate: -140,
        j: 0,
        bookHeight: 200
    }
    
    this.sprites = []
       
        var ext = isFirefox ? "png" : "svg";

        var bodyWidth = width ? 1.3 : 1.8;
        var bodyHeight = width ? 1.3 : 1.8;
        var src = ["images/top-head."+ext, "images/face-body."+ext, "images/book."+ext, "images/full-body."+ext]

        if(width){
            var imgWidth = [284.5 ,400, 320.96, 400]
            var imgHeight = [170.9, 483.7, 226.8, 564.66]
        }else{
            var imgWidth = [553.5, 778.2, 629.9, 778]
            var imgHeight = [332.49, 941, 443.27, 1098.9]
        }
    
        this.imgIcons = [
                {src: "images/icons/adobe-50-50."+ext, width: 40, height: 40},
                {src: "images/icons/after-effects-52-52."+ext, width: 40, height: 40},
                {src: "images/icons/artistic-52-54."+ext, width: 40, height: 42},
                {src: "images/icons/bootstrap-50-50."+ext, width: 40, height: 40},
                {src: "images/icons/camera-52-52."+ext, width: 40, height: 40},
                {src: "images/icons/cloud-64-49.5."+ext, width: 42, height: 32.5},
                {src: "images/icons/code-60-53."+ext, width: 43, height: 38},
                {src: "images/icons/css-55-52."+ext, width: 42, height: 39.8},
                {src: "images/icons/design-52-52."+ext, width: 40, height: 40},
                {src: "images/icons/git-hub-55-55."+ext, width: 43, height: 43},
                {src: "images/icons/google-drive-72-64."+ext, width: 46, height: 40.8},
                {src: "images/icons/illustrator-52-52."+ext, width: 40, height: 40},
                {src: "images/icons/js-55-56."+ext, width: 41, height: 42},
                {src: "images/icons/node-50-50."+ext, width: 40, height: 40},
                {src: "images/icons/nodejs-60.5-37."+ext, width: 55, height: 33.6},
                {src: "images/icons/npm-70-27.2."+ext, width: 65, height: 25.2},
                {src: "images/icons/photoshop-52-52."+ext, width: 40, height: 40},
                {src: "images/icons/php-65-35."+ext, width: 45, height: 24.2},
                {src: "images/icons/python-57-58."+ext, width: 40, height: 40.7},
                {src: "images/icons/react-59-52."+ext, width: 42, height: 37},
                {src: "images/icons/server-55-58."+ext, width: 40, height: 40}
        ]

    this.loopImgs = function(){
        var load = []

        for(var j = 0; j < 4; j++){
            load.push({
                src: src[j],
                width: imgWidth[j] / bodyWidth,
                height: imgHeight[j] / bodyHeight
            })
        }
        var icons = this.imgIcons

        for(var i = 0; i < icons.length; i++){
            var w = !width ? icons[i].src.replace(/^([a-z\/]+)\/([a-z-?]+)-(\d\d)(.+)/ig,"$3") : icons[i].width
            var h = !width ? icons[i].src.replace(/^(.+)(\d{2})(.+)/ig,"$2") : icons[i].height

            load.push({
                src: icons[i].src,
                width: parseInt(w),
                height: parseInt(h)
            })
        }
        return load
    };
    function random(min, max){
        return Math.floor(Math.random() *  (max - min ) + min)
    };
    this.addData = function(n){
        var icons = this.icons
        for(var i = 0; i < n; i++ ){
            
            this.sprites.push({
                //Each icon draws for ever 30 mil sec
                timing:  30,
                endX: random(0, this.width/2 ),
                endY: random(0, this.height - (this.bodyData[1].height + 50) ),
                start: 0,
                speed: random(4000, 9000),
                x: this.width / 2,
                y: this.data.addBodyData().y + 15, // plus 100 the sprite size
                img: this.icons[i%icons.length].img,
                width: this.icons[i%icons.length].width,
                height: this.icons[i%icons.length].height,
                X: 0,
                Y: 0,
                staticSpeed: 0,
                rotate: random(180, 1440)
            })
        }
    }
}

Technologies.prototype.rotateHead = function(rotate, pos){
    var img = this.bodyData
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
    this.ctx.drawImage(img[1].img,  pos.x, pos.y, img[1].width, img[1].height) //Face body
    this.ctx.translate(  pos.translateX, pos.translateY); // Translate 
    this.ctx.rotate(rotate * Math.PI/180)
    this.ctx.translate( -pos.translateX,-pos.translateY ); // Translate back
    this.ctx.drawImage(img[0].img,  pos.headX ,  pos.headY, img[0].width, img[0].height)  //Head draw in translated canves
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
};

Technologies.prototype.drawBook = function(data, pos){
    var img = this.bodyData
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
    this.ctx.globalCompositeOperation = 'destination-over'
    this.ctx.drawImage(img[1].img,  pos.x, pos.y, img[1].width, img[1].height) //Face body
    this.ctx.translate(  pos.translateX, pos.translateY); // Translate 
    this.ctx.rotate(-140 * Math.PI/180)
    this.ctx.translate( -pos.translateX,-pos.translateY ); // Translate back
    this.ctx.drawImage(img[0].img,  pos.headX ,  pos.headY, img[0].width, img[0].height)  //Head draw in translated canves
    this.ctx.setTransform(1,0,0,1,0,0);

    this.ctx.translate(  pos.translateX + img[2].width / 2, pos.translateY); // Translate  
    this.ctx.scale(data.scale, data.scale); //Scales book
    this.ctx.translate( -pos.translateX - img[2].width / 2 ,-pos.translateY ); // Translate back for
    this.ctx.drawImage(img[2].img, data.bookX, data.bookY, img[2].width, img[2].height) //book image
    this.ctx.setTransform(1,0,0,1,0,0);
};

Technologies.prototype.drawBody = function(data, pos ){
    var img = this.bodyData

    this.ctx.drawImage(img[1].img,  pos.x, pos.y, img[1].width, img[1].height) //Face body
    this.ctx.translate(  pos.translateX, pos.translateY); // Translate 
    this.ctx.rotate(-140 * Math.PI/180)
    this.ctx.translate( -pos.translateX,-pos.translateY ); // Translate back
    this.ctx.drawImage(img[0].img,  pos.headX ,  pos.headY, img[0].width, img[0].height)  //Head draw in translated canves
    this.ctx.setTransform(1,0,0,1,0,0);
    this.ctx.translate(  pos.translateX + img[2].width / 2, pos.translateY); // Translate  
    this.ctx.scale(1.05, 1.05);
    this.ctx.translate( -pos.translateX - img[2].width / 2 ,-pos.translateY ); // Translate back
    this.ctx.drawImage(img[2].img, data.bookX, data.bookY, img[2].width, img[2].height) //book image
    this.ctx.setTransform(1,0,0,1,0,0);
};

Technologies.prototype.drawIcons = function(spr){
    this.ctx.setTransform(1,0,0,1, spr.X, spr.Y);
    this.ctx.rotate(spr.turn * Math.PI/180)
    this.ctx.drawImage(spr.img,-spr.width/2, -spr.height/2, spr.width, spr.height );
    this.ctx.setTransform(1,0,0,1,0,0)
};

Technologies.prototype.draw = function(timestamp){
    if(!this.toggle) return
    var width = this.width < 970  || this.height < 800
    var img = this.bodyData
    var data = this.data;
    var pos = data.addBodyData();
    
  
    if(!this.start)

        this.start = timestamp
        var runtime = timestamp - this.start
        var progress = Math.min(runtime / this.duration, 1)
        
        
        
        if(progress < 1 && data.j <= 1){
      
            if(width){
                //Updates x loactions and y location of book
                data.bookX = ((pos.translateX)-40) - (0)
                data.bookY = ((pos.translateY)-110) - (60*progress);
            }else{
                //Updates x loactions and y location of book
                data.bookX = ((pos.translateX)-60) - (0);
                data.bookY = ((pos.translateY)-180) - (60*progress);
                
            }
            //Rotate head
            if(data.j === 0){

                var rotate = data.rotate*progress;
                this.rotateHead(rotate,pos)
            }
            //Push up book
            if(data.j === 1){
                this.duration = 500

                data.scale = .5 + (.55 * progress )
                this.drawBook(data,pos)
            }
        }else{

            //Draw Icons
            if(data.j === 2){
                this.ctx.setTransform(1,0,0,1,0,0);
                this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
                this.drawBody(data, pos)

                var sprites = this.sprites.length
               
                for(var i = 0; i < sprites; i++ ){
                    
                    var spr = this.sprites[i]
                    
                    if(i <= this.j){
                
                        spr.staticSpeed++
                    
                        if(!spr.start) spr.start = timestamp
                        var run = timestamp - spr.start
                        var prog = run / spr.speed
    
                        if(i%2){
                            //left up
                            spr.X = spr.x - (spr.endX * prog)
                            spr.Y = spr.y - (spr.endY * prog)
                            spr.turn = -spr.rotate * prog
            
                        }else{
                            //right up;
                            spr.X = spr.x + (spr.endX * prog)
                            spr.Y = spr.y - (spr.endY * prog)
                            spr.turn = spr.rotate * prog
                        } 

                        spr.totalX = spr.X
                        spr.totalY = spr.Y
            
                        if( (spr.totalX+spr.width) <= 0 || (spr.totalY+spr.height) <= 0 || spr.totalX > this.width+spr.width) {
                            
                            //Resets values, for same icon to run again
                            this.sprites[i].start = 0
                        }
                        this.drawIcons(spr)
                        if(spr.staticSpeed === spr.timing) this.j++
                    }
                }
            }else{
                this.start = 0
                data.j++
            }
        }
        requestAnimationFrame(this.draw.bind(this))
};


Technologies.prototype.loadImages = function(){
    var $this = this;
    var counter = 0;
    var loadedImages = 0;
    var imgs = [];
    
    this.loopImgs().forEach(function(image, i){
        counter++;
        var img = new Image()

        img.onload = function(){

            //Width or height doesn't exist updates 0 for it
            imgs.push({img: this, i, width: image.width , height: image.height })

            if(++loadedImages >= counter){     
                imgs.sort(function(a,b){
                    return a.i - b.i
                })
                //When Icons load full body image gets added
                $this.ctx.drawImage(imgs[3].img, ($this.width/2) - imgs[1].width / 2.2, ($this.height) - imgs[3].height, imgs[3].width, imgs[3].height) //Full-body image
        
                var bodyImgs = imgs.splice(0,4)
                
                $this.bodyData = bodyImgs
                $this.icons = imgs
            
                //Icon data
                $this.addData(imgs.length)
            }
        }
        img.src = image.src;
    })
};


function SvgPage(){
    var svgCloseButton = document.getElementsByClassName('close-btn svg-button')[0]
    var svgCircle = document.getElementsByClassName('svg-circle')[0]
    var toggle, btnOpen;
    var hovermap = hoverMap()
    
    var removeGooey = function(e){
        setTimeout( () => {
            hovermap[1](e)
        },1400)
        
        //     var dist = hovermap[1](e)[0]; // Position distance of show-icon gooey
        //     hovermap[0]( dist, true )  // handler(e) function

    }
    this.start;
    //Page animated down removes circle to be animated again
    this.animateEnd = function(e){
         _('interactive-container').style.pointerEvents = 'auto' 

        if(toggle){
            //Safari only
            _('svg-page').style.visibility = 'hidden'
            svgCircle.classList.remove('circle-animate');

            _(btnOpen)[0].style.display = 'none'
            document.querySelector('g.'+btnOpen+' .items').classList.remove('items-active')
            
            toggle = false
        }   
    }

    this.animateCircle = function(timestamp, elem){
        
        if(!this.start) this.start = timestamp;

            var runtime = timestamp - this.start;
            var progress = Math.min(runtime / this.speed, 1)
            isFirefox ? svgCircle.setAttribute('r', 1500 * progress) : svgCircle.style.transform = 'scale('+ (0 + (1*progress) )+ ')'
       
        if(progress < 1) {
            requestAnimationFrame(function(timestamp){
                this.animateCircle(timestamp, elem)
            }.bind(this))
        }else {
            //Canvas fades in after page is animated open
            document.querySelector('g.'+elem+' .items').classList.add('items-active')
            document.getElementsByClassName(elem)[1].parentElement.classList.add('showCanvas')
            this.start = null;
        } 
    }
    var closeButtonShow = function(num){
        var opposite = !num ? -56 : 0
         _('x-circle').style.transform = 'translateX('+ num +'px)'
         _('line')[0].style.transform = 'translateX('+ opposite +'px) rotate(-45deg)'
         _('line')[1].style.transform = 'translateX('+ opposite +'px) rotate(45deg)'
    }

    // Open page function
    this.openModals = function(e){
        
        try{
            btnOpen = e.target.id
        }catch(err){
            btnOpen = e
        }
  
        _('interactive-container').style.pointerEvents = 'none' 
        event = e;
        _(btnOpen)[0].style.display = 'block'
        closeButtonShow(-56)
        //Google 'Do Hyeon' font bug, function has to be ran again in view
        if(btnOpen === 'photo') slotMachine()
        //Throbbing Finger image icon
        if(btnOpen === 'design') document.getElementById('finger').classList.add('finger-scale')

        if(isSafari){

            toggle = true;
             _('svg-page').style.visibility = "visible"
            svgCircle.classList.add('circle-animate')

            svgCircle.onanimationend = function(){
      
                document.querySelector('g.'+btnOpen+' .items').classList.add('items-active')
                document.getElementsByClassName(btnOpen)[1].parentElement.classList.add('showCanvas')

            }

            //Closes the page animated down
            svgCloseButton.addEventListener('click', function(){
                toggle = true;

                //Automatically stops canvas 
                Stretch.prototype.toggle = false
                slotMachine.prototype.toggle = false
                StarryNight.prototype.toggle = false
                Technologies.prototype.toggle = false
              
                //Canvas / Items fades out
                document.getElementsByClassName(btnOpen)[1].parentElement.classList.remove('showCanvas')
                 
            })
        }else{
            toggle = false;

            requestAnimationFrame(function(timestamp){
                this.speed = 600;
                this.animateCircle(timestamp, btnOpen)
              
            }.bind(this))

            svgCloseButton.addEventListener('click', function(e){
                closeButtonShow(0)
                Stretch.prototype.toggle = false
                slotMachine.prototype.toggle = false
                StarryNight.prototype.toggle = false
                Technologies.prototype.toggle = false
                document.getElementsByClassName(btnOpen)[1].parentElement.classList.remove('showCanvas')

                setTimeout(function(){
                    isFirefox ? _('svg-circle').setAttribute('r', 0) : _('svg-circle').style.transform = 'scale(0)'
             
                    //Current SVG element hides
                    document.getElementsByClassName(btnOpen)[0].style.display = 'none'
                    document.querySelector('g.'+btnOpen+' .items').classList.remove('showCanvas')
                    // document.getElementsByClassName(btnOpen)[1].parentElement.classList.remove('showCanvas')
                },1100)
            });
        }
    }.bind(this);

    var popUpCards = function(){
        let open_modals = this.openModals

        let popUpcards = _('card-popups')
        for(let cards of popUpcards){
            cards.addEventListener('click', function(e){
                removeGooey(e)
                open_modals(this.attributes[3].value)
            })
        }
    }.bind(this)
    if(wW < 768) popUpCards()
    
    _('circle-thumbnails').addEventListener('click', function(e){
        if(wW < 768){
            hovermap[1](e)
        }else{
            removeGooey(e)
            this.openModals(e)
        }
        
         
    }.bind(this));
};
//Add to window object to be used for html page onend function
window.svgPage = new SvgPage();

function getPos(ele){
        
    var elemRect = ele.getBoundingClientRect();
    var mainSvg = document.getElementsByClassName('svg-page')[0].getBoundingClientRect();
    var elemLeft = (mainSvg.width - ( parseInt(ele.getAttribute('width') ) || elemRect.width) ) / 2

    return {
        width: elemRect.width,
        mainSvg: mainSvg,
        left: elemRect.left,
        top: elemRect.top,
        height: elemRect.height,
        //Places image's property left to the center of it's container (center of page)
        centeredLeft: elemLeft
    }
};
function adjustButton(){
    _('line')[0].setAttribute('width', '35')
    _('line')[0].setAttribute('x', '10.5')
    _('line')[0].setAttribute('y', '25')
    _('line')[1].setAttribute('width', '35')
    _('line')[1].setAttribute('x', '10.5')
    _('line')[1].setAttribute('y', '25')
    _('x-circle').setAttribute('r', '22')
}

//Different screen sizing , elements adjust to it
function adjustElements(){
    var pathD768 = "M565.1,0v900H0c0,0,0-75.3,0-192.4c0-211.7,0-303.7,0-533.1C0,50.5,0,0,0,0H565.1z";
    var pathD400 = "M390,800H0c0,0,0-87.3,0-161.3S0,84,0,47.3S0,0,0,0h390V800z";
    var smallSplines = ".42 0 1 1;.42 0 1 1;.42 0 1 1;.42 0 1 1;"
    var smallKeyTimes = "0; 0.20; 0.45; 1"
    var svg = document.getElementsByClassName('svg-page')[0]
    
    //Sets sizing for opening closing svg-page wave
    if(wH < 840 && wW){
        var svgWidth = wW < 500 ? wW - 20 : wW - 50;
        var svgHeight = wH < 680 ? wH - 15 : wH - 50;
    }else{
        var svgWidth = wW < 500 ? wW - 20 : wW - 50;
        var svgHeight = 840
    }

    if(wW <= 615){
        adjustButton()
         document.getElementById('path').setAttribute('d', pathD768)
        _('path').setAttribute('values', animate768)
        _('path').setAttribute('keyTimes', smallKeyTimes)
        _('path').setAttribute('keySplines', smallSplines)
    }

    if(wW <= 400){
        document.getElementById('path').setAttribute('d', pathD400)
        _('path').setAttribute('values', animate400)
    }

    if(wW >= 970 && wH){

        svg.setAttribute("height", svgHeight)
            
    }else {
        if(wH > 840){
            svg.setAttribute("viewBox", "0 0 "+ " "+svgWidth + " " + svgHeight); 
            svg.setAttribute("width", svgWidth)
            svg.setAttribute("height", svgHeight)

        }
        if(wH < 840){ 
            svg.setAttribute("viewBox", "0 0 "+ " "+svgWidth + " " + svgHeight); 
            svg.setAttribute("width", svgWidth)
            svg.setAttribute("height", svgHeight)
        }
    }

    if(wW && wH){
       
        //Add to element when more canvases are added to HTML
        var elementG = document.querySelectorAll('g.photo, g.developer, g.design, g.animations, g.technologies')

        elementG.forEach(function(el, i){
            var groupName = el.classList[0];
      
            if(groupName === 'photo'){
 
                document.getElementById('canvas-area').setAttribute('transform','translate(157, 0)');
              
                Array.prototype.forEach.call(el.children,function(elem, i){
                   
                    //Camera SVG
                    if(i === 0){
                        
                        let newHeight = newSize('width', 700, elem).height
                 
                        elem.setAttribute('width', 700)
                        elem.setAttribute('height', newHeight)

                        let pos = getPos( elem );
                        var setAttributeY = pos.mainSvg.height - newHeight - 5
             
                        elem.setAttribute('x', pos.centeredLeft)
                        elem.setAttribute('y', setAttributeY)

                        if(wW <= 500 || wH <= 800){
                      
                            elem.style.visibility = 'hidden'
                        } 
                    }
                    //ForeignObject holds canvas
                    if(i === 2){
                        
                        if(wW < 970){
                            var canvasArea = document.getElementById('canvas-area')
                          
                            let pos = getPos( canvasArea )
                        
                            if(wH < 640 && wW < 800){

                                elem.setAttribute('y', 240)
                         
                            }else{
                            
                                //firefox
                                !isFirefox ? elem.setAttribute('y', svg.getAttribute('height') - pos.height - 16) : (svg.getAttribute('width') / 2) - 397.6 / 2
                                 elem.setAttribute('y', svg.getAttribute('height') - 397.6 - 16)
                                 // elem.setAttribute('y', 250)
                            }
                                
                            elem.setAttribute('width', 360)
                            elem.setAttribute('height', 360)
                            !isFirefox ? elem.setAttribute('x', pos.left -6) : elem.setAttribute('x', (svg.getAttribute('width') / 2) - 397.6 / 2 + 20 )
                            // elem.setAttribute('y', svg.getAttribute('height') - pos.height - 16)
                        }else {
                            var posHeight = getPos( elem )
                            let width = parseInt( elem.getAttribute('width') )
                            var elemLeft = (posHeight.mainSvg.width - width) - 15;
                   
                            elem.setAttribute('y', 60)
                            elem.setAttribute('x', elemLeft)
                        }

                        if(wW <= 500) {
                            let thisPos = getPos( elem )
                            elem.setAttribute('x', thisPos.centeredLeft)
                            
                            if(wH < 620){
                                elem.setAttribute('y', 200)
                            } 
                        }
                    }
                    //Items
                    if(i === 1){
                        var pos = getPos( document.getElementById('canvas-area') )
                    
                        elem.childNodes[1].setAttribute('width', 400)
                        elem.childNodes[1].setAttribute('height', 235)  
                        elem.childNodes[1].setAttribute('x', 20)
                        if(wW < 970){
                            elem.childNodes[1].setAttribute('y', 0)
                        }else{
                            elem.childNodes[1].setAttribute('y', 100)
                        }
                        if(window.innerWidth <= 500) {
                            elem.childNodes[1].setAttribute('width', 335)
                            elem.childNodes[1].setAttribute('x', 10)
                            var thisPos = getPos( elem.childNodes[1] )
                        }
                    }
                })
            };
            if(groupName === 'developer'){
                Array.prototype.forEach.call(el.children, function(elem, i){
             
                    //foreignObject holds canvas
                    if(i === 1){
                        if(wW < 970){
                            elem.setAttribute('width',400);
                            elem.setAttribute('height', 375);
                        }
                        var pos = getPos(el.children[0])
                        elem.setAttribute('y', 200)
                         
                        if(window.innerWidth <= 850){
                            if(wH < 690){
                                elem.setAttribute('y', 25 )
                                elem.setAttribute('x', 5 )
                            }else{
                                elem.setAttribute('x', 50)
                                elem.setAttribute('y', 75)
                            }
                        }
                        if(window.innerWidth < 505){
                            if(wH < 690){
                                elem.setAttribute('y', 50 )
                                elem.setAttribute('x', 0 )
                            }
                            elem.childNodes[1].setAttribute('width',360);
                            elem.setAttribute('height', 375);
                   
                            var thisPos = getPos(elem.childNodes[1])
                            elem.setAttribute('y', 50 )
                            elem.setAttribute('x', 5 )
                        } 
                    }
                    //items
                    if(i === 0){
                        if(window.innerWidth < 505){
                            elem.childNodes[1].setAttribute('x', 10)
                            elem.childNodes[1].setAttribute('y', 424)
                            elem.childNodes[1].setAttribute('width', 370)
                        } 
                        if(wW > 505 && wW < 850 ){
                            if(wH < 690){
                                elem.childNodes[1].setAttribute('y', 425)
                                elem.childNodes[1].setAttribute('width', 370)

                            }else elem.childNodes[1].setAttribute('y', 460)
                        }
                    } 
                })
            }
            if(groupName === 'design'){
                var items = el.children[0].children[0]
                var canvasArea = el.children[1]
       
                if(wH && wW > 970){

                    if( canvasArea ){
                        if(wW > 1200){
                            canvasArea.setAttribute('width', 580)
                            canvasArea.setAttribute('height', 580)
                        }
                        canvasArea.setAttribute('y', 80)
                    }
                    if( items ){
                        items.setAttribute('y', 200)
                    }
         
                }else if( wW > 750 && wW < 970){
             
                    if( canvasArea ){
                        //For Safari overflow not working
                        wW < 810 ? canvasArea.setAttribute('x', 210) : canvasArea.setAttribute('x', 255)
                        canvasArea.setAttribute('y', 160)
                        if(wH < 703) {
                            //For Safari overflow not working
                            canvasArea.setAttribute('height', 450)
                        }
                    }
                    if( items ){
                        items.setAttribute('y', 0)
                    }
                }else {
                    items.setAttribute('y', 0)
                    items.setAttribute('x', 10)
                    wH < 700 ? items.setAttribute('height', 250)  :  items.setAttribute('height', 260)
                    items.setAttribute('width', 340)

                    var height = items.getAttribute('height')
                    canvasArea.setAttribute('y', height)

                    wW < 600 ? canvasArea.setAttribute('width', 400) : canvasArea.setAttribute('width', 500)
                    wW < 600 ? canvasArea.setAttribute('height', 400) : canvasArea.setAttribute('height', 500)

                    var canvasPos = getPos(canvasArea)
                    canvasArea.setAttribute('x', canvasPos.centeredLeft)
                    //For safari, so photo doesn't show the overflow
                    canvasArea.setAttribute('height', svg.getAttribute('height') - items.getAttribute('height'))
                } 
            }
            if(groupName === 'animations'){
                var items = el.children[0].children[0]
                var canvasArea = el.children[1]
                var svgPageHeight = svg.getAttribute('height')

                if(wH && wW > 970){
                    canvasArea.setAttribute('height', svgPageHeight)
    
                }
                if(wW < 768){
                    let bottom = ( svg.getAttribute('height') - 310 ) / 2
                    items.setAttribute('x', 15)
                    items.setAttribute('y', bottom)
                    items.setAttribute('height', 320)
                    items.setAttribute('width', 370)
                }else{
                    canvasArea.setAttribute('height', svgPageHeight)
                }
            }
            if(groupName === 'technologies'){
                var items = el.children[0].children[0]
                var canvasArea = el.children[1]

                if(wW < 650 && wH < 655){
                    var bottom = ( svg.getAttribute('height') - 370 ) / 2
                    items.setAttribute('y', bottom)
                    items.setAttribute('x', 5)
                }
            }
        })
    }  
};






if(wW < 970 || wH < 800){
    adjustElements();
}else {
    //Adds margin between full height threshhold for svg-page
    if(wH < 840){
       _('svg-page').setAttribute('height', wH - 40) 
    }
    if(wW < 1000){
        _('svg-page').setAttribute('width', wW - 40) 
    }
   var designCanvas = document.querySelector('.design .item-canvas')
   designCanvas.setAttribute('width', 580)
   designCanvas.setAttribute('height', 580)
}

//Moves close button to right of svg-page
function placeCloseButton(){
    
    var btnPos = getPos( _('close-btn') )
    _('close-btn').style.transform = 'translateX('+ (btnPos.mainSvg.width - 56 )+'px)'
}
placeCloseButton();



function hoverMap(){
    var btnWrap = _('button-wrap')
    var dist;
    var lastDist;
    var currentPath; //Path to be removed when mouseout
  
    var mouseOut = function(dist){
        // dist from opening popups to remove pointer
        var pointerDist = typeof dist === 'number' ? dist : lastDist
  
        _('oval-pointer').style.transform = 'translate(-80px, 0px )'
        
        if(isFirefox){
          
            _('show-icon').style.transform = 'translate(-24px,' + pointerDist + 'px )' 
         
        }else if(isSafari){

             _('show-icon').style.transform = 'translate(-24px,' + pointerDist + 'px )'

        }else{

             _('show-icon').style.transform = 'translate(-22px,' + pointerDist + 'px )'

        }  
    };

    if(wW > 768) btnWrap.onmouseover = handler;
        
    function handler(e){
        dist = getDistance(e.target.className, e.target.id) 

        function getDistance(el,id) {
            var totalDist = function(n){
                return n * 37
            }
            var nodelist = _(el)
            var elArray = [].slice.call(nodelist)
         
           for(var i = 0; i < elArray.length; i++){
                if(elArray[i].id == id) return totalDist(i);
           }
        }
       

        function getPathElement(el, map_paths){
            var newPathArray = []
            var pathArray = [].slice.call( map_paths )
            
            //Puts elements in correct order
            for(var i = pathArray.length -1; i >= 0; i--){
                newPathArray.push(pathArray[i])
            }
 
            var target = document.getElementById(el)
            var targetArray = [].slice.call( _(target.className) )  

            for(var i = 0; i < targetArray.length; i++){
               if(targetArray[i] === target) return newPathArray[i];
            }
        };

        var animateGooey = function(){
                
            if( !_('show-icon').classList.contains('icon-transition') ){
                
                // transforms only up and down before out.
                _('show-icon').style.transform = 'translate(-22px,' + dist + 'px )'
              
                setTimeout(function(){
                    _('show-icon').classList.add('icon-transition')
                    _('show-icon').style.transform = 'translate(-15px,' + dist + 'px )'
                    _('oval-pointer').style.transform = 'translate(0px, 0px )'
                 
                },100)
            }else{
                _('show-icon').style.transform = 'translate(-15px,' + dist + 'px )'
                _('oval-pointer').style.transform = 'translate(0px, 0px )'
            }
        }

        var animatePathLines = function(path, map_paths){
            var classId = path.id.replace(/-sm$/ig, "");

            for (var i = 0; i < map_paths.length; i++) {
                 //Removes all classes before target element class gets added
                if(map_paths[i].classList.length === 2){

                    var className = map_paths[i].classList[1]
                    map_paths[i].classList.remove(className)
                }
            }
            path.classList.add(classId)
            return classId;
        }

        var removeCardsClass = function(target){
            
            const card = _('card-icon')
            let length = card.length

            while(length--){
                let styleTransform = +card[length].style.transform.replace(/([^-\d])/ig, '')
                if(styleTransform !== 0) card[length].style.transform = 'translateY(0px)'

            }
        }
        var animateCardsUp = function(path){
            
            const card = _('card-icon')
            let regEx = /-.+$/ig
            let target = path.id.replace(regEx, '')
            let length = card.length

            //If target also has 2 classList, remove that class and add p0opupcard
            while(length--){
                let cardParent = card[length].parentNode
                let styleTransform = +card[length].style.transform.replace(/([^-\d])/ig, '')

                if(target === cardParent.id.replace(regEx, '') ) {
                    // card[length].style.transform = 'translateY(-140px)'
   
                        card[length].style.transform = 'translateY(-140px)'
                   
                }else if(styleTransform !== 0){
                    card[length].style.transform = 'translateY(0px)'
                }
            }
        }

        function AnimateCircles(path, map_paths){
                     
            var circles = document.querySelectorAll('#pulse-circles circle')
            var paths = []
            //Removes all classes before target elements classes gets added
            for(let cir of circles){
                if(cir.classList.length > 1){
                    cir.classList.remove(cir.classList[1])
                } 
            }
            //Stops before error when not passing arguments from click handler
            if(!arguments.length) return;

            //Pairs circles and returns the pairs so classes can be added
            var pairCircles = function(){
                var cir = []
                for (var j = 0; j < circles.length; j+=2) {
                    
                    cir.push( [circles[j], circles[j+1]] )
                }
                return cir
            }
           
            for (var i = 0; i < map_paths.length; i++) {
                   
                paths.unshift( map_paths[i].id)
            }
               
            var index = paths.indexOf(path.id)
            var cirPairs = pairCircles()[index]

            cirPairs[0].classList.add('middle-pulse')
            cirPairs[1].classList.add('ring-pulse') 
        };

        var removeCircles = function(string){
            var activeCircles = document.querySelectorAll('.middle-pulse, .ring-pulse')

            for(let cir of activeCircles){
          
                cir.addEventListener('animationend', (e) => {
                   
                    e.target.classList.remove(e.target.classList[1])
                       
                })
            }
        }
        function removeAll(string){
            removeCircles(string)
            mouseOut(dist)
            removeCardsClass()
            try{
                //Path to be removed when mouseout
                document.getElementById(currentPath).classList.remove(currentPath)
            }catch(err){

            }
        }
        function handleMap(e){
           let target = e.target.classList.value
     
           //If click comes from opening svg modals
            if(target === 'card-color-st39' || wW > 768 && e.type === 'click'){

                return  removeAll(path)
                        
            }
            // mouse over
            if(e.target.id){
                //Start the path animated lines
                var map_paths = wW > 768 ? _('map-paths') : _('map-paths-sm')
                var path = getPathElement(e.target.id, map_paths)

                //Used to update translate for button location
                lastDist = dist
            
                animateGooey()
                currentPath = animatePathLines(path, map_paths)
                AnimateCircles(path, map_paths)
                animateCardsUp(path)
                     
                //Only runs after mouseover elements run first, then initiated. 
                _('interactive-container').onmouseover = function(e) {
                    if(e.target.className !== 'open-canvas-page' && wW > 768){
 
                        removeAll()
                    }
                }
            }
        }
      
        if (e.type == 'mouseover' && wW > 768) {
            handleMap(e)
        }else if(e.type === 'click'){
    
            handleMap(e)
        }
        return [dist]
    }
    return [mouseOut, handler] // To be able to use mouseOut function and handler function that returns dist to use for mouseOut Func
};

var toggleStars = {
    toggle: false
}

var robotSection = function(e){

    const stars = []
    var animateStars = function(){
            
        let canvas = document.getElementById('star-canvas');
        let ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        let randomWidth = () => {
            //max and min
            return Math.random() * (width/2 - width/9) + width/9
        }

        var NightStars = function(){
            
            let randomStart = randomWidth()

            this.duration = 2000 //used to delay stars
            this.radius = 13 + Math.random() * 5 //size of stars

            this.i = 0 //x and y speed
            this.k = 0 //opacity speed

            this.start = {
                y: Math.random() * height
            }

            this.Flicker = (increntment) => {
                return (Math.cos(increntment - Math.PI/180) * .2 ) 
            }

            this.radSize = (increntment) => {
                return (Math.sin(increntment - Math.PI/180) * 7)
            }
            
            this.x = (increntment, starSize) => {
                //full screen animate change this.randomWidth back to width / 2
                return Math.cos(increntment - Math.PI/180) * (randomStart + starSize )
            }

            this.y = (increntment) => {
                return Math.sin(-increntment - Math.PI/180) * 160
            }

            this.draw = (ctx) => {
                let s = this;
                
                let opacSpeed = s.k += .3
                let speed = s.i += s.randomSpeed

                let radSize = s.radSize(speed)
                let flicker = s.Flicker(opacSpeed)

                let y = s.y(speed)
                let x = s.x(speed, s.radius)
              
                ctx.translate(width/2, s.start.y)
                var gradient = ctx.createRadialGradient(x ,y ,.4, x ,y ,14);
                
                gradient.addColorStop(0, 'LightSkyBlue');
                gradient.addColorStop(.9, 'DodgerBlue');
                gradient.addColorStop(1, 'RoyalBlue');

                ctx.beginPath()
                ctx.arc(x,  y, (s.radius - radSize) - flicker, 0, Math.PI*2)
                ctx.fillStyle = gradient
                ctx.fill()
        
                ctx.translate(-width/2, - s.start.y)
            }
        }
        
        
        function createStars(starCount,update){
            let delay = 0
            
            for (let i = 0; i < starCount; i++) {
                delay += Math.random() * width

                let nightStars = new NightStars()
                nightStars.randomSpeed = .001 + Math.random() * .006
                nightStars.startTime = Date.now()
                nightStars.duration += delay   //sets a random delay for stars to start
                stars.push(nightStars)
            }
            update()
        }
        
        function update(){
            //Stopping stars
            if(toggleStars.toggle){
                stars.length = 0
                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                return;
            }
            
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            
            let all = stars.length
            for (let i = 0; i < all; i++) {
                // let percent = Math.min( ( Date.now() - stars[i].startTime ) / stars[i].duration, 1 )  //Delay to start stars
                let percent = Math.min( ( Date.now() - stars[i].startTime ), 1 )  // No delay

                if(percent === 1){
                    stars[i].draw(ctx)
                }
            }
            requestAnimationFrame(update)
        }

        return {
            createStars,
            update
        }
    };
    

    var updateText = (function(){
 
        var toggle = true
        var textField = _('text-field')

        function changeToggle(boolean){
            toggle = boolean
        }
        return {
            toggleFalse: function(){
                changeToggle(false)
            },
            updateImgText: function(img){

                changeToggle(true)
                
                var imgText = img.getAttribute('data-target')
                var textLength = imgText.length

                for(var i = 0; i < textLength; i++){

                    (function(i){
                        setTimeout(function(){

                            if(!toggle) return
                           
                            textField.textContent += imgText[i]
                          
                        },100 * i)
                    })(i);  
                }
            }
        }
    })();
    

    function electricBox(){
        var randomCir = [0,1,2,3,4,5]

        function getRandom(num){
            return Math.floor(Math.random() * Math.floor(num));
        }
        function findNum(item){
            
            var newNum = randomCir.splice(item,1)
            
            _('robot-st34')[newNum].classList.add('blink')
            if(randomCir.length){
               relay(randomCir)
            }
        }
        function relay(el){
            window.setTimeout(function(){
                var item = getRandom(el.length-1)
                findNum(item)
            },80)
        }
        relay(randomCir)
    };

    function checkForClasses(){
        var circles = _('robot-st34').length
       
        // Add blinking light classes
        for (var i = 0; i < circles; i++) {
            if( _('robot-st34')[i].classList.contains('blink') ){

                _('robot-st34')[i].classList.remove('blink')
                
            }
        }
        electricBox()
    };

    // Add electricity for robot box stomach
    function addElectricity(){
        var pathLength = _('electric-path').length
        for (var i = 0; i < pathLength; i++) {
            _('electric-path')[i].style.strokeDasharray = 20
            _('electric-path')[i].style.strokeDashoffset = 280
        }
        var start = 0;

        function draw(timestamp){
            if(!start) start = timestamp
            var runtime = timestamp - start
            var progress = Math.min(runtime / 1200, 1)
          
            for (var i = 0; i < pathLength; i++) {
                _('electric-path')[i].style.strokeDashoffset = 280 + (280 * progress)
            }
            
            if(progress < 1){
                requestAnimationFrame(draw)
            }else{
                for (var i = 0; i < pathLength; i++) {
                    _('electric-path')[i].setAttribute('style', '')
                }
                return;
            }
        }
        requestAnimationFrame(draw)
    };
    

    /** Outter function scope variables **/
    var designImages = document.getElementsByClassName('designImages');
    var img_container = document.getElementsByClassName('image-container')[0];

    var animateSlider = {
        target: null,
        partialDist: 0,
        j: 0,
        dist: 0,
        start: 0,
        images: [],
        imgStart: 0,
        newStart: function(num){

            return parseInt( this.images[num].style.transform.replace(/^([\w]*)\(|(px.*)$/ig, '') )

        },
        containerWidth: function(){
            return parseInt( img_container.style.width.replace(/px/ig, '') )
        },
        cloneImage: function(img){
            const clonedImg = img.cloneNode(true)
            clonedImg.className = ''
            clonedImg.removeAttribute('style')
            imgInlarge.checkForDuplicates('designVisible')
            imgInlarge.moveElement(clonedImg, 'designVisible')
        },
        draw: function(timestamp){
            
            if(!this.start) this.start = timestamp

            var runtime = timestamp - this.start
            var progress = Math.min(runtime / 600, 1)
            
            this.images[0].style.transform = 'translate('+ (this.imgStart - (this.dist*progress) )+'px, -50%)'
           
            if(progress === 1){
                
                //Second photo following the first to be animated automatically
                if(this.j === 1) {
                    
                    //checks if left or right button click with a negative left or positive right and updates imgStart
                    this.imgStart = this.dist < 0 ? -this.containerWidth() : this.containerWidth()
                    this.dist = this.dist < 0 ? -this.containerWidth() : this.containerWidth()
                
                    this.start = 0
                    var item = this.images.shift()
                    this.images.push(item)
                    this.j = 0
                }else {
                
                    //User double clicks same button when 2nd image isn't finished it draws again
                    if(this.imgStart !== this.dist ){
                      
                        this.draw()
                        
                    }else{
                        //Stops typed text from running only when photo stops into place
                        _('text-field').textContent = ''
                        updateText.updateImgText(this.images[0]) //Starts the typed text function

                        if ( _('button-inlarge').style.opacity !== '1' ){
                
                            _('button-inlarge').style.opacity = 1
                        }

                        this.cloneImage(this.images[0]) 
                    } 
                    return this.j++
                }
            }
            requestAnimationFrame(animateSlider.draw.bind(this));
        },
        animateData: function(e){   
            var target = this.target.innerText
            var newStart = this.newStart(0)
            this.partialDist = newStart

            //If user clicks before image done animating, updates current location and starts again
            if(newStart !== 0 && !isNaN(newStart)){
                            
                if(target === '<'){
                    //If user double clicks same button right away
                    if(newStart < 0){
                        this.imgStart = newStart
                        this.dist = this.containerWidth() + newStart
                    }else{
                        this.j = 0                  
                        this.dist = newStart
                        this.imgStart = newStart
                    }
                }
                if(target === '>'){
                    
                    if(newStart < 0){
                        this.j = 0
                        this.imgStart = newStart
                        this.dist = newStart
                    //If user double clicks same button right away
                    }else{
                        this.imgStart = newStart
                        this.dist = -this.containerWidth() + newStart
                    }   
                }
                this.start = 0
            }else{
                this.start = 0

                if(target === '<'){
                    //first click starts image outside the head
                    this.j >= 1 ? this.imgStart = 0 : this.imgStart = this.containerWidth()
                    this.dist = this.containerWidth()
                }else {
                    //first click starts image outside the head
                    this.j >= 1 ? this.imgStart = 0 : this.imgStart = -this.containerWidth()
                    this.dist = -this.containerWidth()
                }

                this.draw()
            }
        },
        // load images into array to be used for slider
        loadImages: function(){
            for (var i = 0; i < designImages.length; i++) {
                var element = designImages[i];
                this.images.push(element)
                
            }
        }
    };

    // Keeps from resize event loading click handler
    if(e.type !== 'resize' && e.type !== 'scroll'){
        
        _('btnContainer').addEventListener('click', function(e){
            e.stopPropagation()
            animateSlider.target = e.target
            animateSlider.animateData(e)

            checkForClasses()
            addElectricity()
            updateText.toggleFalse()
            _('text-field').textContent = ''
            
        });
    }
    
    return [animateSlider, animateStars] // To be used in the window.onload section
};


function DesignSlider() {
    var img_container = document.getElementsByClassName('image-container')[0]
    var img_container_rect = img_container.getBoundingClientRect()
    let robot = document.getElementById('robot-svg');
    this.ellipse = document.getElementsByClassName('clip-ellipse')[0]
    this.rec = document.getElementsByClassName('screen-path')[0].getBoundingClientRect()
    this.sectionContainer = document.getElementsByClassName('section-three-robot')[0].getBoundingClientRect()


    var actualTop = this.rec.top - this.sectionContainer.top //when page not fully scrolled into view it's the actual top
   
    this.setEllipseAttributes = function(){
        this.ellipse.setAttribute('rx', this.rec.width/2)
        this.ellipse.setAttribute('ry', this.rec.height/2)
        this.ellipse.setAttribute('cx', this.rec.left + this.rec.width/2 - 5)
        this.ellipse.setAttribute('cy', actualTop + this.rec.height/2 )
    }
    this.setImgContainer = function(){
        var container_Width = this.rec.width / 9 + this.rec.width
        var img_containerY = actualTop - (img_container_rect.height - this.rec.height) / 2
        img_container.style.transform = 'translate(-50%,' + img_containerY + 'px)'  //-48% to make up for 53% robot-svg offset
        img_container.style.width = container_Width + 'px'
    }
    this.setButtonLocation = function(){

        var addedWidth = window.innerWidth < 768 ? 70 : 200  //Distance bigger than robot head

        var x =  ( window.innerWidth - (this.rec.width + addedWidth) ) / 2
        var y = window.innerWidth > 768 ? actualTop + ( this.rec.height / 2 ) - 25 : this.rec.bottom - this.sectionContainer.top // - 25 for the btnContainer height / 2

        _('btnContainer').style.width = this.rec.width + addedWidth +'px'
        _('btnContainer').style.transform = 'translate('+ x + 'px,' + y + 'px)'
    }
    return function(){
        // return [this.setRobotHeight()]
        return [this.setEllipseAttributes(),this.setImgContainer(),this.setButtonLocation()]

    }.bind(this)
}

window.addEventListener('resize',function(e){
    var updateRobot = robotSection(e)
    var designSlider = new DesignSlider()
    designSlider()  //updates canvas size
    updateRobot[1]()  //updates button, image location , attributes of robot
    
});

// **** ASSEMBLY LINE SECTION ****

class AssemblyLine {
    constructor(){
        this.mainSVG = _('assembly-line-svg')
        this.sliders = _('roller_unit')
        this.codeContainers = _('code-container')
    }
    
    getRect(el){
        let rect = el.getBoundingClientRect()
        let bBox = el.getBBox()
        return {rect, bBox}
    }
    
    getElemValue(pos) {
        const [size] = /[1-9].*/.exec( this.mainSVG.getAttribute('viewBox') )
        const regEx = /^(\d{4})\s(\d{3})$/ig;
        const values = []
        values.length = 0  
        let length = this.sliders.length;
        const rollerUnit = this.sliders
        const codeElements = this.codeContainers
        for (let i = 0; i < length; i++) {
            const rollerElem = rollerUnit[i]
            const codeElem = codeElements[i]
        
            switch (pos) {
                case 'container':
                    return slidersContainer
                case 'viewBoxWidth':
                    return size.replace(regEx, '$1')
                case 'viewBoxHeight':
                    return size.replace(regEx, '$2')
                case 'el':
                    values.push(rollerElem)
                    break;
                case 'rectX':
                    values.push( this.getRect( rollerElem ).rect.x ) // not in use
                    break;
                case 'codeBox.x':
                    values.push( this.getRect( codeElem ).rect.x ) 
                    break;
                case 'codebBox.x':            
                    values.push( this.getRect( codeElem ).bBox.x ) 
                    break;
                case 'bBoxX':            
                    values.push( this.getRect( rollerElem ).bBox.x )// not in use
                    break;
                case 'y':
                    values.push( this.getRect( rollerElem ).bBox.y )   
                    break;
                case 'width':
                    values.push( this.getRect( rollerElem ).bBox.width )   
                    break;
                case 'height':
                    values.push( this.getRect( rollerElem ).bBox.height )
                    break; 
            }
        }
        return values
    }
};

class RollerUnit extends AssemblyLine {
    constructor(){
        super()
        this.getRect = this.getRect
        this.draw = this.draw.bind(this)
        this.beginPos = []
        this.dist = []
        this.lessThan = ''
        this.start = 0
        this.time = 1000
        this.current = {}
        this.click = 0
        this.beltClick = 0
        this.foreinObjs = _('assembly-img-foreignObj')
        this.foreinGroup = _('assembly-img-wrap')
        this.belts = _('belt')
    }

    startPos(elem){
        let arr = []
        let el = elem
        const length = el.length;
        for (let i = 0; i < length; i++) {
            if ( el[i].hasAttribute('style') ){
                arr.push( parseInt ( el[i].style.transform.replace(/^([\w]*)\(([?-\d].*)px\)/ig, "$2") ) )
            }else{
                arr.push(0) 
            }  
        }
        return arr
    }

    min( start,actual = []){
        let rect = Math.min(...start)
        let dist = Math.min(...actual)
        let index = start.indexOf(rect)
        return {index,dist}         
    }
    max( start,actual ){
        let rect = Math.max(...start)
        let dist = Math.max(...actual)
        let index = start.indexOf(rect)
        return {index,dist}
    }

    getDistance(){
        let width = this.getElemValue('width')[0]
        let arr = []
        let startingPoint = this.getElemValue('codeBox.x')
        let actualDist = this.getElemValue('codebBox.x')
    
        const maxElement = this.max(startingPoint,actualDist)
        const minElement = this.min(startingPoint,actualDist)

        const moveEnd = (k) => {
            let dist = this.left ? 431 : -431  // moveBeginning dist * 2    
            arr.push({dist: dist, index: k, })
        }

        const moveBeginning = (k) => {
            let dist = this.left ? (minElement.dist + width) : -(minElement.dist + width) 
            let rightPageStart = this.left ? actualDist.reverse()[k] + width : -actualDist[k] - width
        
            this.lessThan = k  //Updates the smallest distance
            arr.push({dist: dist*2,index: k, rightPageStart: rightPageStart, pageRight: true})
        }

        for(let k = 0; k < 3; k++ ){
    
            if ( minElement.index === k ) {
                this.right ? moveEnd(k) : moveBeginning(k)       
                
            }else if( maxElement.index === k ) {
                this.right ? moveBeginning(k) :  moveEnd(k)

            }else {
                let dist = this.left ? 431 : -431  // moveBeginning dist * 2
                arr.push({dist: dist, index: k})
            }
        }
        arr.sort = (a,b) => a.place - b.place
        return arr
    }

    // Add and remove foreignObjects into slider
    foreinObjArr(){
   
        let length =  this.foreinGroup.length
        let arr = new Array(length)

        // Puts image foreignobjects into array
        while(length) {
            length--;
            arr[length] = this.foreinGroup[length];
        }

        let startingPoint = this.getElemValue('codeBox.x')
        let index = this.min(startingPoint).index
        
        let add = arr.splice(3,1)
        let removed = arr.splice(index,1)

        let removedChild = removed[0].childNodes[1]
        let addChild = add[0].childNodes[1]
        arr.splice(index,0,add[0])
        arr.push(removed[0])

        //Add and remove just transforms first
        let styleTransform =  removed[0].attributes[1]
        removed[0].removeAttribute( styleTransform.name) 
        add[0].setAttribute(styleTransform.name, styleTransform.value)     

        //Strips attributes of removed and add same attributes to added foreignobject
        while( removedChild.attributes.length > 1){
                
            let attrName =  removedChild.attributes[1].name 
            let attrValue =  removedChild.attributes[1].value 
            
            addChild.setAttribute(attrName, attrValue)
            removedChild.removeAttribute( removedChild.attributes[1].name)
        } 
        
        this.foreinGroup = arr
    }
    
    // Ran once when page reloads
    positionForiegnObject(_this){
        let sliders = this.codeContainers
        let foreignObjects = this.foreinObjs
        let length = sliders.length
    
        for (let i = 0; i < length; i++) {
            
            let slider_x = this.getRect(this.codeContainers[i]).bBox.x
            let slider_y = this.getRect(this.codeContainers[i]).bBox.y
            let slider_width = this.getRect(this.codeContainers[i]).bBox.width
            let slider_height = this.getRect(this.codeContainers[i]).bBox.height
    
            foreignObjects[i].setAttribute('x', slider_x)
            foreignObjects[i].setAttribute('y', slider_y)
            foreignObjects[i].setAttribute('width', slider_width)
            foreignObjects[i].setAttribute('height', slider_height)
        }
        //Inputs image into container
        _this.targetElem()
    }
    
    
    moreThanHalf( dist, positiveCurrent, startDist ){
        return dist - (startDist - positiveCurrent)
    }
    
    lessThanHalf(current, dist, startDist){
        let d = dist.dist < 0 ? dist.dist * -1 : dist.dist

        if(startDist === 0 ){
            if(dist.rightPageStart){
                let diff = current - startDist 
                let totalDiff = d -  (current - startDist)
                return diff + totalDiff
            }
            return d - current
            
        }else {
            if(dist.rightPageStart){
                let diff = current - startDist 
                let totalDiff = d -  Math.abs(current - startDist)
                return diff + totalDiff
            }  
            let diff = d - Math.abs(current - startDist)
            return diff
        }
    }
    oppisiteDir(current, startDist){
        if(startDist === 0){
            return current
        }else {
            if(current > startDist){ // more than half
                return current - startDist
            }
            return startDist - current   //less than half    
        }
    }
    handleRightPageStart(d,rightPageStart, posCurrent, startDist){
    
        if(startDist < 0){
            //more than half
            if(d > posCurrent){  
                let distance = posCurrent
                return {distance, pageRight: false} 
            //less than half
            }
            let difference = (1141.2 - posCurrent) 
            let totalDif = d - (1141.2 - posCurrent)
            let distance = difference + totalDif
            return {distance, pageRight: true}
        }else{
            
            //less than half only element with a rightPageStart of 1141.2
            if(rightPageStart > 1160){ //1160
                let difference = d / 2 - posCurrent
                let totalDif = d -  difference
                let distance = totalDif + difference
                return {distance, pageRight: true}
            //more than half
            }else if(posCurrent < startDist ){ 
                let distance = startDist - posCurrent 
                return {distance, pageRight: false }
            //less than half 
            }else{  
                let diff = posCurrent - startDist 
                let totalDiff = d -  (posCurrent - startDist)
                let distance = diff + totalDiff
                return {distance, pageRight: true}
            }
        }
    }
    // ** RIGHT BUTTON IS NEGATIVE DIST, LEFT BUTTON IS POSITIVE DIST**
    handleDoubleClick(current, dist, beginPos){
        //Updates how many times back and forth before animation finishes
        this.click ++

        let currentDirection = Math.sign( this.currentDist[1].dist )
        let distDirection = Math.sign( dist[1].dist )
        
        for(let i = 0; i < 3; i++){

            //Middle dist not equal both negative or positives then use current dist
            let dist_i = currentDirection !== distDirection ? this.currentDist[i] : dist[i]
            let d = dist_i.dist < 0 ? dist_i.dist * -1 : dist_i.dist  //changed this
            
            //Starts off with positive variables
            let rightPageStart = dist_i.rightPageStart < 0 ? dist_i.rightPageStart * -1 : dist_i.rightPageStart
            let startDist = beginPos[i] < 0 ? beginPos[i] * -1 : beginPos[i]
            let posCurrent = current[i] < 0 ? current[i] * -1 : current[i]

            // When clicked opposite direction
            if( currentDirection !== distDirection){
            
                if( rightPageStart ){
                    let rightStart = this.right ? -rightPageStart : rightPageStart
                    
                    let cur = this.handleRightPageStart(d,rightPageStart, posCurrent, startDist, this.currentDist[i].index)
                    let curDist = this.right ? -cur.distance : cur.distance
                    let pageRight = cur.pageRight

                    this.dist.push({dist: curDist, index: dist_i.index, rightPageStart: rightStart, pageRight: pageRight})
                    this.beginPos.push(current[i])
                }else{
                    let distance = this.oppisiteDir( posCurrent, startDist)
                    let dist = this.right && distance > 0 ? -distance : distance

                    this.dist.push({dist: dist, index: dist_i.index, rightPageStart: dist_i.rightPageStart, pageRight: false})
                    this.beginPos.push(current[i])
                }      
            //Clicked same direction
            }else{
                //After element starts from hidden part of page
                if(( this.right && rightPageStart && current[i] < 0) || this.left && current[i] > 0 && rightPageStart  ){
                    
                    this.lessThan = dist_i.index //have to update rightPageStart again due to running this.getDistance() twice
                    let distance = d / 2 - ( rightPageStart - posCurrent )  
                    let PosOrNegDistance = this.right && distance > 0 ? distance * -1: distance

                    this.dist.push({dist: PosOrNegDistance, index: dist_i.index, rightPageStart: dist_i.rightPageStart, pageRight: false})
                    this.beginPos.push(current[i])
                }else{  
                    let lessThanhalf = startDist < posCurrent || (startDist && posCurrent < d) ? true : false  
                    let distance = lessThanhalf ? this.lessThanHalf( posCurrent, dist_i, startDist) : this.moreThanHalf( d, posCurrent, startDist )    
                    let PosOrNegDistance = this.right ? -distance : distance

                    this.dist.push({dist: PosOrNegDistance, index: dist_i.index, rightPageStart: dist_i.rightPageStart, pageRight: true})
                    this.beginPos.push(current[i])
                }
            }
        }
        //Removes prior values in arrays
        this.dist.splice(0,3), this.beginPos.splice(0,3)
    }
    //Updates sliders positions
    updatePos(){
        // Handles back and forth clicking
        if(this.start){
            this.start = 0
            
            this.currentDist = this.getDistance()
            this.currentBeginPos = this.startPos(this.sliders)
            return this.handleDoubleClick(this.current, this.dist, this.beginPos)
            
        }else{
            this.updateBeltPos()
            this.beginPos.length = 0
            this.dist.length = 0
            const dist = this.getDistance()
            const beginPos = this.startPos(this.sliders)
            // 3 is length of slider elements
            for (let i = 0; i < 3; i++) {
        
                this.beginPos.push(beginPos[i])
                this.dist.push(dist[i])

            }
        requestAnimationFrame(this.draw)
        }
    }
    animateBelts(topGears, bottomGears){
        _('teeth-wrapper-top').style.transform = `translate(${ topGears }px)`
        _('teeth-wrapper-bottom').style.transform = `translate(${ bottomGears }px)`
    }

    animate(sliders, imgGroup, value){
        sliders.style.transform = `translate(${ value }px)`
        imgGroup.style.transform = `translate(${ value }px)`
    }

    draw(timestamp){
        const time = this.time
        if(!this.start) this.start = timestamp
        this.runtime = timestamp - this.start;
        const progress = Math.min(this.runtime / time, 1)

        let j = this.lessThan
    
        for (let i = 0; i < 3; i++) {
        
            let num = i !== j ? i : j
            let sliders = this.sliders[num]
    
            let imgGroup = this.foreinGroup[num]
    
            let beginPos = this.beginPos[num]
            let dist = this.dist[num].dist
            let rightStart = this.dist[num].rightPageStart
            let pageRight = this.dist[num].pageRight   
            //Right or Left side element animate to other side of screen
            if(num === j && pageRight){
                
                if(progress <= .5){
                    let value = beginPos - (dist * progress)
                    this.current[num] = value
                    this.animate(sliders, imgGroup, value)
                }else {
                    let value = rightStart - ( dist * (progress - .5))
                    this.current[num] = value
                    this.animate(sliders, imgGroup, value)
                }
            }else{
                const value = beginPos - (dist * progress)
                this.current[num] = value
                this.animate(sliders, imgGroup, value)
            }
        }
        // Belts Animation
        let topGears = this.beltPos.startPos[0] + (this.beltPos.dist * progress) 
        let bottomGears = this.beltPos.startPos[1] - (this.beltPos.dist * progress)
        this.animateBelts(topGears, bottomGears)
        if(progress < 1){
            requestAnimationFrame(this.draw)
        } else{
            this.foreinObjArr()
            this.start = 0
            this.beltClick ++
            this.click = 0
            imgInlarge.targetElem()
            return
        } 
    }
    //Stars gears inline left or right depending on left or right click
    beltDirections(){
        let beltWidth = _('bottom-main').getBBox().width

        if(this.right){
            _('bottom-teeth').style.transform = `translate( ${beltWidth}px )`
            _('top-teeth').style.transform = `translate( ${-beltWidth}px )`
        }else{
            _('bottom-teeth').style.transform = `translate( ${-beltWidth}px )`
            _('top-teeth').style.transform = `translate( ${beltWidth}px )`
        }
    }
    updateBeltPos(){
        let belts = this.startPos(this.belts)
        let startPos, dist; 

            // Starts gears on one side of the page or the other 
        if( this.beltClick === 0 || this.beltClick && belts[0] === 0 ) this.beltDirections()

        if(this.right){
            startPos = belts
            dist = _('top-teeth').getBBox().width / 3
        }
        if(this.left){
            startPos = belts
            dist = -( _('top-teeth').getBBox().width / 3 )
        }
        
        //Keeps Gears always looking like their never ending
        if( this.beltClick === 3){
            this.beltClick = 0
            this.animateBelts(0, 0)
            this.beltDirections()
            startPos = [0,0]
        }
        this.beltPos = {dist, startPos}
    } 
}

class InLargeImg extends RollerUnit {
    constructor(){
        super()
        this.container =  _('img-inlarge-container')
        this.animateClipPath = this.animateClipPath.bind(this)
        this.img = document.querySelector('.inlarge-img-wrap img')
        this.imgWrap = document.getElementsByClassName('inlarge-img-wrap')[0]
        this.mouseMove = this.mouseMove.bind(this)
        this.removeListener = this.removeListener.bind(this)
        this.mouseY = 0
        this.imageClose = this.imageClose.bind(this)
        // this.targetElem = this.targetElem
        this.checkForDuplicates = this.checkForDuplicates
        this.moveElement = this.moveElement
        this.Y = 0
    }
    
    addClickListener(){
        _('img-inlarge-container').addEventListener('click', this.imageClose); 
    }
    removeClickListener(){
        _('img-inlarge-container').removeEventListener('click', this.imageClose); 
    }
    checkForDuplicates(clssName){
        const imgs = this.imgWrap.children
        let length = imgs.length
        while(length--){
            if ( imgs[length].className === clssName ){
                this.img = imgs[length];
                this.removeImg()
            } 
        }
    }
    //Recursion
    targetElem(elemX){
        
        let length = this.foreinObjs.length
        let arr = []
        let groupArr = []
       
        for (let i = length - 1; i >= 0; i-- ){
            
            // 1st pushes only elements with style attribtues of x
            if(!elemX && this.foreinObjs[i].hasAttribute('x') ){
                
                arr.push( this.foreinObjs[i].getBoundingClientRect().x )
                groupArr.push(this.foreinObjs[i].parentNode)
           
            }
            // Scaling image only
            if ( this.foreinObjs[i].parentNode.getBoundingClientRect().x === elemX && this.toggleMoveElement){
                this.group = this.foreinObjs[i].parentNode
                return
            }
            if ( this.foreinObjs[i].getBoundingClientRect().x === elemX ){
                this.checkForDuplicates('webVisible')
                let imgNode = this.foreinObjs[i].childNodes[1];
             
                let clonedImg = imgNode.cloneNode(true)
                return this.moveElement( clonedImg, 'webVisible' )  
            } 
        }
        // Middle element which is the median of the three elements
        let sorted = arr.sort( (a,b) => a - b )[1]
        this.targetElem(sorted)
    }
    insertText(img){
        let imgContent = _('img-content')
        let imgAlt = img.attributes[3].value
        let url = img.attributes[2].value
        let text = img.attributes[1].textContent

        imgContent.textContent = text

        if(img.attributes[2].name === 'data-link') {
            imgContent.innerHTML += '<br>'+'<a href="' + url + '"> ' + url + ' </a>'+'</br>'
        } else {
            imgContent.innerHTML += '<br><p>' + imgAlt + ' </p>'+'</br>'
        } 
    }

    moveElement(el, cls){
        this.img = el //updates image to be used elsewhere 
        el.classList.add(cls)
        let img_content = _('img-content')
        let fragment = document.createDocumentFragment();
        fragment.appendChild(el)
        this.imgWrap.insertBefore(fragment, img_content);
        this.imgWrap.classList.add('show-img')
        this.imgWrap.classList.remove('hide-img')
    }

    removeImg(e){
   
        //Only ran to exit out of image from click handler
        if(e){
            this.container.style.opacity = 0
            this.imgWrap.classList.replace('show-img', 'hide-img')
            setTimeout( () => {
                this.imgWrap.classList.replace('hide-img', 'show-img')
                this.container.removeAttribute('style')
                this.img.style.display = 'none'
            },1100)
        }else{
            
            _('img-content').textContent = ''
            this.img.parentNode.removeChild(this.img)
        }
    }
    // Removes images 
    imageClose(e){
        if(e.target.tagName !== 'IMG'){
            this.removeClickListener()
            this.removeImg(e)
        }
    }
    // Displays image
    showImage(clssName){
        this.img = document.getElementsByClassName(clssName)[0]
        this.insertText(this.img)
        this.img.style.display = 'block'
        this.addClickListener()
        this.container.style.display = 'flex'
        this.container.style.opacity = 1
    }
                         // **  REMOVE ANIMATECLIPPATH IF I DON'T REALLLY HAVE TO USE IT FOR FIREFOX **
    //Firefox only
    animateClipPath(timestamp){
        if(!this.start) this.start = timestamp
        this.runtime = timestamp - this.start;
        const progress = Math.min(this.runtime / 1000, 1)
        this.imgWrap.style.clipPath = `circle(${this.clipStart + (this.clipValue * progress)}%)`
    
        if(progress < 1){
            requestAnimationFrame(this.animateClipPath)
        }else {

            if(this.container.style.opacity == 0){
        
                // Removes flex and opacity, sets back to display none
                this.container.removeAttribute('style')
                // this.img.parentNode.removeChild(this.img)
            }
            this.start = 0
        }
    }
    getTransform(){
        let regEx = /^scale/g;
        let transform = this.group.style.transform.replace(/^(\w*\(-?\d*.\w*\))(.*)/ig, "$1")
        let checkForScale = transform.match(regEx)
        //So two scale values don't get added to element when translate doesn't exist
        if(checkForScale){
            return ''
        }else {
            return transform
        }
    }

    scalePhoto(dist, scale, translate){
        document.getElementById('slider_1_').style.transform = `translateY(${dist}px)`
        this.group.style.transform = translate + `scale( ${1 + scale} )`
    }
    
    mouseMove(e){
        // multipy by 1.5 because of the lag, so I speed it up just a bit
        let dist = e.clientY - this.mouseY
        let value =   dist / this.Y
        let scale = Math.min( value < 0 ? -value : -value, 1)
        let translate = this.getTransform() 
        let translateValue = +( translate.replace(/[^-\d.]/ig, "") )
  
        //Checks if element is either -431 or 431 so the correct transform origin can be added
        if(translateValue > 2){
            this.group.style.transformOrigin = 165 + "px " + 450 + "px"
        }else if(translateValue < -1){
            this.group.style.transformOrigin = 1034 + "px " + 458 + "px"
        }
        //scale is 1 when clicked somewhere else
        if( scale < 1 && dist <= 6 ) this.scalePhoto(dist, scale, translate)
    }

    mouseDown(e){
        
        _('slide-group').addEventListener('mouseup', this.removeListener, true)

        this.toggleMoveElement = true
        this.targetElem()
        let verPiece = document.getElementById('vert_piece')
        let vertY = verPiece.getBBox().y
        let handleY = _('img-scale').getBBox().y    

        //Gets distance slider needs to go  
        this.Y = handleY - vertY
        
        //Start position for distance
        if(!this.mouseY) this.mouseY = e.clientY
        _('slide-group').addEventListener('mousemove', this.mouseMove, true)
       
    }

    removeListener(e){
        _('slide-group').removeEventListener('mousemove', this.mouseMove, true)
        
        let translate = this.getTransform()
        this.scalePhoto(0,0,translate)
        
        _('slide-group').removeEventListener('mouseup', this.removeListener, true)
        _('img-scale').removeEventListener('mousedown', this.mouseDown, true);

        //Updates position when mouseUp
        this.mouseY = 0
        this.toggleMoveElement = false
    }
}

let rollerUnit = new RollerUnit();
let imgInlarge = new InLargeImg();
rollerUnit.positionForiegnObject(imgInlarge);

_('img-scale').addEventListener('mousedown', (e) => {
    imgInlarge.mouseDown(e)
}, true);

_('buttons').addEventListener('click',function(e){
    
    e.stopPropagation()
    const target = e.target.parentElement.classList[0]

    if(target === 'img-left' || target === 'img-right'){
        if(rollerUnit.click === 1) return  
        
        rollerUnit.left = target === 'img-left' ? true : false
        rollerUnit.right = target === 'img-right' ? true : false
        rollerUnit.updatePos()

    }else if(target === 'img-inlarge'){
        imgInlarge.showImage('webVisible')
    }
});

_('button-inlarge').addEventListener('click', (e) => {
    imgInlarge.showImage('designVisible')
})

// **** GRAPH SECTION ****

const random = (min, max) => Math.random() * (max - min) + min;

const toggleRobot = {
    toggle: false,
    flight: false, //Toggles when scrolled out of screen view
    direction: 'up'
}

function startRobotFlight(){ 
    // *** Burners ***

    const flames = _('robot-flame')
    const length = flames.length

    const from = {x: 1, y: 1}
    const to = {}
    const distance = {};
    const keys = Object.keys(from);

    const next = timestamp => {
        //starts all over from gets starting point of the last size
        Object.assign(from, to);
        const length = keys.length
        for (var i = 0; i < length; i++) {
            let axis = keys[i]
            to[axis] = random(.8, 1);
            distance[axis] = from[axis] - to[axis];
        }

        time.start = timestamp;
    };

    const time = {
        total: 40
    };

    const drawBurners = timestamp => {
        if (toggleRobot.flight) return
        if (time.runtime > time.total || !to.x) next(timestamp);

        time.runtime = timestamp - time.start;
        const progress = time.runtime / time.total;
        const [x, y] = keys.map(axis => from[axis] - progress * distance[axis]);
        for (let i = 0; i < length; i++) {
            let flame = flames[i]
            flame.style.transform = `scale(${x}, ${y})`;
        }
        requestAnimationFrame(drawBurners);
    };


    //*** Draws Stars ***
    let graphs = document.getElementsByClassName('graph-st20')
    const recClip = document.getElementsByClassName('rec-clip')[0]
    const fragment = document.createDocumentFragment();
    const robotRect = _('floating_robot').getBoundingClientRect()
    const graph = document.getElementById('graph-svg')
    const [size] = /[1-9].*/.exec( graph.getAttribute('viewBox') )
    
    const regEx = /([1-9.]*)\s([1-9.].*)/ig;
    const graphWidth = size.replace(regEx, '$1')
    const graphHeight = size.replace(regEx, '$2')
    
    const robotHeight = robotRect.height;
    const robotWidth = robotRect.width;
    const startY = graphHeight - robotHeight
    const startX = robotRect.x - (window.innerWidth - graphWidth) / 2

    //starts stars randomly
    const randomInterval = function(callback,data,min, max){

        const time = {
            start: performance.now(),
            total: random(min, max)
        };
        const draw = (timestamp) =>{
            if(toggleRobot.flight) return
            if (time.total <= timestamp - time.start) {
                time.start = timestamp;
                time.total = random(min, max);
                callback(data)
            }
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    };

    const createStar = (cx, cy, radius) => {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        star.setAttribute("r", radius);
        star.setAttribute("cy", cy);
        star.setAttribute("cx", cx);
        star.setAttribute("fill", "white");
        star.setAttribute("fill-opacity", 0);
        return star;
    };

    const FallingStars = function(data){

        let attr = new data(toggleRobot.direction)

        const radius = attr.radius
        const cx = attr.cx
        const cy = attr.cy
        const dist = attr.dist
        const star = createStar(cx, cy, radius)
       
        const time = {
            start: performance.now(),
            total: random(1900, 2000)
        };
        
        const draw = (timestamp) => {
          if(toggleRobot.toggle || toggleRobot.flight){
                graph.removeChild(star)
                return;
            } 
            time.elapsed = timestamp - time.start
            const progress = Math.min(time.elapsed / time.total, 1)
          
            const opacity = progress * 2

            star.setAttribute("cy", cy + progress * dist)
            star.setAttribute("fill-opacity", progress < .5 ? opacity : 2 - opacity)
            time.elapsed < time.total ? requestAnimationFrame(draw): graph.removeChild(star)
        }
        requestAnimationFrame(draw)

        //Inserts new star based on randomInterval runing throughStars()
        fragment.appendChild(star)
        graph.insertBefore(fragment, graph.firstChild)

    };

    var flyIntoPlace = {
        beginY: graphHeight - robotHeight / 12,
        hiddenX: function(){
            let difference = graphWidth  -  wW
            if(!wW < graphWidth){

                return robotRect.width + robotRect.x + difference 
           }
        },
        hideRobot: function(size){
            if( size === 1.3){
                let beginX = this.hiddenX();
                _('floating_robot').style.transform = `translate(${0}px, -${this.beginY}px)`
            }
        },
        createStars: function(){
            let attributes = function(direction){
               
                if(direction === 'down'){
               
                    toggleRobot.toggle = false;
                    let radius = random(.5, 2.7)
                    let cx = random(startX - 100, startX + robotWidth + 100)
                    let cy = random(startY - 120 ,startY - 175 )
                    let dist = 100 + robotHeight;

                    return { radius, cx, cy, dist } 
                    
                }else if(direction === 'up'){
                   
                    let radius = random(1.5, 3.7);
                    let cx = random(0 - 25, graphWidth + 25)
                    let cy = random(graphHeight  - 80, graphHeight + 50  )
                    let dist = -graphHeight; 

                    return { radius, cx, cy, dist } 
                }
            }
            //Every 80ms through 180ms of time.total it will draw a star
            //**** STARTS STARS MOVING *****
            randomInterval(FallingStars, attributes,80, 180)
        }
    }

    const graphData = {
        start: 0,
        total: 2000,
    }
    const subtractRay = () => {
        _('left-text-panel').removeAttribute('clip-path')
        _('rec-clip').style.transform = "translate(485px, 520px)"
    }
    const getStrokeLength = () => {
        let i = graphs.length
        let value = new Array(i)
        function getLength(){
            while(i--){
                value[i] = graphs[i].getTotalLength()
            }
        }
        return {
            runValue: function(){
                getLength()
            },
            getValue: function(){
                return value
            }
        }
    }
    let strokeLength = getStrokeLength();
    strokeLength.runValue();
    
    const drawPercentStroke = (progress) => {
        let stroke = strokeLength.getValue()
        let i = graphs.length
        while(i--){
            graphs[i].style.stroke = 'url(#design-gradient)'
  
            graphs[0].style.strokeDashoffset = stroke[0] + (stroke[0] * progress)
            graphs[1].style.strokeDashoffset = stroke[1] - (stroke[1] * progress)
        }
    }
    const animateGraph = (timestamp) => {
        if(!graphData.start) graphData.start = timestamp
        let runtime = timestamp - graphData.start
        let progress = Math.min(runtime / graphData.total, 1)

        _('graph-percentage-top').textContent = Math.round( 0 + 90 * progress) + '%'
        _('graph-percentage-bottom').textContent = Math.round( 0 + 70 * progress) + '%'
        _('graph-rect').style.transform = 'translate(' + (412 * progress) + 'px)' 
        drawPercentStroke(progress)
        
        if(progress < 1) 
            requestAnimationFrame(animateGraph)
        else 
            return subtractRay()
    }

    const startAnimateGraph = () =>{
        if( _('rec-clip').style.transform ) return

        recClip.style.transform = 'translate(0px, 0px)'
        _('graph-clipping').classList.add('show-graphs')

        //Animate graphs after recClip transform is done
        setTimeout( () => {
            requestAnimationFrame(animateGraph)
        }, 2500)
    }

    const begin = {
        start: 0,
        total: 4000
    }

    const flyIn = (timestamp) =>{
        if(!begin.start) begin.start = timestamp
        begin.runtime = timestamp - begin.start
        const progress = Math.min(begin.runtime / begin.total, 1)
        const curve = 624.9 / 2
        const ease = easeOut(progress)
        const increment = curve * progress / 50
    
        const y = -flyIntoPlace.beginY + flyIntoPlace.beginY * progress
        const x = -Math.cos( increment + Math.PI/180) * curve + curve 
        // !begin.toggle
         _('floating_robot').style.transform = `translate(${-x}px, ${y}px)`
        // : document.querySelector('#section-five-web .container-lg').style.transform = `scale(${1.3 - .3 * ease})`

        if(progress === 1){
            // toggleRobot.toggle = true;
            toggleRobot.direction = 'down'
        
            //Resizes the whole container so robot fits into screen
            if( wW > 1050 ){
                setTimeout(startAnimateGraph, 600)
                document.querySelector('#section-five-web .container-lg').classList.add('scale-container')
            }else{
                
                startAnimateGraph()
            } 
            return
        }
        requestAnimationFrame(flyIn)
    }
    return {flyIn, flyIntoPlace, drawBurners}
}

let navToggle = {
    toggle: true
}

class Navigation {
    constructor(){
        this.navItems = document.querySelectorAll('.nav-list button')
        this.scrollTo = this.scrollTo.bind(this)
        this.animateScroll = this.animateScroll.bind(this)
        this.start = 0
    }
    getDistance(el){
     
        let top = el.getBoundingClientRect().top
        let height = el.getBoundingClientRect().height
        let bottom = el.getBoundingClientRect().bottom
        return {top, height, bottom}
    }
    getScrolltoElement(target, regEx){
        let section = document.getElementsByTagName('section')
        let length = section.length
        while(length--){
            if ( target === section[length].id.replace(regEx, "$1") ) {
                return {
                    el: section[length],
                    index: length
                }
            }
        }
    }
    outExpo(n){
        return 1 == n ? n : 1 - Math.pow(2, -10 * n);
    };

    animateScroll(timestamp){
        if(!this.start) this.start = timestamp
        let runtime =  timestamp - this.start
        let progress = this.outExpo( Math.min( runtime / 1200, 1 ) )
        let y = this.startPos + (this.elDist * progress)
       
        window.scroll(0, y)
        if(progress < 1){
            requestAnimationFrame(this.animateScroll)
        }else return navToggle.toggle = true  
    }

    toggleOpenBtn(){
        let i = this.navItems.length
        while(i--){
          
            if(this.navItems[i].style.transform){
               this.navItems[i].removeAttribute('style')
            }
        }
    }
    
    scrollTo(e){
        this.toggleOpenBtn()
        if(e.target.className === 'contact-modal') return
        const regEx = /(\w+\-\w+)\-\w+/ig
        const sectionId = e.target.className.replace(regEx,"$1")
        let scrollToElem = this.getScrolltoElement(sectionId,regEx).el
        let index = this.getScrolltoElement(sectionId,regEx).index
        let elDist = this.getDistance(scrollToElem, index).top
        this.elDist = elDist
        this.startPos = window.pageYOffset
        this.start = 0
        
        requestAnimationFrame(this.animateScroll)
    }
    scrollTo768(e){
        let targetBtn = e.target.parentNode.parentNode
        
        if(targetBtn.hasAttribute('style')){
            return this.toggleOpenBtn()
        } 
        this.toggleOpenBtn()
        targetBtn.style.pointerEvents = 'auto'
        targetBtn.style.transform = `translateX(${-132}px)`
    }

    controller(){
        _('nav-list').addEventListener('click', (e) => {
            console.log(e.target)
            navToggle.toggle = false
            if( e.target.nodeName === "BUTTON"){
            
                this.scrollTo(e)
            }
            // Only @ screen size 768 and smaller
            if(e.target.parentNode.classList[1] === 'nav-icon'){
                
                this.scrollTo768(e)
            }
        });
    }
}
const navigation = new Navigation()
navigation.controller()

const toggleAnimate = {
    stars: true,
    flightStars: true,
    circuit: true
}

const robot = new robotSection('event');
const robotFlight = startRobotFlight();


const triggerStars = (e) => {
    var update = robot[1](e).update
    var star_count = wW > 540 ? 25 : 15
    var makeStars = robot[1]()
    makeStars.createStars(star_count, update)
}

class ScrollAnimate extends Navigation {
    constructor(){
        super()
        this.sections = document.querySelectorAll('#section-one-digital, #section-two-popups, .section-three-robot, #section-five-web  ')
    }
    checkElemTop(e){
        let length = this.sections.length
       
        while(length--){
            let dist = this.getDistance(this.sections[length])
            let elmTop = dist.top
            let elmHeight = dist.height
            let elmBottom = dist.bottom

            //Digital Hand
            if(length === 0){

                if(elmBottom < 300){
                    if(wW < 768) document.getElementById('digital_shake').style.willChange = "auto"
                    digital.removeDigitalAnimation()
                    toggleAnimate.circuit = false
                }
            }
            //Map
            if(length === 1){
               const pointerLocation = _('oval-pointer').getBoundingClientRect().x

               //Stops scroll from running hovermap function over and over
               if(pointerLocation > 0){
                    const hovermap = hoverMap()
                    const dist = hovermap[1](e)[0]; // Position distance of show-icon gooey
                    hovermap[0]( dist, true )  // handler(e) function remove gooey
                }
            }
            // Robot Design stars element
            if(length === 2) {
  
                //Page in view start animate stars
                if(elmTop <= elmHeight && elmBottom >= elmHeight && toggleAnimate.stars){
                    
                    toggleAnimate.stars = false
                    toggleStars.toggle = false
                    triggerStars(e)
                }
                //Page out of view start stop animate
                if( !toggleAnimate.stars  &&  (elmTop > elmHeight || elmBottom <= 0) ){
                    toggleAnimate.stars = true
                    toggleStars.toggle = true
                }
            }
            //Flying Robot / Graph element
            if(length === 3){
             
                if(elmTop < elmHeight){
                    
                    if(!_('floating_robot').style.willChange){
                        _('floating_robot').style.willChange = 'transform'
                    }
                    
                }

                if(elmTop < elmHeight / 2 && elmBottom >= elmHeight && toggleAnimate.flightStars){
                    toggleRobot.flight = false
                    toggleAnimate.flightStars = false
                    requestAnimationFrame( robotFlight.drawBurners )
                    robotFlight.flyIntoPlace.createStars('up')
                    requestAnimationFrame(robotFlight.flyIn)
                }
                if( !toggleAnimate.flightStars  &&  (elmTop > elmHeight - 75 || elmBottom <= 0) ){
                    
                    //Removes ray
                    _('floating_robot').style.willChange = 'auto'
                    toggleAnimate.flightStars = true
                    toggleRobot.flight = true
                }
            } 
        }
    }
  
    scroll(){
        window.addEventListener('scroll', (e) => {
            // If nav item is clicked that scroll event will run and not trigger this scroll event
            if(navToggle.toggle){

                this.checkElemTop(e)
            }
        })
    }
}
const scrollAnimate = new ScrollAnimate()
scrollAnimate.scroll()

//*** HAND SHAKE ***
class Digital {
    constructor(){
        this.path = document.querySelectorAll('.stroke')
        this.watch = document.getElementById('rotate_watch')
    }

    startHandAnimation(){

        document.getElementById('digital_shake').classList.add('shake-hand')
        this.watch.classList.add('rotateWatch')
        setTimeout( ()=>{
            for (let i = 0; i < this.path.length; i++){
                if (i < 3) _('circle-path')[i].style.opacity = 1
                this.path[i].classList.add('path')
           }
        }, 2000)  
        setTimeout( ()=>{
            this.startAnimation()
            this.removeDigitalAnimation()
        }, 10000) 
    }
    removeDigitalAnimation(){
        this.watch.classList.remove('rotateWatch')
        for(let i = 0; i < this.path.length; i++){
            this.path[i].classList.remove('path')
        } 
    }
}

class Circuit extends Digital{
    constructor(){
        super()
        this.animCircuit = _('animate-circuit')
        this.startAnimation = this.startAnimation.bind(this)
        this.data = []
        this.elements = []
        this.index = []
        this.pathLength = []
    }
    //SVG .getTotalLength() fix
    getSvgPolylineLength(el) {
        let totalLength = 0;
        let prevPos;
        for (var i = 0 ; i < el.points.numberOfItems;i++) {
            var pos = el.points.getItem(i);
            if (i > 0) {
                
                totalLength += Math.sqrt(Math.pow((pos.x - prevPos.x), 2) + Math.pow((pos.y - prevPos.y), 2));
            }
            prevPos = pos;
        }
        return totalLength;
    }
    //SVG .getTotalLength() fix
    getSvgEementLength(el){

        const constructor = el.constructor
       
        switch (constructor) {
            case SVGPolylineElement: return this.getSvgPolylineLength(el);
            case SVGLineElement: return ((x1, x2, y1, y2) => Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 ))(el.getAttribute('x1'), el.getAttribute('x2'),
                                        el.getAttribute('y1'), el.getAttribute('y2'));
            case SVGRectElement: return (el.getAttribute('width')*2) + (el.getAttribute('height')*2);
            case SVGPathElement: return el.getTotalLength();
        }
    }
    //3rd method ran
    getDashStroke(el){
        let length = el.length
      
        while(length--){
            let index = el[length]
            // Fix for SVG.getTotalLength()  not working on some paths. 
            this.pathLength.unshift( this.getSvgEementLength(_('animate-circuit')[index]) )
        }
    }
    addClasses(){
        let length = this.elements.length
        while(length--){
            this.elements[length].classList.add('animatePath')
        }
    }
    //2nd method ran
    getRandomPath(paths){
        let i = 0
        let length = paths

        while(i < length){
            // item is the long-path which is at index 0 if count === 1, else run random 
            let item = paths === 1 ? 10 : Math.floor( Math.random() * 10 )

            //Checks first to make sure no duplicate items in array
            let notInArray = this.index.indexOf(item) === -1

            if(notInArray){
                i++
                this.index.push( item )
                this.elements.push( this.animCircuit[item] )
            }
        }

        this.animCircuit = this.elements
        return this.index
    }
    //4th method ran
    addData(index){

        while(index--){
            this.data.push({speed: 0, j: 0, delay: index*150, start: 0, startTime: 0})
        }
        if(wW > 768) this.startAnimation()
    }
    //1st method ran
    setDashArray(count){
        let paths = wW < 768 ? 1 : count 
        if(wW < 768) this.startHandAnimation()
        let index = this.getRandomPath(paths)
        this.getDashStroke(index)

        while(paths--){
            this.animCircuit[paths].style.stroke = 'orange'
            this.animCircuit[paths].style.strokeDashoffset = -this.pathLength[paths]
            this.animCircuit[paths].style.strokeDasharray = this.pathLength[paths]
        }
        this.addData(wW < 768 ? 3 : 6)
    }
    
    //Ran last
    startAnimation(){
        let circle = _('circle-path')
        let dist = this.pathLength
        let el = this.animCircuit
        let data = this.data
        let length = el.length
        let countSpeed = 7;
        let dataLength = data.length
        let delay = 0
      
        function startCircleAnimation(timestamp){

            for(let i = 0; i < dataLength; i++){

                if(delay > data[i].delay){
             
                    if(!data[i].startTime) data[i].startTime = timestamp
                    let run = timestamp - data[i].startTime 
                    let prog = Math.min( run / 30000, 1)
                 
                    const {x, y} = el[0].getPointAtLength(dist[0] * prog);
                    circle[i].style.transform = `translate(${x}px, ${y}px)`
                    if(prog === 1) data[i].startTime = 0
                }
            }
            delay++

            requestAnimationFrame(startCircleAnimation);
        }

        function startLineAnimation(){
            //Removes Animation
            if(!toggleAnimate.circuit){
                let i = el.length
           
                while(i--){
                    el[i].removeAttribute('style')
                }
                return;
            }

            for (let i = length - 1; i >= 0; i--) {
                let dashArray = el[i].style.strokeDasharray
                let dashOffset = el[i].style.strokeDashoffset

                // StrokeDashoffset is less then 0 runs same direction 
                if(dashOffset >= 0 && !data[i].j){
                    data[i].speed = 0
                    data[i].j = 1
                    iterator = 0
                }
                
                const speed =  data[i].speed += countSpeed
                let iterator = dashOffset <= 0 ? -dist[i] : 0;
             
                //Stops strokedasharray at about a 3rd to keep the length that size
                if(dashArray >= (dist[i] / 1.8) ){
        
                    el[i].style.strokeDasharray = dist[i] - speed
                }

                el[i].style.strokeDashoffset = iterator + speed
            }
            requestAnimationFrame(startLineAnimation)
        }
        requestAnimationFrame(wW < 768 ? startCircleAnimation : startLineAnimation )
    }
}
const digital = new Digital();
const circuit = new Circuit();

const loadPhotoImg = (img) => {
    const clonedImg = img.cloneNode(true)
    clonedImg.className = ''
    clonedImg.removeAttribute('style')
    imgInlarge.checkForDuplicates('photoVisible')
    imgInlarge.moveElement(clonedImg, 'photoVisible')
}

window.onload = function(e){
    // Help on page loads
    setTimeout( () =>{
        circuit.setDashArray(6) 
    },300)
    
   
    let newTechnologies = new Technologies();
    newTechnologies.loadImages();

    document.querySelector('.technologies .start-canvas').addEventListener('click', function(){
        Technologies.prototype.toggle = true
        requestAnimationFrame(newTechnologies.draw.bind(newTechnologies)) 
    }.bind(this));

    document.querySelector('.technologies .stop-canvas').addEventListener('click', function(){
        Technologies.prototype.toggle = false
        requestAnimationFrame(newTechnologies.draw.bind(newTechnologies))
    }.bind(this));

    var starryNight = new StarryNight()
    starryNight.loadImages()

    hoverMap()
    
    var designSlider = new DesignSlider();
    designSlider();

    robot[1]() //updates robot location
    robot[0].loadImages(); //then loades images into slider

    robotFlight.flyIntoPlace.hideRobot(1.3); //Hides flying robot out of screen view

    loadPhotoImg( _('photo-img') );
    
    
}.bind(this);

