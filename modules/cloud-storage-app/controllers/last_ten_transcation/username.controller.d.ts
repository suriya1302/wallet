import ResponseInterface from 'src/models/interface/Response.interface';
import { UsernameService } from '../../services/last_ten_transcation/username.service';
export declare class UsernameController {
    private api;
    constructor(api: UsernameService);
    wowwalletDetails(country_id: number, country_code: string, login_user_id: string): Promise<ResponseInterface>;
}
