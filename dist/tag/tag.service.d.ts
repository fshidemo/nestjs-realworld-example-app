import { Repository } from 'typeorm';
import { TagEntity } from './tag.entity';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<TagEntity>);
    findAll(): Promise<TagEntity[]>;
}
