import ResponseInterface from 'src/models/interface/Response.interface';
import { DropdownlistfirsttableService } from '../../services/access-ther-user-details/dropdownlistfirsttable.service';
export declare class DropdownlistfirsttableController {
    private dropdownlisttable;
    constructor(dropdownlisttable: DropdownlistfirsttableService);
    getwalletdropdownlistapi(customer_id: number, country_code: string): Promise<ResponseInterface>;
    getwalletDetails(customer_id: number, country_code: string, user_category_id: string): Promise<ResponseInterface>;
}
