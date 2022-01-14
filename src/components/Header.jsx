import { Link } from "react-router-dom";

const randColour = () =>
    ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header() {
    return (
        <header
            className="header"
            // @ts-ignore
            style={{ ["--border-colour"]: `var(--${randColour()})` }}
        >
            <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
                Hoxbay
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to={'/home'} >Home</Link>
                    </li>
                    <li>
                        <Link to={'/Categories'} > Categories </Link>
                    </li>
                    <li>
                        <Link to={'/Basket'} > Basket </Link>

                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;