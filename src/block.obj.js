function createBlock(x, y, t, r) {
  t = t || String.fromCharCode(rand(0, 5)+65)
  r = r || rand(1,4)
  var block = {
    x: x,
    y: y,
    t: t,
    r: r,
    $: elem('div', 'b'+uid(), t+' r'+r)
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
    //$el.style.background = 'rgb('+[rand(0,255),rand(0,255),rand(0,255)].join(',')+')'
    return $el
  }
}
