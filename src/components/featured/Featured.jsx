import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img className="feturedImg" src="https://cf.bstatic.com/xdata/images/city/square250/689876.jpg?k=9e32e4d0502f018398faa2006367bc101a8bf1991955937b67bfcf9bb1d09077&o=" alt="Reno" />
            <div className="feturedTitles">
                <h1>Reno</h1>
                <h2>123 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className="feturedImg" src="https://cf.bstatic.com/xdata/images/region/square250/53478.jpg?k=525711f105d7791cfbc74d08ae86255e5380fa5ced52ede7465ecf3e72c44da9&o=" alt="North Lake Tahoe" />
            <div className="feturedTitles">
                <h1>North Lake Tahoe</h1>
                <h2>363 Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className="feturedImg" src="https://cf.bstatic.com/xdata/images/region/square250/68085.jpg?k=0f810fd728bfd94157ce21f611e004eb6fa47a2722067e8086cd5e5f6bba24b9&o=" alt="Yosemite National Park" />
            <div className="feturedTitles">
                <h1>Yosemite National Park</h1>
                <h2>653 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured