import React, {useState} from 'react';
import imagem from '../imgs/hotel.png';
import api from '../service/api';

export default function Tela2(){

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [rg, setRg] = useState()
    const [rua, setRua] = useState()
    const [cidade, setCidade] = useState()
    const [NRua, setNRua] = useState()

    const mensagemCadastrar = () =>{
        if(nome && email && rg && rua && cidade && NRua != null){
            registrar()
            return alert('Cadastrado!')
        }else{
            alert('Error, preencha todos os campos!')
        }
    }
    const  registrar = async()=>{
        try{ const response = await api.post("/cliente", {
            "nome": nome,
            "email":email,
            "rg":rg,
            "rua":rua,
            "cidade":cidade,
            "numrua":NRua,
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
                <input type='text' placeholder='Nome'  onChange={(e) => {setNome(e.target.value)}} value={nome}></input>
                <input type='text' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}value={email}></input>
                <input type='number' placeholder='RG' onChange={(e) => {setRg(e.target.value)}}value={rg}></input>
                <input type='text' placeholder='Rua' onChange={(e) => {setRua(e.target.value)}} value={rua}></input>
                <input type='text' placeholder='Cidade' onChange={(e) => {setCidade(e.target.value)}} value={cidade}></input>
                <input type='number' placeholder='Nº Rua' onChange={(e) => {setNRua(e.target.value)}}value={NRua}></input> 
                <button onClick={mensagemCadastrar}>Cadastrar</button>
            </div>

        </div>
    </div>
    )
}