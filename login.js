const inputUsuario = document.getElementById('username')
const inputSenha = document.getElementById('password')
const botaoLogar = document.getElementById('logar')

const usuarioADM = 'admin'
const senhaADM = "admin"

botaoLogar.addEventListener('click', () => {

    let campoUsuario = inputUsuario.value
    let campoSenha = inputSenha.value

    if(campoUsuario.trim() == "" || campoUsuario.trim() != usuarioADM){
    
        //alert('O CAMPO DO USUÁRIO ESTÁ VAZIO')
        let estiloAntigo = inputUsuario.style

        inputUsuario.style = "border: red 1px solid; transition: all 0.5s ease"


        setTimeout(() => {
            inputUsuario.style = estiloAntigo 
        }, 3000)

        if(campoSenha.trim() == "" || campoSenha.trim() != senhaADM) {
            let estiloAntigo = inputSenha.style
            inputSenha.style = "border: red 1px solid; transition: all 0.5s ease"

        setTimeout(() => {
            inputSenha.style = estiloAntigo 
        }, 3000)
      }
    }
    if(campoUsuario == usuarioADM && campoSenha == senhaADM){
        window.location.href = '/tela-login/user.html'
    }
   }
  )