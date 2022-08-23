// import reactLogo from './assets/freeLogoInsta.jpeg'
import original from './assets/react.svg'

function Logo() {

    console.count('ejecuta, Logo')

    return (
        <img src={original}
        className="w-10"
        alt="React logo" />
    )
}

export default Logo;
