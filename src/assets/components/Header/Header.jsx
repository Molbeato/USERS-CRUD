import './Header.css'

const Header = ({onCreate}) => {
  return (
    <header className='header'>
        <h1>Users</h1>
        <button className='header-create_btn' onClick={()=> onCreate()}>Create new form</button>
    </header>
  )
}

export default Header