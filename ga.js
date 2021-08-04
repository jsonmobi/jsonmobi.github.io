

function addLoadEvent(func){ 
    var oldonload=window.onload; 
    console.log(oldonload);
    if(typeof window.onload!='function'){ 
        window.onload=func; 
    }else{ 
        window.onload=function(){ 
            oldonload(); 
            func(); 
        } 
    } 
    console.log(window.onload);
} 

function loadJS( url, callback,attrs=[] ){
    var script = document.createElement('script');
    for(var i=0;i<attrs.length;i++){
        script.setAttribute(attrs[i].key, attrs[i].value)
    }
    fn = callback || function(){};
    script.test = 'test'
    script.type = 'text/javascript';
    //IE
    if(script.readyState){
        script.onreadystatechange = function(){
            if( script.readyState == 'loaded' || script.readyState == 'complete' ){
                script.onreadystatechange = null;
                fn();
            }
        };
    }else{
        //其他浏览器
        script.onload = function(){
            fn();
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

 
addLoadEvent(function(){ 
    // <script defer async src="https://www.googletagmanager.com/gtag/js?id=G-NFZJRDSN77"></script>
    // <script data-ad-client="ca-pub-1217509255829092" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

    loadJS("https://www.googletagmanager.com/gtag/js?id=G-NFZJRDSN77",()=>{
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-NFZJRDSN77');
        console.log("compelte")
          
    });
    loadJS("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",()=>{

    },[{key:"data-ad-client",value:"ca-pub-1217509255829092"}]);

})