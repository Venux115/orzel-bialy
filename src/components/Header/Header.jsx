import { Component } from "react"
import "./header.css"

class Header extends Component{
    render(){
        return (
            <div className="header">
                <img src="#" alt="logo da do grupo Orzel bialy" />
                <ul className="header_list">
                    <li className="header_list_itens">Home</li>
                    <li className="header_list_itens">Apresentações</li>
                    <li className="header_list_itens">História</li>
                    <li className="header_list_itens">Cultura</li>
                    <li className="header_list_itens">Trajes</li>
                </ul>
                <button className="btn_contact" type="button">Entre em contato</button>
            </div>
        )
    }
}

export default Header
