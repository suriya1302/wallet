import { fieldDetails } from "src/models/dto/moneytransaction.dto";
import { MoneytransactionService } from "../../services/access-ther-user-details/moneytransaction.service";
export declare class MoneytransactionController {
    private api;
    constructor(api: MoneytransactionService);
    postamountdetails(customer_id: number, country_code: string, dateandmonth: string, user_id: string, send_user_id: string, Time_Zone: string, entry_data: fieldDetails): Promise<any>;
}
