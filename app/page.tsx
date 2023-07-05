const Home = () => {

    


    

    
    return (
        <section className="flex-start flex-col paddings nb = 16">
            <h1> Categories</h1>
            <h1>Posts</h1>
            <h1>Login</h1>

            <div className="flex flex-col">
                <label>Phone</label>
                <input className="m-5 border border-solid" type="text"></input>

                <label>Password</label>
                <input className="p-5 m-5 border border-solid" placeholder="******" type="text"></input>
                <button type="button">Submit</button>
            </div>


        </section>
    )

}

export default Home;