const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var videocon = document.querySelector("#video-1")
var playbtn = document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1,
    }

    )
})


videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0,
    }

    )
})

videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x+"px",
        top:dets.y+"px"
    }
    )
})


gsap.from("#page1 h1",{
    y:30,
    opacity:0,
    duration:0.8,
    delay:0.4,
    stagger:0.7
})


document.querySelector("#cursor")
main.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
    }
    )
})
document.querySelector("#page3 .child1")
.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        backgroundColor:"#342a29a2",
        scale:1,
        
        
    }

    )
})

document.querySelector("#page3 .child1")
.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        backgroundColor:"#fff",
        opacity:0,
        scale:0,
    }

    )
})


document.querySelector("#page3 .child2")
.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        opacity:1,
        scale:1,
        backgroundColor:"#E9C9CAa2"
        
        
    }

    )
})

document.querySelector("#page3 .child2")
.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        backgroundColor:"#ffff",
        scale:0,
    }

    )
})

document.querySelector("#page3 .child3")
.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        opacity:1,
        scale:1,
        backgroundColor:"#CDBF9Aa2"
        
        
    }

    )
})

document.querySelector("#page3 .child3")
.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        backgroundColor:"#ffff",
        scale:0,
    }

    )
})

document.querySelector("#page3 .child4")
.addEventListener("mouseenter",function(){
    gsap.to("#cursor",{
        opacity:1,
        scale:1,
        backgroundColor:"#8AA2BEa2"
        
        
    }

    )
})

document.querySelector("#page3 .child4")
.addEventListener("mouseleave",function(){
    gsap.to("#cursor",{
        backgroundColor:"#ffff",
        scale:0,
    }

    )
})

var dets1 = document.querySelector(".dets1")
var detsmain1 = document.querySelector(".detsmain1")

dets1.addEventListener("mouseenter",function(){
    gsap.to(detsmain1,{
        opacity:1,
        duration:1.2,
        delay:0.2
    })
    gsap.to("#SON",{
        
        opacity:1,
        duration:0.4,
        stagger:0.3
    }

    )
})
dets1.addEventListener("mouseleave",function(){
    gsap.to(detsmain1,{
        opacity:0,
        duration:0.5,
        delay:0.1
    })
    gsap.to("#SON",{
        
        opacity:0,
        duration:0.5,
        delay:0.1
        
    })
})

var dets2 = document.querySelector(".dets2")
var detsmain2 = document.querySelector(".detsmain2")

dets2.addEventListener("mouseenter",function(){
    gsap.to(detsmain2,{
        opacity:1,
        duration:1.2,
        delay:0.2
    })
    gsap.to("#SON",{
        
        opacity:1,
        duration:0.4,
        stagger:0.3
    }

    )
})
dets2.addEventListener("mouseleave",function(){
    gsap.to(detsmain2,{
        opacity:0,
        duration:0.5,
        delay:0.1
    })
    gsap.to("#SON",{
        
        opacity:0,
        duration:0.5,
        delay:0.1
        
    })
})

var dets3 = document.querySelector(".dets3")
var detsmain3 = document.querySelector(".detsmain3")

dets3.addEventListener("mouseenter",function(){
    gsap.to(detsmain3,{
        opacity:1,
        duration:1.2,
        delay:0.2
    })
    gsap.to("#SON",{
        
        opacity:1,
        duration:0.4,
        stagger:0.3
    }

    )
})
dets3.addEventListener("mouseleave",function(){
    gsap.to(detsmain3,{
        opacity:0,
        duration:0.5,
        delay:0.1
    })
    gsap.to("#SON",{
        
        opacity:0,
        duration:0.5,
        delay:0.1
        
    })
})
