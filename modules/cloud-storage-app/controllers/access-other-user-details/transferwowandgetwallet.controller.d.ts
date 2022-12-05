import ResponseInterface from 'src/models/interface/Response.interface';
import { TransferwowandgetwalletService } from '../../services/access-ther-user-details/transferwowandgetwallet.service';
export declare class TransferwowandgetwalletController {
    private walletapi;
    constructor(walletapi: TransferwowandgetwalletService);
    getwalletDetails(customer_id: number, country_code: string, user_category_id: string, user_id: string): Promise<ResponseInterface>;
}
