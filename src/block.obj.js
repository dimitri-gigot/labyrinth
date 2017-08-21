function createBlock(x, y, t) {
  t = t || rand(0, 10)
  var block = {
    x: x,
    y: y,
    t: t,
    $: elem('div', 'b'+uid(), t)
  }

  var y = block.y * 100
  var x = block.x * 100 + 100

  block.$.style.top = y+'px'
  block.$.style.left = x+'px'
  drawBlock(block)
  return block

  function elem(a,b,c){
    var $el = document.createElement(a)
    $el.id = b
    $el.className = 'block '+c
    $el.style.background = 'rgb('+[rand(0,255),rand(0,255),rand(0,255)].join(',')+')'
    return $el
  }
}
