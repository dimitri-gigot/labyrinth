function createBlock(x, y, t, r) {
  var tt = rand(0, 50)

  // try to distribute
  t = t || tt < 10 ? 'A' : tt < 15 ? 'B' : tt < 25 ? 'C' : tt < 35 ? 'D' : 'E'
  //totaly random
  //t = t || String.fromCharCode(rand(0, 4)+65)


  r = r || rand(0,3)

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
