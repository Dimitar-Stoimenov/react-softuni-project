import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { create } from "../../services/productService";
import { AuthContext } from '../../contexts/AuthContext';

const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const createSubmitHandler = (e) => {
        e.preventDefault();

        let { name, description, price, category, image } = Object.fromEntries(new FormData(e.currentTarget));
        let token = user.accessToken;

        create(name, description, price, category, image, token)
            .then(productData => {
                navigate('/');
                //TODO: Change navigation to details page
            })
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

export default Create;