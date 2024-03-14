# Configurando Armazenamento ISO Local

- [x] **Tipos de Armazenamento**
- [ ] **SR ISO**
- [ ] **Configuração Local**

## Tipos de Armazenamento
Ao configurar armazenamento no ambiente XCP-ng, é essencial compreender os diferentes tipos disponíveis para atender às necessidades específicas. Os tipos incluem:

| Tipo de Repositório de Armazenamento | Nome       | Aprovisionamento Fino | Armazenamento Compartilhado | Oficialmente Suportado |
|--|--|--|--|--|
| Baseado em Arquivo | EXT Local  | ✅ | ✅ | ✅ |
| Baseado em Arquivo | NFS | ✅ | ✅ | ✅ |

### Comandos para Armazenamento
A seguir, alguns comandos úteis para gerenciar o armazenamento:

- Listar Storages:
  ```bash
  xe sr-list
  ```
- Listar Storages com mais detalhes:
  ```bash
  xe sr-list uuid=[sr-uuid] params=all
  ```
- Remover um storage:
  ```bash
   xe sr-destroy uuid=[sr-uuid]
  ```
- Listar PBD (Physical Block Devices) de um SR:
  ```bash
  xe pbd-list sr-uuid=[sr-uuid]
  ```
- Desconectar SR do PBD (Physical Block Devices):
  ```bash
  xe pbd-unplug uuid=[pbd-sr-uuid]
  ```

### Configuração Local?
**Não!** 
1. Perda de logs
2. Chamadas de API's

## SR ISO
O SR ISO é uma parte crítica da configuração, mas é vital evitar configurações locais. A criação pode ser realizada por meio da seguinte CLI:

```bash
xe sr-create name-label=[NomeDaLabel] type=iso device-config:location=[Localização] config:legacy_mode=true content-type=iso
```

## Referências:
- **Documentação Oficial:**
  - [Armazenamento no XCP-ng](https://xcp-ng.org/docs/storage.html#storage-in-xcp-ng)
    - [Tipos de Armazenamento](https://xcp-ng.org/docs/storage.html#storage-types)
    - [Armazenamento Local](https://xcp-ng.org/docs/storage.html#local)
    - [Armazenamento NFS](https://xcp-ng.org/docs/storage.html#nfs)
    - [SR ISO](https://xcp-ng.org/docs/storage.html#iso-sr)
    - [Crie um SR ISO Local](https://xcp-ng.org/docs/storage.html#create-a-local-iso-sr)

- **Recursos na Web:**
  - [I can't directly upload an ISO to the server](https://www.reddit.com/r/xcpng/comments/ytujbf/i_cant_directly_upload_an_iso_to_the_server/)
  - [How to create a local ISO repository in XCP-ng](https://xcp-ng.org/blog/2022/05/05/how-to-create-a-local-iso-repository-in-xcp-ng/)
  - [Configure XCP-ng](https://ericsmasal.com/posts/Configure-XCP-ng/#create-a-directory-for-iso-files)
  - [Excluindo um repositório de armazenamento XenServer](https://blog.dummzeuch.de/2018/01/04/deleting-a-xenserver-storage-repository/)
  - [Como remover um repositório de armazenamento do XenServer](https://support.citrix.com/article/CTX131328/how-to-remove-a-storage-repository-from-xenserver)
  - [Comandos PBD](https://docs.xenserver.com/en-us/citrix-hypervisor/command-line-interface.html#pbd-commands)