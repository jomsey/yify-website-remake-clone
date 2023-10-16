import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div>
            <ul>
            <li className="copyright"> YTS © 2011 - {new Date().getFullYear()}</li>
                <li><a href="">Blog</a></li>
                <li><a href="">DMCA</a></li>
                <li><a href="">API</a></li>
                <li><a href="">RSS</a></li>                                                              
                <li><a href="">Contact</a></li>
                <li><a href="">Browse Movies</a></li>
                <li><a href="">Requests</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Language</a></li>
            </ul>
       </div>

       <div>
         <ul>
            <li><a href="">EZTV</a></li>
            <li><a href="">YIFY Status</a></li>
            <li><a href="">YTS Proxies</a></li>
            <li><a href="">YTS Proxies (TOR)</a></li>
            <li><a href="">Follow @ytsyify</a></li>
         </ul>
       </div>

       <small>By using this site you agree to and accept our, which can be <a href=""> User Agreement</a> read <a href="">here</a>
</small>
    </div>
  )
}

export default Footer