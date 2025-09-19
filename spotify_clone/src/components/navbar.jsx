export default function Navbar() {
    return (
        <nav className='Navbar'>
            <div>
                <a href="https://open.spotify.com/" target="_blank" className="Real_spot"> 
                    <img src="./colourless_logo.png" className="white_logo"/> 
                </a>
            </div>
            <div>
                <span class="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1", width: '24px', height: '24px', padding:'12px', marginLeft: '8px'}}> home </span>
            </div>
        </nav>
    );
}