import React, {useState} from 'react';
import imagem from '../imgs/hotel.png';
import '../App.css';
import { Link } from 'react-router-dom';




export default function Tela1(){

   

    const [isActive, setIsActive] = useState('blue')

    return(
        <div style={{backgroundColor:'#1e1e1e', width:'100vw', height:'100vh'}}>
            <div className='Tela1'>
                <h1 className='titulo' style={{fontSize:'70px', color:'white', padding:'40px'}}>BEM VINDO</h1>
            </div>
            
            <div style={{display:'flex', flexDirection:'row'}}>
                <div className='fotologo' style={{width:'50vw'}}>
                    <img src={imagem} style={{marginLeft:40, height:'400px', width:'500px'}}></img>
                </div>

                <div className='botoes' style={{flexDirection:'column', display:'flex',width:'50vw'}}>
                    <button className='botao1'><Link to='/cliente' className='botaodoKarai'>Cadastro do cliente</Link></button>
                    <button className='botao1'><Link to='/funcionario' style={{textDecoration:'none', color:'black'}} className='botaodoKaria'>Cadastro do Funcionario</Link></button>
                    <button className='botao1'><Link to='/reserva'  style={{textDecoration:'none', color:'black'}}   className='botaodoKaria'> Fazer reserva </Link></button>
                    <button>...</button>
                </div>
            </div>
        </div>
    )
}