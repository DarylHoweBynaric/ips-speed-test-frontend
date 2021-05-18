import axios from 'axios';
import * as constants from "../Constants";


class PropertyService {

    getAllProperties(){
        return  axios.get( constants.BASE_URL  + "api/property");
    }
}

export default new PropertyService();