var SIZE = 9

var $G = document.querySelector('#game')

var blocks = []
for(var y = 0; y < SIZE; y++){
  for(var x = 0; x < SIZE; x++){
    blocks.push(createBlock(x,y))
  }
}

// need a ME "class"
var me = {
  x: 2,
  y: 3
}
var $me = document.createElement('div')
$me.id = 'me'
$me.className= 'block'
var y = me.y*100
var x = me.x*100+100
$me.style.top = y+'px'
$me.style.left = x+'px'

$G.appendChild($me)
//))))))))))))))))))))))))))


blocks.forEach(drawBlock)

document.addEventListener('click', randomMove)
setInterval(randomMove, 1000)
randomMove()


function randomMove(){

  var line = rand(0,SIZE)
  var axis = rand(0,100)
  var dir = Date.now()%2? 1: -1

  var a = axis % 2 ? 'x': 'y'
  if(me[a] === line) return randomMove()

  var test = moveBlocks(line, axis, dir)
  blocks = blocks.map(test)
  blocks.forEach(drawBlock)
}
