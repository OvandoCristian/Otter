import logo from '../../assets/Imgs/Logo.png';
import '../../assets/Styles/Header.css';

function Header() {
    return ( 
        <div className='container'>
            <div>
                 <div>
                    <img src={logo} alt="Logo de la empresa"/>
                 </div>
                    <div>
                      <h1>OTTER</h1>
                    </div>
            </div>
        </div>
     );
}
export default Header;