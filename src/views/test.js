console.log(1%4)		
var i = 0
var j=2
    function aa(){
		setTimeout(function(){
			//put your program here
			console.log("program in for:"+i) 
			i++
			if(i<5){
				aa()
			}
		}, 1000)    		
    }

    function bb(){
		setTimeout(function(){
			//put your program here
			console.log("tody:"+j) 
			j++
			if(i<5){
				bb()
			}
		}, 1000)    		
    }
    
    aa()
    bb()