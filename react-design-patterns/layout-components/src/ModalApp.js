// Display the ModalApp

import { products } from "./data/products";
import { Modal } from "./modal/Modal";
import { LargeProductListItem } from "./product/LargeProductListItem";


const ModalApp = () => {

    return (
        <>
           <Modal>
            {/* tip: rename the component to LargeProductDetails instead of listitem since it will allow it to be used in more places and it would be clear it's reusable */}
            <LargeProductListItem product={products[0]} />
           </Modal>
        </>
    )
}

export default ModalApp;