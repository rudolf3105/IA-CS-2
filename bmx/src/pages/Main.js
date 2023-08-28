import { useState } from "react";
import "../App.css";

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
      flexDirection: "column",
      border: "2px solid black",
    },
    webName: {
      display: "flex",
      flex: 1,
      //backgroundColor: 'black',
      border: "2px solid black",
    },
    tickList: {
      display: "flex",
      flex: 7,
      flexDirection: "column",
      padding: "10px",
      border: "2px solid black",
    },
    tick: {
      display: "flex",
      flexDirection: "row",
      //padding: "10px",
      border: "2px solid black",
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
      flex: 1.5,
      border: "2px solid black",
    },
    rightContainer: {
      display: "flex",
      flex: 2.5,
      flexDirection: "column",
      border: "2px solid black",
    },
    videoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      flexDirection: "column",
      border: "2px solid black",
    },
    Title: {
      display: "flex",
      flex: 1,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid black",
    },
    mainContainer: {
      display: "flex",
      flex: 8,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid black",
    },
    tutorialContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      flexDirection: "column",
      border: "2px solid black",
    },
  };

  const initialSkills = [
    {
      name: "skill1",
      tutorialText: "Tutorial text for Skill 1",
      videoUrl: "https://www.youtube.com/embed/0qcWOTXCrUY",
      checked: false
    },
    {
      name: "skill2",
      tutorialText: "Tutorial text for Skill 2",
      videoUrl: "https://www.youtube.com/embed/0qcWOTXCrUY",
      checked: false
    },
    {
      name: "skill3",
      tutorialText: "Tutorial text for Skill 3",
      videoUrl: "https://www.youtube.com/embed/0qcWOTXCrUY",
      checked: false
    },
  ]

  const [selectedSkill, setSelectedSkill] = useState(null);
  const handleSkillClick = (index) => {
    setSelectedSkill(skills[index]);
  };

  const [skills, setSkills] = useState(initialSkills);
  const handleSkillCheck = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].checked = !updatedSkills[index].checked;
    setSkills(updatedSkills);
  };


  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.fullScreenDivStyle}>
          <div style={styles.leftContainer}>
            <div style={styles.webName}></div>
              <div style={styles.tickList}>
                <ul style={styles.tickList}>
                  {skills.map((skill, index) => (
                    <div style={{
                      ...styles.tick,
                      backgroundColor: skills[index].checked == true? 'green' : 'red'
                    }}>
                      <div>
                        <button onClick={() => handleSkillCheck(index)}>
                          O
                        </button>
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
            <div style={styles.profile}></div>
          </div>

          <div style={styles.rightContainer}>
            <div style={styles.videoContainer}>
              <div style={styles.Title}>{selectedSkill?.name || "Select a skill"}</div>
              <div style={styles.mainContainer}>
                {selectedSkill && (
                  <iframe
                    width="60%"
                    height="100%"
                    src={selectedSkill.videoUrl}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                )}
              </div>
            </div>

            <div style={styles.tutorialContainer}>
              <div style={styles.Title}>Tutorial</div>
              <div style={styles.mainContainer}>{selectedSkill?.tutorialText || ""}</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Main;
