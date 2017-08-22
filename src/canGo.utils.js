function canGo(blocks,me,  pos, dir){

  var b = {
    'A' : [true, false, true, false,true, false, true, false],
    'B' : [true, false, false, false,true, false, false, false],
    'C' : [true, true, false, false,true, true, false, false],
    'D' : [true, true, false, true,true, true, false, true],
    'E' : [true, true, true, true,true, true, true, true]
  }

  var currentBlock = blocks.filter(b => b.x === me.x && b.y === me.y)[0]

  var nextBlock = blocks.filter(b => b.x === pos.x && b.y === pos.y)[0]
  //console.log(block)

  if(!nextBlock) return false
  var current = canGoCurrentBlock(currentBlock.t, currentBlock.r, dir)
  var next = canGoNextBlock(nextBlock.t, nextBlock.r, dir)

  console.log(current, next)
  return current && next



  function canGoCurrentBlock(type, rotation, dir){
    var normalDir = dir === 'ArrowUp' ? 0 :
                    dir === 'ArrowDown' ? 2 :
                    dir === 'ArrowRight' ? 1 :
                    3
    console.log('current', {
      blocktype :  b[type].join('-'),
      type,rotation,dir,normalDir
    })

    return b[type][normalDir + rotation]
  }
  function canGoNextBlock(type, rotation, dir){
    var normalDir = dir === 'ArrowUp' ? 2 :
                    dir === 'ArrowDown' ? 0 :
                    dir === 'ArrowRight' ? 3 :
                    1
    console.log('next', {
      blocktype :  b[type].join('-'),
      type,rotation,dir,normalDir
    })
    return b[type][normalDir + rotation]
  }
}
