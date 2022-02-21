import { createContext, useContext, useState } from "react";

const ResourceContext = createContext();
export default ResourceContext;

// export function Resources() {
//   const auth = useContext(ResourceContext);
//   console.log(auth);
//   return auth;
// }

// export function GetResources(props) {
//   const [state, setState] = useState({
//     favList: [0],
//     cartList: [0],
//   });

//   return (
//     <ResourceContext.Provider value={state}>
//       {props.children}
//     </ResourceContext.Provider>
//   );
// }
