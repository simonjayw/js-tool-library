
function addLoadEvent(func){
  var oldonload = window.onload;
  if (typeof window.onload != 'function'){
    window.onload = func;
  }else {
    window.onload = function(){
      oldonload();
      func();
    }
  }
}
//把一个节点插入到一个节点的后面
function insertAfter(newElement,targetElement){
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  }else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}
//添加一个class
function addClass(element.value){
	if(!element.className){
		element.className = value;
	}else {
		newClassName = element.className;
		newClassName+= " ";
		newClassName+= value;
		element.className = newClassName;
	}
}
//给特定元素紧跟的下一个元素添加class
function styleElementSibilings(tag.theclass){
	if (!document.getElementsByTagName) return false;
	var elems = document.getElementsByTagName(tag);
	var elem;
	for (var i=0; i<elems.length; i++){
		elem = getNextElement(elems[i].nextSibling);
		addClass(elem,theclass);
	}
}







var eventUtil={
        //添加句柄
        addHandler:function(element,type,handler){//添加一个事件监听程序;;;;;进行“能力检测”
          if(element.addEventListener){
            element.addEventListener(type,handler,false);//dom2级事件处理
          }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);//IE级事件处理
          }else{
            element["on"+type]=handler;//dom0级;;;;element.type===element[type];这里因为中间有+,所有用了[]
          }
        },
        //删除句柄
        removeHandler:function(element,type,handler){//删除一个时事件监听程序
          if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
          }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
          }else{
            element["on"+type]=null;
          }
        ,
        getEvent:function(event){//兼容所有浏览器的事件对象
          return event?event:window.event;//===event=event||window.event
        },
        getType:function(event){//获取事件的类型
          return event.type;
        },
        getElement:function(event){//获取来自于哪个元素
          return event.target||event.srcElement;
        },
        preventDefault:function(event){//取消事件的默认行为
          if (event.preventDefault) {
            event.preventDefault();
          }else{
            event.returnValue=false;
          }
        },
        stopPropagation:function(event){//阻止事件冒泡
          if (event.stopPropagation) {
            event.stopPropagation();
          }else{
            event.cancleBuble();
          }
        }
}


