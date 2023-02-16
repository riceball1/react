// Display the list items
import { people } from './data/people.js';
import {products} from './data/products';
import { RegularList } from './lists/RegularList';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem'
import {LargeProductListItem} from './product/LargeProductListItem'
import { NumberedList } from './lists/NumberedList.js';


const App2 = () => {

    return (
        <>
            {/* Small Person List Item */}
            <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />

            {/* Large Person List Item */}
            <NumberedList items={people} resourceName="person" itemComponent={LargePersonListItem} />
          
          <div>

            <h3>Product List Item</h3>
            {/* Large Product List Item */}
            <RegularList items={products} resourceName="product" itemComponent={LargeProductListItem} />
          </div>
        </>
    )
}

export default App2;