function verificar(){
    var data = new Date()
    var ano = data.getFullYear
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value == 0 || Number(fano.value) > 2024){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade = 2024 - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
         if(fsex[0].checked){
            genero = 'Homem'
             if(idade < 16 ){
                img.setAttribute('src', 'crianca-M.jpg')
                //criança

            } else if(idade < 26){
                img.setAttribute('src', 'jovem-M.jpeg')
                //jovem

            }else if (idade < 65){
                img.setAttribute('src', 'adulto-M.webp')
                //adulto

        }else {
            img.setAttribute('src', 'idoso-M.webp')
            //idoso
        }
    } else {
            genero = 'Mulher'
            if(idade < 16 ){
                img.setAttribute('src', 'crianca-F.jpg')
                //criança

            } else if(idade < 26){
                img.setAttribute('src', 'jovem-F.jpeg')
                //jovem

            }else if (idade < 65){
                img.setAttribute('src', 'adulto-F.jpg')
                //adulto

        }
    else {
            img.setAttribute('src', 'idoso-F.jpg')
            //idoso
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

