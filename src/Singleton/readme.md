# Singleton

Garatir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.

1 - Motivos de ter somente uma instância ?

- Geralmente usado para acesso a recursos compartilhados, como acesso a base de dados, interface grafica, sistema de arquivos, servidores de impressao, logger e mais.

- Tambem usado para substituir variaveis globais, como em casos de uso de objeto de configuraçao do sistema como um todo.

2 - Ponto de acesso global ?

- Voce pode permitir acesso global ao singleton em toda a sua aplicaçao, assim como faziamos/fazemos com variaveis globais.

- Uma vantagem do singleton é que podemos proteger a instância com encapsulamento, evitando que outro codigo sobscreva seu valor.
