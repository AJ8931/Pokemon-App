
const HeroSection = () => {
    return (
        <section className="bg-hero-pattern h-[80vh] bg-no-repeat bg-center bg-cover">
            <div className="mx-auto max-w-screen-xl px-4 py-32 flex flex-col items-center justify-center">
                <div className="mx-auto max-w-xl text-center text-yellow-600">
                    <h1 className=" font-extrabold text-5xl">
                        Pokemon APP.
                        <strong className="font-extrabold text-orange-800 block">
                            Using PokeAPI.
                        </strong>
                    </h1>

                    {/* <p className="mt-4 sm:text-xl/relaxed font-semibold">
                        Pokemon App has the features of Showing pokemon and their details and searchong
                    </p> */}
                </div>
            </div>
        </section>

    )
}

export default HeroSection