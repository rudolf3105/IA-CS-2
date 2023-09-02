import "../App.css";

function LogIn() {
  const styles = {
    fullScreenDivStyle: {
      display: "flex",
      width: "100%",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: "grey",
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

  return (
    <div className="App" style={{ backgroundImage: "url('../img/ParkImg.jpg')" }}>
      <header className="App-header" >
        <div style={styles.fullScreenDivStyle}>

          <div style={styles.container}>
            <div style={styles.logoContainer}>
              logo image
            </div>

            <div style={styles.loginContainer}>
              login
              <div style={styles.component}>
                <label for="exampleInputPassword1" style={{fontSize:"18px", width: "fit-content", marginBottom:"10px"}}>Username</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Username"/>
              </div>
              <div style={styles.component}>
                <label for="exampleInputPassword1" style={{fontSize:"18px", width:"fit-content", marginBottom:"10px"}}>Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              <div style={{...styles.component, alignItems: "center",}}>
                <button type="submit" class="btn btn-primary" >Submit</button>
                <div style={{marginBottom:"4px", fontSize:"18px"}}>or</div>
                <button type="submit" class="btn btn-outline-primary">Signin</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default LogIn;
