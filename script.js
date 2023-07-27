var lt = gsap.timeline()
lt.from(".img , .page1 ul ",{
    y : 10,
    delay : 1,
    duration : 0.5,
    opacity : 0
})

lt.from(".left-1 h3", {
    x : 100,
    duration : 0.5,
    opacity : 0
})
lt.from(".left-1 h1", {
    x : 100,
    duration : 0.5,
    opacity : 0
})
lt.from(".btn-1, .btn-2", {
    opacity : 0
})
