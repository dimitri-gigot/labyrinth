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
    // $block.innerHTML = block.x+'/'+block.y+ ' - ' + block.t + ' - ' + block.r
  },0)
}
