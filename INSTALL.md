# 🏃‍♂️ Como rodar o projeto

## 📃 Requisitos

- Git;
- Portas 3000 e 3333 livres;
- Node.js;
- npm ou yarn;
- expo;

Realize um clone deste repositório em sua máquina local:

```bash
git clone https://github.com/Seiixas/feedget-nlw-return/
```

## <img src="./.github/icons/node.svg"> Iniciando o back-end

Abra a pasta `server` presente no repositório:

```bash
cd server
```

Instale todas as dependências:

```bash
npm install
# ou
yarn

```

Inicie o servidor por meio do script `dev` utilizando `yarn` ou `npm`:

```bash
npm run dev
# ou
yarn dev
```

## <img src="./.github/icons/reactjs.svg"> Iniciando o front-end

Abra a pasta `web` presente no repositório:

```bash
cd web
```

Instale todas as dependências:

```bash
npm install
# ou
yarn
```

Inicie o servidor por meio do script `dev` utilizando `yarn` ou `npm`:

```bash
npm run dev
# ou
yarn dev
```

O front-end estará disponível pela porta `3000` da sua máquina local.

## <img src="./.github/icons/reactjs.svg"> Iniciando o mobile

Abra a pasta `mobile` presente no repositório:

```bash
cd mobile
```

Instale todas as dependências (preferencialmente pelo npm):

```bash
npm install
```

Altere o endereço IP presente em `mobile/src/libs/api.ts` para o endereço local da sua máquina:

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: "MEU_IP_LOCAL_AQUI",
});
```

Inicie o expo pelo script `start`

```bash
expo start
```

Abra o aplicativo por meio de um emulador ou de um dispositivo físico (que esteja com o aplicativo oficial do Expo instalado).
