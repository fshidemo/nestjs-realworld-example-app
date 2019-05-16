import { TagEntity } from './tag.entity';
import { TagService } from './tag.service';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    findAll(): Promise<TagEntity[]>;
}
