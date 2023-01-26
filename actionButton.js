$(document).ready(function(){

    $("#mudancaImg").click(function(){
        let imagem = document.getElementById('imagem');
        if(imagem.src == 'http://127.0.0.1:5500/img/sofa.png'){
            document.getElementById('imagem').src = '/img/gifSofa.gif'
            document.getElementById('imgBtn').src = '/img/iconeX.png'
        }
        else{
            document.getElementById('imagem').src = '/img/sofa.png'
            document.getElementById('imgBtn').src = '/img/icone360.png'
        }
    });
  });