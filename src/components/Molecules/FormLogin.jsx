import logo from '../../assets/Imgs/Logo.png';
import '../../assets/Styles/FormLogin.css';

function FormLogin (){
    return (  
          <form>
            <img src={logo} alt="Logotipo" width="90"/>
               <h2>Bienvenido a Otter</h2>
               <div>
               <label>Correo Electrónico</label>
                 <input type="text" name='nombre'/>
              </div>
              <div>
               <label>Contraseña</label>
                 <input type="text" name='nombre'/>
              </div>
               <button>Iniciar Sesión</button>
                <div>
                <label></label>
               </div>
          </form>
    );
}
export default FormLogin;