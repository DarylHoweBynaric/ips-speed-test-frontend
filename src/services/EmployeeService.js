import axios from 'axios';
import * as constants from '../Constants'

class EmployeeService {

    getAllEmployees(){
        return  axios.get(constants.BASE_URL + "api/v1/employee");
    }
}

export default new EmployeeService();