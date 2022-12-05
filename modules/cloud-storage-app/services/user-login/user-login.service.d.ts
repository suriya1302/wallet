import { AuthService } from 'src/auth/services/auth.service';
import { NewUserInterface } from 'src/models/interface/user.interface';
export declare class UserLoginService {
    private _auth;
    constructor(_auth: AuthService);
    onUserRegister(_data: NewUserInterface): Promise<{
        jwt_token: string;
        hash: string;
    }>;
}
