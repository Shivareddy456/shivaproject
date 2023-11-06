const Home = () => {
    
    const handleClick = (e) => {
         console.log('hello, ninjas', e);
    }
    
    const handleClickAgain = (name, e) => { 
        console.log('hello ' + name, e.target);
    }

    return (
      <div className="home">
       
       </div>
   );
}

export default Home;