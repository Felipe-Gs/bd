import React, {useState} from 'react';
import imagem from '../imgs/hotel.png';
import api from '../service/api';

export default function Tela3(){

    const [tipodofuncionario, settipodofuncionario] = useState()
    const [nome, setnome] = useState()
    const [login, setlogin] = useState()
    const [senha, setsenha] = useState()
  

    const mensagemCadastrar = () =>{
        if(tipodofuncionario && nome && login && senha != null){
            registrar()
            return alert('Cadastrado!')
        }else{
            alert('Error, preencha todos os campos!')
        }
    }
    const  registrar = async()=>{
        try{ const response = await api.post("/funcionario", {
            "tipodofuncionario": tipodofuncionario,
            "nome":nome,
            "login":login,
            "senha":senha,
        })
        console.log(response)
    }
        catch(erro){
            console.log(erro)
        }
     }
    return(
        <div style={{backgroundColor:'#1e1e1e', width:'100vw', height:'100vh'}}>
        <div className='Tela2'>
            <h1 className='titulo' style={{fontSize:'70px', color:'white', padding:'40px'}}>CADASTRAR</h1>
        </div>
        
        <div style={{display:'flex', flexDirection:'row'}}>
            <div className='fotologo' style={{width:'50vw'}}>
                <img src={imagem} style={{marginLeft:40, height:'400px', width:'500px'}}></img>
            </div>

            <div className='inputs' style={{flexDirection:'column', display:'flex',width:'50vw'}}>
                <input type='text' placeholder='Tipo do Funcionario'  onChange={(e) => {settipodofuncionario(e.target.value)}} value={tipodofuncionario}></input>
                <input type='text' placeholder='Nome' onChange={(e) => {setnome(e.target.value)}}value={nome}></input>
                <input type='text' placeholder='Login' onChange={(e) => {setlogin(e.target.value)}}value={login}></input>
                <input type='text' placeholder='Senha' onChange={(e) => {setsenha(e.target.value)}} value={senha}></input>
               
                <button onClick={mensagemCadastrar}>Cadastrar</button>
            </div>

        </div>
    </div>
    )
}