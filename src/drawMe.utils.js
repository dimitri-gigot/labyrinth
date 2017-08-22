function drawMe(me){
  var y = me.y*100
  var x = me.x*100+100
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
  var y = block.y * 100
  var x = block.x * 100 + 100
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
