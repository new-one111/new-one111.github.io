 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
         document.title = '呜呜呜~网站奔溃了';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
         document.title = '诶嘿~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
