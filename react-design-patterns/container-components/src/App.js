// import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
// import { UserInfo } from "./UserInfo";
// import { UserLoader } from "./UserLoader";


// const userIds = [ "1", "2" ]
// function App() {
//   return (
//     // <CurrentUserLoader>
//     //   <h1>User Info</h1>
//     //   <UserInfo />
//     // </CurrentUserLoader>
//     <>

//       {userIds.map(id => {
//         return (
//           <UserLoader key={id} userId={id}>
//             <h1>User Info</h1>
//             <UserInfo />
//           </UserLoader>)
//       })}

//     </>
//   );
// }

/*
Using the DataSourceLoader example:

const getServerData = url => aync () => {
  const response = await axios.get(url)
  return response.data
}

return (
  <>
  <DataSource getDataFunc={getServerData} resourceName="user">
    <UserInfo />
  </DataSource>
  </>

)


*/

/*

example of getting localStorage

const getLocalStorageData = key => () => {
  return localStorage.getItem(key);
}

const Text = ({message}) => <h1>{message}</h1>

.... return (
  <>
  ...
  <DataSource getDataFunc={getLocalStorageData('message')}
    resourceName='message'>
      <Text />>
    </DataSource>
  </>
)


*/


function App() {
  return (
    <ResourceLoader resourceUrl="/user/1" resourceName="user" />
  )
}

export default App;
