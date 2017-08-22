var SIZE = 9
var $G = document.querySelector('#game')
var blocks = []
var TIMEOUT = 500
var to = null;
var me = {
  x: 0,
  y: 0
}
getTilesClass('./tiles_p.png', function(){

  for(var y = 0; y < SIZE; y++){
    for(var x = 0; x < SIZE; x++){
      blocks.push(createBlock(x,y))
    }
  }

  drawMe(me)


  window.addEventListener('keydown', function(e){
    //console.log('before', me)
    var newPos;
    if(e.key === 'ArrowUp'){
      newPos = moveMe(me, 0, -1)
    }
    if(e.key === 'ArrowDown'){
      newPos = moveMe(me, 0, 1)
    }
    if(e.key === 'ArrowLeft'){
      newPos = moveMe(me, -1, 0)
    }
    if(e.key === 'ArrowRight'){
      newPos = moveMe(me, 1, 0)
    }

    console.log(newPos)

    if(newPos && canGo(blocks, me, newPos, e.key)){

      me.x = newPos.x
      me.y = newPos.y
    }
    //console.log('after', me)
    drawMe(me)
    randomMove()
  })


  blocks.forEach(drawBlock)

  //document.addEventListener('click', randomMove)

  //randomMove()


  function randomMove(){
    if(to) clearTimeout(to)

    var line = rand(0,SIZE)
    var axis = rand(0,100)
    var dir = Date.now()%2? 1: -1

    var a = axis % 2 ? 'x': 'y'
    if(me[a] === line) return randomMove()

    var test = moveBlocks(line, axis, dir)
    blocks = blocks.map(test)
    blocks.forEach(drawBlock)
    //to = setTimeout(randomMove, TIMEOUT)
  }

})
