


const Home = () =>  {
    return (
        <div className="container">
        <img src="https://csg100320011ec6b115.blob.core.windows.net/videos/icon_1024_1024.jpg" alt="Poly.AI Logo" className="logo" />
        <h1>
        Immersive chats with <span style={{color: '#6c63ff'}}>AI companions</span> through text, audio, and video.
        </h1>

       
        <p className="subtitle">
          AI chat with personality and authenticity: your ultimate entertainment
          companion
        </p>
        <div className="buttons" style={{marginTop: '50px'}}>
          <a href="/privacy" target="_blank" style={{color: '#333333', fontWeight: 600, marginRight: '10px'}}>Privacy policy</a>
          <a href="/terms" target="_blank" style={{color: '#333333', fontWeight: 600, marginLeft: '10px'}}>Terms &amp; conditions</a>
        </div>
        <div className="phone-mockup">
          <img src="https://media.istockphoto.com/id/1731402068/photo/smartphone-with-a-blank-screen-on-a-white-background.webp?b=1&s=170667a&w=0&k=20&c=1Us7OAr5Cp51c0t6GmJG1jJC44ROcnu6JPWd4VEr9EE=" alt="Phone Mockup" />
        </div>
      </div>
    )
}


export default Home;