# Estudos gerais sobre GitLab

## Definições gerais:
* pipeline -> Onde os processos acontecem
* jobs -> estapas executadas dentro de uma pipeline
* gitlab-ci.yml -> arquivo de configurações da pipeline, nele que são definidos os jobs
* test, build e deploy -> estagios da pipeline
* a pipeline é ativada a cada commit
## Script
* O espaçamento é necessario, 2 espaços!
* Uma imagem docker é necessaria!
### Exemplo de escript
```
image [imagem  docker]
services: [serviços para iniciar dentro do nosso projeto]
  - docker:dind [docker in docker]
before_script: [faça antes do script]
  - docker info 
  - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD [podemos criar essas variaveis no GitLab ]
nome:
  stage: [estagio a ser executado]
  script: [execuções que vão ser feitas]
  - docker build -t minha-imagem [monta a img]
  - docker tag minha-imagem minha-imagem-dockerhub: (tag_name) [da uma tag]
```
##  O dockerhub
Lugar para salvar os projetos e onde outros projetos publicos podem ser acessados

## GitLab Runner:
Você pode configurar essa imagem docker para que ela seja o executor para as proximas tarefas
* runner -> executor de tarefas
* Imagem no docker: GitLab Runner
* Devemos registrar nosso runner no GitLab e falar para a pipeline que queremos usar ele
### Comandos:
**antes de executar esses comandos a imagem docker deve ser configurada.**
```
// Executa e nos coloca dentro do container do runner
docker exec -it [nome_do_runner] bash
```
```
// Registra o runner no gitlab, verfique a seção "config runner"
gitlab-runner register
```
### Config runner:
Após a execução do comando "gitlab-runner register" ele faz algumas perguntas, segue a explicação de cada pergunta:
* Registrar a url
  * Aqui você deve colocar o caminho do seu projeto
* Token
  * O token referente ao proejeto
* Descrição
  * Uma descrição
* Tags
  * Tags que vão ficar no seu projeto ~ o nome do passo do gitlab ci
* Tipo do executor
  * Oq nosso executor vai fazer
## Script de build
image: docker:stable
services:
- docker:dind
before-docker:
- docker info
- docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD
build-docker:
  stage: build
  script:
  - docker build -t minha-imagem
  - docker tag minha-imagem user/minha-imagem:latest
  - docker push user/minha-imagem:latest
build-project:
 stage: build
 tags: 
