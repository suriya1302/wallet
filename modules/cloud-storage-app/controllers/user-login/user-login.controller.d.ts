import { NewUserDto } from 'src/models/dto/user.dto';
import { UserLoginService } from './../../services/user-login/user-login.service';
export declare class UserLoginController {
    private _userLoginService;
    constructor(_userLoginService: UserLoginService);
    onUserRegister(_data: NewUserDto): Promise<{
        jwt_token: string;
        hash: string;
    }>;
}
