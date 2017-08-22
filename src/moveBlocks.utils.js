function moveBlocks(line, axis, dir){
  var a = axis % 2 ? 'x': 'y'
  var b = axis % 2 ? 'y': 'x'
  return function(block){
    if(block[a] === line){
        block[b]+= dir

        var newPos = block[b] >= SIZE ? 0 : block[b] < 0 ? SIZE-1 : null

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
          return createBlock(nx, ny)

        }

    }
    return block
  }
}
