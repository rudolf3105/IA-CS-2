import "../App.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.webp';
import back from '../img/ParkImg.jpg';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, setDoc, getDocs, collection} from "firebase/firestore";
import React, { useEffect } from 'react';



function LogIn() {
  const styles = {
    fullScreenDivStyle: {
      display: "flex",
      width: "100%",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${back})`,
      backgroundSize: "cover",
      color: "black",
    },
    container: {
      display: "flex",
      width: "30%",
      height: "70vh",
      flexDirection: "column",
      overflow: "auto",
      border: "2px solid black",
    },
    logoContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
    },
    loginContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "white",
      //border: "2px solid black",
    },
    component: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      marginBottom: "10px",
      padding: "15px",
    },
  };

  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({

    tricks: [],
  });

  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message


  const [code, setCode] = useState();
  const [confirmedPassword, setconfirmedPassword] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, 'tricks');
        const tricksSnapshot = await getDocs(collectionRef);
  
        const tricksArray = tricksSnapshot.docs.map((trick) => {
          const data = trick.data();
          return {
            name: data.name,
            URLVideo: data.URLVideo,
            tutorial: data.tutorial,
            checked: false,
          };
        });
  
        setNewUser((prevUser) => ({
          ...prevUser,
          tricks: tricksArray,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors if needed
      }
    };
  
    fetchData();
  }, []);

  const checkUserName = async (newUserName) => {
    try {
      const collectionRef = collection(db, 'users');
      const querySnapshot = await getDocs(collectionRef);
      let userNameExists = false;
  
      querySnapshot.forEach((user) => {
        const data = user.data().userName;
        if (newUserName === data) {
          userNameExists = true;
        }
      });
  
      return userNameExists;
    } catch (error) {
      console.error('Error checking username:', error);
      throw new Error('Failed to check username');
    }
  };

  const checkCode = async (userCode) => {
    try {
      const collectionRef = collection(db, 'users');
      const docId = 'admin';
      const adminDocRef = doc(collectionRef, docId);
  
      const adminDocSnapshot = await getDoc(adminDocRef);
  
      if (adminDocSnapshot.exists()) {
        const code = adminDocSnapshot.data().code;
        console.log(code);
  
        let correctCode = false;
        if (userCode === code) {
          correctCode = true;
        }
        return correctCode;
      } else {
        console.error('Document does not exist');
      }
    } catch (error) {
      console.error('Error checking code:', error);
    }
  };

  const checkPassword = async (newUser) => {
    return(newUser.password === confirmedPassword)
  };

  const isComplete = async (newUser) => {
    if (newUser.password !== "" && newUser.userName !== "" && newUser.name !== "" && newUser.surename !== "" ){
      return(true)
    }
    return(false)
  };

  const handleSignin = async () => {
    try {
      const userNameAvailable = await checkUserName(newUser.userName);
      const correctCode = await checkCode(code);
      const samePassword = await checkPassword(newUser);
      const filled = await isComplete(newUser);

      //check all data
      if (!userNameAvailable && correctCode && samePassword && filled) {
        const userRef = doc(db, 'users', newUser.userName);
        await setDoc(userRef, newUser);
  
        console.log('Document added with ID:', userRef.id);
        navigate('/');
      } 
      else {
         setErrorMessage('Incorrect information');
      }
    } catch (error) {
      console.error('Error handling sign-in:', error);
      
    }
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setNewUser({ ...newUser, name }); // Update newUser with the new name
  };
  const handleSurnameChange = (e) => {
    const surname = e.target.value;
    setNewUser({ ...newUser, surname }); // Update newUser with the new name
  };
  const handleUserNameChange = (e) => {
    const userName = e.target.value;
    setNewUser({ ...newUser, userName }); // Update newUser with the new name
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setNewUser({ ...newUser, password }); // Update newUser with the new name
  };
  const handleCheckPasswordChange = (e) => {
    const checkPassword = e.target.value;
    setconfirmedPassword(checkPassword); // Update newUser with the new name
  };
  const handleCodeChange = (e) => {
    const code = e.target.value;
    setCode(code); // Update newUser with the new name
  };

return (
  <div className="App">
    <header className="App-header" >
      <div style={styles.fullScreenDivStyle}>

        <div style={styles.container}>
          <div style={styles.logoContainer}>
            <img src={logo} style={{ width: "100%" }} alt=""/>
          </div>

          <div style={styles.loginContainer}>
            <p style={{marginTop:"10px"}}>Signin</p>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Name" 
                value={newUser.name} // Set input value to newUser.name
                onChange={handleNameChange} // Handle input changes
                 />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Surname</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="surname" 
                value={newUser.surname} // Set input value to newUser.name
                onChange={handleSurnameChange} // Handle input changes
              />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Username</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Username" 
                value={newUser.username} // Set input value to newUser.name
                onChange={handleUserNameChange} // Handle input changes
              />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password" 
                value={newUser.password} // Set input value to newUser.name
                onChange={handlePasswordChange} // Handle input changes
              />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Confirm Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Check Password" 
                value={newUser.checkPassword} // Set input value to newUser.name
                onChange={handleCheckPasswordChange} // Handle input changes
              />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Confirmation Code</label>
              <input 
                type="text" 
                className="form-control" 
                id="exampleInputCode" 
                placeholder="Code" 
                value={code} // Set input value to newUser.name
                onChange={handleCodeChange} // Handle input changes
              />
            </div>
            <div style={{ ...styles.component, alignItems: "center", }}>
              {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
              <button onClick={() => handleSignin()} type="submit" class="btn btn-primary" >submit</button>
              <div style={{ marginBottom: "4px", fontSize: "18px" }}>or</div>
              <Link to="/LogIn">
                  <button type="submit" class="btn btn-outline-primary">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
);
}
export default LogIn;
