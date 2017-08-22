function moveBlocks(line, axis, dir){
  var a = axis % 2 ? 'x': 'y'
  var b = axis % 2 ? 'y': 'x'
  return function(block){
    if(block[a] === line){
        block[b]+= dir
        console.clear()
        console.log(b, block[b])
        var s = b==='x'?WNB:HNB
        var newPos = block[b] >= s ? 0 : block[b] < 0 ? s-1 : null

        if(newPos !== null){

          var ny,nx;

          if(a === 'x'){
            ny = newPos
            nx = block.x
          }else{
            nx = newPos
            ny = block.y
          }
          setTimeout(function(){
            document.querySelector('#'+block.$.id).remove()
          },1)
          if(nx === -1 || ny === -1) debugger;
          return createBlock(nx, ny)

        }

    }
    return block
  }
}
