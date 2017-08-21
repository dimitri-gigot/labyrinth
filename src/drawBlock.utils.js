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

  //$block.style.transform = transform

}
