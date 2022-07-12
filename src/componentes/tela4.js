import React, {useState} from 'react';
import imagem from '../imgs/hotel.png';
import api from '../service/api';

export default function Tela4(){

    const [formaPagamento, setformaPagamento] = useState()
    const [status, setStatus] = useState()
    const [codFun, setCodFun] = useState()
    const [codCli, setCodCli] = useState()
  

    const mensagemCadastrar = () =>{
        if(formaPagamento  && status && codFun && codCli != null){
            registrar()
            return alert('Cadastrado!')
        }else{
            alert('Error, preencha todos os campos!')
        }
    }
    const  registrar = async()=>{
        try{ const response = await api.post("/reserva", {
            "formaPagamento": formaPagamento,
            "status":status,
            "codFun":codFun,
            "codCli":codCli,
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
            <h1 className='titulo' style={{fontSize:'70px', color:'white', padding:'40px'}}>RESERVA</h1>
        </div>
        
        <div style={{display:'flex', flexDirection:'row'}}>
            <div className='fotologo' style={{width:'50vw'}}>
                <img src={imagem} style={{marginLeft:40, height:'400px', width:'500px'}}></img>
            </div>

            <div className='inputs' style={{flexDirection:'column', display:'flex',width:'50vw'}}>
                <input type='text' placeholder='Forma de Pagamento'  onChange={(e) => {setformaPagamento(e.target.value)}} value={formaPagamento}></input>
                <input type='text' placeholder='status' onChange={(e) => {setStatus(e.target.value)}}value={status}></input>
                <input type='text' placeholder='codigo do Funcionario' onChange={(e) => {setCodFun(e.target.value)}} value={codFun}></input>
                <input type='text' placeholder='Codigo do Cliente' onChange={(e) => {setCodCli(e.target.value)}} value={codCli}></input>
               
                <button onClick={mensagemCadastrar}>Fazer reserva</button>
            </div>

        </div>
    </div>
    )
}