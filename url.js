window.onload = ()=>{
    const urlDecodeBtn =  document.getElementById("urlDecodeBtn")
    if (urlDecodeBtn){
        urlDecodeBtn.addEventListener('click', ()=>{
            var type = document.getElementById("rfcversion").value
            alert(type)
            var source = document.getElementById("urlSource").value
            document.getElementById("urlTarget").value = decodeURIComponent(source)
        })
    }
    const urlEncodeBtn = document.getElementById("urlEncodeBtn")
    if (urlEncodeBtn){
        urlEncodeBtn.addEventListener('click',()=>{

        })
    }
}