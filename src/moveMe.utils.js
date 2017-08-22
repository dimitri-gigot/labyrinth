function moveMe(me, x, y){
  return {
    x: (me.x||0) + x,
    y: (me.y||0) + y
  }
}
