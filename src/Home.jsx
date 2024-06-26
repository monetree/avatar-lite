


const Home = () =>  {
    return (
        <div className="container">
        <img src="https://csg100320011ec6b115.blob.core.windows.net/videos/AvatarX Main Logo.png" alt="Poly.AI Logo" className="logo" />
        <h1>
        Immersive chats with <span style={{color: '#6c63ff'}}>AI companions</span> through text, audio, and video.
        </h1>

 
        <div className="buttons" style={{marginTop: '50px'}}>
          <a href="/privacy" target="_blank" style={{color: '#333333', fontWeight: 600, marginRight: '10px'}}>Privacy policy</a>
          <a href="/terms" target="_blank" style={{color: '#333333', fontWeight: 600, marginLeft: '10px'}}>Terms &amp; conditions</a>
        </div>
        <div className="phone-mockup" >
          <img src="https://csg100320011ec6b115.blob.core.windows.net/videos/app.webp" alt="Phone Mockup" />
        </div>
      </div>
    )
}


export default Home;