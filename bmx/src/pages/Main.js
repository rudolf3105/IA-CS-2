import { useState } from "react";
import logo from '../img/logo.webp';
import "../App.css";
import {useLocation, useNavigate } from 'react-router-dom';
import icon from '../img/profileIcon.jpeg';
import { db } from '../firebase';
import { doc, collection, updateDoc } from "firebase/firestore";
import React, { useEffect } from 'react';

function Main() {
  const styles = {
    fullScreenDivStyle: {
      display: "flex",
      width: "100%",
      flex: 1,
      backgroundColor: "white",
      color: "black",
    },
    leftContainer: {
      display: "flex",
      flex: 1,
      height: "100vH",
      flexDirection: "column",
      backgroundColor:"#ffba00",
      borderRight: "4px solid black",
      boxShadow: '1px 2px 9px #F4AAB9',
    },
    webName: {
      display: "flex",
      padding:"15px",
      justifyContent: "center",
    },
    tickList: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      border: "2px solid black",
      padding: "10px",
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

    },
    listItem: {
      display: "flex",
      flex: 1,
      padding: "10px",
      justifyContent: "center",
    },
    profile: {
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid black",
    },
    rightContainer: {
      display: "flex",
      flex: 3,
      height: "100vh",
      flexDirection: "column",
      backgroundColor:"lightGrey",
    },
    videoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      flexDirection: "column",
    },
    Title: {
      display: "flex",
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"Grey",
    },
    mainContainer: {
      display: "flex",
      flex: 8,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    tutorialContainer: {
      display: "flex",
      justifyContent: "center",
      flex: 1,
      height:"50vH",
      flexDirection: "column",
    },
    text: {
      display: "flex",
      justifyContent: "center",
      flex: 8,
      overflow: "auto",
      flexDirection: "column",
    },

  };

  const navigate = useNavigate();

  const location = useLocation();
  const user = location.state && location.state.data;

  const [documentsData, setDocumentsData] = useState([]);


  useEffect(() => {
    setDocumentsData(user.tricks);
}, [user, setDocumentsData]);

  const updateTrick = async (updatedSkill) => {
    const collectionRef = collection(db, 'users');
    const docId = user.userName;
    const specificDocRef = doc(collectionRef, docId);
  
    try {
      await updateDoc(specificDocRef, {
        tricks: updatedSkill
      });
      console.log("User's trick attribute updated successfully");
    } catch (error) {
      console.error("Error updating user's trick attribute", error);
    }
  };

  const [selectedSkill, setSelectedSkill] = useState(null);
  
  const handleSkillClick = async (index) => {
    setSelectedSkill(documentsData[index]);
  };

  const handleSkillCheck = (index) => {
    const updatedSkills = [...documentsData];
    updatedSkills[index].checked = !updatedSkills[index].checked;
    setDocumentsData(updatedSkills);
    updateTrick(updatedSkills)
  };

  const handleProfile = () => {
    console.log(user)
    navigate('/profile', { state: { data: user } });
  };


  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.fullScreenDivStyle}>
          <div style={styles.leftContainer}>
            <div style={styles.webName}>
              <img src={logo} style={{ width: "70%", }} alt="" />
            </div>
            <div style={{marginLeft:"10px",marginRight:"10px", display:"flex", flex: 7 , height:"60vh"}}>
              <ul style={styles.tickList}>
                {documentsData && documentsData.map((skill, index) => (
                  <div style={{
                    ...styles.tick, 
                    backgroundColor: documentsData[index].checked === true? 'green' : 'red'
                  }}>
                    <div class="form-check form-switch" style={{marginLeft:"6px"}}>
                      <input 
                        onClick={() => handleSkillCheck(index)} 
                        style={{backgroundColor:  documentsData[index].checked === true? 'black' : "" }} 
                        class="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        checked={documentsData[index].checked}
                      />
                    </div>
                    <li
                    key={index}
                    style={styles.listItem}
                    onClick={() => handleSkillClick(index)}
                    >
                    {skill.name}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div style={styles.profile}>
                <button type="submit" class="btn btn-outline-secondary" onClick={handleProfile}>
                  <img src={icon} style={{ width: "10vh", height:"auto", borderRadius: "50%",}} alt=""/>
                </button>
            </div>
          </div>

          <div style={styles.rightContainer}>
            <div style={styles.videoContainer}>
              <div style={styles.Title}>{selectedSkill?.name || "Select a skill"}</div>
              <div style={styles.mainContainer}>
                {selectedSkill && (
                  <iframe
                    title="selected video"
                    width="60%"
                    height="100%"
                    src={selectedSkill.URLVideo}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
            </div>

            <div style={styles.tutorialContainer}>
            <div style={styles.Title}>Tutorial</div>
              <div style={styles.text}>
                {selectedSkill && (<div style={{whiteSpace: "pre-line",textAlign: "left", display:"flex", flex:"1", marginBottom:"0", padding:"6px"}}>
                  {selectedSkill.tutorial} 
                </div>)}
              </div>
              
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Main;
