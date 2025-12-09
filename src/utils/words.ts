export type Challenge = {
  id: number
  word: string
  tip: string
}

export const WORDS: Challenge[] = [
  { id: 1, word: 'CSS', tip: 'Linguagem de estilos para páginas web' },
  { id: 2, word: 'REACT', tip: 'Biblioteca para criar interfaces Web' },
  { id: 3, word: 'HTML', tip: 'Linguagem de marcação para estruturar páginas' },
  { id: 4, word: 'JAVASCRIPT', tip: 'Linguagem de programação muito usada no front-end' },
  { id: 5, word: 'TYPESCRIPT', tip: 'Javascript com tipagem estática' },

  { id: 6, word: 'NODE', tip: 'Permite rodar JS no back-end' },
  { id: 7, word: 'API', tip: 'Ponte entre sistemas para troca de dados' },
  { id: 8, word: 'JSON', tip: 'Formato de dados leve e famoso na web' },
  { id: 9, word: 'GIT', tip: 'Controle de versão amado (e odiado)' },
  { id: 10, word: 'GITHUB', tip: 'Rede social dos programadores' },

  { id: 11, word: 'SQL', tip: 'Linguagem para bancos de dados' },
  { id: 12, word: 'POSTGRES', tip: 'Banco de dados relacional poderoso' },
  { id: 13, word: 'MONGODB', tip: 'Banco NoSQL baseado em documentos' },
  { id: 14, word: 'BACKEND', tip: 'A parte do sistema que o usuário não vê' },
  { id: 15, word: 'FRONTEND', tip: 'A parte bonita que o usuário usa' },

  { id: 16, word: 'FULLSTACK', tip: 'Quem faz back e front ao mesmo tempo' },
  { id: 17, word: 'FRAMEWORK', tip: 'Base pronta para construir projetos' },
  { id: 18, word: 'COMPILER', tip: 'Transforma código em algo executável' },
  { id: 19, word: 'ARRAY', tip: 'Coleção de valores' },
  { id: 20, word: 'BOOLEAN', tip: 'Só aceita true ou false' },

  { id: 21, word: 'VARIABLE', tip: 'Serve para guardar valores' },
  { id: 22, word: 'FUNCTION', tip: 'Bloco de código reutilizável' },
  { id: 23, word: 'ASYNC', tip: 'Permite operações assíncronas' },
  { id: 24, word: 'HOOKS', tip: 'Funções especiais do React' },
  { id: 25, word: 'VITE', tip: 'Build mais rápido que café forte' },

  { id: 26, word: 'NPM', tip: 'Gerenciador de pacotes JS' },
  { id: 27, word: 'YARN', tip: 'Outro gerenciador de pacotes (time dividido)' },
  { id: 28, word: 'TERMINAL', tip: 'Onde o dev conversa com o computador' },
  { id: 29, word: 'COMPONENT', tip: 'Peça reutilizável da interface' },
  { id: 30, word: 'PROPS', tip: 'Informações passadas para componentes' },

  { id: 31, word: 'STATE', tip: 'Variáveis que re-renderizam no React' },
  { id: 32, word: 'DEPLOY', tip: 'Colocar o site no ar' },
  { id: 33, word: 'CACHE', tip: 'Guarda dados para acesso rápido' },
  { id: 34, word: 'ALGORITHM', tip: 'Passo a passo para resolver problemas' },
  { id: 35, word: 'LOGIC', tip: 'Base de todo programador' },

  { id: 36, word: 'LOOP', tip: 'Repete coisas (às vezes eternamente)' },
  { id: 37, word: 'DEBUG', tip: 'Caçar bugs como Sherlock Holmes' },
  { id: 38, word: 'STACK', tip: 'Estrutura de dados LIFO' },
  { id: 39, word: 'QUEUE', tip: 'Estrutura de dados FIFO' },
  { id: 40, word: 'BINARY', tip: 'Tudo é 0 e 1 no fim das contas' },
  { id: 41, word: 'DOM', tip: 'Representação da estrutura da página' },
  { id: 42, word: 'BROWSER', tip: 'Onde tudo acontece no front' },
  { id: 43, word: 'SERVER', tip: 'Onde o código trabalha nos bastidores' },
  { id: 44, word: 'ROUTER', tip: 'Gerencia rotas no front/back' },
  { id: 45, word: 'JWT', tip: 'Token para autenticação' },

  { id: 46, word: 'AUTH', tip: 'Controle de acesso do sistema' },
  { id: 47, word: 'SESSION', tip: 'Mantém você logado no site' },
  { id: 48, word: 'COOKIE', tip: 'Dados guardados no navegador (e não dá pra comer)' },
  { id: 49, word: 'LOCALSTORAGE', tip: 'Armazena dados no browser' },
  { id: 50, word: 'FETCH', tip: 'Usado para buscar dados de uma API' },

  { id: 51, word: 'PROMISE', tip: 'Promessa de um valor futuro' },
  { id: 52, word: 'TRYCATCH', tip: 'Tratamento de erros com carinho' },
  { id: 53, word: 'LOADER', tip: 'Aquele spinner eterno' },
  { id: 54, word: 'UI', tip: 'Interface do usuário' },
  { id: 55, word: 'UX', tip: 'Experiência do usuário (não irrite ele)' },

  { id: 56, word: 'SASS', tip: 'CSS com superpoderes' },
  { id: 57, word: 'TAILWIND', tip: 'Framework CSS cheio de utilitários' },
  { id: 58, word: 'BOOTSTRAP', tip: 'CSS pronto para emergências' },
  { id: 59, word: 'GRID', tip: 'Layout poderoso no CSS' },
  { id: 60, word: 'FLEX', tip: 'Organiza elementos com estilo' },

  { id: 61, word: 'STATELESS', tip: 'Sem armazenamento interno' },
  { id: 62, word: 'RENDER', tip: 'Momento que a tela atualiza' },
  { id: 63, word: 'SVELTE', tip: 'Framework JS minimalista' },
  { id: 64, word: 'ANGULAR', tip: 'Outro gigante do frontend' },
  { id: 65, word: 'NEXTJS', tip: 'Framework React para SSR/SSG' },

  { id: 66, word: 'NUXT', tip: 'Next.js porém para Vue' },
  { id: 67, word: 'WEBPACK', tip: 'Empacotador do front' },
  { id: 68, word: 'BUNDLER', tip: 'Une tudo em arquivos otimizados' },
  { id: 69, word: 'CI', tip: 'Integração Contínua' },
  { id: 70, word: 'CD', tip: 'Entrega Contínua' },

  { id: 71, word: 'PIPELINE', tip: 'Automação do deploy' },
  { id: 72, word: 'CLOUD', tip: 'Servidores na nuvem' },
  { id: 73, word: 'AWS', tip: 'Gigante da nuvem' },
  { id: 74, word: 'AZURE', tip: 'Serviços em nuvem da Microsoft' },
  { id: 75, word: 'FIREBASE', tip: 'Banco, auth e deploy fácil' },

  { id: 76, word: 'DOCKER', tip: 'Empacota apps em containers' },
  { id: 77, word: 'KUBERNETES', tip: 'Orquestrador de containers' },
  { id: 78, word: 'SSH', tip: 'Acesso remoto seguro' },
  { id: 79, word: 'TLS', tip: 'Criptografia para comunicação' },
  { id: 80, word: 'HTTPS', tip: 'Versão segura do HTTP' },

  { id: 81, word: 'CRON', tip: 'Agenda tarefas automáticas' },
  { id: 82, word: 'WEBHOOK', tip: 'Notificação automática entre sistemas' },
  { id: 83, word: 'MICROSERVICE', tip: 'Sistema dividido em pequenos serviços' },
  { id: 84, word: 'ENDPOINT', tip: 'Rota da API' },
  { id: 85, word: 'CACHE', tip: 'Deixa tudo mais rápido (ou confuso)' },

  { id: 86, word: 'REFACTOR', tip: 'Melhorar o código sem alterar o resultado' },
  { id: 87, word: 'CLEANCODE', tip: 'Código bonito e legível' },
  { id: 88, word: 'TEST', tip: 'Garantir que nada quebre' },
  { id: 89, word: 'TDD', tip: 'Testes antes do código' },
  { id: 90, word: 'DESIGNPATTERN', tip: 'Soluções comuns a problemas recorrentes' },

  { id: 91, word: 'INHERITANCE', tip: 'Classes herdando comportamentos' },
  { id: 92, word: 'POLYMORPHISM', tip: 'Uma coisa com várias formas' },
  { id: 93, word: 'ENCAPSULATION', tip: 'Proteger dados internos' },
  { id: 94, word: 'ABSTRACTION', tip: 'Simplificar o complexo' },
  { id: 95, word: 'RECURSION', tip: 'Função que chama ela mesma' },

  { id: 96, word: 'THREAD', tip: 'Execução paralela' },
  { id: 97, word: 'HEAP', tip: 'Área da memória dinâmica' },
  { id: 98, word: 'STACKOVERFLOW', tip: 'Dev não vive sem' },
  { id: 99, word: 'CRASH', tip: 'Quando tudo dá errado' },
  { id: 100, word: 'BUG', tip: 'Inseto famoso que quebra programas' },
]
