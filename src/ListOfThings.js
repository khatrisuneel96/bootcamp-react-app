import React, {useState} from 'react'

function ListOfThings() {
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("")


    const addItem = (event) => {
        event.preventDefault()
        setItems([
            ...items,
            {
                id: items.length,
                name: itemName
            }
        ])

        setItemName("")
    }

    return(
        <div>
            <form onSubmit={addItem}>
                <label>
                    <input 
                        type="text" 
                        name="item" 
                        value={itemName}
                        onChange={e => setItemName(e.target.value)}    
                    />
                </label>
                <button>Submit</button>
            </form>
            
            <ul>
                {items.map((item) => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>  
    )
}

export default ListOfThings