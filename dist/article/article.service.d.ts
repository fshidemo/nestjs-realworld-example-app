import { Repository, DeleteResult } from 'typeorm';
import { ArticleEntity } from './article.entity';
import { Comment } from './comment.entity';
import { UserEntity } from '../user/user.entity';
import { FollowsEntity } from '../profile/follows.entity';
import { CreateArticleDto } from './dto';
import { ArticleRO, ArticlesRO, CommentsRO } from './article.interface';
export declare class ArticleService {
    private readonly articleRepository;
    private readonly commentRepository;
    private readonly userRepository;
    private readonly followsRepository;
    constructor(articleRepository: Repository<ArticleEntity>, commentRepository: Repository<Comment>, userRepository: Repository<UserEntity>, followsRepository: Repository<FollowsEntity>);
    findAll(query: any): Promise<ArticlesRO>;
    findFeed(userId: number, query: any): Promise<ArticlesRO>;
    findOne(where: any): Promise<ArticleRO>;
    addComment(slug: string, commentData: any): Promise<ArticleRO>;
    deleteComment(slug: string, id: string): Promise<ArticleRO>;
    favorite(id: number, slug: string): Promise<ArticleRO>;
    unFavorite(id: number, slug: string): Promise<ArticleRO>;
    findComments(slug: string): Promise<CommentsRO>;
    create(userId: number, articleData: CreateArticleDto): Promise<ArticleEntity>;
    update(slug: string, articleData: any): Promise<ArticleRO>;
    delete(slug: string): Promise<DeleteResult>;
    slugify(title: string): string;
}
