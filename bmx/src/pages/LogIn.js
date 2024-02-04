import "../App.css";
import logo from '../img/logo.webp';
import back from '../img/ParkImg.jpg';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDocs, updateDoc, collection} from "firebase/firestore";
import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


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
      height: "50%",
      flexDirection: "column",
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
  
  const [user, setNewUser] = useState({});

  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message

  const getMissingTricks = async (fullUser)=>{
    const tricksRef = collection(db, 'tricks');
    const tricksSnapshot = await getDocs(tricksRef);
    const allTricks = tricksSnapshot.docs.map((doc) => doc.data());
    
    // Compare user's tricks with all tricks and add missing ones
    const userTrickNames = fullUser.tricks.map((trick) => trick.name);
    const missingTricks = allTricks.filter((trick) => !userTrickNames.includes(trick.name));
    
    
    missingTricks.forEach((missingTrick) => {
      fullUser.tricks.push(missingTrick);
    });
    const userDocRef = doc(db, 'users', fullUser.userName);
    await updateDoc(userDocRef, {
      tricks: fullUser.tricks
    });
  };


  const checkUserName = async () => {
    let fullUser = {}
    try {
      const collectionRef = collection(db, 'users');
      const querySnapshot = await getDocs(collectionRef);
      let correctInfo = false;

      querySnapshot.forEach((userData) => {
        const un = userData.data().userName;
        const pw = userData.data().password;

        if (user.userName === un && user.password === pw) {

          correctInfo = true;
          fullUser =
          {
            userName: un,
            password: pw,
            tricks: userData.data().tricks,
            name: userData.data().name,
            surname: userData.data().surname,
          }
          console.log(fullUser, un, pw)
        }
      });
      console.log(correctInfo)
      return {correctInfo, fullUser}
    } 
    catch (error) {
      console.error('Error checking username:', error);
    }
  };

  const handleClickLogIn = async () => {
    const { correctInfo, fullUser } = await checkUserName();
    if (correctInfo === true) {
      //add new tricks
      getMissingTricks(fullUser);
      
      // If signed in, redirect to the '/home' route
      navigate('/home', { state: { data: fullUser } });
    } else {
      // If not signed in, update the error message state
      setErrorMessage('Sign-in failed. Please try again.');
    }
  };
  const handleUserNameChange = (e) => {
    const userName = e.target.value;
    setNewUser({ ...user, userName }); // Update user with the new name
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setNewUser({ ...user, password }); // Update user with the new name
  };

  return (
    <div className="App" style={{ backgroundImage: "url('../img/ParkImg.jpg')" }}>
      <header className="App-header" >
        <div style={styles.fullScreenDivStyle}>

          <div style={styles.container}>
            <div style={styles.logoContainer}>
              <img src={logo} style={{ width: "100%" }} />
            </div>

            <div style={styles.loginContainer}>
              <p style={{marginTop:"10px"}}>login</p>
              <div style={styles.component}>
                <label for="exampleInputPassword1" style={{fontSize:"18px", width: "fit-content", marginBottom:"10px"}}>
                  Username
                </label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="exampleInputUser" 
                  placeholder="Username" 
                  value={user.username} // Set input value to user.name
                  onChange={handleUserNameChange} // Handle input changes
                />
              </div>
              <div style={styles.component}>
                <label for="exampleInputPassword1" style={{fontSize:"18px", width:"fit-content", marginBottom:"10px"}}>Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password" 
                value={user.password} // Set input value to user.name
                onChange={handlePasswordChange} // Handle input changes
              />
              </div>
              <div style={{...styles.component, alignItems: "center",}}>
                {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
                <button type="submit" class="btn btn-primary" onClick={handleClickLogIn}>Submit</button>
                <div style={{marginBottom:"4px", fontSize:"18px"}}>or</div>
                <Link to="/SignIn">
                  <button type="submit" class="btn btn-outline-primary" >Signin</button>
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
