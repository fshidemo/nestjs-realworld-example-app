import { UserEntity } from '../user/user.entity';
import { Comment } from './comment.entity';
export declare class ArticleEntity {
    id: number;
    slug: string;
    title: string;
    description: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    updateTimestamp(): void;
    tagList: string[];
    author: UserEntity;
    comments: Comment[];
    favoriteCount: number;
}
