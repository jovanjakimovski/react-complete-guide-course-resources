import reactImg from './assets/react-core-concepts.png'

const arr = ['Fundimental', 'Core', 'Basic']
const getRandomNum = (max) => {
    return Math.floor(Math.random()*(max+1))
}

function Header() {
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
            {arr[getRandomNum(2)]} React concepts you will need for almost any app you are
            going to build!
            </p>
        </header>
    );
}

export default Header;