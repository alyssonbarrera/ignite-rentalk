# Cadastro de carro

**Requisito(s) Funcionais**  
Deve ser possível cadastrar um novo carro.

**Regras de Negócio**  
Não deve ser possível cadastrar um carro com uma placa já existente.  
O carro deve ser cadastrado, por padrão, com disponibilidade.  
O usuário responsável pelo cadastro deve ser um usuário administrator.

# Listagem de carros

**Requisito(s) Funcionais**  
Deve ser possível listar todos os carros disponíveis.  
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.  
Deve ser possível listar todos os carros disponíveis pelo nome da marca.  
Deve ser possível listar todos os carros disponíveis pelo nome do carro.  

**Regras de Negócio**  
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação do carro

**Requisito(s) Funcionais**  
Deve ser possível cadastrar uma especificação para um carro.  

**Regras de Negócio**  
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.  
Não deve ser possível cadastrar uma especificação já existente para o carro.  
O usuário responsável pelo cadastro deve ser um usuário administrator.

# Cadastro de imagens do carro

**Requisito(s) Funcionais**  
Deve ser possível cadastrar a imagem do carro.  

**Requisito(s) não funcionais**  
Utilizar o multer para upload de arquivos.  

**Regras de Negócio**  
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.  
O usuário responsável pelo cadastro deve ser um usuário administrator.

# Aluguel de carro

**Requisito(s) Funcionais**  
Deve ser possível cadastrar um aluguel.  

**Regras de Negócio**  
O aluguel deve ter duração mínima de 24 horas.  
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.  
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.  
O usuário deve estar logado na aplicação