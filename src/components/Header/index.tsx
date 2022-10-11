import { HeaderContainer } from './styles'
import Logo from '../../assets/ignite-timer-logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={Logo} alt="Dois Triangulos Verdes" />
      </span>
      <nav>
        <NavLink to="/" end title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
