
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${choice}`
  
  fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data.artists)
        document.querySelector('h2').innerHTML = data.artists[0].strArtist
        document.querySelector('h3').innerHTML = data.artists[0].strBiographyEN
        document.querySelector('img').src = data.artists[0].strArtistFanart
        document.documentElement.style.setProperty('--background-url', `url(${data.artists[0].strArtistFanart})` )
        

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
