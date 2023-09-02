import "../App.css";
import logo from '../img/logo.webp';
import back from '../img/ParkImg.jpg';



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

return (
  <div className="App">
    <header className="App-header" >
      <div style={styles.fullScreenDivStyle}>

        <div style={styles.container}>
          <div style={styles.logoContainer}>
            <img src={logo} style={{ width: "100%" }} />
          </div>

          <div style={styles.loginContainer}>
            login
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Name</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name" />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Surname</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Surname" />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Username</label>
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Username" />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Confirm Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
            </div>
            <div style={styles.component}>
              <label for="exampleInputPassword1" style={{ fontSize: "18px", width: "fit-content", marginBottom: "10px" }}>Confirmatio Code</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmatio Code" />
            </div>
            <div style={{ ...styles.component, alignItems: "center", }}>
              <button type="submit" class="btn btn-primary" >Signin</button>
              <div style={{ marginBottom: "4px", fontSize: "18px" }}>or</div>
              <button type="submit" class="btn btn-outline-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
);
}
export default LogIn;
