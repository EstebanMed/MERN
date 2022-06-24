import Button from '../components/generics/button/button';
function Home({changeTheme}) {
    return (
        <div>
          <Button label="Holi">But</Button>
          <button onClick={changeTheme}>Change theme</button>
        </div>
    )
}

export default Home
