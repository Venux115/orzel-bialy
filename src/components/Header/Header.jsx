import ToggleMenu from "../toggleMenu/ToggleMenu";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
    const [active, setActive] = useState(false);
    const handleToggleClick = () => {
        setActive(!active);
    };

    return (
        <div>
            <nav className="header">
                <img src="#" alt="logo da do grupo Orzel bialy" />

                <ul className="header_list ">
                    <li className="list_itens">Home</li>
                    <li className="list_itens">História</li>
                    <li className="list_itens">Apresentações</li>
                    <li className="list_itens">Cultura</li>
                    <li className="list_itens">Trajes</li>
                </ul>

                <button
                    className={`btn_contact`}
                    type="button"
                >
                    Entre em contato
                </button>

                <button
                    className="toggle_button"
                    type="button"
                    onClick={handleToggleClick}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </nav>

            <ToggleMenu active={active} />
        </div>
    );
}

export default Header;
