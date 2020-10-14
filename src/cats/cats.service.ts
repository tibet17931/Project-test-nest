import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';


@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    testBuy(): Promise<string> {
        // var promise :string = '';
        var promise = new Promise<string>((resolve, reject) => {
            setTimeout(function () {
                resolve('done!');
            }, 3000);
        });
        return promise;
    }
}
