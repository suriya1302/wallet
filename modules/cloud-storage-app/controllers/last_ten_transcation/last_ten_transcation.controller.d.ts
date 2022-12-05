import ResponseInterface from 'src/models/interface/Response.interface';
import { LastTenTranscationService } from '../../services/last_ten_transcation/last_ten_transcation.service';
export declare class LastTenTranscationController {
    private LastTentransaction;
    constructor(LastTentransaction: LastTenTranscationService);
    LastTenTransactionDetails(country_id: number, country_code: string, login_user_id: string): Promise<ResponseInterface>;
    table2(date1: string, date2: string, country_code: string, customer_id: number, login_user_id: number): Promise<{
        status: string;
        message: string;
        data: any[];
    }>;
    wowwalletDetails(country_id: number, country_code: string, login_user_id: string): Promise<ResponseInterface>;
    getwalletdropdownlistapi(customer_id: number, country_code: string): Promise<ResponseInterface>;
    getwalletDetails(customer_id: number, country_code: string, user_category_id: string, user_id: string): Promise<ResponseInterface>;
}
