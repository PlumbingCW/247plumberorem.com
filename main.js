(function(){
  var root=document.documentElement;
  var toggle=document.getElementById('menu-toggle');
  var menu=document.getElementById('mobile-menu');
  function setMenu(open){
    if(!toggle||!menu)return;
    menu.classList.toggle('open',open);
    toggle.setAttribute('aria-expanded',open?'true':'false');
    root.style.overflow=open?'hidden':'';
  }
  if(toggle){toggle.addEventListener('click',function(){setMenu(!menu.classList.contains('open'));});}
  if(menu){menu.addEventListener('click',function(e){if(e.target.tagName==='A')setMenu(false);});}
  window.addEventListener('resize',function(){if(window.innerWidth>768)setMenu(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});
  var items=document.querySelectorAll('.faq-item');
  items.forEach(function(it){
    var q=it.querySelector('.faq-q'),a=it.querySelector('.faq-a');
    if(!q||!a)return;
    q.addEventListener('click',function(){
      var open=it.classList.toggle('open');
      q.setAttribute('aria-expanded',open?'true':'false');
      a.style.maxHeight=open?a.scrollHeight+'px':'0px';
    });
  });
})();
