# Instalando Docker:

## Via Debian
### Configurar o repositório
Atualize o aptíndice do pacote e instale os pacotes para permitir apto uso de um repositório por HTTPS:
```
sudo apt-get update
```
```
sudo apt-get install ca-certificates curl gnupg
```
Adicione a chave GPG oficial do Docker:
```
sudo install -m 0755 -d /etc/apt/keyrings
```
```
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```
```
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```
Use o seguinte comando para configurar o repositório:
```
 echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
### Instalar Docker Engine
Atualize o aptíndice do pacote:
```
sudo apt-get update
```
Instale o Docker Engine, o containerd e o Docker Compose.
Para instalar a versão mais recente, execute:
```
 sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
Verifique se a instalação do Docker Engine foi bem-sucedida executando a hello-worldimagem:
```
 sudo docker run hello-world
```
<<<<<<< Updated upstream
### Docker container run:
docker container run [parametos] [imagem]
Parametros:
* --rm -> ao terminar ele é excluido
* -d -> roda em segundo plano
* --name -> pode dar uma nome ao container
* -t -> terminal
* -i -> interativo
* -p -> associa uma porta do host ao container
* -P -> associa tds as portas do container em portas aleatorias do host
* -e -> serve para declarar variaveis
* --reado-only -> apenas leitura
* --hostname -> define um hostname para maquina
* health-cmd -> define um comando para o checar o container
* --health-interval -> define um  intervalo
* --health-retries -> numeros de tentiva
### Docker container:
* create -> apenas cria o container (pode usar o mesmos param do run)
* start -> inicia o container
* stop -> para o container 
* kill -> mata o container
* rm -> remover um container
* restart -> reinicia o container
* rename -> serve para renomear o container
* wait -> prende a linha de conmando mostrando apenas o exit code
* inspect -> mostra tds as infos do container 
* port -> mostra as portas do container
* diff -> mostra a diferença entre dois containers
* logs -> mostra os logs
* exec -it [nome] [shell]-> entra no container com shell
* exec [nome] [comando] -> roda um comando no container
* qcp -> [daqui] [pra k] copia arquivos do container para o host
* commit -> salve o estado do container como uma imagem
* commit -p -> no momento que a imagem for criada o contaier é pausado ate terminar o comando
* export [nome] -o [nome_da_exportação] -> exporta a imagem
* --cpus [num] -> serve para limitar os cpus
* -m -> limita o total de memoria
* stat -> status do container em tempo real
    * top -> escohe o container que quero ver
### Docker Image:
* import [imagem] [importada] -> importa uma imagem
=======
### Comandos do docker image: 
Construir uma imagem:
````
docker image build
````
Historico da imagem;
````
docker image history
````
Importar imagem a partir de um container
````
docker image import
````
Inspecionar determinada imagem
````
docker image inspect
````
Carregar uma img a partir de uma salva
````
docker image load
````
listar imagens
````
docker image ls
````
Remover imagens não usadas
````
docker image prune
````
Baixar imagem
````
docker image pull
````
Enviar imagem
````
docker image push
````
Remocer imagem
````
docker image rm
````
Salver imagem
````
docker image save
````
Definir uma tag para a imagem
````
docker image tag
````
### Comandos do Docker container
Anexar um container
````
docker container attach
````
Cria uma nova imagem a partir de um container
````
docker container commit
````
Para copiar arquivos entre container e o host
````
docker container cp
````
Cria um novo container
````
docker container creat
````
Verifca as alterações de um container	
````
docker container diff
````
Acessar um container
````
docker container exec
````
Cria arquivo compactado para uma imagem
````
docker container export
````
Inspeciona infos de um container
````
docker container inspect
````
Matar um container
````
docker container kill
````
Ver os logs de um container
````
docker container logs
````
Listar os container
````
docker container ls
````
Pausar um container
````
docker container pause
````
Listar portas de um container
````
docker container port
````
Remover containers parados
````
docker container prune
````
Renomear um container
````
docker container rename
````
Reiniciar um container
````
docker container restart
````
Remover um container
````
docker container rm
````
Inicar um container
````
docker container run
````
Reiniciar um container que estava parado
````
docker container start
````
Visualizar as stats dos container
````
docker container stats
````
Parar o container
````
docker container stop
````
Visualizar os processos dos containers
````
docker container top
````
Despausa um container
````
docker container unpause
````
Up nas confifs de um algum container
````
docker container update
````
Esperar que um container faça alto
````
docker container wait
````
### Docker container run
Alterando o CMD:
Se rodarmos o run e na frente do container colocarmos um comando ele que vai ser executado na hora que o container é inicializado.
Parametro --entrypoint -> serve para alterar o entrypoint da imagem.
## Rodando o container de forma interativa:
-d -> roda e deixa o terminal livre 
--rm -> apaga após o container ser encerrado
-it -> acessa o terminal de forma interativa
>>>>>>> Stashed changes
