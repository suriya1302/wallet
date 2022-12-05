import ResponseInterface from 'src/models/interface/Response.interface';
import { IdandbalanceService } from '../../services/access-ther-user-details/idandbalance.service';
export declare class IdandbalanceController {
    private idandbalance;
    constructor(idandbalance: IdandbalanceService);
    wowwalletDetails(country_id: number, country_code: string, login_user_id: string): Promise<ResponseInterface>;
}
