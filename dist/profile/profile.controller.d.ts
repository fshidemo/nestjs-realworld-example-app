import { ProfileService } from './profile.service';
import { ProfileRO } from './profile.interface';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    getProfile(userId: number, username: string): Promise<ProfileRO>;
    follow(email: string, username: string): Promise<ProfileRO>;
    unFollow(userId: number, username: string): Promise<ProfileRO>;
}
