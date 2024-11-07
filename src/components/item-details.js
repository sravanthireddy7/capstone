export const ItemDetails = ({ item, showModal, setShowModal, count, setCount,path }) => {
    const imageUrl = require(`../assets/images/${path}`)
    // console.log(item.image)

    function Inc() {
        setCount(count + 1)
    }
    function Dec() {
        setCount(count - 1)
    }
    return (
        <>
            {showModal && <div className="modal" id="exampleModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <img src={imageUrl} className="card-img-top" alt="..." height={'200px'} />
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{item.name}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {item.description}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={Inc}>+</button>
                            {count}
                            <button type="button" className="btn btn-primary" onClick={Dec}>-</button>
                            <button type="button" style={{ backgroundColor: 'red' }} className="btn btn-secondary" data-bs-dismiss="modal">Add to Cart</button><br></br>
                            <button type="button" className="btn btn-primary">ok</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
