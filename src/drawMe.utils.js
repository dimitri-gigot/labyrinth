function drawMe(me){
  var y = me.y * SIZE
  var x = me.x * SIZE

  console.log('me xy', x,y, SIZE)
  var $me = $G.querySelector('#me')
  if(!$me){
    $G.appendChild(createMe(me))
    $me = $G.querySelector('#me')
  }
  $me.style.top = y+'px'
  $me.style.left = x+'px'


  function createMe(me){
    var $me = document.createElement('div')
    $me.id = 'me'
    $me.className= 'block'
    return $me
  }
}


function drawBlock(block){
  var y = block.y * SIZE
  var x = block.x * SIZE
  //var transform = 'translate('+x+'px,'+y+'px)'
  var $block = $G.querySelector('#b'+block.$.id)
  if(!$block){
    $G.appendChild(block.$)
    $block = $G.querySelector('#'+block.$.id)
  }

  setTimeout(function(){
    $block.style.top = y+'px'
    $block.style.left = x+'px'
  },0)
}
