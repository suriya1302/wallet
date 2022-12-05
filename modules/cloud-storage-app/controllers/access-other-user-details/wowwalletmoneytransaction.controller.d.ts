import { transfer } from 'src/models/dto/moneytransaction.dto';
import { WowwalletmoneytransactionService } from '../../services/access-ther-user-details/wowwalletmoneytransaction.service';
export declare class WowwalletmoneytransactionController {
    private api;
    constructor(api: WowwalletmoneytransactionService);
    transfer(country_code: string, customer_id: number, time_zone: string, login_id: number, amount_transfer: transfer): Promise<{
        status: string;
        message: string;
        data: void;
    }>;
}
