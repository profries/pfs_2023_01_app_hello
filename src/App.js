import './App.css';
import Card from './components/Card';
import Hello from './components/Hello';
import ListCards from './components/ListCards';
import produtos from './data/Produtos.json';

function App() {
  return (
    <>
      <Hello nome="Fulano" idade={33}></Hello>
      <Card titulo="Produto 1">
        <h3>Descricao</h3>
        <p>O produto 1 eh bacana!</p>
      </Card>
      <ListCards lista={produtos}></ListCards>
    </>
  );
}

export default App;
