import "../App.css";

function LogIn() {
  const styles = {
    fullScreenDivStyle: {
      display: "flex",
      width: "100%",
      flex: 1,
      backgroundColor: "grey",
      position: "relative",
      color: "black",
    },
    container: {
      display: "flex",
      width: "40%",
      flexDirection: "column",
      flex: 1,
      position: "absolute",
      top:"50%",
      left:"50%",
      transform: "translate(-50%, -50%)",
      border: "2px solid black",
    },
    logoContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      flex: 1,
    },
    loginContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      flex: 2,
      padding:"4px",
      backgroundColor: "white",
      border: "2px solid black",
    },
    component: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      flex: 1,
      border: "2px solid black",
    },
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.fullScreenDivStyle}>
          <div style={styles.container}>
            <div style={styles.logoContainer}>
              logo image
            </div>

            <div style={styles.loginContainer}>
              login
              <div style={styles.component}>
                user
              </div>
              <div style={styles.component}>
                pw
              </div>
              <div style={styles.component}>
                entr button
              </div>
            </div>
            <div style={styles.loginContainer}>
              <div>
                or
              </div>
              <div style={styles.component}>
                sign in button
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default LogIn;
