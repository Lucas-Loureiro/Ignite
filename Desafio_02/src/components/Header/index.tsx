import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { Aside, Container } from './styles'

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>

        <Link to={`cart`}>
          <ShoppingCart size={22} weight="fill" />
          <span>1</span>
          {/* {cart.length > 0 ? <span>{cart.length}</span> : null} */}
        </Link>
      </Aside>
    </Container>
  )
}
