function svgZoomCreator(idContainer, idSvgContent, zoomScale, radioZoom){
  divContainer = document.getElementById(idContainer)

  svgContent = document.getElementById(idSvgContent)
  svgContentHeight = svgContent.getAttribute('height')
  svgContentWidth = svgContent.getAttribute('width')
  svgContentClass = svgContent.getAttribute('class')

  divContainer.style.position = 'relative'
  divContainer.style.height = svgContentHeight+'px'
  divContainer.style.width = svgContentWidth+'px'

  divZoom = document.createElement('div')
  divZoom.style.width = "100px"
  divZoom.style.height = "100px"
  divZoom.style.position = 'absolute'
  divZoom.style.overflow = 'hidden'
  divZoom.style.borderRadius = '50%'
  divZoom.style.boxShadow = '2px 2px 5px #999'
  divZoom.style.overflow = 'none'
  divZoom.style.top = '0px'
  divZoom.style.left = '0px'
  divZoom.setAttribute('id', 'zoomContainer')
  divContainer.appendChild(divZoom)

  var svgZoomContent = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgZoomContent.setAttribute('id', 'zoomContentSvg')
  svgZoomContent.setAttribute('class', svgContentClass);
  svgZoomContent.setAttribute('width', svgContentWidth*zoomScale);
  svgZoomContent.setAttribute('height', svgContentHeight*zoomScale);
  svgZoomContent.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  svgZoomContent.style.position = 'absolute'
  divZoom.appendChild(svgZoomContent);



  // divContainer.addEventListener('mousemove', function(e) {
  //
  //   if(!e){e=window.event;}
  //   var el = document.getElementById('zoomContainer');
  //   var svgChild = document.getElementById('zoomContentSvg');
  //   y = window.scrollY+e.clientY-this.offsetTop-this.clientTop-el.offsetHeight/2;
  //   x = window.scrollX+e.clientX-this.offsetLeft-this.clientLeft-el.offsetWidth/2;
  //   el.style.left = Math.min(Math.max(-radioZoom,x),this.clientWidth-el.offsetWidth+radioZoom) +"px";
  //   el.style.top = Math.min(Math.max(-radioZoom,y),divContainer.clientHeight-el.offsetHeight+radioZoom) +"px";
  //   svgChild.style.left = -x*zoomScale-radioZoom +"px";
  //   svgChild.style.top = -y*zoomScale-radioZoom +"px";
  // });

}
// function init(){
//   svgZoomCreator('lienzo-hoja', 'miSVGLienzo', 2, 50);
// }
// window.onload = init();
