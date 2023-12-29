import Card from "./Componentes/Card/Card"
import StarWars from "/public/assets/star-wars.jpg"
import Empire from "/public/assets/esb-poster.jpg"
import Return from "/public/assets/rotj-poster.jpg"

function App() {
  return (
    <div>
      <Card
        title="Pôster: Star Wars (1977)"
        posterImg={StarWars}
        texto="Um poster decorativo épico do filme star wars, com moldura de mdf e tamnho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de star wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!" />
      <Card
        title="Pôster: Empire Strikes Back (1980)" 
        posterImg={Empire} 
        texto="Um poster decorativo épico do filme star wars, com moldura de mdf e tamnho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de star wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!" />
      <Card
        title="Pôster: Return of the Jedi (1983)" 
        posterImg={Return} 
        texto="Um poster decorativo épico do filme star wars, com moldura de mdf e tamnho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de star wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!" />
    </div>
  )
}
export default App
