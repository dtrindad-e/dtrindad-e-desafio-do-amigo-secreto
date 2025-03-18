# Projeto: Amigo Secreto

Este é um projeto simples de sorteio de "Amigo Secreto" usando HTML, CSS e JavaScript. O objetivo é permitir que os usuários adicionem nomes de amigos e, ao clicar em um botão, o sistema sorteia quem tirou quem, exibindo os resultados de maneira fácil e intuitiva.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **HTML** (`index.html`): Define a estrutura da página, incluindo os campos de entrada de nome, botões para adicionar amigos e sortear o amigo secreto, e os espaços para exibir as listas de amigos e o resultado do sorteio.
2. **CSS** (`style.css`): Contém o estilo visual da página (não fornecido aqui, mas pode incluir elementos como fontes, cores, layout, etc.).
3. **JavaScript** (`app.js`): Contém a lógica do sorteio, gerencia a adição de amigos à lista e a execução do sorteio.

## Funcionalidades

- **Adicionar Amigos**: O usuário pode digitar os nomes dos amigos e clicar no botão "Adicionar" para adicionar à lista de amigos.
- **Sortear Amigos Secretos**: Após adicionar pelo menos dois amigos, o usuário pode clicar no botão "Sortear amigo" e o sistema irá gerar uma lista com os resultados de quem sorteou quem.

## Como Funciona o Código

### 1. Adicionar Amigo

- Quando o usuário digita um nome no campo de texto e clica em "Adicionar", a função `adicionarAmigo()` é chamada.
- A função verifica se o nome não está vazio. Se não estiver, o nome é adicionado ao array `amigos`, e a lista na tela é atualizada com o nome recém-adicionado.
  
  **Dificuldades encontradas**:  
  Não houve grandes dificuldades nesta parte. O principal foi garantir que o campo de entrada fosse limpo após o nome ser adicionado e que o foco voltasse para o campo para que o usuário pudesse adicionar rapidamente outro nome.

  **Solução**:  
  Utilizamos o método `trim()` para garantir que o nome não tivesse espaços extras antes de ser adicionado ao array. Além disso, o campo de texto é limpo logo após o nome ser inserido, com o `inputNome.value = ''`, e o foco é reposicionado com `inputNome.focus()`.

### 2. Sortear Amigo Secreto

- A função `sortearAmigo()` é chamada quando o usuário clica no botão "Sortear amigo". Ela primeiro verifica se existem pelo menos dois amigos na lista. Se houver menos de dois, exibe um alerta.
- Caso haja amigos suficientes, a função percorre a lista de amigos e sorteia o próximo amigo da lista para ser o "amigo secreto". Isso é feito com um simples deslocamento cíclico usando a operação `(i + 1) % amigos.length`, garantindo que o último amigo sorteie o primeiro.

  **Dificuldades encontradas**:  
  O principal desafio foi garantir que o sorteio fosse feito de maneira justa e que o último amigo sorteasse o primeiro, o que poderia ser confuso à primeira vista.

  **Solução**:  
  Para resolver isso de maneira simples, usamos a operação `(i + 1) % amigos.length` dentro do loop para garantir que o índice do próximo amigo fosse correto, incluindo o caso do último amigo sorteando o primeiro. Isso foi uma solução simples e eficiente para um sorteio cíclico.

### 3. Exibição dos Resultados

- A lista de resultados é exibida dinamicamente usando a função `createElement('li')` para criar os itens da lista HTML, que são então inseridos no DOM da página.

  **Dificuldades encontradas**:  
  Não houve dificuldades aqui, pois criar e atualizar os elementos do DOM é uma tarefa direta no JavaScript.

  **Solução**:  
  A solução foi usar `document.createElement('li')` para criar os itens da lista, e depois usar `appendChild()` para adicionar esses itens à lista de resultados no HTML. Isso torna o processo de atualização da lista simples e eficiente.

## Como Rodar o Projeto

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em um navegador de sua escolha.
3. Adicione os nomes dos amigos na lista, clique em "Adicionar" e, em seguida, clique em "Sortear amigo" para ver o resultado do sorteio.

## Desafios Enfrentados e Como Superá-los

- **Validação de Entrada**: Um dos desafios foi garantir que os nomes dos amigos não fossem adicionados caso o campo de entrada estivesse vazio ou apenas com espaços. Isso foi resolvido usando o método `trim()`, que remove os espaços extras antes de validar.
  
- **Sorteio Cíclico**: O sorteio precisava garantir que o último amigo sorteasse o primeiro. A solução foi usar a operação `(i + 1) % amigos.length`, que cria um ciclo de sorteio simples e eficiente.

## Melhorias Futuras

- **Interface Visual**: Melhorar o design da página, tornando-a mais atraente e interativa.
- **Armazenamento Local**: Implementar armazenamento local (`localStorage`) para salvar a lista de amigos e os resultados, permitindo que o usuário retorne à página mais tarde sem perder os dados.
- **Sorteio Anônimo**: Para aumentar a privacidade, seria interessante esconder os resultados do sorteio até que todos os amigos tenham sido sorteados.
