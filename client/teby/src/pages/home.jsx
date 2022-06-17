import Button from '../components/generics/button/button.style';
function Home({changeTheme}) {
    return (
        <div>
          <Button>But</Button>
          <button onClick={changeTheme}>Change theme</button>
        </div>
    )
}

export default Home
