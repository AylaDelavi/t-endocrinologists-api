# T-ENDOCRINOLOGISTS-API

![memory](https://i.pinimg.com/originals/8a/6f/b6/8a6fb68d5aa05877b80733217807637d.gif)

## Introdução

Oiii, boas vindas à documentação da minha API, projeto desenvolvido para a finalização do curso de backend da {Reprograma}. Essa API tem como objetivo buscar endocrinologistas focados em ajudar pessoas trans em sua terapia hormonal, visto que, há uma dificuldade muito grande em encontrar esses profissionais.

Com essa API é possível buscar médicos através de seu/sua: *nome*, *idade*, *atendimentos*, *cidade*, entre outros.

Essa API é uma iniciativa que acontece com essa finalidade: criar um espaço seguro e inclusivo, onde todas as identidades de gênero são respeitadas e valorizadas. Você pode tanto ser uma pessoa trans em busca de assistência médica ou um profissional de saúde que está disposto a oferecer apoio e suporte a pessoas trans. Essa API tenta proporcionar uma jornada para o começo da terapia hormonal mais acessível e tranquila para todos que desejam começar. <3

## rotas

Com as requisições da API, podemos:

<table>
<tr>
  <td>Verbo</td>
  <td>Rota</td>
  <td>Função</td>
</tr>
<tr>
  <td>GET</td>
  <td>/allDoctors</td>
  <td>acessar todos os médicos</td>
</tr>
<tr>
  <td>GET</td>
  <td>/:id</td>
  <td>acessar médico pelo ID</td>
</tr>
<tr>
  <td>GET</td>
  <td>/doctorname</td>
  <td>acessar médico pelo nome</td>
</tr>
<tr>
  <td>GET</td>
  <td>/doctorcity</td>
  <td>acessar médico pela cidade</td>
</tr>
<tr>
  <td>GET</td>
  <td>/publicPrivateHealthInsurance</td>
  <td>acessar médicos por onde atende</td>
</tr>
<tr>
  <td>GET</td>
  <td>/services</td>
  <td>acessar médicos por formas de atendimento</td>
</tr>
<tr>
  <td>GET</td>
  <td>/gender</td>
  <td>acessar médicos pelo gênero</td>
</tr>
<tr>
  <td>POST</td>
  <td>/addDoctor</td>
  <td>adicionar um novo médico</td>
</tr>
<tr>
  <td>PATCH</td>
  <td>/:id</td>
  <td>atualizar informações do médico pelo ID</td>
</tr>
<tr>
  <td>DELETE</td>
  <td>/:id</td>
  <td>deletar um médico pelo ID</td>
</tr>
<tr>
  <td>GET</td>
  <td>/allHealthInsurances</td>
  <td>acessar todos os planos de saúde</td>
</tr>
<tr>
  <td>GET</td>
  <td>/:id</td>
  <td>acessar plano de saúde pelo ID</td>
</tr>
<tr>
  <td>GET</td>
  <td>/name</td>
  <td>acessar plano de saúde pelo nome</td>
</tr>
<tr>
  <td>POST</td>
  <td>/addHealthInsurance</td>
  <td>adicionar um novo plano de saúde</td>
</tr>
<tr>
  <td>PATCH</td>
  <td>/update/:id</td>
  <td>atualizar informações do plano de saúde pelo ID</td>
</tr>
<tr>
  <td>DELETE</td>
  <td>/delete/:id</td>
  <td>deletar plano de saúde pelo ID</td>
</tr>
<table>

![memory](https://cdn.discordapp.com/attachments/1067527845829681182/1133460025868816514/gif_cute.gif)
