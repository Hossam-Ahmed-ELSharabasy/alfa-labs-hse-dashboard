/* Alfa Labs HSE — Master Sidebar Standard */
(function(){
  function init(){
    const sidebar=document.querySelector('.sidebar');
    if(!sidebar)return;
    const links=[['index.html','🏠','Home'],['capa.html','📋','CAPA'],['training.html','🎓','Training'],['#','👁️','Safety Observations'],['#','🚨','Incidents'],['#','⚠️','Near Miss'],['#','🔍','Inspections'],['#','🔥','Fire Safety'],['#','🩹','First Aid'],['#','📊','Analytics'],['#','📄','Reports'],['#','⚙️','Settings']];
    const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
    sidebar.innerHTML='<div class="master-sidebar-brand"><img src="./LOGOG.png" alt="Alfa Labs Logo"><strong>Alfa Labs</strong><span>Alfa Labs • HSE Platform</span></div><nav class="master-sidebar-nav">'+links.map(function(x){const active=x[0]===path?' active':'';return '<a class="master-sidebar-link'+active+'" href="'+x[0]+'"><span class="master-sidebar-icon">'+x[1]+'</span><span>'+x[2]+'</span></a>'}).join('')+'</nav>';
    const style=document.createElement('style');style.id='master-sidebar-style';style.textContent=`
      .sidebar{direction:ltr!important;width:230px!important;left:0!important;right:auto!important;top:0!important;background:#082b52!important;padding:18px 12px!important;overflow-y:auto!important;box-shadow:2px 0 12px rgba(10,40,70,.12)!important}
      .master-sidebar-brand{text-align:center;padding:2px 0 18px;border-bottom:1px solid rgba(255,255,255,.14);margin-bottom:14px}
      .master-sidebar-brand img{width:102px;height:74px;object-fit:contain;background:#fff;border-radius:8px;padding:6px;display:block;margin:0 auto 9px}
      .master-sidebar-brand strong{display:block;font-size:25px;line-height:1.15;color:#fff;margin-bottom:5px}.master-sidebar-brand span{display:block;font-size:12px;color:#c9d9e9}
      .master-sidebar-nav{margin-top:10px}.master-sidebar-link{display:flex!important;align-items:center!important;gap:11px!important;text-decoration:none!important;color:#e2edf8!important;padding:11px 10px!important;border-radius:9px!important;margin:3px 0!important;font-size:14px!important;line-height:1.25!important;transition:.18s!important;direction:ltr!important;white-space:nowrap!important}
      .master-sidebar-link:hover{background:rgba(255,255,255,.10)!important;color:#fff!important}.master-sidebar-link.active{background:#1976d2!important;color:#fff!important;font-weight:800!important;box-shadow:0 4px 12px rgba(0,0,0,.10)!important}.master-sidebar-icon{width:27px!important;min-width:27px!important;text-align:center!important;font-size:18px!important}
      @media(max-width:900px){.sidebar{width:215px!important}.master-sidebar-link{font-size:14px!important}}@media(max-width:800px){.sidebar{width:285px!important;max-width:84vw!important;transform:translateX(-105%);transition:transform .25s ease!important;z-index:1001!important}.sidebar.open{transform:translateX(0)!important}.master-sidebar-brand strong{font-size:24px}.master-sidebar-link{font-size:15px!important;padding:12px 11px!important}}
    `;document.head.appendChild(style);
    const overlay=document.querySelector('.sidebar-overlay,.overlay');const button=document.querySelector('#mobileMenuBtn,#menu');
    function close(){sidebar.classList.remove('open');if(overlay)overlay.classList.remove('show');if(button)button.setAttribute('aria-expanded','false');document.body.style.overflow=''}
    function open(){sidebar.classList.add('open');if(overlay)overlay.classList.add('show');if(button)button.setAttribute('aria-expanded','true');document.body.style.overflow='hidden'}
    if(button)button.onclick=function(){sidebar.classList.contains('open')?close():open()};if(overlay)overlay.onclick=close;sidebar.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){if(a.getAttribute('href')!=='#'&&window.innerWidth<=800)close()})});window.addEventListener('resize',function(){if(window.innerWidth>800)close()});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
