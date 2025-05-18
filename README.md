# 💳 Subscription Management

Gerencie todas os seus gastos mensais (como Netflix, Spotify, Game Pass e outros) de forma simples e visual!

> Projeto pessoal fullstack em desenvolvimento contínuo, com foco em aprendizado prático de tecnologias modernas.

Por enquanto, o projeto conta somente com a categoria de streaming, sendo eles:
- Netflix;
- Disney+,
- Prime Video,
- Max,
- Paramount+,
- Crunchyroll.

As demais categorias existem, mas não estão cadastradas no banco! Futuramente estarão.

---

## 🚀 Tecnologias

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js (Express + Cors + MySQL 2)
- **Banco de Dados**: MySQL

---

## 📚 Funcionalidades

- ⏳ Cadastro e login de usuários
- ✅ Cadastro de assinaturas
- ✅ Categorias de serviços (Streaming, Games, etc.)
- ⏳ Dashboard com gráficos de gastos
- ⏳ Filtros por data e categoria
- ⏳ Edição e exclusão de assinaturas

> ✅ = Concluído | ⏳ = Em desenvolvimento

---

## 🧪 Como rodar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/gfloriano11/subscription-management.git
```

### 2. Navegue até o diretório
```bash
cd subscription-management
```

### 3. Inicialize o frontend
```bash
npm run dev
```

### 4. Inicialize o backend
```bash
node app/server/server.js
```
OU
```bash
cd app/server/
node server.js
```

> Não esqueca deve verificar as configurações do arquivo de conexão (connection.js) e rodar o script!
