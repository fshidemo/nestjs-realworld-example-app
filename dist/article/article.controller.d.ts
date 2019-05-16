import { ArticleService } from './article.service';
import { CreateArticleDto, CreateCommentDto } from './dto';
import { ArticlesRO, ArticleRO } from './article.interface';
import { CommentsRO } from './article.interface';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    findAll(query: any): Promise<ArticlesRO>;
    findOne(slug: any): Promise<ArticleRO>;
    findComments(slug: any): Promise<CommentsRO>;
    create(userId: number, articleData: CreateArticleDto): Promise<import("./article.entity").ArticleEntity>;
    update(params: any, articleData: CreateArticleDto): Promise<ArticleRO>;
    delete(params: any): Promise<import("typeorm").DeleteResult>;
    createComment(slug: any, commentData: CreateCommentDto): Promise<ArticleRO>;
    deleteComment(params: any): Promise<ArticleRO>;
    favorite(userId: number, slug: any): Promise<ArticleRO>;
    unFavorite(userId: number, slug: any): Promise<ArticleRO>;
    getFeed(userId: number, query: any): Promise<ArticlesRO>;
}
