import ResponseInterface from 'src/models/interface/Response.interface';
import { FirstdropdownlistService } from '../../services/access-ther-user-details/firstdropdownlist.service';
export declare class FirstdropdownlistController {
    private Secondcomponent;
    constructor(Secondcomponent: FirstdropdownlistService);
    LastTenTransactionDetails(country_id: number, country_code: string, login_user_id: string): Promise<ResponseInterface>;
    table2(date1: string, date2: string, country_code: string, customer_id: number, login_user_id: number): Promise<{
        status: string;
        message: string;
        data: any[];
    }>;
}
