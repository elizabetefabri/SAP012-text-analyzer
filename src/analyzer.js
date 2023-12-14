// Definindo um objeto chamado "analyzer" que contém várias funções de análise de texto
const analyzer = {
  // Esta função recebe um texto e retorna o número de palavras nele
  getWordCount: (text) => {
    // Dividindo o texto em palavras usando o espaço como separador
    const words = text.split(' ');
    // Retornando o número de palavras
    return words.length;
  },
  // Esta função recebe um texto e retorna o número de caracteres nele
  getCharacterCount: (text) => {
    return text.length;
  },
  // Esta função recebe um texto e retorna o número de caracteres nele, excluindo espaços e sinais de pontuação
  getCharacterCountExcludingSpaces: (text) => {
    // Substituindo espaços e sinais de pontuação por nada
    const noSpaces = text.replace(/[\s.?!,;:]/g, '');

    // Retornando o número de caracteres
    return noSpaces.length;
  },
  // Esta função recebe um texto e retorna o comprimento médio das palavras nele
  getAverageWordLength: (text) => {
    // Dividindo o texto em palavras usando o espaço como separador
    const words = text.split(' ');
    let sum = 0;
    // Para cada palavra, adicionando seu comprimento à soma
    for (let i = 0; i < words.length; i++) {
      sum += words[i].length;
    }

    const result = (sum / words.length).toFixed(2);
    return Number(result);
  },
  // Esta função recebe um texto e retorna o número de números nele
  getNumberCount: (text) => {
    // Encontrando todos os números no texto
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);

    // Se houver números, retornando o número de números, caso contrário, retornando 0
    if (numbers) {
      return numbers.length;
    } else {
      return 0;
    }
  },
  // Esta função recebe um texto e retorna a soma de todos os números nele
  getNumberSum: (text) => {
    // Encontrando todos os números no texto
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    // Se houver números, somando todos eles, caso contrário, retornando 0
    if (numbers) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
      }
      return sum;
    } else {
      return 0;
    }
  },
};

export default analyzer;
