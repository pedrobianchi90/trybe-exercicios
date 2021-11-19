# Aula 2.3 - Internet

* Funcionamento da Internet 
* Modelo Cliente-Servidor
* HTTP e HTTPS
* Requisições em protocolos


Glossário

* Cliente - Faz a interação entre o usuário e servidor. Navegador ou computador
* Servidor - Super computador conectado a internet. Responde à requisição do cliente. Cada servidor pode ter uma função.
* Endereço IP (Internet Protocol) - É o endereço númérico (como um número de telefone) de cada aparelho conectado a internet. 
* TCP/IP (Transmission Control Protocol/Internet Protocol) - Protocólo (conjunto de regras) utilizado para transmitir dados na rede.
* ISP (Internet Service Provider) - Empresa que fornece internet
* DNS (Domain Name System) - Dispositivo que elaciona o domínio (endereço nominal) com o IP. Podemos pensar no DNS como uma lista telefonica.
* Port Number - Número de 16 bits que identifica um determinado processo dentro do servidor.
* Host - Qualquer computador conectado a rede.
* HTTP - (Hyper-Text Transfer Protocol) - Protocolo de comunicação entre servidores.
* URL (Uniform Resource Locators) - Identifica um recurso específico no modelo protocolo://www.host.com/recurso
* CDN (Content Delivery Network) - CDN é um sistema de distribuição que ajuda a fazer a conexão cliente-servidor em distancias longas

Caminho da Internet

Usuário 
Cliente (Navegador) manda o domínio para o DNS (seguindo protocolo HTTP) DNS interpreta o domínio e o IP correspondente ao domínio
DNS manda requerimento de IP para o servidor correspondente
Quando o número de requisições a um servidor é muito alta, há um balanceador de carga para distribuir as funções a determinados servidores.
Servidor busca no banco de dados e responde de a acordo com a compatibilidade (200 OK em casos normais e 404 caso haja um erro)
Os dados são mandados ao cliente em formato binário, conhecidos como pacotes (informações de IP do servidor, da máquina do usuário, etc.)
O cliente renderiza as informações em HTML, JS, CSS e cria a interface visual para o usuário.
