import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as productService from "../../services/productService";
import { AuthContext } from '../../contexts/AuthContext';
import { isVendor } from "../../hoc/routeGuards";

const Edit = () => {
    const [item, setItem] = useState({});
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { itemId } = useParams();

    useEffect(() => {
        productService.getOne(itemId)
            .then(itemResult => {
                setItem(itemResult);
            });
    }, [itemId]);

    const editSubmitHandler = (e) => {
        e.preventDefault();

        let { name, description, price, category, image } = Object.fromEntries(new FormData(e.currentTarget));
        let token = user.accessToken;

        if (validateInput(name, description, price, category, image, token)) {
            productService.edit(name, description, price, category, image, token, itemId)
                .then(productData => {
                    navigate('/catalog/' + itemId);
                })
        };

        function validateInput(name, description, price, category, image) {
            if (name.length < 4) {
                alert('Name must be atleast 4 characters long');
                return false;
            } else if (description.length < 10) {
                alert('Description must be atleast 10 characters long');
                return false;
            } else if (category == "Choose category...") {
                alert('Please choose a category');
                return false;
            } else if (price <= 0) {
                alert('Price must be greater than zero');
                return false;
            } else if (image == '') {
                alert('Image is required');
                return false;
            }

            return true;
        }
    }

    return (
        <div className="container py-5">
            <div className="col-md-4 col-md-offset-4">
                <form className="col-md-9 m-auto" method="POST" onSubmit={editSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Add new product:</label>
                        <input type="text" className="form-control" name="name" placeholder="Name" defaultValue={item.name} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="description" placeholder="Description" defaultValue={item.description} />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" name="price" placeholder="Price" defaultValue={item.price} />
                    </div>
                    <div className="form-group">
                        <select name="category" className="form-control" defaultValue={item.category}>
                            <option>Choose category...</option>
                            <option>Smartphones</option>
                            <option>Smartwatches</option>
                            <option>Accessories</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="image" placeholder="Image URL" defaultValue={item.image} />
                    </div>

                    <div className="row">
                        <div className="col text-start mt-2">
                            <button type="submit" className="btn btn-success btn-lg px-3">Edit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default isVendor(Edit);