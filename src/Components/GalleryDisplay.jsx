const hoodie = "/Assets/Hoodies.jpeg";
const tshirt = "/Assets/T-Shirt.jpeg";
const pants = "/Assets/Pants.jpeg";
const shirts = "/Assets/Shirts.jpeg";

const GalleryDisplay = () => {
    return (
        <div className="galleryDisplay">
            <div className="heading">OUR CATEGORIES</div>
            <div className="galleryItemList">
                <div
                    className="galleryItem bg-cover bg-[20%_30%]"
                    style={{backgroundImage: `url(${shirts})`}}
                >
                    <div className="itemTitle">Shirts</div>
                </div>

                <div
                    className="galleryItem col-span-2 bg-cover bg-[20%_60%]"
                    style={{backgroundImage: `url(${pants})`}}
                >
                    <div className="itemTitle">Pants</div>
                </div>

                <div
                    className="galleryItem col-span-2 bg-cover bg-[20%_30%]"
                    style={{backgroundImage: `url(${hoodie})`}}
                >
                    <div className="itemTitle absolute">Hoodies</div>
                </div>

                <div
                    className="galleryItem bg-cover bg-[20%_40%]"
                    style={{backgroundImage: `url(${tshirt})`}}
                >
                    <div className="itemTitle">T-Shirts</div>
                </div>
            </div>
        </div>
    );
};

export default GalleryDisplay;
