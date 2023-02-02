import { useEffect, useState } from 'react'


const App = () => {

  const [state, setState] = useState([])

  useEffect(() => {

    fetch('https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCeVMnSShP_Iviwkknt83cww&maxResults=25&key=AIzaSyD1-F7vdmcpc-fYlZqvHemRfV8CXhRLQ4Y')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const result = data.items.map((item) => {

          return { title: item.snippet.title, vid: item.snippet.thumbnails.default.url.substring(23, 34) }
        })


        setState(result)
      })
      .catch((err) => console.log(err))



  }, [])

  const css = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '15px'
  }
  
  const titlee = {
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '2rem'
  }

  return (
    <div style={css}>
      <p style={titlee}>Ok all set</p>

      {state.map((item) => {
        return <div key={item.vid}>

          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.vid}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      })}
    </div>

  )
}

export default App




{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Sx1kaRTjZOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */ }