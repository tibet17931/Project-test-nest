import { Controller, Get, Post, Req, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from '../swagger/CreateCatDto';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Get(':id')
    async findAll(@Req() request: Request, @Param() params): Promise<string> {
        // let ts = this.catsService.testBuy();
        console.log(params.id)
        let step1 = await this.catsService.testBuy();
        let step2 = await this.catsService.testBuy();
        return step1 + step2;
    }


    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }



}
