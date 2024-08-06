import { $ } from '@wdio/globals'

class CadastroPage {
    get btnSignUp (){
        return $('~Sign up')
    }
    get nome (){
        return $('id:firstName')
    }
    get sobrenome (){
        return $('id:lastName')
    }
    get celular (){
        return $('id:phone')
    }
    get email (){
        return $('id:email')
    }
    get senha (){
        return $('id:password')
    }
    get senha1 (){
        return $('id:repassword')
    }
    get btnCadastro (){
        return $('~Create')
    }
    

    async cadastro (nome, sobrenome, celular, email, senha, senha1){
        await this.btnSignUp.click()
        await this.nome.setValue(nome)
        await this.sobrenome.setValue(sobrenome)
        await this.celular.setValue(celular)
        await this.email.setValue(email)
        await this.senha.setValue(senha)
        await this.senha1.setValue(senha1)
        await this.btnCadastro.click()
        
    }
}

export default new CadastroPage();
