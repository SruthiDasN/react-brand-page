const ContentSection = () => {
    return (
        <main className="content container">
            <div className="content-section">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND 
                    WE’RE HERE TO HELP YOU WITH OUR 
                    SHOES.YOUR FEET DESERVE THE BEST 
                    AND WE’RE HERE TO HELP YOU WITH 
                    OUR SHOES
                </p>

                <div className="content-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="extra-note">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/flipkart.png" alt="flipkart" />
                        <img src="/images/amazon.png" alt="amazon" />
                    </div>
                </div>
            
            </div>

            <div className="content-image">
                <img src="/images/shoe_image.png" alt="shoe_image" />
            </div>
        </main>
    )
};

export default ContentSection
