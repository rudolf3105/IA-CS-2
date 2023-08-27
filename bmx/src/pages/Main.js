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
    listItem: {
      display: "flex",
      flex: 1,
      marginTop: "10px",
      border: "2px solid black",
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

  const skills = ["skill1", "skill2", "skill3", "skill4"];

  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.fullScreenDivStyle}>
          <div style={styles.leftContainer}>
            <div style={styles.webName}></div>
            <div style={styles.tickList}>
              <ul style={styles.tickList}>
                {skills.map((name, index) => (
                  <li key={index} style={styles.listItem}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div style={styles.profile}></div>
          </div>

          <div style={styles.rightContainer}>
            <div style={styles.videoContainer}>
              <div style={styles.Title}>title</div>
              <div style={styles.mainContainer}>video</div>
            </div>

            <div style={styles.tutorialContainer}>
              <div style={styles.Title}>tutorial</div>
              <div style={styles.mainContainer}>description</div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Main;
