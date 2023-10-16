 import LatestMovies from "../components/LatestMovies"
import PopularMovies from "../components/PopularMovies"
import UpcomingMovies from "../components/UpcomingMovies"
import "./Home.css"
function Home() {
  return (
    <>
    <main className='landing'>
        <section className="hero">
        <div className="text"><h1>Download YTS YIFY movies: HD smallest size</h1>
        <p>Welcome to the official YTS.MX website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.<br/><b><a href="" className="shortcut-link">IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</a></b></p>
        <p><b><a href="" className="shortcut-link">🔥Watch now ‘HAUNTED MANSION’ ✨ first teaser trailer (releasing July 28th in t...</a></b></p></div>
        </section>
        <PopularMovies/>
        <section className="warning">
          <h2>Warning!‌‌‌ Download only with VPN...</h2>
          <p>Downloading torrents is risky for you: your IP and leaked private data being actively tracked by your ISP and Government Agencies Protect yourself from expensive lawsuits and fines NOW! You must use a VPN like Surf. It is the only way to download torrents fully anonymous by encrypting all traffic with zero logs.</p>
          <p>Personal data disclosing your real identity: your IP address,  197.180.235.41   is exposed, which points directly to your location in  Nairobi, KENYA . You are browsing with   () , resolution  1366x768px ,  4-cores CPU .</p>
          <p className="blue">″Do not risk it! Protect yourself right now by downloading Surf VPN″ - William</p>
          <button type="button"><img className="download-pic" src="./download-ic.png" alt="" /> Download surfVPN</button>
        </section>
    </main>
    <LatestMovies/>
    <UpcomingMovies/>
    </>
  )
}

export default Home