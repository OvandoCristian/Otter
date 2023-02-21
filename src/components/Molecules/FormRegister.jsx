import logo from '../../assets/Imgs/Logo.png';
import '../../assets/style/Register.css'

function Formregister (){
    return (  
          <form>
            <div classname='Register'>
                <img src={logo} alt="Logo de la empresa"/>
                <div>
                    <h2>Bienvenido a Otter</h2>
              </div>
                <div>
                <label>Nombre Completo</label>
                  <input type="text" name='nombre'/>
                </div>
                <div>
                <label>Correo Electrónico</label>
                  <input type="email" name='email'/>
                </div> 
                <div> 
                <label>Contraseña</label> 
                  <input type="password" name='password'/>
                </div> 
                <button>Registrarse</button>  
            </div>
          </form>
    );
}
export default Formregister;