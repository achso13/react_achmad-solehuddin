# 24 GraphQL – Subscription

## Resume

Dalam materi ini dipelajari:

1. Setting Subscription
2. Subscription using useSubscription
3. Subscription using subscribeToMore

### Setting Subscription

Untuk melakukan subscription, ada beberapa hal yang harus diset up terlebih dahulu, yaitu.

1. Memisahkan link menjadi websocket link dan http link, caranya adalah sebagai berikut.

```
const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://trusted-pika-22.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "LdNr2bcW3L0LCEtYYqD0GI3KIx7aEobmSO88QevTQkoHraB9jK3tEMya6dBUU0ml",
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: "https://trusted-pika-22.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "LdNr2bcW3L0LCEtYYqD0GI3KIx7aEobmSO88QevTQkoHraB9jK3tEMya6dBUU0ml",
  },
});
```

2. Membuat splitLink untuk memisahkan link mana yang akan digunakan pada sebuah operasi, dilakukan dengan menggunakan function split.

```
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
```

3. Terakhir melakukan instansiasi pada ApolloClient dan memasukan linknya.

### Subscription using useSubscription

useSubscription adalah salah satu cara yang digunakan untuk melakukan subscription. Cara ini digunakan apabila operasi pada server mengembalikan seluruh datanya, tidak hanya satu data. Cara penggunaannya adalah sebagai berikut.

```
const {data, loading, error} = useSubscription(QUERY_SUBSCRIPTION);
```

### Subscription using subscribeToMore

subscribeToMore adalah cara yang digunakan untuk melakukan subscription apabila data yang dikembalikan oleh server hanya satu. Cara penggunaannya di dalam useQuery.

```
const {data, loading, error, subscribeToMore} = useQuery(QUERY);
```

subscribeToMore memiliki beberapa atribut, yaitu document, updateQuery dan variables. Document digunakan untuk menentukan query subscriptionnya, updateQuery untuk menentukan operasi pada data subscriptionnya, dan variables untuk menentukan variablesnya.

## Praktikum

Pada praktikum ini dilakukan penerapan subscription pada tugas sebelumnya. Berikut adalah source codenya.

[index.js](./praktikum/lib/client/index.js)
[graphql.js](./praktikum/lib/client/graphql.js)
[Home.js](./praktikum/src/component/Home.js)

Outputnya adalah sebagai berikut.

![output.png](./screenshots/output.png)
