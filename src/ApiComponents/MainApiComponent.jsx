import axios from 'axios'
import {requestAPI} from '../Constantas/Constantas'

export const ApiData = async ()=>{
    try {
        const {data} = await axios.get(requestAPI);
        return data;
    } catch(error){
        return null;
    }
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       request: [],
//     };
//   }

//   componentDidMount() {
//     axios.get(requestAPI).then(({ data }) => {
//       console.log("1");
//       console.log(data);
//       this.setState({request: data});
//     });
//   }

//   render() {
//     //const {request} = this.state;
//     console.log(requestAPI);
//     return (
//       <>
//         {/* <ul> 
//           {request.length > 0
//             ? request.map((request) => (
//                 <Request key={request.id} categories={request.categories} query={request.query} />
//               ))
//             : "no request found"}
//         </ul> */}
//       </>
//     );
//   }
// }

// export default App;
