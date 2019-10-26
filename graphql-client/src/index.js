import { GraphQLClient } from 'graphql-request';
 
const client = new GraphQLClient('http://localhost:4000/graphql', {
  headers: {
    Authorization: 'fa4bf182889704a92ce43f933a4cc0da58577531',
  },
});
// Bearer 
const query = `query listUsers {
  allUsers {
    name
    avatar
  }
}
`

client.request(query)
    .then((data) => console.log(data))
    .catch(console.err)

