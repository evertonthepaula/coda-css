# CODA - css orientado a desing atômico 

## O que é CODA?
"Em termos bem básicos, coda significa a seção com que se termina uma determinada música ou trecho musical. O termo veio do idioma italiano, que quer dizer cauda (em inglês, tail) . Então, você deve imaginar coda como uma seção relacionada à parte final da música ou determinado trecho musical.
Não quer dizer que o símbolo indicando coda deve estar necessariamente no final da partitura. Isso porque pode ocorrer que a música finalize com alguma cadência lá no meio. Pode ser que a cadência ideal (ou desejável) para se finalizar a música esteja em outra parte que não seja o fim da partitura. Aí se usa o símbolo do coda para apontar isso claramente." - fonte: [ramontessmann.com.br](https://ramontessmann.com.br/coda/)

Assim como CODA em uma música o css(em teoria) é a trecho final de um projeto, que é revisitados inumeras vezes até que tudo esteja alinhado e corrigido com a experiência do cliente. CODA literalmente é a cauda que aparece no fim do projeto, após todas as features relacionadas a regra de negócio estarem prontas, quando tudo o que é necessário são ajustes finos de layout, e cada vez mais finos até que chegamos ao fim da cauda. Assim como uma cauda sua implementação inicial pode ser de maior impacto, causando grandes mudanças de experiência, mas "tende" a diminuir conforme chegamos a entrega do produto.

Deste modo CODA.css é uma proposta de biblioteca que implementa as definições do Desing System da Objective, este fortemente orietando pelo desing atômico, baseiando-se em modelos consolidados de escrita para "sass/css", sendo eles: 
- [ITCSS - Arquitetura](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/),
- [BEM - Convenção de nomes](https://en.bem.info/),
- [SUITCSS - Convenção de nomes](http://suitcss.github.io/)
- [Airbnb Styleguide](https://github.com/airbnb/css).

Estes podem conter alterações e modicações, mas recomenda-se fortemente utilizar cada um deles como base.

### Como usar
Clone o repositório instale as dependências e execute o gulp para ter acesso ao pacote final.

``
npm install && gulp sass-min && gulp images
``

Abra o arquivo index.html para ver exemplos de funcionamento.

### Como utilizamos ITCSS?
**Settings:** Configurações de variáveis e só.

**Tools:** Ferramentas como mixins.

**Generic:** Pouco utilizado por nós no momento, basicamente onde colocamos alguns resets e "normalize".

**Base:** Utilizamos para setar o default de estilo do desing system, pois se todo input tem uma borda 1px solid #000, não precisa criar uma classe .input para definir algo que deveria ser default. Aqui nós definimos tudo o que é html puro.

**Objects:** Definem o comportamento dos "átomos", estes componentes estão na fila para se tornarem web components, mas podem ser utilizados em projetos que não possuem este recurso. Apesar de terem o estilo fechado em seu escopo, Objects herdam características de Base. Aqui também ficam manipulação de estados, por exemplo a classe .btn tem seu estado default, a classe .btn .blue, tem seu estado alterado e definido dentro do component BTN.

**Components:** Manipulação de objetos de layout, digamos que vc precise criar um alinhamento para uma pagina especifica, apesar de tentarmos não utilizar este diretório as vezes ele se faz necessário, principalmente quando vamos manipular nossas classes juntamente com classes de apps legados, ou para manipular comportamentos definidos em Base, por exemplo o input search terá borda verde de 2 px em determinado contexto. Aqui nós utilizamos apenas classes css. Apesar de necessário é pouco utilizado pois priorizamos modificar estilo de elementos a partir de mudança do estado do mesmo, como vimos em Objects.

**Trumps:** Não utilizamos.

### O que é BEM?

### O que é SUITCSS?

### Airbnb Styleguide?

#### referências:
- https://medium.com/tableless/arquitetura-css-d344fb01dd18
- https://en.bem.info/
- http://getbem.com/
- https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
- https://willianjusten.com.br/organizando-seu-css-com-itcss/
- https://www.mundipagg.com/blog/bemit-uma-solucao-para-css/
- https://medium.com/tableless/elevando-seu-n%C3%ADvel-no-css-b2acbb220248
- http://opensource.locaweb.com.br/locawebstyle/
- https://medium.com/tableless/8-regras-simples-para-uma-arquitetura-css-robusta-e-escal%C3%A1vel-545c6dade170
- http://tableless.com.br/oocss-smacss-bem-dry-css-afinal-como-escrever-css/
- https://tableless.com.br/arquitetura-css-anotacoes-da-palestra-rafael-rinaldi/
- http://tableless.com.br/bem-um-novo-metodo-para-seu-css/
- http://tableless.com.br/o-que-e-design-atomic/
- https://tableless.com.br/afinal-como-usar-heranca-no-css/
