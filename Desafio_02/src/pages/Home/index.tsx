import { useTheme } from 'styled-components'
import Background from '../../assets/Background.svg'
import Imagem from '../../assets/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { CoffeeList, Heading, Hero, HeroContent, Info } from './styles'
import { coffees } from '../../../data.json'

export const Home = () => {
  const theme = useTheme()

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>

              <span>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </span>
            </Heading>

            <Info>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  color={theme['gray-100']}
                  style={{ backgroundColor: theme['yellow-700'] }}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  color={theme['gray-100']}
                  style={{ backgroundColor: theme['gray-800'] }}
                />
                <span>Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  color={theme['gray-100']}
                  style={{ backgroundColor: theme['yellow-500'] }}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  color={theme['gray-100']}
                  style={{ backgroundColor: theme['purple-500'] }}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Info>
          </div>

          <img src={Imagem} alt="Café do Coffee Delivery" />
        </HeroContent>

        <img src={Background} id="hero-bg" alt="" />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <>
              <p>{coffee.description}</p>
            </>
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
