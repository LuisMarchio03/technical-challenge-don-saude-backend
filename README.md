# Instruções para Executar o Projeto

Siga as etapas abaixo para executar o projeto.

## 1. Configuração Inicial

Inicialmente, você precisará configurar o ambiente do projeto. Certifique-se de que o PostgreSQL esteja funcionando corretamente.

**Execute o seguinte comando para iniciar o container do PostgreSQL:**

```bash
docker-compose up
```

## 2. Configuração do Arquivo .env

Após subir o container do PostgreSQL, é necessário configurar o arquivo .env. Você pode criar este arquivo com base no exemplo fornecido em .env.example. Dentro do arquivo .env, preencha os dados de acordo com as configurações definidas no docker-compose.yml.

## 3. Executando Testes

Para rodar os testes da aplicação e garantir que tudo funcione conforme o esperado, siga os passos abaixo:

**Execute o seguinte comando para executar os testes com o Vitest (certifique-se de que o ambiente de desenvolvimento esteja configurado):**

```bash
yarn vitest
# ou
npm run vitest
```

## 4. Iniciando a Aplicação

Agora que o ambiente está configurado e os testes passaram com sucesso, você pode iniciar a aplicação:

**Execute o seguinte comando para iniciar a aplicação:**

```bash
yarn start
# ou
npm run start
```

Isso iniciará a aplicação e a disponibilizará para uso.

## 5. Testando as Rotas

Após a inicialização da aplicação, você encontrará um arquivo na raiz do projeto chamado REST.http. Se você estiver usando a extensão do Visual Studio Code chamada "REST Client", você poderá utilizar esse arquivo para testar as rotas da aplicação. Basta abrir o arquivo e executar as solicitações HTTP para interagir com as rotas da aplicação.
