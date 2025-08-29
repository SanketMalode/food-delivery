import React, { useEffect, useState } from 'react';
import './List.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const List = ({url}) => {
 
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Failed to fetch list");
      }
    } catch (error) {
      toast.error("Server error while fetching list");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error("Error deleting food item");
      }
    } catch (error) {
      toast.error("Server error while deleting item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>

      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
      
        {list.map((item) => {  console.log('item:', item);
  let imgSrc = item.image;

  // Defensive check - if item.image is "[object Object]", try something else:
  if (item.image === '[object Object]') {
    imgSrc = 'default-image.jpg'; // fallback image, or fix data source
  }

          return( 
          <div key={item._id} className='list-table-format'>
            <img src={`${url}/images/` + item.image} alt={item.name} />
         
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
          </div>
        )})}
      </div>
    </div>
  );
};

export default List;
