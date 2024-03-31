import { updateMeal } from "./http";
import { useState, useEffect} from 'react';
import Popup from './Popup.js';

export default function AdminMenu(){
    const [meals, setMeals] = useState([])
    const [newMeals, setNewMeals] = useState([
        {
            name:"",
            desc:"",
            price:"",
            quantity: 0
        }
    ])
    const [hasPopupWindow, setHasPopupWindow] = useState(false)
    const [popupUpdateMeal, setPopupUpdateMeal] = useState("abc")



    useEffect(() => {
        async function fetchMenu(){
            try{
                const response = await fetch("http://localhost:8000/")
                const items = await response.json();
                setMeals(items);
                console.log(items);
            }catch(err){
                console.log(err)
            }
        }

        fetchMenu();
    }, [])

    function handleAdd(){
        setNewMeals([...newMeals, {
            name:"",
            desc:"",
            price:"",
            quantity: 0
        }])
    }

    function handleSave(){}

    function handleUpdate(meal){
        setHasPopupWindow(true);
        setPopupUpdateMeal(meal);
    }

    // function handleUpdateInfo(e){
    //     const {name,value}=e.target
    //     setUpdateInfo()
    //     console.log("updated:", newMeal)
    // }

    function handleUpdateInfo(e){
        setPopupUpdateMeal((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

    function handleSaveMeal(){
        // console.log(popupUpdateMeal)
        updateMeal(popupUpdateMeal)
    }

    function handleDelete(id){}

    return(
        <div>
            <h1>Admin Menu Page</h1>
            <p>1. show all menu items, each one with update and delete button</p>            
            {
                meals.map( meal => (
                    <div>
                        <p>{meal.id}, {meal.name}, {meal.price}, {meal.quantity}</p>
                        <button onClick={() => handleAdd()}>Add One</button>
                        <button onClick={() => handleSave()}>Save the New Meals</button>
                        <button onClick={() => handleUpdate(meal)}>Update</button>
                        <button onClick={() => handleDelete(meal.id)}>Delete</button>
                    </div>
                ))
            }
            <p>implement popup</p>
            {/* <button onClick={() => setHasPopupWindow(true)}>open popup</button> */}
            <Popup trigger={hasPopupWindow} setTrigger={setHasPopupWindow}>
                <h1>popup title</h1>
                <p>Popup content</p>
                <div>
                    <div>
                        <label>Meal name</label>
                        <input name='name' type='text' value={popupUpdateMeal.name} onChange={(e)=>handleUpdateInfo(e)} />
                    </div>
                    <div>
                        <label>Meal desc</label>
                        <input name='desc' type='text' value={popupUpdateMeal.desc} onChange={(e)=>handleUpdateInfo(e)} />
                    </div>
                    <div>
                        <label>Meal price</label>
                        <input name='price' type='number' value={popupUpdateMeal.price} onChange={(e)=>handleUpdateInfo(e)} />
                    </div>
                    <div>
                        <label>Meal quantity</label>
                        <input name='quantity' type='number' value={popupUpdateMeal.quantity} onChange={(e)=>handleUpdateInfo(e)} />
                    </div>
                </div>
                <button onClick={() => handleSaveMeal()}>Save</button>
            </Popup>
            <p>2. put a add button on the top, after clicked, a form will show below the button for adding new items in menu</p>
        </div>
    )
}