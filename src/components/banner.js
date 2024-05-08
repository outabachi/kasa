import '../style/banner.scss';
function Banner({image ,textbanner}) {
    return (
        <div className='kasa-banner'>
       <img src={image} alt='kasa-banner' />
       <h1>{textbanner}</h1>
        </div>
    )
}

export default Banner