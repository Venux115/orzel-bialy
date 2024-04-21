import React from "react";
import "./toggleMenu.css";


export default function ToggleMenu({active}) {

    return (
        <section className={`toggle_section`}>
            <div className={`toggle_content ${active ? "active" : ""}`}>
                <ul className="toggle_list ">
                    <li className="toggle_list_itens">Apresentações</li>
                    <li className="toggle_list_itens">Home</li>
                    <li className="toggle_list_itens">História</li>
                    <li className="toggle_list_itens">Cultura</li>
                    <li className="toggle_list_itens">Trajes</li>
                </ul>
                <button className="btn_contact_toogle" type="button">
                    Entre em contato
                </button>
            </div>
        </section>
    );
}
