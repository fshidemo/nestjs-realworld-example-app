import { Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { DeepPartial } from 'typeorm/common/DeepPartial';
import { ProfileRO } from './profile.interface';
import { FollowsEntity } from "./follows.entity";
export declare class ProfileService {
    private readonly userRepository;
    private readonly followsRepository;
    constructor(userRepository: Repository<UserEntity>, followsRepository: Repository<FollowsEntity>);
    findAll(): Promise<UserEntity[]>;
    findOne(options?: DeepPartial<UserEntity>): Promise<ProfileRO>;
    findProfile(id: number, followingUsername: string): Promise<ProfileRO>;
    follow(followerEmail: string, username: string): Promise<ProfileRO>;
    unFollow(followerId: number, username: string): Promise<ProfileRO>;
}
