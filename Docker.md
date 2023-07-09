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