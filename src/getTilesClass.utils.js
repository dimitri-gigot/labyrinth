function getTilesClass(file, callback){
  var $img = document.createElement('img')
  $img.src = file
  $img.onload = function(){
    var imgs = {}
    var h = $img.height
    var w = $img.width

    for(var i = 0; i < w/h; i++){
      var c = String.fromCharCode(65+i)
      imgs[c] = extractTile($img,i)
    }

    var $s = document.createElement('style')
    var classes = []
    for(var key in imgs){
      classes.push('.'+key+'{background: url('+imgs[key]+');}')
    }
    $s.innerHTML = classes.join('')
    document.body.appendChild($s)

    callback()

    function extractTile($img, type){

      var c = document.createElement('canvas')
      c.height = SIZE
      c.width = SIZE
      var cc = setpixelated(c.getContext('2d'))

      cc.drawImage($img, type*h, 0, h, h, 0, 0, SIZE, SIZE)

      return c.toDataURL()
    }
  }

  function setpixelated(c){
    c['imageSmoothingEnabled'] = false;       /* standard */
    c['mozImageSmoothingEnabled'] = false;    /* Firefox */
    c['oImageSmoothingEnabled'] = false;      /* Opera */
    c['webkitImageSmoothingEnabled'] = false; /* Safari */
    c['msImageSmoothingEnabled'] = false;     /* IE */
    return c
  }
}
