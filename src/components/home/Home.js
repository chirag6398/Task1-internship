import React,{useState} from 'react'
import { getGithubData } from '../../services/Api';
import List from '../list/List';
import GithubImg from '../../assets/images/github.png';
import swal from 'sweetalert';

export default function Home() {
    const [credentials,setCredentials]=useState({name:"",userData:[]});

    const onChangeEventHandler=(e)=>{
        setCredentials({...credentials,name:e.target.value});
    }

    const searchUser = () => {
        if(credentials.name)
        {
            getGithubData(credentials.name, (response) => {
                if(response.data.length===0)
                {
                    swal("no repos found","this user has no repositories","error");
                }else{
                    setCredentials({...credentials,userData:response.data});
                
                
            }
            },(err) => {
                swal("User not found", "check user name and try again", "error");
            });
        }else{
            swal("Enter username","","error");
        }
    }

    return (
        <>
          <div className="home-div">
                <div className="github-image-div">
                <img src={GithubImg} alt="github-logo" className="git-image"/>
                </div>
                <div className="input_div">
                <input type="text" placeholder="enter username"  onChange={onChangeEventHandler}/><br/>
                <button onClick={searchUser}>Search</button>
                </div>
            </div>
            <List data={credentials?.userData}/>
              
        </>
    )
}


// class Home extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         name : "",
    //         userData: []
    //     }

    //     this.onChangeEvent = this.onChangeEvent.bind(this);

    // }

    // onChangeEvent = (event) => {
    //     this.setState({
    //         name : event.target.value
    //     })
    // }

//     searchUser = () => {
//         if(this.state.name)
//         {
//             getGithubData(this.state.name, (response) => {
//                 if(response.data.length===0)
//                 {
//                     swal("no repos found","this user has no repositories","error");
//                 }else{
//                 this.setState({
//                     userData: []
//                 })
//                 this.setState((prevState)=>{
//                     return{
//                         userData : prevState.userData.concat(response.data)
//                     };
//                 })
//             }
//             },(err) => {
//                 swal("User not found", "check user name and try again", "error");
//             });
//         }else{
//             swal("Enter username","","error");
//         }
//     }

    

//     render(){
//         return(
//             <React.Fragment>
//                 <div className="home-div">
//                 <div className="github-image-div">
//                 <img src={GithubImg} alt="github-logo" className="git-image"/>
//                 </div>
//                 <div className="input_div">
//                 <input type="text" placeholder="enter username" onChange={this.onChangeEvent}/><br/>
//                 <button onClick={this.searchUser}>Search</button>
//                 </div>
//                 </div>
//                 <List data={this.state.userData}/>
//             </React.Fragment>
//         );
//     }
// }

// export default Home;