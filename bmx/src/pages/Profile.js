import "../App.css";
import icon from '../img/profileIcon.jpeg';
import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import {getDocs, collection} from "firebase/firestore";
import React, { useEffect } from 'react';


function Profile() {

  const navigate = useNavigate();
  const styles = {
    fullScreenDivStyle: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      flex: 1,
      backgroundColor: "#ffba00",
      color: "black",
      alignItems:"center",
    },
    LeftContainer: {
      display: "flex",
      height:"90vh",
      flex:0.60,
      margin:"20px",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "10px",
      backgroundColor: "white",

    },
    home: {
      display: "flex",
      width: "90%",
      marginBottom: "50px",

    },
    profileImg: {
      display: "flex",
      width: "90%",
      justifyContent: "center",
    },
    name: {
      display: "flex",
      width: "100%",
      padding: "5px",
      justifyContent: "center",
      alignItems: "center",
    },
    component: {
      display: "flex",
      width: "50%",
      flexDirection: "column",
      padding: "15px",
    },
    midleContainer: {
      display: "flex",
      flex:1,
      margin:"20px",
      height:"90vh",
      borderRadius: "10px",
      justifyContent: "left",
      backgroundColor: "white",
    },
    scroll: {
      display: "flex",
      width: "100%",
      height:"100%",
      paddingLeft:"20px",
      paddingRight:"20px",
      flexDirection: "column",
      overflow: "auto",
      flex: 1,
    },
    tickList: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      padding: "0",
      overflow:"auto",
      marginBottom:"0",
    },
    tick: {
      display: "flex",
      flexDirection: "row",
      marginBottom:"6px",
      border: "2px solid black",
      borderRadius:"10px",
      alignItems: "center",
      justifyContent: "center",
    },
    skillItem: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
    },
    rightContainer: {
      display: "flex",
      flex: 1,
      margin:"20px",
      height:"90vh",
      borderRadius: "10px",
      justifyContent: "left",
      backgroundColor: "white",
    },
    listItem: {
      display: "flex",
      flex: 1,
      justifyContent: "left",
    },
  };

  const location = useLocation();
  const user = location.state && location.state.data;

  const initialSkills = user.tricks

  const [allUsers, setAllUsers] = useState([

  ]);

  const ratio = initialSkills.reduce((counter, currentItem) => {
    if (currentItem.checked) {
      counter.trueCount += 1;
    }
    return counter;
  }, { trueCount: 0 });

  const trueRatio = ((ratio.trueCount / initialSkills.length) * 100).toFixed(1);

  const calculateRatio =  (tricksArray) => {
    let trueCount=0
    tricksArray.forEach((trick) => {
      if (trick.checked){
        trueCount= trueCount+1
      }
    });
    const ratio= ((trueCount /  tricksArray.length) * 100).toFixed(1);
    return ratio
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, 'users');
        const querySnapshot = await getDocs(collectionRef);
  
        let updatedUsers = [];
        querySnapshot.forEach((user) => {
          if (user.data().userName !== "admin") {
            const newUser = {
              name: user.data().userName,
              ratio: calculateRatio(user.data().tricks)
            };
            updatedUsers.push(newUser);
          }
        });
        updatedUsers = updatedUsers.slice().sort((a, b) => b.ratio - a.ratio);
        setAllUsers(updatedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
        // Handle errors if needed
      }
    };
  
    fetchData();
  }, [setAllUsers]);

  const handleProfile = () => {
    console.log(user)
    navigate('/home', { state: { data: user } });
  };




  return (
    <div className="App" style={{ backgroundImage: "url('../img/ParkImg.jpg')" }}>
      <header className="App-header" >
        <div style={styles.fullScreenDivStyle}>
          <div style={styles.LeftContainer} >
            <div style={styles.home}>
              <i class="bi bi-house-door-fill" onClick={handleProfile}></i>
            </div>
            <div style={styles.profileImg}>
              <img src={icon} style={{ width: "100%", borderRadius: "50%",}} alt=""/>
            </div>
            <div style={{display:"flex",flexDirection: "column", marginTop:"20px"}}>
              <div style={styles.name}>
                {user.name}
              </div>
              <div style={styles.name}>
                {user.surname}
              </div>
            </div>
            <Link to="/LogIn">
              <button type="submit" style={{marginTop:"60px"}} class="btn btn-outline-primary">Log Out</button>
            </Link>
          </div>
          <div style={styles.midleContainer} >
            <div style={{...styles.scroll, paddingTop:"20px",}}>
              <div>
                advancements
              </div>
              <div>
                <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-bar bg-success" style={{width: `${trueRatio}%`,}}> {trueRatio}% </div>
                </div>
              </div> 
              <div style={{marginTop:"30px",marginBottom:"30px", display:"flex", flex: 7 , height:"50vh"}}>
                <ul style={styles.tickList}>
                  {initialSkills.map((skill, index) => (
                    <div style={{
                      ...styles.tick,
                      backgroundColor: initialSkills[index].checked === true? 'green' : 'red'
                    }}>
                      <li key={index} style={styles.skillItem}>
                      {skill.name}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div style={styles.rightContainer} >
            <div style={{...styles.scroll, paddingTop:"20px",}}>
              <ul style={{...styles.tickList, padding:"0",}}>
                {allUsers.map((user, index) => (
                  <div style={{marginBottom:"20px",}}>
                    <li
                    key={index}
                    style={styles.listItem}
                    >
                    {user.name}
                    </li>
                    <div class="progress" role="progressbar">
                      <div class="progress-bar bg-success" style={{width: `${user.ratio}%`,}}> {user.ratio}%</div>
                    </div>  
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Profile;
