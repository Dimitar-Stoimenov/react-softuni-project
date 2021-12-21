import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { create } from "../../services/productService";
import { AuthContext } from '../../contexts/AuthContext';
import { isAuth, isVendor } from "../../hoc/routeGuards";

const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const createSubmitHandler = (e) => {
        e.preventDefault();

        let { name, description, price, category, image } = Object.fromEntries(new FormData(e.currentTarget));
        let token = user.accessToken;

        if (validateInput(name, description, price, category, image, token)) {
            create(name, description, price, category, image, token)
                .then(productData => {
                    navigate('/');
                    //TODO: Change navigation to details page
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
                <form className="col-md-9 m-auto" method="POST" onSubmit={createSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Add new product:</label>
                        <input type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="description" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" name="price" placeholder="Price" />
                    </div>
                    <div className="form-group">
                        <select name="category" className="form-control">
                            <option defaultValue>Choose category...</option>
                            <option>Smartphones</option>
                            <option>Smartwatches</option>
                            <option>Accessories</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="image" placeholder="Image URL" />
                    </div>

                    <div className="row">
                        <div className="col text-start mt-2">
                            <button type="submit" className="btn btn-success btn-lg px-3">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default isAuth(isVendor(Create));