# RFC 04: Arquitetura de Front-End com React

**Tema**: Arquitetura e organização de frontend</br>
**Número do RFC**: 004 </br>
**Data Inicio**: 02/09/2024</br>
**Responsavel**: 1bira</br>
**Decisão**:Analise</br>


## 1. Visão Geral

### 1.1 Objetivo
Este documento propõe uma arquitetura de front-end baseada em React para a construção de aplicações web modernas e escaláveis. O objetivo é estabelecer uma estrutura padrão que facilite o desenvolvimento, manutenção e escalabilidade do projeto.



### 1.2 Escopo
Esta RFC cobre a arquitetura do front-end, incluindo estrutura de pastas, gerenciamento de estado, roteamento, e integração com APIs. Não abrange aspectos relacionados ao back-end ou DevOps.

## 2. Situação Atual

### 2.1 Descrição
Atualmente, o front-end da aplicação é construído com uma tecnologia legada (ex: jQuery, AngularJS) que apresenta desafios em termos de manutenção e escalabilidade. As principais limitações incluem:

- **Manutenção Difícil**: Código fragmentado, difícil de refatorar.
- **Baixa Escalabilidade**: A arquitetura atual não suporta bem novos módulos ou funcionalidades.
- **Experiência do Usuário**: Dificuldade em implementar experiências ricas e dinâmicas.

### 2.2 Impacto
Devido a essas limitações, o time de desenvolvimento enfrenta dificuldades em responder rapidamente às mudanças de requisitos. Além disso, a complexidade crescente do código aumenta os custos de manutenção e o risco de bugs.

## 3. Arquitetura Sugerida

### 3.1 Tecnologias e Ferramentas
- **React**: Biblioteca principal para construção da interface de usuário.
- **Redux/Recoil**: Gerenciamento de estado global.
- **React Router**: Gerenciamento de rotas e navegação.
- **Webpack/Vite**: Configuração e construção do projeto.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Styled Components/Tailwind CSS**: Gerenciamento de estilos.
- **Jest/React Testing Library**: Framework de testes.

### 3.2 Estrutura de Pastas
```plaintext
src/
├── components/        # Componentes reutilizáveis
├── containers/        # Componentes que conectam ao estado global e lógica
├── pages/             # Páginas individuais da aplicação
├── services/          # APIs e lógica de negócio
├── hooks/             # Custom hooks
├── store/             # Gerenciamento de estado (Redux, Recoil)
├── styles/            # Estilos globais e temas
├── utils/             # Utilitários e funções auxiliares
└── App.tsx            # Componente raiz
```


### 3.3 Padrões e Convenções
- **Componentização**: Dividir a interface em componentes reutilizáveis e testáveis.
- **Imutabilidade**: Seguir o princípio da imutabilidade ao gerenciar o estado.
- **Modularidade**: Separar lógica de apresentação e lógica de negócio.


## 4. Pros e Contras
### 4.1 Vantagens
- **Escalabilidade**: React facilita a criação de componentes modulares que podem ser facilmente escalados.
Manutenção: O uso de TypeScript e padrões de codificação melhora a mantenabilidade do código.
- **Performance**: React é otimizado para renderizações eficientes, oferecendo melhor performance para aplicações grandes.
- **Comunidade e Suporte**: Grande comunidade com uma vasta gama de bibliotecas e ferramentas.
### 4.2 Desvantagens
- **Curva de Aprendizado**: React, especialmente quando combinado com Redux e TypeScript, pode ter uma curva de aprendizado íngreme.
- **Complexidade**: A introdução de diversas ferramentas e bibliotecas pode aumentar a complexidade inicial do projeto.
- **Sobrecarga de Configuração**: A configuração inicial do ambiente de desenvolvimento pode ser demorada e complexa.



## 5. Perguntas em aberto 
- **Utilização e Escolha  de gerenciador de Estado**: Optamos por sua utilização e caso sim, Redux ou Recoil ou uma solução mais leve como Context API? Quais sos requisitos que devem guiar essa escolha
- **Estrategia de Tests**: Que nivel de cobertura de testes é necessario para balancear entre qualidade e velocidade de desenvolvimento?
- **Adoção de TypeScript**: Qual será o impacto da adoção de Typescript na curva de aprendizado da equipa atual? Há resistencia ou treinamento necessario?
- **Manutenção de dependencias**: Como será  gerenciada a atualização de dependencias para garantir que o projeto parmaneça atuzlizado sem comprometer a estabilidade?


## 6. Conslusão
A arquitetura sugerida oferece uma base solida para o desenvolvimento de uma aplicação fornt-end moderna e escalavel. Embora existam desafios relacionados a curva de aprendizado e complexidade os beneficios em termos de manutenção, performance e escalabilidade justificam a adoção de React como base da arquitetura.