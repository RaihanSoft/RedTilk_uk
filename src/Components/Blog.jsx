const Blog = () => {
    return (
        <div>
            <div className="text-center py-10">
                <p className="text-xl font-medium text-white/60" >Read Our Blog</p>
                <h2 className="text-4xl font-bold text-white" >Read Daily news about
                    startup companies</h2>
            </div>


            <div className=" lg:flex shadow-md " >
                {/* image section  */}
                <div className="h-68   p-5 ">
                    <img className="h-full w-full object-cover" src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="" />
                </div>
                {/* content secion  */}
                <div className="text-white p-5" >
                    <h2 className="text-3xl font-bold" >Not Another Framework</h2>
                    <p className="text-white/60 mt-4" >We brought all the Remix goodies over to React Router and made improvements in the process.
                        Now it&apos;s time to bring those improved APIs back over to Remix where they started!</p>

                    <div className="mt-44">
                        <p>  Collaboration Tools</p>
                        <p>  Collaboration Tools</p>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center" >   <button className="btn mt-10" >Read More</button></div>
        </div>
    )
}

export default Blog
