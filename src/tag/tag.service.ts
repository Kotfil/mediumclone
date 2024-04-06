import {Get, Injectable} from "@nestjs/common";

@Injectable()
export class TagService {
    findAll(): string[] {
    return ['dragons','coffe']
    }
 }
