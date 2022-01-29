// Cargar Componentes
import { useState } from 'react'
import info from './info.json'

// Cargar Estilos
import './App.css'

// Cargar Imágenes
import inicio from './img/jesus.svg'
import nombre from './img/jesus2.svg'
import participa from './img/jesus3.svg'
import edad from './img/jesus5.svg'
import correo from './img/jesus6.svg'
import telefono from './img/jesus7.svg'
import logo from './img/logo.svg'
import background from './img/fondo.png'

function App() {
  const [ page, setPage ] = useState(0)
  const [ user, setUser ] = useState({
    name: '',
    age: '',
    mail: '',
    phone: ''
  })

  const editUser = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setPage(page + 1)
  }
  const goPage = (num) => {
    if (num === '-') {
      setPage(page - 1)
    } else {
      setPage(num)
    }
  }

  return (
    <div className="content">
      <div className="info" style={{ backgroundImage: `url(${background})` }}>
        <div className="jesus">
          <div className="jesus-text">
            <p id="text">
              {page === 2 && `Hola ${user.name}, `}
              {page === 6 && <>
                <p>Repasemos tus datos antes de registrarte:</p>
                <p>{`- ${user.name}`}</p>
                <p>- </p>
                <p>- </p>
                <p>- </p>
                <p>- </p>
                <p>- </p>
              </>}
              {page !== 2 && page !== 6 && info[page].message}
            </p>
            <div className="arrow"></div>
          </div>
          {page === 0 && <img className="jesus-img" src={inicio} alt="" />}
          {page === 1 && <img className="jesus-img" src={nombre} alt="" />}
          {page === 2 && <img className="jesus-img" src={participa} alt="" />}
          {page === 3 && <img className="jesus-img" src={edad} alt="" />}
          {page === 4 && <img className="jesus-img" src={correo} alt="" />}
          {page === 5 && <img className="jesus-img" src={telefono} alt="" />}
          {page === 6 && <img className="jesus-img" src={edad} alt="" />}
          {page === 7 && <img className="jesus-img" src={edad} alt="" />}
          {page === 8 && <img className="jesus-img" src={edad} alt="" />}
        </div>
      </div>
      { page > 0
          && <div className="back-div" onClick={() => goPage('-')}>
              <button className="back"></button>
              <p>Volver</p>
             </div>
      }

      <form className="form" onSubmit={handleSubmit}>
        { page === 0
            && <button type="submit" className="continue">
                <div className="circle"></div>
                <p>Continuar</p>
               </button>
        }
        { page === 1
            && <div className="label">
                <input 
                    type="text"
                    placeholder="Nombre y Apellido" 
                    name="name"
                    onChange={editUser}
                    value={user.name}
                    required
                />
                <button type="submit" className="button">Continuar</button>
               </div>
        }
        { page === 2
          && <div className="yes-no">
              <button onClick={editUser} value="no" name="group">No</button>
              <button onClick={editUser} value="yes" name="group">Sí</button>
             </div>
        }
        { page === 3
            && <div className="label">
                <input 
                    type="number"
                    placeholder="Edad" 
                    name="age"
                    onChange={editUser}
                    value={user.age}
                    required
                />
                <button type="submit" className="button">Continuar</button>
               </div>
        }
        { page === 4
            && <div className="label">
                <input 
                    type="email"
                    placeholder="Correo electrónico" 
                    name="mail"
                    onChange={editUser}
                    value={user.mail}
                    required
                />
                <button type="submit" className="button">Continuar</button>
               </div>
        }
        { page === 5
            && <div className="label">
                <input 
                    type="text"
                    placeholder="Teléfono" 
                    name="phone"
                    onChange={editUser}
                    value={user.phone}
                    required
                />
                <button type="submit" className="button">Continuar</button>
               </div>
        }
        { page === 6
            && <button type="submit" className="continue">
                <div className="circle"></div>
                <p>Continuar</p>
               </button>
        }
            
                
        <div className="form-footer">
          <img src={ logo } alt="" />
          <p>Movimiento de la Palabra de Dios</p>
        </div>
      </form>
    </div>
  )
}

export default App;
