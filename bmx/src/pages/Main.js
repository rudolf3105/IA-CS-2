

function Main() {

  const fullScreenDivStyle = {
    display: 'flex',
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
  };
  const leftContainer = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    border: '2px solid black',
  };
  const webName = {
    display: 'flex',
    flex: 1,
    //backgroundColor: 'black',
    border: '2px solid black'  
  };
  const tickList = {
    display: 'flex',
    flex: 7,
    flexDirection: 'column',
    padding: '10px',
    border: '2px solid black'  
  };
  const listItem = {
    display: 'flex',
    flex: 1,
    marginTop: '10px',
    border: '2px solid black'
  };
  const profile = {
    display: 'flex',
    flex: 1.5,
    border: '2px solid black'
  };
  const rightContainer = {
    display: 'flex',
    flex: 2.5,
    flexDirection: 'column',
    border: '2px solid black'
  };
  const videoContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    border: '2px solid black'
  };
  const Title = {
    display: 'flex',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black'
  };
  const mainContainer = {
    display: 'flex',
    flex: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black'
  };
  const tutorialContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    border: '2px solid black'
  };

  const skills = ["skill1", "skill2", "skill3", "skill4"];

  return (
    <div className="App">
      <header className="App-header">
        <div style={fullScreenDivStyle}>


          <div style={leftContainer}>
            <div style={webName}>

            </div>
            <div style={tickList}>
              <ul style={tickList} >
                {skills.map((name, index) => (
                  <li key={index} style={listItem}>{name}</li>
                ))}
              </ul>
            </div>
            <div style={profile}>
              
            </div>
          </div>



          <div style={rightContainer}>
            <div style={videoContainer}>
             <div style={Title}>
              title
             </div>
             <div style={mainContainer}>
              video
             </div>
            </div>

            <div style={tutorialContainer}>
              <div style={Title}>
                tutorial
              </div>
              <div style={mainContainer}>
                description
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default Main;
