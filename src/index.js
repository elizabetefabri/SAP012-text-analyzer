import analyzer from './analyzer.js';
// Aguarda o evento de carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  // Quando o documento for carregado, executa o código abaixo:
  // Seleciona o elemento <textarea> no DOM
  const textarea = document.querySelector('textarea');
  // Seleciona todos os elementos <li> com o atributo data-testid no DOM
  const list = document.querySelectorAll('li[data-testid]');
  // Função para atualizar as métricas
  const updateMetrics = () => {
    // Obter o texto do conteúdo do <textarea>
    const text = textarea.value;
    // Para cada elemento <li> com o atributo data-testid, atualiza o texto
    list.forEach((li) => {
      // Obtém o valor do atributo data-testid do elemento <li>
      const metricType = li.getAttribute('data-testid');
      // Realiza uma verificação com base no valor do atributo data-testid
      switch (metricType) {
      // Caso o valor seja 'word-count', atualiza o texto do <li> com a contagem de palavras
      case 'word-count':
        li.textContent = `Contador de palavras: ${analyzer.getWordCount(text)}`;
        break;
        // Caso o valor seja 'character-count', atualiza o texto do <li> com a contagem de caracteres
      case 'character-count':
        li.textContent = `Contador de caracteres: ${analyzer.getCharacterCount(text)}`;
        break;
        // Caso o valor seja 'character-no-spaces-count', atualiza o texto do <li> com a contagem de caracteres sem espaços
      case 'character-no-spaces-count':
        li.textContent = `Contador de caracteres sem espaços: ${analyzer.getCharacterCountExcludingSpaces(text)}`;
        break;
        // Caso o valor seja 'number-count', atualiza o texto do <li> com a contagem de números
      case 'number-count':
        li.textContent = `Contador de números: ${analyzer.getNumberCount(text)}`;
        break;
        // Caso o valor seja 'number-sum', atualiza o texto do <li> com a soma total dos números
      case 'number-sum':
        li.textContent = `Soma total dos números: ${analyzer.getNumberSum(text)}`;
        break;
        // Caso o valor seja 'word-length-average', atualiza o texto do <li> com o tamanho médio das palavras
      case 'word-length-average':
        li.textContent = `Tamanho médio das palavras: ${analyzer.getAverageWordLength(text)}`;
        break;
        // Caso não corresponda a nenhum valor esperado, não faz nada (default)
      default:
        break;
      }
    });
  };

  // Desenvolver o botão: Adicionar um ouvinte de evento para o evento de input no <textarea>
  textarea.addEventListener('input', updateMetrics);
  // Atraves Adiciona um ouvinte de evento para o evento de clique no botão de reset
  document.getElementById('reset-button').addEventListener('click', () => {
    textarea.value = ''; // Limpa o conteúdo do <textarea>
    updateMetrics(); // Atualiza as métricas após a limpeza
  });
});
