import logo from '../../assets/Imgs/Logo.png';

function Header() {
    return ( 
        <div>
            <div>
                <img src={logo} alt="Logo de la empresa"/>
                <h1>OTTER</h1>
            </div>
        </div>
     );
}
export default Header;